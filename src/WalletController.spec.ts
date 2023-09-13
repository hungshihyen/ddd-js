class WalletController {
    amount: number = 0;

    getBalance(): any {
        return this.amount;
    }

    save(arg0: number): any {
        this.amount += arg0;

    }
}

describe('WalletController', () => {

    it('should save successful', () => {

        const walletController = new WalletController();
        walletController.save(100);

        expect(walletController.getBalance()).toBe(100);

    });

    it('save 200', () => {

        const walletController = new WalletController();
        walletController.save(200);

        expect(walletController.getBalance()).toBe(200);

    });

    it('save twice', () => {

        const walletController = new WalletController();
        walletController.save(100);
        walletController.save(100);

        expect(walletController.getBalance()).toBe(200);

    });

});
