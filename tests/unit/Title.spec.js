import { createWrapper } from "../utils";
import Title from "@/components/Title";

describe("Title.vue", () => {
    let wrapper;
    let options;
    beforeEach(() => {
        jest.clearAllMocks();
        options = {
            propsData: {
                title: "Couple"
            }
        }
        wrapper = createWrapper(Title, options);
    });

    test("Renders title", () => {
        expect(wrapper.html().includes("Couple")).toBe(true);
    });
});