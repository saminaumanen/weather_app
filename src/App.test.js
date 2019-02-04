import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchWeather from './SearchWeather';
import Weather from './Weather';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow component test', ()=>{
  shallow(<App/>);
})

it('shallow SearchWeather component test', ()=>{
  shallow(<SearchWeather/>);
})

it('shallow Weather component test', ()=>{
  shallow(<Weather/>);
})

it('renders correctly', ()=>{
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
})