export class WalletController {
    mapper: { [key: number]: number } = {};

    getBalance(userId: number): any {
        return this.mapper[userId];
    }

    save(userId: number, amount: number) {
        this.mapper[userId] += amount;

    }
}
