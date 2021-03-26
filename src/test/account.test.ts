import {Account} from "../main/Account";
import {Vault} from "../main/Vault";
jest.mock('../main/Vault');

describe("account", () => {
    describe("when depost is made", () => {
        it("should store amount and date in the statment", () => {
            const account = new Account();

            Vault.addLog() = jest.fn();

            account.deposit(1000);

            expect(Vault.addLog).toBeCalled();
        })
    })
})
