import {Account} from "../main/Account";
import {SystemDate} from "../main/Vault";

import { mock, mockReset } from 'jest-mock-extended';

const MockSystemDate = mock<SystemDate>()


describe("Given a client makes a deposit of 1000 on 10-01-2012", () => {
    const account = new Account(MockSystemDate);
    MockSystemDate.getSystemDate.mockReturnValue("10/01/2012")
    account.deposit(1000);
    describe("then deposits 2000 on 13-01-2012", () => {
        MockSystemDate.getSystemDate.mockReturnValue("13/01/2012")
        account.deposit(2000);
        describe("and withdrawal of 500 14-01-2012", () => {
            MockSystemDate.getSystemDate.mockReturnValue("14/01/2012")
            account.withdraw(500);
            describe("when they print a statement", () => {
                it("should see", () => {

                    const expectedStatement =
                    "Date       || Amount || Balance\n" +
                    "14/01/2012 || -500   || 2500\n" +
                    "13/01/2012 || 2000   || 3000\n" +
                    "10/01/2012 || 1000   || 1000";


                    const statement = account.produceStatement();
                    expect(statement).toBe(expectedStatement);
                });
            })
        })
    })
})
