import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import Header from "@/components/Header";
import Buefy from "buefy";
import router from "@/router";

const localVue = createLocalVue();
localVue.use(Buefy);

describe("Header.vue", () => {
    test("Renders nav bar", () => {
        const wrapper = mount(Header, {
            localVue,
            router
        });
        expect(wrapper.html().includes("Home")).toBe(true);
        expect(wrapper.html().includes("Our Story")).toBe(true);
        expect(wrapper.html().includes("Engagement")).toBe(true);
        expect(wrapper.html().includes("Getting Ready")).toBe(true);
        expect(wrapper.html().includes("Ceremony")).toBe(true);
        expect(wrapper.html().includes("Couple")).toBe(true);
        expect(wrapper.html().includes("Family")).toBe(true);
        expect(wrapper.html().includes("Reception")).toBe(true);
    });
});