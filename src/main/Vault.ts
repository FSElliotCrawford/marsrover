import {Printer} from "./Printer";
export interface TransactionLog {
    date: string
    amount: number
    balance: number
}

export class SystemDate {
    getSystemDate() : string {
        return new Date().toLocaleString()
    }
}
export class Vault
{
    balance: number = 0
    printer: Printer
    system_date: SystemDate
    transactions : TransactionLog[] = []

    constructor(SystemDate: SystemDate) {
        this.printer = new Printer;
        this.system_date = SystemDate;
    }

    deposit(amount: number) {
        this.addLog(amount, (this.balance + amount))
    }

    withdraw(amount: number) {
        this.addLog(-amount, (this.balance - amount))
    }

    addLog(amount: number, balance: number) {
        this.balance = balance;
        this.transactions.push({
            date: this.system_date.getSystemDate(),
            amount,
            balance
        })
    }

    getStatement() {
        return this.printer.print(this.transactions);
    }

}
