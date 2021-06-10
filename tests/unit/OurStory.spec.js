import { createWrapper } from "../utils";
import OurStory from "@/views/OurStory";

describe("OurStory.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = createWrapper(OurStory);
    });

    test("Renders titles", () => {
        expect(wrapper.html().includes("Our Story")).toBe(true);
        expect(wrapper.html().includes("Our First Date: 11/30/2018")).toBe(true);
    });

    test("Pagination moves between pages", () => {

    });
});