import { WalletController } from "./WalletController";

describe('WalletController', () => {
    let walletController: WalletController;
    // get balance
    // save 100
    // save 100 twice
    // different users
    // invalid amount
    // bad format amount
    // user not found
    // user locked
    beforeEach(() => {
        walletController = new WalletController();
    });

    it('get balance', () => {
        walletController.create(1);
        expect(walletController.getBalance(1)).toBe(0)
    });


    it('save 100', () => {
        walletController.create(1);
        walletController.save(1, 100);
        expect(walletController.getBalance(1)).toBe(100);
    });


    it('save 100 twice', () => {

        walletController.create(1);

        walletController.save(1, 100);
        walletController.save(1, 100);
        expect(walletController.getBalance(1)).toBe(200);
    });

    it('different users', () => {

        walletController.create(1);
        walletController.create(2);

        walletController.save(1, 100);
        walletController.save(2, 200);

        expect(walletController.getBalance(1)).toBe(100);
        expect(walletController.getBalance(2)).toBe(200);
    });


});
