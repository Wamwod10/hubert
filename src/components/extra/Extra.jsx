import React from 'react'
import "./extra.scss";
import Countdown from './CountDown';

const Extra = () => {
  return (
    <div className='extra'>
        <div className="container">
            <div className="extra__box">
                <h2 className="extra__title">Успей получить свои 2000 р за регистрацию! <span>Снижение бонуса до 1500 р через:</span></h2>
                <div className="extra__clock">
                    <Countdown/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Extra