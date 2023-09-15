import { WalletRepository } from './WalletRepository';
import { User } from './User';

export class SaveMoneyService {
    walletRepository: WalletRepository;

    constructor(walletRepository: WalletRepository) {
        this.walletRepository = walletRepository;
    }

    save(userId: number, amount: number) {
        const user = this.getUser(userId);

        user.addAmount(amount);

        this.walletRepository.save(user);
    }

    private getUser(userId: number) {
        const user: User = this.walletRepository.find(userId);

        if (user === undefined) {
            throw new Error('User not found');
        }

        return user;
    }
}
