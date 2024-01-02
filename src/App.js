import logo from './logo.svg';
import './App.css';
import Record from './Record'
import { useEffect, useState } from 'react';

function App() {
  const [allrecord, setAllRecord] = useState([
    {
      image: 'https://images.pexels.com/photos/16812192/pexels-photo-16812192/free-photo-of-samsung-smart-phone-in-hand.jpeg',
      id: 1,
      name: "samsung",
      price: 20000,
      qty: 1,
      category: "mobile",
      color: "#CC7DEF",
    },
    {
      image: 'https://www.intex.in/cdn/shop/products/1_9b8014ad-124e-4742-a628-9a4c4affe617_835x.progressive.jpg?v=1648711109',
      id: 2,
      name: "t.v",
      price: 50000,
      qty: 1,
      category: "electronics",
      color: "#D697Ef",
    },
    {
      image: 'https://images.pexels.com/photos/7282378/pexels-photo-7282378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      id: 3,
      name: "washing machine",
      price: 25000,
      qty: 1,
      category: "electronics",
      color: "#CC7DEF",
    },
    {
      image: 'https://5.imimg.com/data5/HV/DY/FS/ANDROID-91469642/product-jpeg-1000x1000.jpeg',
      id: 4,
      name: "vivo",
      price: 10000,
      qty: 1,
      category: "mobile",
      color: "#D697Ef",
    },
    {
      image: 'https://i.pinimg.com/736x/69/19/af/6919afc98173740bf0f5f9597c79fb91.jpg',
      id: 5,
      name: "puma",
      price: 1000,
      qty: 1,
      category: "cloth",
      color: "#CC7DEF",
    },
    {
      image: 'https://bunaai.com/cdn/shop/products/Cottonsalwarsuitonlineindia-4043.jpg?v=1663672324',
      id: 6,
      name: "cotton",
      price: 2200,
      qty: 1,
      category: "cloth",
      color: "#D697Ef",
    },
    {
      image: 'https://www.suryaelectronics.in/img/Product/Main/oppoMobilePhonesandAccessoriesMobilePhones191.jpg',
      id: 7,
      name: "oppo",
      price: 14000,
      qty: 1,
      category: "mobile",
      color: "#CC7DEF",
    },
    {
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/DP1.jpg',
      id: 8,
      name: "gujarati",
      price: 250,
      qty: 1,
      category: "food",
      color: "#D697Ef",
    },
    {
      image: 'https://www.zoopindia.com/blog/wp-content/uploads/2022/11/punjabi-food-image-1080x675.webp',
      id: 9,
      name: "punjabi",
      price: 350,
      qty: 1,
      category: "food",
      color: "#CC7DEF",
    },
  ]);

  const [filter, setFilter] = useState([]);

  const handleClick = (category) => {
    let oldrecord = [...allrecord];


    if (category === "all") {
      setFilter(allrecord)
    } else {
      oldrecord = allrecord.filter((item) => {
        return item.category === category
      })
      setFilter(oldrecord)
    }
  }

  useEffect(() => {
    setFilter(allrecord)
  }, [])


  return (
    <>
      <Record
        allrecorddata={filter}
        btnclick={handleClick}
      />
    </>
  );
}

export default App;
