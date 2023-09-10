import { CreateUserService } from "./CreateUserService";
import { SaveService } from "./SaveService";
import { GetBalanceService } from "./GetBalanceService";

export class WalletController {
    private createUserService: CreateUserService;
    private saveService: SaveService;
    private getBalanceService: GetBalanceService;

    constructor(createUserService: CreateUserService, saveService: SaveService, getBalanceService: GetBalanceService) {
        this.createUserService = createUserService;
        this.saveService = saveService;
        this.getBalanceService = getBalanceService;
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
