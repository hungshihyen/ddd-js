import { UserRepository } from './UserRepository';

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
