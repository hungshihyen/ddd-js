import { UserRepository } from "./UserRepository";
import { CreateUserService } from "./CreateUserService";
import { SaveService } from "./SaveService";
import { GetBalanceService } from "./GetBalanceService";

export class WalletController {
    private readonly userRepository: UserRepository;
    private createUserService: CreateUserService;
    private saveService: SaveService;
    private getBalanceService: GetBalanceService;

    constructor() {
        this.userRepository = new UserRepository();
        this.createUserService = new CreateUserService(this.userRepository);
        this.saveService = new SaveService(this.userRepository);
        this.getBalanceService = new GetBalanceService(this.userRepository);
    }

    create(userId: number) {
        this.createUserService.create(userId);
    }

    save(userId: number, amount: number) {
        this.saveService.save(userId, amount);
    }

    getBalance(userId: number): number {
        return this.getBalanceService.get(userId);
    }
}
