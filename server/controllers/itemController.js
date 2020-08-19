let Item = require('../models/itemModel');
const fs = require('fs');
const LRUCache = require('lru-cache');

// getServerSideProps - mozna cachovac LRUCache bo one robia zpaytania do zervera ciagle, czy inne zapytania bezposrednio do zervera

// Ale getStaticProps jest jednorazove - nie ma sensu ?

// SWR - mozna uzyvac jak po stronie clienta robie zapytania LUB np. dla getServerSideProps - ale cache bedzie po stronie klienta nie servera

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1hour
});

async function checkIfCached(req, res, pagePath, queryParams) {
  // If we have a page in the cache, let's serve it
  if (ssrCache.has(pagePath)) {
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(pagePath));
    return false;
  } else {
    return true;
  }
}

// GET ALL
exports.getAll = async (req, res, next) => {
  let { page } = req.params;
  let notCached = await checkIfCached(req, res, req.url, {});

  if (notCached === true) {
    try {
      let items = await Item.find();
      let slicedItems = items.slice(0, page);

      ssrCache.set(req.url, slicedItems);
      res.setHeader('x-cache', 'MISS');

      res.status(200).json(slicedItems);
    } catch (e) {
      res.status(400).json({ msg: 'No items.' });
    }
  }
};

// GET FIVE
exports.getFive = async (req, res, next) => {
  let notCached = await checkIfCached(req, res, req.url, {});

  if (notCached === true) {
    try {
      let items = await Item.find();
      let onlyFive = items.slice(0, 5);

      ssrCache.set(req.url, onlyFive);
      res.setHeader('x-cache', 'MISS');
      return res.status(200).json(onlyFive);
    } catch (err) {
      return res.status(400).json({ msg: 'No items.' });
    }
  }
};

// GET BY SUBCATEGORY
exports.getBySubCategory = async (req, res, next) => {
  const { subCategory } = req.params;

  let notCached = await checkIfCached(req, res, req.url, {});

  if (notCached === true) {
    try {
      let items = await Item.find({ subCategory: subCategory });

      ssrCache.set(req.url, items);
      res.setHeader('x-cache', 'MISS');
      res.status(200).json(items);
    } catch (e) {
      res.status(400).json({ msg: 'No items.' });
    }
  }
};

// POST - INCREASE POPULARITY
exports.popularity = async (req, res, next) => {
  const { id } = req.params;
  try {
    let item = await Item.find({ _id: id });

    let popularity = item[0].popularity;
    popularity++;

    let itemUpdated = await Item.findByIdAndUpdate(
      { _id: id },
      { popularity: popularity }
    );

    res.status(200).json(itemUpdated);
  } catch (e) {
    res.status(400).json({ msg: 'No items.' });
  }
};

// ADMIN
// ADD NEW ELEMENT
exports.add = async (req, res, next) => {
  const {
    name,
    description,
    price,
    category,
    subCategory,
    fileName,
  } = req.body;

  try {
    item = await new Item({
      name: name,
      description: description,
      price: price,
      category: category,
      subCategory: subCategory,
      image: `./${category}/${subCategory}/${fileName}.png`,
    });

    item.save();

    res.send(item);
  } catch (e) {
    res.status(400).json({ msg: 'User cannot be saved.' });
  }
};


// --- NOT USED

// GET POPULAR
// exports.getPopular = async (req, res, next) => {
//   try {
//     let items = await Item.find().where('popularity').gte(0); // Tu trzeba bd dac aktualnie viekzze niz 0 a potem vzgledem tego jak klikaja
//     // lub przerobic to na date

//     res.status(200).json(items);
//   } catch (e) {
//     res.status(400).json({ msg: 'No items.' });
//   }
// };

// GET BY DATE
// exports.getByDate = async (req, res, next) => {
//   let { time } = req.params; // last day, last 3 days, last week, last month
//   if (time === '1') {
//     time = new Date(Date.now() - 86400000 * 1);
//   } else if (time === '3') {
//     time = new Date(Date.now() - 86400000 * 3);
//   } else if (time === '7') {
//     time = new Date(Date.now() - 86400000 * 7);
//   } else if (time === '30') {
//     time = new Date(Date.now() - 86400000 * 30);
//   }

//   try {
//     // let items = await Item.find({'createdAt': { "$gte": yesterday, "$lte": currentDate }})
//     let items = await Item.find({ createdAt: { $gte: time } });

//     res.status(200).json(items);
//   } catch (e) {
//     res.status(400).json({ msg: 'No items.' });
//   }
// };

// GET UNDER 10 ZLOTY
// exports.getUnder10zloty = async (req, res, next) => {
//   try {
//     let items = await Item.find().where('price').lte(10); // Tu trzeba bd dac aktualnie viekzze niz 0 a potem vzgledem tego jak klikaja
//     // lub przerobic to na date

//     res.status(200).json(items);
//   } catch (e) {
//     res.status(400).json({ msg: 'No items.' });
//   }
// };

// GET BY PRICE
// exports.getByPrice = async (req, res, next) => {
//   const { low, high } = req.body;
//   try {
//     let items = await Item.find({ price: { $gte: low, $lte: high } });

//     res.status(200).json(items);
//   } catch (e) {
//     res.status(400).json({ msg: 'No items.' });
//   }
// };





// Item.findOne({ name }).select('-name') // Find all values without name
// Item.findOne({ name }).select('name') // Find only name

// Item.find()
// .where('age').gte(25).lte(50)
// .where('tags').in(['movie', 'music', 'art'])
// .select('name', 'age', 'tags')
// .skip(20)
// .limit(10)
// .asc('age')
// .slaveOk()
// .hint({ age: 1, name: 1 })
// .exec(callback);
