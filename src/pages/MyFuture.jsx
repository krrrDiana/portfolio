import React from 'react';
import './styles/MyFuture.css';

const MyFuture = () => {
  return (
    <div className="future-container">
      <h1 className="future-title">Мій розвиток</h1>
      
      <section>
        <h2 className="section-title">Моя освіта</h2>
        <ol className="future-steps">
          <li>
            <h3>Богуславський академічний ліцей 1</h3>
            <p>2012-2023</p>
          </li>
          <li>
            <h3>Національний університет біоресурсів і природокористування України</h3>
            <p>2023-2028</p>
          </li>
        </ol>
      </section>

      <section>
        <h2 className="section-title">Про мене</h2>
        <p>
          Наразі, навчаюсь на другому курсі ІТ-факультету, на спеціальності "Комп'ютерні науки". Маю за мету піти працювати по спеціальності, із наступного семестру. 
        </p>
      </section>

      <section>
        <h2 className="section-title">Опис роботи мрії</h2>
        <p>
          Моя робота мрії — це позиція FrontEnd-розробника в інноваційній компанії, де я зможу працювати над цікавими проєктами, 
          використовувати новітні технології та співпрацювати з талановитими людьми.
        </p>
      </section>

      <section>
        <h2 className="section-title">Ситуація наразі</h2>
        <p>Допрацьовую останні дні на тимчасовій роботі. Трошки поподорожую і займусь саморозвитком)</p>
      </section>
    </div>
  );
};

export default MyFuture;
