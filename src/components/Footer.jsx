import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>Контакти: <a href="https://t.me/anaidrrrk" target="_blank" rel="noopener noreferrer">Telegram</a> | <a href="https://github.com/krrrDiana" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      <p>&copy; {new Date().getFullYear()} Всі права захищені</p>
    </footer>
  );
};

export default Footer;
