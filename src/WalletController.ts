export class WalletController {
    private amount = 0;

    save(amount: number) {
        this.amount += amount;
    }

    getBalance(): any {
        return this.amount;
    }
}
