import { User } from './User';

export interface WalletRepository {
    save(user: User): void;

    find(userId: number): User;

    createUser(userId: number): void;
}

export class WalletRepositoryImpl implements WalletRepository {
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
