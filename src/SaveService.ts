import { UserRepository } from "./UserRepository";

export class SaveService {
    userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    save(userId: number, amount: number) {
        const user = this.userRepository.find(userId);

        user.amount += amount;

        this.userRepository.save(user);
    }
}
