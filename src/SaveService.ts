import { UserRepository } from './UserRepository';
import { USER_LOCKED, USER_NOT_FOUND } from './ErrorCode';

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

        if (user.isLocked) {
            throw new Error(USER_LOCKED);
        }

        user.addAmount(amount);

        this.userRepository.save(user);
    }
}
