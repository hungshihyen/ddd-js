import { WalletController } from './WalletController';

describe('WalletController', () => {
    let walletController: WalletController;

    beforeEach(() => {
        walletController = new WalletController();
    });

    it('should save money ok', () => {
        walletController.createUserWallet(1);

        walletController.save(1000, 1);

        expect(walletController.getBalance(1)).toBe(1000);
    });

    it('save money 2000', () => {
        walletController.createUserWallet(1);

        walletController.save(2000, 1);

        expect(walletController.getBalance(1)).toBe(2000);
    });

    it('save twice', () => {

        walletController.createUserWallet(1);

        walletController.save(1000, 1);
        walletController.save(1000, 1);

        expect(walletController.getBalance(1)).toBe(2000);
    });

    it('different users', () => {

        walletController.createUserWallet(1);
        walletController.createUserWallet(2);

        walletController.save(1000, 1);
        walletController.save(1000, 2);

        expect(walletController.getBalance(1)).toBe(1000);
        expect(walletController.getBalance(2)).toBe(1000);
    });

    it('user not found', () => {
        expect(() => {
            walletController.save(1000, 1);
        }).toThrowError('User not found');
    });

});
