import { WalletController } from './WalletController';

describe('WalletController', () => {
    let walletController: WalletController;
    beforeEach(() => {

        walletController = new WalletController();
    });

    it('should save money ok', () => {
        walletController.save(100);

        expect(walletController.getBalance()).toBe(100);

    });

    it('should save money twice', () => {
        walletController.save(100);
        walletController.save(100);

        expect(walletController.getBalance()).toBe(200);
    });

});
