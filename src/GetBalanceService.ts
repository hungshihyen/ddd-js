import { WalletRepositoryImpl } from './WalletRepositoryImpl';

export class GetBalanceService {
    walletRepository: WalletRepositoryImpl;

    constructor(walletRepository: WalletRepositoryImpl) {
        this.walletRepository = walletRepository;
    }

    get(userId: number): any {
        return this.walletRepository.find(userId).amount;
    }

}
