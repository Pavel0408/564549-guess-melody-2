import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/app/app';


const config = {
  gameTime: 5,
  maxErrors: 3,
};

const init = () => {
  ReactDOM.render(
    <App
      gameTime={ config.gameTime }
      maxErrors={ config.maxErrors }
    />,
    document.querySelector('#root'),
  );
};

init();
