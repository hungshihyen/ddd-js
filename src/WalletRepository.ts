import { User } from './User';

export class WalletRepository {
    mapper: any = {};

    save(user: User) {
        this.mapper[user.userId] = user;
    }

    find(userId: number) {
        return this.mapper[userId];

    }

    createUser(userId: number) {
        this.mapper[userId] = new User(userId, 0);
    }

}
