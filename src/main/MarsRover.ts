type AllowedDirection = "N" | "E" | "S" | "W";
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

    public execute({move, turn} : Command) {
        if(move) {
            const moveActions : moveAction[] = [
                {coord: "y", action: 1},
                {coord: "x", action: 1},
                {coord: "y", action: -1},
                {coord: "x", action: -1},
            ];
            const {coord, action} = moveActions[this.direction];
            this[coord] = this.rangeWrap(this[coord] + (move * action), this.plateau);
        }

        if(turn) {
            this.direction = this.rangeWrap(this.direction + turn, 4);
        }
    }

    private rangeWrap(value : number, range : number) : number {
        return (value + range)%range;
    }
}
class Command {
    public move : number;
    public turn : number;

    constructor(move: number, turn: number) {
        this.move = move;
        this.turn = turn;
    }
}
class AllowedCommands {
    private commands : any = {
        "M" : new Command(1, 0),
        "R" : new Command(0, 1),
        "L" : new Command(0, -1)
    };

    public getCommand(key: string) {
        return this.commands[key];
    }

    public addCommand(key : string, move : number, turn : number) {
        this.commands[key] = new Command(move, turn);
    }
}

export class MarsRover {
    public position = new Position;
    private commands = new AllowedCommands;

    public addCommand(key : string, move : number, turn : number) {
        this.commands.addCommand(key, move, turn)
    }

    public getPosition() : string {
        return this.position.getPosition();
    }

    public move(command : string) {

        const commands = command.split("");

        for (const command of commands) {
            const command_to_run = this.commands.getCommand(command)
            if(!command_to_run) {
                return false;
            }
            this.moveRover(command_to_run);
        }
    }

    private moveRover(command: Command) {
        this.position.execute(command);
    }
}
