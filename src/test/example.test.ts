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
    it("should move to 0:2:N when sending MM", () => {
        const rover = new MarsRover();
        rover.move("MM");
        expect(rover.getPosition()).toBe("0:2:N");
    })

    it("should move to 0:4:N when sending MMMM", () => {
        const rover = new MarsRover();
        rover.move("MMMM");
        expect(rover.getPosition()).toBe("0:4:N");
    })

    it("should move to 0:0:E when sending R", () => {
        const rover = new MarsRover();
        rover.move("R");
        expect(rover.getPosition()).toBe("0:0:E");
    })

    it("should move to 2:2:E when sending MMRMM", () => {
        const rover = new MarsRover();
        rover.move("MMRMM");
        expect(rover.getPosition()).toBe("2:2:E");
    })
})
