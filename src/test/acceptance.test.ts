import {Account} from "../main/Account";

describe("Given a client makes a deposit of 1000 on 10-01-2012", () => {
    describe("then deposits 2000 on 13-01-2012", () => {
        describe("and withdrawal of 500 14-01-2012", () => {
            describe("when they print a statement", () => {
                it("should see", () => {
                    const account = new Account();

                    const expectedStatement =
                    "Date       || Amount || Balance" +
                    "14/01/2012 || -500   || 2500" +
                    "13/01/2012 || 2000   || 3000" +
                    "10/01/2012 || 1000   || 1000";

                    account.deposit(1000);
                    account.deposit(2000);
                    account.withdraw(500);

                    const statement = account.produceStatement();
                    expect(statement).toBe(expectedStatement);
                });
            })
        })
    })
})
