import { createWrapper, titles, routes, clickNavLink, clickHomeLink } from '../utils'
import Header from '@/components/Header'
import router from '@/router'

describe('Header.vue', () => {
    let wrapper
    beforeEach(() => {
        wrapper = createWrapper(Header, { router })
    })
    
    test('Renders nav bar', () => {
        titles.forEach(title => {
            expect(wrapper.html().includes(title)).toBe(true)
        })
    })

    test('Clicking on navlinks redirects to appropriate page', async () => {
        // Local Helper functions
        const checkUrlPath = function(wrapper, page) {
            expect(wrapper.vm.$route.path).toBe(page)
        }
        const testNavLink = async function(wrapper, page) {
            await clickNavLink(wrapper, page)
            checkUrlPath(wrapper, page)
        }

        // Test Home View
        await clickHomeLink(wrapper)
        expect(wrapper.vm.$route.path).toBe('/')
        
        // Test all other views
        for (let i = 1; i < routes.length; i++) {
            let route = routes[i]
            await testNavLink(wrapper, route)
        }
    })
})