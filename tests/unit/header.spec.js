import { createWrapper } from "../utils";
import Header from "@/components/Header";
import router from "@/router";

describe("Header.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = createWrapper(Header, { router });
    });
    
    test("Renders nav bar", () => {
        const titles = ["Home", "Our Story", "Engagement", "Getting Ready", "Ceremony", "Couple", "Family", "Reception"];
        titles.forEach(title => {
            expect(wrapper.html().includes(title)).toBe(true);
        });
    }); 

    test("Clicking on navlinks redirects to appropriate page", async () => {
        const routes = ["/", "/our-story", "/engagement", "/getting-ready", "/ceremony", "/couple", "/family", "/reception"];
        const testNavLinks = async function(wrapper, page) {
            await wrapper.find("#" + page.slice(1)).trigger("click");
            expect(wrapper.vm.$route.path).toBe(page);
        }
        await wrapper.find("#home").trigger("click");
        expect(wrapper.vm.$route.path).toBe("/");
        for (let i = 1; i < routes.length; i++) {
            let route = routes[i];
            await testNavLinks(wrapper, route);
        }
    });
});