import {TransactionLog} from "./Vault"

export class Printer {

    print(logs: TransactionLog[]) {

        let lines = ["Date       || Amount || Balance"];

        logs.reverse().forEach((log) => {
            lines.push(`${log.date} || ${log.amount}   || ${log.balance}`)
        })

        return lines.join("\n");
    }
}
