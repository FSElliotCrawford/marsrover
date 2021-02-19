export class MarsRover {
    private position = "0:0:N";

    constructor() {

    }

    public getPosition() {
        return this.position;
    }

    public move(command : string) {
        if (!command) return;

        this.position = "0:1:N";
    }
}
