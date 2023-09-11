import { CreateUserService } from './CreateUserService';
import { SaveService } from './SaveService';
import { GetBalanceService } from './GetBalanceService';
import { LockUserService } from './LockUserService';

export class WalletController {
    private lockUserService: LockUserService;
    private createUserService: CreateUserService;
    private saveService: SaveService;
    private getBalanceService: GetBalanceService;

    constructor(createUserService: CreateUserService, saveService: SaveService, getBalanceService: GetBalanceService, lockUserService: LockUserService) {
        this.createUserService = createUserService;
        this.saveService = saveService;
        this.getBalanceService = getBalanceService;
        this.lockUserService = lockUserService;
    }

    lockUser(userId: number) {
        this.lockUserService.lock(userId);
    }

    create(userId: number) {
        this.createUserService.create(userId);
    }

    save(userId: number, amount: number) {
        this.saveService.save(userId, amount);
    }

    getBalance(userId: number): number {
        return this.getBalanceService.get(userId);
    }
}
