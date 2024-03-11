import React from 'react';
import { SocialsMediaLinks } from '../socialMediaLinks/socialsMediaLinks';
import './styles.scss';

export function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-line" />
        <div className="footer-flex">
          <div className="footer-logo">
            <div>
              <img src={`${process.env.PUBLIC_URL}/Images/Footer/OpenGeorgia.png`} alt="Лого" className="footer-mark" />
            </div>
            <div className="footer-logo-text">Индивидуальные экскурсии по Грузии!</div>
          </div>
          <div className="footer-contacts">
            <div className="footer-contact">
              <img src={`${process.env.PUBLIC_URL}/Images/Footer/call.jpg`} alt="телефон" className="footer-tel" />
              <div className="footer-contact-first-line">{'  +995599567550'}</div>
            </div>
            <div className="footer-contact">
              <img src={`${process.env.PUBLIC_URL}/Images/Footer/drafts.jpg`} alt="почта" className="footer-tel" />
              <div className="footer-contact-first-line">{'  Turipogruziimailru@mail.ru'}</div>
            </div>
          </div>
          <div className="footer-social-networks">
            <div className="footer-soc-text">Мы в социальных сетях</div>
            <div className="footer-links">
              <SocialsMediaLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
