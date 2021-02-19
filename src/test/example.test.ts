import {MarsRover} from "../main/MarsRover";

describe('On initial load', () => {
    it("should place the rover at 0,0", () => {
        const rover = new MarsRover();
        expect(rover.getPosition()).toBe("0:0:N");
    })
})

describe("When giving the rover instructions", () => {
    it("should move to 0:1:N when sending M", () => {
        const rover = new MarsRover();
        expect(rover.getPosition()).toBe("0:1:N");
    })
})
