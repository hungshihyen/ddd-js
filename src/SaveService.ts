import { UserRepository } from './UserRepository';
import { USER_NOT_FOUND } from './ErrorCode';

export class SaveService {
    userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    save(userId: number, amount: number) {
        const user = this.userRepository.find(userId);

        if (user === undefined) {
            throw new Error(USER_NOT_FOUND);
        }

        user.addAmount(amount);

        this.userRepository.save(user);
    }
}
