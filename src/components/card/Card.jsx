import React from 'react';
import './card.scss';

const Card = () => {
  const card = [
    { id: 1, title: "50 WC. Одноконтурный. Настенный", price: "Ваша выплата = 5000 р", img: "./5.png" },
    { id: 2, title: "30 AGB. Одноконтурный. Настенный", price: "Ваша выплата = 5000 р", img: "./6.png" },
    { id: 3, title: "50 WCB. Одноконтурный. Настенный", price: "Ваша выплата = 5000 р", img: "./5.png" },
    { id: 4, title: "35 WLB. Одноконтурный настенный", price: "Ваша выплата = 3000 р", img: "./7.png" },
    { id: 5, title: "50 WC. Одноконтурный. Настенный", price: "Ваша выплата = 5000 р", img: "./5.png" },
    { id: 6, title: "30 AGB. Одноконтурный. Настенный", price: "Ваша выплата = 5000 р", img: "./6.png" },
    { id: 6, title: "35 WLB. Одноконтурный настенный", price: "Ваша выплата = 3000 р", img: "./6.png" },
    { id: 8, title: "30 AGB. Одноконтурный. Настенный", price: "Ваша выплата = 3000 р", img: "./6.png" },
    { id: 9, title: "26 WLB. Одноконтурный настенный", price: "Ваша выплата = 2500 р", img: "./6.png" },
  ];

  return (
    <div className="card">
      <div className="container">
        <h2 className="card__title">
          Вы получаете <span>кэшбек за каждый</span> котел:
        </h2>
        <div className="card__box">
          {card.map((item) => (
            <div key={item.id} className="card__box-div">
              <div className="card__img-box">
                <img src={item.img} alt={item.title} className="card__image" />
              </div>
              <h3 className="card__title-item">{item.title}</h3>
              <a href='' className="card__price">{item.price}</a>
            </div>
          ))}
        </div>
        <a href="" className="card__link">Зарегистрироваться</a>
      </div>
    </div>
  );
};

export default Card;
