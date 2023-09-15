export class WalletController {
    private mapper: any = {};

    createUser(userId: number) {
        this.mapper[userId] = 0;
    }

    getBalance(userId: number): any {
        return this.mapper[userId];
    }

    save(amount: number, userId: number) {
        this.mapper[userId] += amount;
    }
}
