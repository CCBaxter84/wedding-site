import { createWrapper, routes, titles, clickNavLink, clickHomeLink } from '../utils';
import App from '@/App.vue';
import router from '@/router';

describe('App.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = createWrapper(App, { router });
    });

    test('Clicking on page name in Header renders view with matching Title', async () => {
        // Local Testing Helper Functions
        const checkForTitle = function(wrapper, title) {
            expect(wrapper.find('.title').text()).toBe(title);
        }
        const testTitle = async function(wrapper, route, title) {
            await clickNavLink(wrapper, route);
            checkForTitle(wrapper, title);
        }

        // Test Home View
        await clickHomeLink(wrapper);
        checkForTitle(wrapper, 'Welcome');
        
        // Test All other views
        for (let i = 1; i < routes.length; i++) {
            let route = routes[i];
            let title = titles[i];
            await testTitle(wrapper, route, title);
        }
    });
});
