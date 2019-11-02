import * as React from 'react';


export const WelcomeScreen = (props: {gameTime: number; maxErrors: number}): any => {
  const { gameTime, maxErrors } = props;

  return (
    <section className="welcome">
      <div className="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width={ 186 } height={ 83 } /></div>
      <button type="button" className="welcome__button"><span className="visually-hidden">Начать игру</span></button>
      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>
За&nbsp;
          { gameTime }
&nbsp;минут нужно ответить на&nbsp;все вопросы.
        </li>
        <li>
Можно допустить
          { maxErrors }
ошибки.
        </li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  );
};
