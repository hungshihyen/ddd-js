import { CreateUserService } from './CreateUserService';
import { SaveService } from './SaveService';
import { GetBalanceService } from './GetBalanceService';
import { UserRepository } from "./UserRepository";

export class LockUserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    lock(userId: number) {
        const user = this.userRepository.find(userId);

        user.lock();

        this.userRepository.save(user);
    }
}

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
