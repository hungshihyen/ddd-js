import { WalletController } from './WalletController';

describe('WalletController', () => {

    it('should save money ok', () => {

        const walletController = new WalletController();
        walletController.save(100);

        expect(walletController.getBalance()).toBe(100);

    });

});
