import { INVALID_AMOUNT } from './ErrorCode';

export class WalletController {
    mapper: { [key: number]: number } = {};

    getBalance(userId: number): any {
        return this.mapper[userId];
    }

    save(userId: number, amount: number) {

        if (amount <= 0) {
            throw new Error(INVALID_AMOUNT);
        }

        this.mapper[userId] += amount;
    }
}
