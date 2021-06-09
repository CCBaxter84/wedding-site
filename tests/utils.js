import { createLocalVue, mount } from "@vue/test-utils";
import Buefy from "buefy";

export const createWrapper = (component, options = {}) => {
    const localVue = createLocalVue();
    localVue.use(Buefy, {
        defaultIconPack: "fa"
    });
    const wrapper = mount(component, {
        localVue,
        ...options
    });
    return wrapper;
}