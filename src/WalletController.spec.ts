class WalletController {
    amount: number = 0;
    mapper: { [key: number]: number } = {};

    createUser(userId: number) {
        this.mapper[userId] = 0;
    }

    getBalance(userId: number): any {
        // return this.amount;
        return this.mapper[userId];
    }

    save(userId: number, amount: number): any {
        // this.amount += amount;
        this.mapper[userId] += amount;

    }
}

describe('WalletController', () => {

    it('should save successful', () => {

        const walletController = new WalletController();
        walletController.createUser(1);
        walletController.save(1, 100);

        expect(walletController.getBalance(1)).toBe(100);

    });

    it('save 200', () => {

        const walletController = new WalletController();
        walletController.createUser(1);
        walletController.save(1, 200);

        expect(walletController.getBalance(1)).toBe(200);

    });

    it('save twice', () => {

        const walletController = new WalletController();
        walletController.createUser(1);

        walletController.save(1, 100);
        walletController.save(1, 100);

        expect(walletController.getBalance(1)).toBe(200);

    });

    it('different users', () => {

        const walletController = new WalletController();

        walletController.createUser(1);
        walletController.createUser(2);

        walletController.save(1, 100);
        walletController.save(2, 100);

        expect(walletController.getBalance(1)).toBe(100);
        expect(walletController.getBalance(2)).toBe(100);

    });

});
