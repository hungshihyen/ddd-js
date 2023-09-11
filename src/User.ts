export class User {
    userId: number;
    amount: number;
    isLocked: boolean = false;

    constructor(userId: number, amount: number, isLocked: boolean = false) {
        this.userId = userId;
        this.amount = amount;
        this.isLocked = isLocked;
    }

    addAmount(amount: number) {
        this.amount += amount;
    }

    lock() {
        this.isLocked = true;
    }
}
