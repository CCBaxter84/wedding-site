import { createWrapper } from '../utils';
import Couple from '@/views/Couple';

describe('Couple.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = createWrapper(Couple);
    });

    test('Renders title', () => {
        expect(wrapper.html().includes('Couple')).toBe(true);
    });

    /* test('Pagination moves between pages', () => {
        console.log(wrapper.html());
    }); */
});