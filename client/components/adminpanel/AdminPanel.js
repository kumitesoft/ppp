import { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [fileName, setFileName] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState('osoba');
  const [subCategory, setSubCategory] = useState('osoba');

  const submit = (e) => {
    e.preventDefault();
    if (name === '' || description === '' || price === '' || category === '')
      return;

    axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      data: JSON.stringify({
        name: name,
        description: description,
        price: price,
        category: category,
        subCategory: subCategory,
        fileName: fileName,
      }),
      url: '/add',
    });
  };

  let subCategoryList = () => {
    let data;
    if (category === 'osoba') {
      data = [
        'Mezczyzna',
        'Kobieta',
        'Dzieci',
        'Brat',
        'Siostra',
        'Para',
        'Dziadek',
        'Babcia',
        'Zwierzatko',
      ];
    } else if (category === 'okazja') {
      data = [
        'Dzien Ojca',
        'Dzien Matki',
        'Walentynki',
        'Rocznica',
        'Urodziny',
        'Imieniny',
      ];
    } else if (category === 'kategoria') {
      data = [
        'Indywidualny',
        'Praca z domu',
        'Prank',
        'Gracz',
        'Szafiarka',
        'Memy',
      ];
    } else if (category === 'wiecej') {
      data = ['Wszystkie', 'Losowe', 'Kontakt'];
    }

    return data.map((el) => (
      <option value={el} key={el}>
        {el}
      </option>
    ));
  };
  return (
    <form action='/' method='POST' encType='multipart/form-data'>
      <label>FileName</label>
      <input type='text' onChange={(e) => setFileName(e.target.value)} />
      <label>Name</label>
      <input type='text' onChange={(e) => setName(e.target.value)} />
      <label>Description</label>
      <input type='text' onChange={(e) => setDescription(e.target.value)} />
      <label>Price</label>
      <input type='text' onChange={(e) => setPrice(e.target.value)} />
      <label>Category</label>
      <select onChange={(e) => setCategory(e.target.value)}>
        {['osoba', 'okazja', 'kategoria', 'wiecej'].map((el) => (
          <option value={el} key={el}>
            {el}
          </option>
        ))}
      </select>
      <label>SubCategory</label>
      <select onChange={(e) => setSubCategory(e.target.value.toLowerCase())}>
        {subCategoryList()}
      </select>
      <button onClick={(e) => submit(e)}>submit</button>
    </form>
  );
};

export default AdminPanel;
