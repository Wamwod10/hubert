import React from 'react'
import "./comfort.scss";

const Comfort = () => {
  return (
    <div className='comfort'>
        <div className="container">
            <div className="comfort__title-box">
                <div>
                    <h2 className="comfort__title">Почему вам <span>это выгодно?</span></h2>
                    <p className="comfort__txt">Удобно и легко заработать</p>
                </div>
                <p className="comfort__text">Мы делаем только такие котлы, которыми готовы пользоваться сами!</p>
            </div>
            <div className="comfort__box">
                <div className="comfort__box-div">
                    <img src="9.png" alt="" className="comfort__img" />
                    <h2 className="comfort__box-title">Выплаты на карту</h2>
                    <p className="comfort__box-txt">Выводите накопленные средства сразу на карту без лишних сложностей</p>
                </div>
                <div className="comfort__box-div">
                    <img src="10.png" alt="" className="comfort__img" />
                    <h2 className="comfort__box-title">Доход до 40% с котла</h2>
                    <p className="comfort__box-txt">Больше установок = выше заработок! Все максимально прозрачно</p>
                </div>
                <div className="comfort__box-div">
                    <img src="11.png" alt="" className="comfort__img" />
                    <h2 className="comfort__box-title">Бонусы и подарки</h2>
                    <p className="comfort__box-txt">Бонусы и подарки за хорошую работу от компании. Мы ценим каждого партнера</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comfort