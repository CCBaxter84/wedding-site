import { createWrapper } from "../utils";
import Album from "@/components/Album";

describe("Album.vue", () => {
    let options;
    let items = [
        { _id: 1, description: "Man and Wife", url: "www.notvalid2.you" },
        { _id: 2, description: "Wife and Man", url: "www.notvalideither2.you" }
    ];
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("Renders Loading message while fetching Photos", () => {
        options = {
            propsData: {
                items,
                isFetching: true
            }
        }
        const wrapper = createWrapper(Album, options);
        expect(wrapper.html().includes("Loading ...")).toBe(true);
        expect(wrapper.html().includes("www.notvalid2.you")).toBe(false);
    });

    test("Renders First Photo upon completiong of fetching", () => {
        options = {
            propsData: {
                items,
                isFetching: false
            }
        }
        const wrapper = createWrapper(Album, options);
        expect(wrapper.html().includes("Loading ...")).toBe(false);
        expect(wrapper.html().includes("www.notvalid2.you")).toBe(true);
        expect(wrapper.html().includes("www.notvalideither2.you")).toBe(false);
    });    
});