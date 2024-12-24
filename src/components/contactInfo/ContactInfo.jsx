import React from "react";
import "./contactInfo.scss";

const ContactInfo = () => {
  return (
    <div className="container">
      <div className="map">
        <iframe
          src="https://yandex.com/map-widget/v1/"
          title="Map"
          width="100%"
          height="450"
          frameBorder="0"
        ></iframe>
      </div>

      <div className="contact-section">
        <div className="contact-details">
          <h2>Контакты:</h2>
          <p>📞 +7 (495) 023-04-56</p>
          <p>
            📧 <a href="mailto:info@hubert.ru">info@hubert.ru</a>
          </p>
          <p>🏢 г. Москва, ул. Александра Солженицына, 27</p>
        </div>
      </div>

      <footer className="footer">
        <p>
          © «PARTNER.HUBERT™» — официальный сайт для партнеров продукции бренда
          HUBERT™ © 2024
        </p>
        <p>
          <a href="#">Политика конфиденциальности</a> |{" "}
          <a href="#">Правила программы лояльности</a> |{" "}
          <a href="#">Правка об утверждении правил программы лояльности</a>
        </p>
      </footer>
    </div>
  );
};

export default ContactInfo;