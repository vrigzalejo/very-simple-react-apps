import React from 'react';
import { mount, shallow } from '../../enzyme';
import { render } from '@testing-library/react';
import TodoBanner from '../TodoBanner';

describe('<TodoBanner />', () => {
    it('should see the appName', () => {
        const { getByText } = render(<TodoBanner />);
        const appNameText = getByText(/Simple ToDo/i);
        expect(appNameText).toBeInTheDocument();
    });

    it('should see h4', () => {
        const wrapper = mount(<TodoBanner />);
        const elem = wrapper.find('h4');
        expect(elem.length).toBe(1);
    });
    
    it('should see .bg-primary.text-white.text-center.p-2', () => {
        const wrapper = mount(<TodoBanner />);
        const elem = wrapper.find('.bg-primary.text-white.text-center.p-2');
        expect(elem.length).toBe(1);
    });
})
