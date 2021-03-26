import {Account} from "../main/Account";
import {SystemDate} from "../main/Vault";

import { mock, mockReset } from 'jest-mock-extended';

const MockSystemDate = mock<SystemDate>()

describe("account", () => {
    beforeEach(() => {
        mockReset(MockSystemDate);
     });

    describe("when depost is made", () => {
        it("should store amount and date in the statment", () => {
            MockSystemDate.getSystemDate.mockReturnValue("10/01/2012")

            const account = new Account(MockSystemDate);

            account.deposit(1000);

            const statement = account.produceStatement();
            const expected_statement = "Date       || Amount || Balance\n" +
                                      "10/01/2012 || 1000   || 1000";

            expect(statement).toBe(expected_statement);
        })
    })

    describe("when multiple deposts are made", () => {
        it("should store amount and date in the statment", () => {
            MockSystemDate.getSystemDate.mockReturnValue("10/01/2012")
            const account = new Account(MockSystemDate);

            account.deposit(1000);

            MockSystemDate.getSystemDate.mockReturnValue("13/01/2012")
            account.deposit(2000);

            const statement = account.produceStatement();
            const expected_statement = "Date       || Amount || Balance\n" +
                                      "13/01/2012 || 2000   || 3000\n" +
                                      "10/01/2012 || 1000   || 1000";

            expect(statement).toBe(expected_statement);
        })
    })

    describe("when withdrawal is made", () => {
        it("should store amount and date in the statment", () => {
            MockSystemDate.getSystemDate.mockReturnValue("14/01/2012")
            const account = new Account(MockSystemDate);

            account.withdraw(500);

            const statement = account.produceStatement();
            const expected_statement = "Date       || Amount || Balance\n" +
                                      "14/01/2012 || -500   || -500";

            expect(statement).toBe(expected_statement);
        })
    })


})
