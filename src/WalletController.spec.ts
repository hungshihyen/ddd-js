import { WalletController } from './WalletController';
import { CreateUserService } from './CreateUserService';
import { WalletRepository } from './WalletRepository';
import { GetBalanceService } from './GetBalanceService';
import { SaveMoneyService } from './SaveMoneyService';

describe('WalletController', () => {
    let walletController: WalletController;

    beforeEach(() => {
        let walletRepository = new WalletRepository();
        
        walletController = new WalletController(
            new CreateUserService(walletRepository),
            new GetBalanceService(walletRepository),
            new SaveMoneyService(walletRepository));
    });

    it('save money ok', () => {
        walletController.createUser(1);

        walletController.saveMoney(1, 1000);

        expect(walletController.getBalance(1)).toBe(1000);
    });
    it('save money 2000', () => {
        walletController.createUser(1);

        walletController.saveMoney(1, 2000);

        expect(walletController.getBalance(1)).toBe(2000);
    });

    it('save 1000 twice', () => {
        walletController.createUser(1);

        walletController.saveMoney(1, 1000);
        walletController.saveMoney(1, 1000);

        expect(walletController.getBalance(1)).toBe(2000);
    });

    it('different users', () => {

        walletController.createUser(1);
        walletController.createUser(2);

        walletController.saveMoney(1, 1000);
        walletController.saveMoney(2, 1000);

        expect(walletController.getBalance(1)).toBe(1000);
        expect(walletController.getBalance(2)).toBe(1000);
    });

    it('user not found', () => {

        expect(() => walletController.saveMoney(1, 1000)).toThrowError('User not found');
    });

});
