import { INVALID_AMOUNT, USER_NOT_FOUND } from './ErrorCode';

export class WalletController {
    mapper: { [key: number]: number } = {};

    getBalance(userId: number): any {
        return this.mapper[userId];
    }

    save(userId: number, amount: number) {

        if (amount <= 0) {
            throw new Error(INVALID_AMOUNT);
        }
        const userAmount = this.mapper[userId];

        if (userAmount === undefined) {
            throw new Error(USER_NOT_FOUND);
        }

        this.mapper[userId] += amount;
    }
}
