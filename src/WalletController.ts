import { UserMapper, UserRepository } from "./UserRepository";

export class WalletController {
    mapper: UserMapper = {};
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository(this.mapper);
    }

    create(userId: number) {
        this.userRepository.create(userId);
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
