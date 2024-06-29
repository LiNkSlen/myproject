import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.scss"
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Да Хун Пао',
      img: 'Da Hong Pao.jpg',
      desc: 'Вкус: пряный, сладковатый, с нотками печёных фруктов, карамели и хлебных корочек с лёгкой терпкостью',
      category: 'Улун',
      price: '599' //100гр
    },
    {
      id: 2,
      title: 'Дун Дин',
      img: 'Dong Ding.jpeg',
      desc: 'Вкус: многогранный, с нотками выпечки, орехов и ванильной карамели.',
      category: 'Улун',
      price: '499' //100гр
    },
    {
      id: 3,
      title: 'Лао Те Гуань Инь',
      img: 'Lao Tie Guan Yin 2.jpg',
      desc: 'Вкус: ореха, и сухофруктов, и тонкая сладость цукатов. Цвет настоя становится более насыщенным, вкус — более густым и терпким.',
      category: 'Улун',
      price: '699' //100гр
    },
    {
      id: 4,
      title: 'Лунцзин',
      img: 'Longjing.jpg',
      desc: 'Вкус: густой, маслянистый и насыщенный. Сладковатые, цветочные ноты с лёгкой горчинкой, маслянистый',
      category: 'Зелёный чай',
      price: '999' //40Г
    },
    {
      id: 5,
      title: 'Маофэн',
      img: 'Maofeng.jpeg',
      desc: 'Вкус: мягкий, медово-цветочный с лёгкой ноткой дымка, плавно переходящей в сладкое, сливовое послевкусие.',
      category: 'Зелёный чай',
      price: '799' //100гр
    },
    {
      id: 6,
      title: 'Аньцзи Бай Ча',
      img: 'Anji Baicha.jpg',
      desc: 'Вкус: сладкий, маслянистый, легкий, нежный, без терпкости и горечи.',
      category: 'Зелёный чай',
      price: '999' //100гр
    },
    {
      id: 7,
      title: 'Е Шен Хун Ча',
      img: 'Ye Shen Hong Cha.jpg',
      desc: 'Вкус: изысканный, яркий, сладкий, с фруктово-ягодной кислинкой',
      category: 'Красный чай',
      price: '3499' //100гр
    },
    {
      id: 8,
      title: 'Чжун Го Хун',
      img: 'Zhong Guo Hong.jpg',
      desc: 'Вкус: сладко-сдобный, хлебный, с благородной ягодной кислинкой в объёмном, пряном, сочном послевкусии.',
      category: 'Красный чай',
      price: '2499' //100гр
    },
    {
      id: 9,
      title: 'Ми Сян Цзинь Я',
      img: 'Mi Xiang Jin Ya.jpg',
      desc: 'Вкус: сдобный, благородный, едва сладкий, с печëными и сухофруктовыми нотками. Бархатистое, фруктово-ягодное послевкусие.',
      category: 'Красный чай',
      price: '1699' //100гр
    },
    {
      id: 10,
      title: 'Цзюнь Шань Инь Чжэнь',
      img: 'Jun Shan Yin Zhen.jpg',
      desc: 'Вкус: молочный шоколад, мускатный орех, липа, крыжовник.',
      category: 'Жёлтый чай',
      price: '5699' //100гр
    },
    {
      id: 11,
      title: 'Мэн Дин Хуан Я',
      img: 'Meng Ding Huang Ya.jpg',
      desc: 'Вкус: игристый, карамельный, цветочный, многогранный, изменяется в процессе заваривания ',
      category: 'Жёлтый чай',
      price: '6499' //100гр
    },
    {
      id: 12,
      title: 'Хо Шань Хуан Я',
      img: 'Ho Shan Huang Ya.jpg',
      desc: 'Вкус: сочный, освежающий, слегка терпкий, с нектаровыми, ягодными и цветочными нотками и долгим, сладким послевкусием.',
      category: 'Жёлтый чай',
      price: '1399' //100гр
    }
  ]);


  const [orders, setOrders] = useState([]);

  const addToOrder = (item) => {
    setOrders([...orders, item]);
  }


  return (
    <div className="wrapper">
      <Header orders={orders}/>
      <Items allItems={items} onAdd={addToOrder} />
      <Footer />
    </div>
  );
}

export default App;
