import {MarsRover} from "../main/MarsRover";

describe('On initial load', () => {
    it("should place the rover at 0,0", () => {
        const rover = new MarsRover();
        expect(rover.getPosition()).toBe("0:0:N");
    })
})

describe("When giving the rover instructions", () => {
    it("should do nothing when sending empty string", () => {
        const rover = new MarsRover();
        rover.move("");
        expect(rover.getPosition()).toBe("0:0:N");
    })
    it("should do nothing when sending non valid command", () => {
        const rover = new MarsRover();
        rover.move("X");
        expect(rover.getPosition()).toBe("0:0:N");
    })
    it("should move to 0:1:N when sending M", () => {
        const rover = new MarsRover();
        rover.move("M");
        expect(rover.getPosition()).toBe("0:1:N");
    })
})
