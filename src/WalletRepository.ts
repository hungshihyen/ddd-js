export class WalletRepository {
    mapper: WalletMapper = {};

    save(userId: number, amount: number) {
        this.mapper[userId] += amount;
    }

    find(userId: number) {
        return this.mapper[userId];
    }
}

type WalletMapper = { [key: number]: number };
