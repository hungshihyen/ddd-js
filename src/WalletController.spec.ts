import { WalletController } from './WalletController';

describe('WalletController', () => {
    let walletController: WalletController;
    beforeEach(() => {

        walletController = new WalletController();
    });

    it('should save money ok', () => {

        walletController.createUser(1);

        walletController.save(100, 1);

        expect(walletController.getBalance(1)).toBe(100);

    });

    it('should save money twice', () => {

        walletController.createUser(1);

        walletController.save(100, 1);
        walletController.save(100, 1);

        expect(walletController.getBalance(1)).toBe(200);
    });

    it('different users', () => {

        walletController.createUser(1);
        walletController.createUser(2);

        walletController.save(100, 1);
        walletController.save(100, 2);

        expect(walletController.getBalance(1)).toBe(100);
        expect(walletController.getBalance(2)).toBe(100);
    });

});
