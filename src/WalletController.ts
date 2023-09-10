class User {
    userId: number;
    amount: number;

    constructor(userId: number, amount: number) {
        this.userId = userId;
        this.amount = amount;

    }

}

export class WalletController {
    private amount = 0;
    private mapper: { [key: number]: User } = {};

    create(userId: number) {
        this.mapper[userId] = new User(userId, 0);
    }


    save(userId: number, amount: number) {
        const user = this.mapper[userId];

        user.amount += amount;

        this.mapper[userId] = user;
    }

    getBalance(userId: number): number {
        return this.mapper[userId].amount;
    }
}
