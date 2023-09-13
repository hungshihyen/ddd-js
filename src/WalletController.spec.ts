class WalletController {
    save(arg0: number): any {

    }
}

describe('WalletController', () => {

    // exceed amount
    // all ok
    // account locked

    it('should save success', () => {

        new WalletController().save(100);

    });
});
