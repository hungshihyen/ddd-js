import { UserMapper, UserRepository } from "./UserRepository";
import { CreateUserService } from "./CreateUserService";
import { SaveService } from "./SaveService";

class GetBalanceService {
    userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    get(userId: number) {
        return this.userRepository.find(userId).amount;
    }
}

export class WalletController {
    mapper: UserMapper = {};
    private userRepository: UserRepository;
    private createUserService: CreateUserService;
    private saveService: SaveService;
    private getBalanceService: GetBalanceService;

    constructor() {
        this.userRepository = new UserRepository(this.mapper);
        this.createUserService = new CreateUserService(this.userRepository);
        this.saveService = new SaveService(this.userRepository);
        this.getBalanceService = new GetBalanceService(this.userRepository);
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
