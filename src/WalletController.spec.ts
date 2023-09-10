class WalletController {
    getBalance(): any {
        return 0;
    }
}

describe('WalletController', () => {
    // get balance
    // save 100
    // save 100 twice
    // different users
    // invalid amount
    // bad format amount
    // user not found
    // user locked

    it('get balance', () => {
        expect(new WalletController().getBalance()).toBe(0)
    });


});
