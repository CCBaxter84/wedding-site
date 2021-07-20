import { createWrapper } from "../utils";
import Loading from "@/components/Loading";

describe("Loading.vue", () => {
    let wrapper;
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = createWrapper(Loading);
    });

    test("Renders Loading message", () => {
        expect(wrapper.html().includes("Loading ...")).toBe(true);
    });
});