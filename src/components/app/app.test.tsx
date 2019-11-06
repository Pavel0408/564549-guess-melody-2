/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { App } from './app';


const config = {
  gameTime: 5,
  maxErrors: 3,
};


describe('testing App render', () => {
  it('App is render correctly', () => {
    const { gameTime, maxErrors } = config;
    const tree = TestRenderer.create(<App
      gameTime={ gameTime }
      maxErrors={ maxErrors }
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
