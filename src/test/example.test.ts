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

    it("should move to 9:0:W when sending LM", () => {
        const rover = new MarsRover();
        rover.move("LM");
        expect(rover.getPosition()).toBe("9:0:W");
    })

    it("should move to 0:9:S when sending RRM", () => {
        const rover = new MarsRover();
        rover.move("RRM");
        expect(rover.getPosition()).toBe("0:9:S");
    })

    it("should move to 0:0:N when sending RRRR", () => {
        const rover = new MarsRover();
        rover.move("RRRR");
        expect(rover.getPosition()).toBe("0:0:N");
    })

    it("should move to 0:0:N when sending LLLL", () => {
        const rover = new MarsRover();
        rover.move("LLLL");
        expect(rover.getPosition()).toBe("0:0:N");
    })

    it("should move to 0:2:N when sending MMXMM", () => {
        const rover = new MarsRover();
        rover.move("MMXMM");
        expect(rover.getPosition()).toBe("0:2:N");
    })
})


describe("When giving the rover loads of instructions", () => {
    it("should go on a jolly", () => {
        const rover = new MarsRover();
        rover.move("MMMRMMMRMMMRMMMRMMMLMMMLMMMLMMML");
        expect(rover.getPosition()).toBe("0:0:N");
    })

    it("should go on a jolly [IF THIS ERRORS DELETE]", () => {
        const rover = new MarsRover();
        rover.move("MLRMMLMMMRMMMLMMMLMMMRMMMRMMMLMMMM");
        expect(rover.getPosition()).toBe("7:6:W");
    })
});


describe("When using custom commands", () => {
    it("should move and rotate at the same time", () => {
        const rover = new MarsRover();
        rover.addCommand("D", 2, 1);
        rover.move("D");
        expect(rover.getPosition()).toBe("0:2:E");
    })

    it("should wrap", () => {
        const rover = new MarsRover();
        rover.addCommand("E", 12, 0);
        rover.move("E");
        expect(rover.getPosition()).toBe("0:2:N");
    })

    it("should override M with 5", () => {
        const rover = new MarsRover();
        rover.addCommand("M", 5, 0);
        rover.move("M");
        expect(rover.getPosition()).toBe("0:5:N");
    })

    it("should move 1 then override M with 5", () => {
        const rover = new MarsRover();
        rover.move("M");
        rover.addCommand("M", 5, 0);
        rover.move("M");
        expect(rover.getPosition()).toBe("0:6:N");
    })
})
