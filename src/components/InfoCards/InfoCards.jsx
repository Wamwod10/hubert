import React, { useState, useEffect, useRef } from 'react';
import './InfoCards.scss';

const InfoCards = () => {
  const cards = [
    { id: 1, title: "5", text: "лет", subtitle: "гарантия на котлы", img: "/public/4.png", number: 5 },
    { id: 2, title: "800", text: "+", subtitle: "монтажников уже участвуют в программе лояльности", number: 800 },
    { id: 3, title: "50", text: "+", subtitle: "складов запчастей", number: 50 },
    { id: 4, title: "200", text: "+", subtitle: "сервисных центров по всей РФ", number: 200 }
  ];

  const [animatedNumbers, setAnimatedNumbers] = useState(
    cards.map(card => ({ id: card.id, number: 0, isVisible: false }))
  );

  const observer = useRef();

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const cardId = entry.target.dataset.id;
          if (entry.isIntersecting) {
            setAnimatedNumbers(prevState =>
              prevState.map(card =>
                card.id === parseInt(cardId) && !card.isVisible
                  ? { ...card, isVisible: true }
                  : card
              )
            );
          }
        });
      },
      {
        threshold: 0.9,
      }
    );

    const cardsElements = document.querySelectorAll('.card');
    cardsElements.forEach(card => {
      intersectionObserver.observe(card);
    });

    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedNumbers(prevState =>
        prevState.map(card => {
          const targetNumber = cards.find(c => c.id === card.id).number;
          if (card.isVisible && card.number < targetNumber) {
            return { ...card, number: card.number + 1 };
          }
          return card;
        })
      );
    }, 10); 

    return () => clearInterval(interval);
  }, [animatedNumbers]);

  return (
    <div className="info-cards">
      <div className="container">
        {cards.map(card => (
          <div
            className="card"
            key={card.id}
            data-id={card.id} 
          >
            <div className="card__content">
              <h2 className="card__title">
                {animatedNumbers.find(c => c.id === card.id)?.number || 0} {card.text}
              </h2>
              <p className="card__subtitle">{card.subtitle}</p>
              {card.img && <img src={card.img} alt="" className="card-img" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
