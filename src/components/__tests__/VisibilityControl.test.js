import React from 'react';
import { mount, shallow } from '../../enzyme';
import { render } from '@testing-library/react';
import VisibilityControl from '../VisibilityControl';

describe('<VisibilityControl />', () => {
    const mockCallBack = jest.fn();

    it('should see the description', () => {
        const { getByText } = render(<VisibilityControl isChecked={false} description="Test" callback={mockCallBack} />);
        const descriptionText = getByText(/Show Test/);
        expect(descriptionText).toBeInTheDocument();
    });

    it('should see input type checkbox', () => {
        const wrapper = mount(<VisibilityControl isChecked={false} description="Test" callback={mockCallBack} />);
        const elem = wrapper.find('input[type="checkbox"]');
        expect(elem.length).toBe(1);
    });

    it('should see if checkbox is not checked', () => {
        const checkBox = shallow(<VisibilityControl isChecked={false} description="Test" callback={mockCallBack} />);
        checkBox
            .find('input')
            .forEach(node => {
                expect(node.props().checked).toEqual(false);
            });
    });
});
