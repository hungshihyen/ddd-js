export class UserWallet {
    userId: number;
    amount: number;

    constructor(userId: number, amount: number) {
        this.userId = userId;
        this.amount = amount;
    }

    addAmount(amount: number) {
        this.amount += amount;
    }

}
