import { split } from "ts-node";

export class Example {
    sum(numbers: string) {

        if(!numbers) {
            return 0;
        }

        const split_numbers = numbers.split(',').map((num) => Number(num));
        return split_numbers.reduce((a,b) => a + b, 0);
    }   
}
