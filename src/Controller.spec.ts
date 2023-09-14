import { WalletController } from './WalletController';

describe('Controller', () => {

    it('should save money ok', () => {
        const walletController = new WalletController();

        walletController.save(1000);

        expect(walletController.getBalance()).toBe(1000);
    });

    it('should save 2000', () => {
        const walletController = new WalletController();

        walletController.save(2000);

        expect(walletController.getBalance()).toBe(2000);
    });

    it('should save 1000 twice', () => {
        const walletController = new WalletController();

        walletController.save(1000);
        walletController.save(1000);

        expect(walletController.getBalance()).toBe(2000);
    });

});
