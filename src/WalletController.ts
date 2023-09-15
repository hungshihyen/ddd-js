import { CreateUserService } from './CreateUserService';
import { GetBalanceService } from './GetBalanceService';
import { SaveMoneyService } from './SaveMoneyService';

export class WalletController {
    private createUserService: CreateUserService;
    private saveMoneyService: SaveMoneyService;
    private getBalanceService: GetBalanceService;

    constructor(createUserService: CreateUserService,
                getBalanceService: GetBalanceService,
                saveMoneyService: SaveMoneyService) {
        this.createUserService = createUserService;
        this.getBalanceService = getBalanceService;
        this.saveMoneyService = saveMoneyService;
    }

    getBalance(userId: number): any {
        return this.getBalanceService.get(userId);
    }

    saveMoney(userId: number, amount: number) {

        this.saveMoneyService.save(userId, amount);

    }

    createUser(userId: number) {
        this.createUserService.create(userId);
    }
}
