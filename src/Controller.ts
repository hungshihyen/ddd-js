export class Controller {
    private amount: number = 0;

    getBalance(): any {
        return this.amount;
    }

    save(amount: number) {
        this.amount = amount;
    }
}
