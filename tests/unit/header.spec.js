import { createWrapper } from "../utils";
import Header from "@/components/Header";

const titles = [ "Home", "Our Story", "Engagement Photos", "Wedding Photos", "Wedding Videos" ];

describe("Header.vue", () => {
    let wrapper;
    let options;
    beforeEach(() => {
        options = {
            stubs: ["router-link"]
        }
        wrapper = createWrapper(Header, options);
    });
    
    test("Renders nav bar", () => {
        titles.forEach(title => {
            expect(wrapper.html().includes(title)).toBe(true)
        });
    }); 
});