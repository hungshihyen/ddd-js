import { UserMapper, UserRepository } from "./UserRepository";

class CreateUserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    create(userId: number) {
        this.userRepository.create(userId);
    }
}

export class WalletController {
    mapper: UserMapper = {};
    private userRepository: UserRepository;
    private createUserService: CreateUserService;

    constructor() {
        this.userRepository = new UserRepository(this.mapper);
        this.createUserService = new CreateUserService(this.userRepository);
    }

    create(userId: number) {
        this.createUserService.create(userId);
    }

    save(userId: number, amount: number) {

        const user = this.userRepository.find(userId);

        user.amount += amount;

        this.userRepository.save(user);

    }

    getBalance(userId: number): number {
        return this.userRepository.find(userId).amount;
    }
}
