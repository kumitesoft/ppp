const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
    },
    subCategory: {
      type: String,
    },
    image: {
      type: String,
    },
    popularity: { // +1 za kazdym razem gdy ktoz kliknie i na bazie tego bd opcja popularity
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model('item', itemSchema);
module.exports = Item;
