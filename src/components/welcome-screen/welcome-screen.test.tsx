/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { WelcomeScreen } from './welcome-screen';


const config = {
  gameTime: 5,
  maxErrors: 3,
};


describe('testing WelcomeScreen render', () => {
  it('WelcomeScreen is render correctly', () => {
    const { gameTime, maxErrors } = config;
    const tree = TestRenderer.create(<WelcomeScreen
      gameTime={ gameTime }
      maxErrors={ maxErrors }
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
