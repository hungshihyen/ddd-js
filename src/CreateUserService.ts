import { WalletRepositoryImpl } from './WalletRepositoryImpl';

export class CreateUserService {
    walletRepository: WalletRepositoryImpl;

    constructor(walletRepository: WalletRepositoryImpl) {
        this.walletRepository = walletRepository;
    }

    create(userId: number) {
        this.walletRepository.createUser(userId);
    }

}
