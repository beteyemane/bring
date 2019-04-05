import React from 'react';
import ReactDOM from 'react-dom';
import App from '../lib/App';
import { configure, mount } from 'enzyme';
import { expect } from 'chai';

let wrapper

it('should render successfully', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

});
