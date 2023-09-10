import { UserMapper, UserRepository } from "./UserRepository";
import { CreateUserService } from "./CreateUserService";

class SaveService {
    userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    save(userId: number, amount: number) {
        const user = this.userRepository.find(userId);

        user.amount += amount;

        this.userRepository.save(user);
    }
}

export class WalletController {
    mapper: UserMapper = {};
    private userRepository: UserRepository;
    private createUserService: CreateUserService;
    private saveService: SaveService;

    constructor() {
        this.userRepository = new UserRepository(this.mapper);
        this.createUserService = new CreateUserService(this.userRepository);
        this.saveService = new SaveService(this.userRepository);
    }

    create(userId: number) {
        this.createUserService.create(userId);
    }

    save(userId: number, amount: number) {
        this.saveService.save(userId, amount);
    }

    getBalance(userId: number): number {
        return this.userRepository.find(userId).amount;
    }
}
