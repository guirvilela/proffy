import React from 'react';

import wppIcon from '../../assets/icons/whatsapp.svg';
import './style.scss';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/47677457?s=460&v=4"
          alt="Gui"
        />
        <div>
          <strong>Guilherme</strong>
          <span>Dev</span>
        </div>
      </header>

      <p>
        Grande Desenvolvedor
        <br></br>
        capaz de transformar toda tecnologia em sua volta
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={wppIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
