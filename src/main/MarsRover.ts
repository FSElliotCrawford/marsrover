type AllowedDirection = "N" | "E" | "S" | "W";
type AllowedCommand = "M" | "L" | "R";
class CommandHelper {
    private symbol : AllowedCommand[] = ["M", "L", "R"];

    public isValid(command : any) : boolean {
        return this.symbol.indexOf(command) !== -1 ? true : false;
    }
}
interface moveAction {
    coord: "x" | "y"
    action: number
}
class Position {
    private allowed_directions : AllowedDirection[] = ["N","E","S","W"];
    private direction : number = 0
    private x : number = 0
    private y : number = 0
    private plateau : number = 10;

    public getPosition() : string {
        return [this.x,this.y,this.getDirection()].join(":");
    }

    private getDirection() : AllowedDirection {
        return this.allowed_directions[this.direction];
    }

    public execute(command: AllowedCommand) {
        if(command === "M") {
            this.move();
        } else {
            this.turn(command === 'R' ? 1 : -1);
        }
    }

    private move() {
        const moveActions : moveAction[] = [
            {coord: "y", action: 1},
            {coord: "x", action: 1},
            {coord: "y", action: -1},
            {coord: "x", action: -1},
        ];

        const {coord, action} = moveActions[this.direction];

        this[coord] = this.rangeWrap(this[coord] + action, this.plateau);
    }

    private turn(turnValue : number) {
        this.direction = this.rangeWrap(this.direction + turnValue, 4);
    }

    private rangeWrap(value : number, range : number) : number {
        return (value + range)%range;
    }
}
export class MarsRover {
    private command_helper = new CommandHelper;
    private position = new Position;

    public getPosition() : string {
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
export class RoverConnection {
    private command_helper = new CommandHelper;
    private rover_commands : AllowedCommand[] = [];

    message(command : string) {
        const sub_commands = command.split("");
        for (const sub_command of sub_commands) {
            if (!this.command_helper.isValid(sub_command)) {
                return false;
            }
            this.rover_commands.push(sub_command as AllowedCommand);
        }
    }

    sendToRover() {

    }


}
