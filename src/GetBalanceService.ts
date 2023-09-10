import { UserRepository } from './UserRepository';

export class GetBalanceService {
    userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    get(userId: number) {
        return this.userRepository.find(userId).amount;
    }
}
