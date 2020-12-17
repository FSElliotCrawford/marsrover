import {Example} from "../main/example";

describe('example test', () => {
    it("Empty string should return 0", () => {
        let example: Example = new Example();
        expect(example.sum("")).toBe(0);
    })
    
})
