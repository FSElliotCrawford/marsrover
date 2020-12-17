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

    it("1,2 input should return the 3", () => {
        let example: Example = new Example();
        expect(example.sum("1,2")).toBe(3);
    }) 
    
    it("1,2,3,4,5,6,7,8,9,10 input should return the 55", () => {
        let example: Example = new Example();
        expect(example.sum("1,2,3,4,5,6,7,8,9,10")).toBe(55);
    })     
    
})
