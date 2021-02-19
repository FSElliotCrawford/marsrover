class CommandHelper {
    private symbol = ["M", "L", "R"];

    public isValid(command : string) : boolean {
        return this.symbol.indexOf(command) !== -1 ? true : false;
    }
}

const directions = [
    "N",
    "E",
    "S",
    "W"
];
class Position {
    private direction = 0;
    private x = 0;
    private y = 0

    public getPosition() {
        return this.x + ":" + this.y + ":" + this.getDirection();
    }

    private getDirection() {
        return directions[this.direction];
    }

    public execute(command: string) {
        if(command === "M") {
            this.move();
        }
        if(command === "R" || command === 'L') {
            this.turn(command === 'R' ? 1 : -1);
        }
    }

    private move() {
        switch(this.direction) {
            case 0: // N
                this.y++;
                break;
            case 1: // E
                this.x++;
                break;
            case 2: // S
                this.y--;
                break;
            case 3: // W
                this.x--;
                break;
        }
    }

    private turn(turnValue : number) {
        let newDirection = this.direction + turnValue;
        if (newDirection < 0) {
            newDirection = 3;
        } else if (newDirection > 3) {
            newDirection = 0;
        }
        this.direction = newDirection;
    }
}
export class MarsRover {
    private command_helper = new CommandHelper;
    private position = new Position;

    constructor() {

    }

    public getPosition() {
        return this.position.getPosition();
    }

    public move(command : string) {
        const commands = command.split("");

        for (const command of commands) {
            this.moveRover(command);
        }
    }

    private moveRover(command: string) {
        if (!this.command_helper.isValid(command)) return;

        this.position.execute(command);
    }
}
