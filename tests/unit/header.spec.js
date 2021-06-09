import { createWrapper } from "../utils";
import Header from "@/components/Header";
import router from "@/router";

const routes = ["/", "/our-story", "/engagement", "/getting-ready", "/ceremony", "/couple", "/family", "/reception"];

describe("Header.vue", () => {
    test("Renders nav bar", () => {
        const wrapper = createWrapper(Header, { router });
        expect(wrapper.html().includes("Home")).toBe(true);
        expect(wrapper.html().includes("Our Story")).toBe(true);
        expect(wrapper.html().includes("Engagement")).toBe(true);
        expect(wrapper.html().includes("Getting Ready")).toBe(true);
        expect(wrapper.html().includes("Ceremony")).toBe(true);
        expect(wrapper.html().includes("Couple")).toBe(true);
        expect(wrapper.html().includes("Family")).toBe(true);
        expect(wrapper.html().includes("Reception")).toBe(true);
    });
    test("Clicking on navlinks redirects to appropriate page", async () => {
        const wrapper = createWrapper(Header, { router });
        await wrapper.find("#our-story").trigger("click");
        expect(wrapper.vm.$route.path).toBe("/our-story");
    });
});