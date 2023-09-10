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
        const user = this.mapper[userId];

        user.amount += amount;

        this.mapper[userId] = user;
    }

    getBalance(userId: number): number {
        return this.mapper[userId].amount;
    }
}
