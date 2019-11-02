import * as React from 'react';
import { WelcomeScreen } from '../welcome-screen/welcome-screen';


export const App = (props: any): any => {
  const { gameTime, maxErrors } = props;
  return (
    <WelcomeScreen
      gameTime={ gameTime }
      maxErrors={ maxErrors }
    />
  );
};
