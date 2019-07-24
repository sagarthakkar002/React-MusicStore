import React from 'react';
import {shallow} from 'enzyme';
import Button from '../Button'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() }); 

describe('Button Change', () => {    
    let wrapper;
   beforeEach(() => {
    wrapper = shallow(<Button />)                                
  });
    it('rendered the button component', () => {
        expect(wrapper).toBeDefined;
    });
    // it('should run on button click', function() {
    //     wrapper.find('#accept').at(0).simulate('click');
    //     expect(wrapper).toBeDefined;
    // });
});


 

 

 


 
 



