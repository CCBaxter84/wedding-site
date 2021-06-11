import { createLocalVue, mount } from '@vue/test-utils'
import Buefy from 'buefy'

export const titles = ['Home', 'Our Story', 'Engagement', 'Getting Ready', 'Ceremony', 'Couple', 'Family', 'Reception']
export const routes = ['/', '/our-story', '/engagement', '/getting-ready', '/ceremony', '/couple', '/family', '/reception']

export const createWrapper = (component, options = {}) => {
    const localVue = createLocalVue()
    localVue.use(Buefy, {
        defaultIconPack: 'fa'
    })
    const wrapper = mount(component, {
        localVue,
        ...options
    })
    return wrapper
}

export const clickNavLink = async function(wrapper, page) {
    await wrapper.find('#' + page.slice(1)).trigger('click')
}

export const clickHomeLink = async function(wrapper) {
    await clickNavLink(wrapper, '/home')
}