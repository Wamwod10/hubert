import React from 'react'
import "./locate.scss";

const Locate = () => {
  return (
    <div className="locate">
        <div className="container">
            <div className="locate__box">
              <img className="locate__img" src="17.png" alt="" />
              <div>
                <h2 className="locate__title"><span>Сервисные центры</span> Hubert</h2>
                <p className="locate__txt">HUBERT всегда рядом! <span>У нас более 200 сервисных центров в России:</span> во всех регионах, где есть газ! Запчасти? Не проблема: 50+ складов по стране, и мы их пополняем каждый день. Нужна срочная деталь? Доставим за 24 часа хоть на Камчатку. <span>Потому что «Cделано в России» — это не только о качестве, но и о скорости.</span> С нами тепло и спокойно в любом уголке страны.</p>
              </div>
            </div>
            <h2 className="locate__extra-title"><span>Ищите</span> наши котлы в:</h2>
            <div className="locate__img-box">
              <img src="18.png" alt="" />
              <img src="19.png" alt="" />
              <img src="20.png" alt="" />
              <img src="21.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Locate