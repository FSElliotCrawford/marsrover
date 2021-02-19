type AllowedDirections = "N" | "E" | "S" | "W";
type AllowedCommand = "M" | "L" | "R";

class CommandHelper {
    private symbol : AllowedCommand[] = ["M", "L", "R"];

    public isValid(command : any) : boolean {
        return this.symbol.indexOf(command) !== -1 ? true : false;
    }
}

const directions : AllowedDirections[] = ["N","E","S","W"];
class Position {
    private direction = 0;
    private x = 0;
    private y = 0

    public getPosition() : string {
        return [
            this.x,
            this.y,
            this.getDirection()
        ].join(":");
    }

    private getDirection() {
        return directions[this.direction];
    }

    public execute(command: AllowedCommand) {
        if(command === "M") {
            this.move();
        }
        if(command === "R" || command === 'L') {
            this.turn(command === 'R' ? 1 : -1);
        }
    }

    private move() {

        let newY = this.y;
        let newX = this.x;
        switch(this.direction) {
            case 0: // N
                newY = newY + 1;
                break;
            case 1: // E
                newX = newX + 1;
                break;
            case 2: // S
                newY = newY - 1;
                break;
            case 3: // W
                newX = newX - 1;
                break;
        }

        this.y = (newY + 10)%10;
        this.x = (newX + 10)%10;
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

    public getPosition() {
        return this.position.getPosition();
    }

    public move(command : string) {
        const commands = command.split("");

        for (const command of commands) {
            if (!this.command_helper.isValid(command)) {
                return false;
            }
            this.moveRover(command);
        }
    }

    private moveRover(command: string) {
        this.position.execute(command as AllowedCommand);
    }
}
