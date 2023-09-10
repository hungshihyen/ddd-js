import { UserRepository } from './UserRepository';
import { User } from './User';

export class CreateUserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    create(userId: number) {
        this.userRepository.create(new User(userId, 0));
    }
}
