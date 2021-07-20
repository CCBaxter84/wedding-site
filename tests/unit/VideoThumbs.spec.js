import { createWrapper } from "../utils";
import VideoThumbs from "@/components/VideoThumbs";

describe("VideoThumbs.vue", () => {
    let wrapper;
    let options;
    beforeEach(() => {
        jest.clearAllMocks();
        options = {
            propsData: {
                items: [
                    { _id: 1, description: "Best Man Speech", thumbnail: "www.notvaild.you", url: "www.notvalid2.you" },
                    { _id: 1, description: "Father Daughter Dance", thumbnail: "www.notvaildeither.you", url: "www.notvalideither2.you" }
                ]
            }
        }
        wrapper = createWrapper(VideoThumbs, options);
    });

    test("Renders Video Titles", () => {
        expect(wrapper.html().includes("Best Man Speech")).toBe(true);
        expect(wrapper.html().includes("Father Daughter Dance")).toBe(true);
    });
    test("Renders Video Thumbnails", () => {
        expect(wrapper.html().includes("www.notvaild.you")).toBe(true);
        expect(wrapper.html().includes("www.notvaildeither.you")).toBe(true);
    });
    test("Clicking Thumbnail Opens Video Modal", async () => {
        const thumb = wrapper.findAll("img").at(0);
        await thumb.trigger("click");
        expect(wrapper.html().includes("www.notvalid2.you")).toBe(true);
    });
});