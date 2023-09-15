import { WalletRepository } from './WalletRepository';

export class GetBalanceService {
    walletRepository: WalletRepository;

    constructor(walletRepository: WalletRepository) {
        this.walletRepository = walletRepository;
    }

    get(userId: number): any {
        return this.walletRepository.find(userId).amount;
    }

}
