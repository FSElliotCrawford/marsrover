export class Example {
    sum(input: string) {

        if(!input) {
            return 0;
        }


        const split_numbers = input.split('\n').join(',').split(',').map((num) => Number(num));
        return split_numbers.reduce((a,b) => a + b, 0);
    }   
}
