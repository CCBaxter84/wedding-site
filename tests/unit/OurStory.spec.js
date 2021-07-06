import { createWrapper } from '../utils';
import OurStory from '@/views/OurStory';

describe('OurStory.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = createWrapper(OurStory);
    });

    test('Renders titles', () => {
        expect(wrapper.html().includes('Our Story')).toBe(true);
        expect(wrapper.html().includes('Our First Date: 11/30/2018')).toBe(true);
    });

    test('Pagination moves between pages', async () => {
        const titles = ['Our Kobayashi Maru: 1/6/2019', 'Our First Trip: 5/23/2019 - 5/27/2019', 'Our Engagement: 8/2/2019', 'Our First Christmas Together: 12/25/2019', 'Our New Bundle of Joy: 1/4/2020'];
        const testPagination = async function(wrapper, title) {
            await wrapper.find('.pagination-next').trigger('click');
            expect(wrapper.html().includes(title)).toBe(true);
        }
        for (let i = 0; i < titles.length; i++) {
            let title = titles[i];
            await testPagination(wrapper, title);
        }
    });
});