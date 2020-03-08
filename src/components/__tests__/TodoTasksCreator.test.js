import React from 'react';
import { shallow } from '../../enzyme';
import TodoTasksCreator from '../TodoTasksCreator';

describe('<TodoTasksCreator />', () => {
    it('should click button', () => {
        const mockCallBack = jest.fn();
        const button = shallow(<TodoTasksCreator items={{}} callback={mockCallBack} />);
        button.find('button').simulate('click');
        expect(mockCallBack).toHaveBeenCalled();
    });
    it('should see itemText as empty string', () => {
        const mockCallBack = jest.fn();
        const button = shallow(<TodoTasksCreator items={{}} callback={mockCallBack} />);
        button.find('button').simulate('click');
        expect(button.state().itemText).toEqual("");
    });
});
