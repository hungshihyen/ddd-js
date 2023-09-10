import { User } from "./User";

type UserMapper = { [key: number]: User };

class UserRepository {
    mapper: UserMapper;

    constructor(mapper: UserMapper) {
        this.mapper = mapper;
    }

    create(userId: number) {
        this.mapper[userId] = new User(userId, 0);
    }
}

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
