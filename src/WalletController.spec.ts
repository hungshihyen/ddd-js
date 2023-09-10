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
        expect(walletController.getBalance()).toBe(0)
    });


    it('save 100', () => {
        walletController.save(100);
        expect(walletController.getBalance()).toBe(100);
    });



});
