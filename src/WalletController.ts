import { WalletRepository } from './WalletRepository';
import { message } from './ErrorCode';

class CreateUserWalletService {
    private walletRepository: any;

    constructor(walletRepository: WalletRepository) {
        this.walletRepository = walletRepository;
    }

    create(userId: number) {
        this.walletRepository.create(userId);
    }
}

class GetBalanceService {
    private walletRepository: WalletRepository;

    constructor(walletRepository: WalletRepository) {
        this.walletRepository = walletRepository;
    }

    get(userId: number) {
        return this.walletRepository.find(userId).amount;

    }

}

class SaveMoneyService {
    private walletRepository: WalletRepository;

    constructor(walletRepository: WalletRepository) {
        this.walletRepository = walletRepository;
    }

    save(amount: number, userId: number) {

        let user = this.walletRepository.find(userId);

        if (user === undefined) {
            throw new Error(message);
        }
        user.addAmount(amount);

        this.walletRepository.save(user);

    }

}

export class WalletController {
    private createUserWalletService: CreateUserWalletService;
    private getBalanceService: GetBalanceService;
    private saveMoneyService: SaveMoneyService;

    constructor() {
        const walletRepository = new WalletRepository();
        this.createUserWalletService = new CreateUserWalletService(walletRepository);
        this.getBalanceService = new GetBalanceService(walletRepository);
        this.saveMoneyService = new SaveMoneyService(walletRepository);
    }

    createUserWallet(userId: number) {
        this.createUserWalletService.create(userId);
    }

    getBalance(userId: number): any {
        return this.getBalanceService.get(userId);
    }

    save(amount: number, userId: number) {

        this.saveMoneyService.save(amount, userId);

    }

}
