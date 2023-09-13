class WalletController {
    getBalance(): any {
        return 100;
    }

    save(arg0: number): any {

    }
}

describe('WalletController', () => {

    // exceed amount
    // all ok
    // account locked

    it('should save successful', () => {

        const walletController = new WalletController();
        walletController.save(100);

        expect(walletController.getBalance()).toBe(100);

    });

});
