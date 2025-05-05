import React from 'react';
import './styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h1>Про мене</h1>

      <section>
        <h2>Цінності та захоплення</h2>
        <p>Я тільки починаю свій шлях в ІТ, але вже зараз для мене важливі наполегливість, готовність вчитися і бажання розвиватися. Я люблю дізнаватися щось нове, розбиратись у технічних речах і поступово рухатись до своєї мети.

Мене цікавить веброзробка, особливо як створюються сайти та як створюється їх дизайн. </p>
      </section>

      <section>
        <h2>Мої проєкти</h2>
        <div className="projects">
          <div className="project-card">
            <h3>HTML + CSS</h3>
            <a href="https://github.com/krrrDiana/html-css-landing" target="_blank" rel="noopener noreferrer">
              Посилання на репозиторій
            </a>
          </div>

          <div className="project-card">
            <h3>JavaScript</h3>
            <a href="https://github.com/krrrDiana/js-fetchFirstLab" target="_blank" rel="noopener noreferrer">
              Посилання на JS-проєкт
            </a>
          </div>

          <div className="project-card">
            <h3>React</h3>
            <a href="https://github.com/krrrDiana/react-props" target="_blank" rel="noopener noreferrer">
              Посилання на React-проєкт
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
