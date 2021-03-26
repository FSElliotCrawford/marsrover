import { Vault, SystemDate } from "./Vault"
export class Account
{
    vault: Vault

    constructor(SystemDate : SystemDate) {
        this.vault = new Vault(SystemDate)
    }

    deposit(amount: number) {
        this.vault.deposit(amount);
    }

    withdraw(amount: number) {
        this.vault.withdraw(amount);
    }

    produceStatement() {
        return this.vault.getStatement();
    }
}
