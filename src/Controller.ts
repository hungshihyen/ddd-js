export class Controller {
    private mapper: any = {};

    createAccount(userId: number) {
        this.mapper[userId] = 0;
    }

    getBalance(userId: number): any {
        return this.mapper[userId];
    }

    save(amount: number, userId: number) {
        this.mapper[userId] += amount;
    }
}
