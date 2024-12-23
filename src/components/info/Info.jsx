import React from 'react'
import "./info.scss";

const Info = () => {
  return (
    <div className='info'>
      <div className="container">
        <h2 className="info__title"><span>Котёл без проблем</span> — установил и забыл!</h2>
        <div className="info__box">
          <div className="info__box-div">
            <img src="13.svg" alt="" className="info__box-img" />
            <h2 className="info__box-title">Проверка каждого котла</h2>
            <p className="info__box-txt">с подключением к газу и гидравлике Проверка в цикле работы: как будто устанавливаем котел себе домой</p>
          </div>
          <div className="info__box-div">
            <img src="14.svg" alt="" className="info__box-img" />
            <h2 className="info__box-title">Гарантия ﻿5 лет</h2>
            <p className="info__box-txt">Мы уверены в качестве наших котлов, поэтому уверенно даем гарантию: Всего 0,03% гарантийных случаев</p>
          </div>
          <div className="info__box-div">
            <img src="15.svg" alt="" className="info__box-img" />
            <h2 className="info__box-title">50+ складов запчастей и 200+ сервисных центров по всей РФ</h2>
            <p className="info__box-txt">Запчасти всегда под рукой, сервисные центры в каждом регионе!</p>
          </div>
        </div>
        <a href="" className="card__link hubert__link">Зарегистрироваться</a>
      </div>
    </div>
  )
}

export default Info