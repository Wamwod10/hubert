import React from 'react'
import "./contact.scss";

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container">
                <img src="23.png" alt="" />
                <div className="contact__box">
                    <h2 className="contact__title">Станьте партнёром HUBERT и <span>получите бонус 3000 р сразу!</span></h2>
                    <div className="contact__input-box">
                        <input type="text" className='contact__input' placeholder='Ваше имя'/>
                        <input type="text" className='contact__input' placeholder='Ваша фамилия'/>
                        <input type="text" className='contact__input' placeholder='Номер телефона'/>
                        <input type="text" className='contact__input' placeholder='Ваш город'/>
                        <input type="text" className='contact__input' placeholder='Введите почту'/>
                        <input type="text" className='contact__input' placeholder='Придумайте пароль'/>
                    </div>
                    <a href="" className="contact__link">Зарегистрироваться</a>
                </div>
            </div>
        </div>
    )
}

export default Contact