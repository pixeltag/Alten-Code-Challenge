import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../layout/Header';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { createMount } from '@material-ui/core/test-utils';
import { ThemeProvider } from '@material-ui/core/styles';

Enzyme.configure({ adapter: new Adapter() });


describe('renders correctly', () => {
    const wrapper = mount( <ThemeProvider theme={{ success: { main: '#fff' } }}><Header /></ThemeProvider>)
    it('Render correct' ,() => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
  });