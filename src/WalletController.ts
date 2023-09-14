import { INVALID_AMOUNT, USER_NOT_FOUND } from './ErrorCode';
import { WalletRepository } from './WalletRepository';

export class WalletController {

    private walletRepository: WalletRepository;

    constructor(walletRepository: WalletRepository) {
        this.walletRepository = walletRepository;
    }

    getBalance(userId: number): any {
        return this.walletRepository.find(userId);
    }

    save(userId: number, amount: number) {

        if (amount <= 0) {
            throw new Error(INVALID_AMOUNT);
        }

        const userAmount = this.walletRepository.find(userId);

        if (userAmount === undefined) {
            throw new Error(USER_NOT_FOUND);
        }

        this.walletRepository.save(userId, amount);

    }
}
