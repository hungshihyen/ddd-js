import { WalletRepository } from './WalletRepository';

export class CreateUserService {
    walletRepository: WalletRepository;

    constructor(walletRepository: WalletRepository) {
        this.walletRepository = walletRepository;
    }

    create(userId: number) {
        this.walletRepository.createUser(userId);
    }

}
