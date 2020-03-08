import React from 'react';
import { shallow } from '../../enzyme';
import TodoTasksRows from '../TodoTasksRows';

describe('<TodoTasksRows />', () => {
    it('should see a row', () => {
        const item = {
            action: "Buy a game",
            done: false
        };
        const rows = shallow(<TodoTasksRows item={item} />);
        expect(rows).toHaveLength(1);
    });
})
