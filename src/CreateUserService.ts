import { UserRepository } from "./UserRepository";

export class CreateUserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    create(userId: number) {
        this.userRepository.create(userId);
    }
}
