import { createLocalVue, shallowMount } from '@vue/test-utils';
import Buefy from 'buefy';
import { clickNavLink, clickHomeLink } from '../utils';
import router from '@/router';
import App from '@/App.vue';

describe('App.vue', () => {
    let wrapper;
    beforeEach(() => {
        
        const localVue = createLocalVue();
        localVue.use(Buefy, {
            defaultIconPack: 'fa'
        });
        wrapper = shallowMount(App, {
            localVue,
            router
        });
    });

    test('Clicking on page name in Header renders view with matching Title', async () => {
        // Local Testing Helper Functions
        const checkForTitle = async function(wrapper, title) {
            await expect(wrapper.find('.title').text()).toBe(title);
        }
        const testTitle = async function(wrapper, route, title) {
            await clickNavLink(wrapper, route);
            await checkForTitle(wrapper, title);
        }

        // Test Home View
        await clickHomeLink(wrapper);
        await checkForTitle(wrapper, 'Welcome');
        
        // Test All other views
        await testTitle(wrapper, '/our-story', 'Our Story');
        wrapper.find('#ceremony').trigger('click');
        expect(wrapper.html().includes('Ceremony')).toBe(true);
        //await testTitle(wrapper, '/couple', 'Couple');
       /*  for (let i = 1; i < routes.length; i++) {
            let route = routes[i];
            let title = titles[i];
            await testTitle(wrapper, route, title);
        } */
    });
});
