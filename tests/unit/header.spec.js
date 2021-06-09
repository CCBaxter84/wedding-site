import { createWrapper } from "../utils";
import Header from "@/components/Header";
import router from "@/router";

const routes = ["/", "/our-story", "/engagement", "/getting-ready", "/ceremony", "/couple", "/family", "/reception"];

describe("Header.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = createWrapper(Header, { router });
    });
    it("Renders nav bar", () => {
        expect(wrapper.html().includes("Home")).toBe(true);
        expect(wrapper.html().includes("Our Story")).toBe(true);
        expect(wrapper.html().includes("Engagement")).toBe(true);
        expect(wrapper.html().includes("Getting Ready")).toBe(true);
        expect(wrapper.html().includes("Ceremony")).toBe(true);
        expect(wrapper.html().includes("Couple")).toBe(true);
        expect(wrapper.html().includes("Family")).toBe(true);
        expect(wrapper.html().includes("Reception")).toBe(true);
    });

    const testNavLinks = async function(page) {
        await wrapper.find("#" + page.slice(1)).trigger("click");
        expect(wrapper.vm.$route.path).toBe(page);
    }

    it("Clicking on navlinks redirects to appropriate page", async () => {
        await wrapper.find("#home").trigger("click");
        expect(wrapper.vm.$route.path).toBe("/");
        for (let i = 1; i < routes.length; i++) {
            let route = routes[i];
            await testNavLinks(route);
        }
    });
});