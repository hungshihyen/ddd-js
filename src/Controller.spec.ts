import { WalletController } from './WalletController';

describe('Controller', () => {
    let walletController: WalletController;
    beforeEach(() => {
        walletController = new WalletController();
    });

    it('should save money ok', () => {
        walletController.mapper[1] = 0;

        walletController.save(1, 1000);

        expect(walletController.getBalance(1)).toBe(1000);
    });

    it('should save 2000', () => {

        walletController.mapper[1] = 0;

        walletController.save(1, 2000);

        expect(walletController.getBalance(1)).toBe(2000);
    });

    it('should save 1000 twice', () => {

        walletController.mapper[1] = 0;

        walletController.save(1, 1000);
        walletController.save(1, 1000);

        expect(walletController.getBalance(1)).toBe(2000);
    });

    it('different users', () => {

        walletController.mapper[1] = 0;
        walletController.mapper[2] = 0;

        walletController.save(1, 1000);
        walletController.save(2, 1000);

        expect(walletController.getBalance(1)).toBe(1000);
        expect(walletController.getBalance(2)).toBe(1000);
    });

});
