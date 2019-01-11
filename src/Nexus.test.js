import React from 'react';
import ReactDOM from 'react-dom';
import Nexus from './Nexus';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nexus />, div);
});
