import {Example} from "../main/example";

describe('example test', () => {
    it("Empty string should return 0", () => {
        let example: Example = new Example();
        expect(example.sum("")).toBe(0);
    })

    it("Single input should return the value", () => {
        let example: Example = new Example();
        expect(example.sum("5")).toBe(5);
    })
    
})
