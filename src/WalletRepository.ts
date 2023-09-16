import { UserWallet } from './UserWallet';

export class WalletRepository {
    private mapper: any = {};

    create(userId: number) {
        this.mapper[userId] = new UserWallet(userId, 0);
    }

    find(userId: number): UserWallet {
        return this.mapper[userId];
    }

    save(user: any) {
        this.mapper[user.userId] = user;
    }
}
