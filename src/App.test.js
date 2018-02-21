import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axe from 'axe-core';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

let wrapper
function mountToDoc(reactElm) {
  if(!wrapper){
    wrapper = document.createElement('main');
    document.body.appendChild(wrapper);
  }

  const container = mount(reactElm);
  wrapper.innerHTML = '';
  wrapper.appendChild(container.getDOMNode());
  return container;
}

it('renders without crashing', (done) => {
  const appComponent = mountToDoc(<App />);
  const appNode = appComponent.getDOMNode();
  axe.run(appNode,(err, result) => {
    const { violations } = result;
    expect(err).toBe(null);
    expect(violations).toHaveLength(3);
    console.log('violations1',violations[0]);
    console.log('violations2',violations[1]);
    console.log('violations3',violations[2]);
    done();
  });
});