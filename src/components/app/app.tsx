import * as React from 'react';
import { WelcomeScreen } from '../welcome-screen/welcome-screen';
import { IWelcomeScreenProps } from '../../interfaces';


export const App = (props: IWelcomeScreenProps): JSX.Element => {
  const { gameTime, maxErrors } = props;
  return (
    <WelcomeScreen
      gameTime={ gameTime }
      maxErrors={ maxErrors }
    />
  );
};
