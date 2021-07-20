import { createWrapper } from "../utils";
import OurStory from "@/views/OurStory";

describe("OurStory.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = createWrapper(OurStory);
    });

    test("Renders titles", () => {
        expect(wrapper.html().includes("Our Story")).toBe(true);
        expect(wrapper.html().includes("Our First Date")).toBe(true);
    });

    test("Pagination moves between pages", async () => {
        const titles = [ "Our Kobayashi Maru", "Our First Trip", "Our Engagement", "Our First Christmas Together", "Our New Bundle of Joy" ];
        const testPagination = async function(wrapper, title) {
            await wrapper.find(".pagination-next").trigger("click");
            expect(wrapper.html().includes(title)).toBe(true);
        }
        for (let i = 0; i < titles.length; i++) {
            let title = titles[i];
            await testPagination(wrapper, title);
        }
    });
});