import { User } from "./User";

export type UserMapper = { [key: number]: User };

export class UserRepository {
    mapper: UserMapper = {};


    save(user: User) {
        this.mapper[user.userId] = user;
    }

    find(userId: number) {
        return this.mapper[userId];
    }

    create(userId: number) {
        this.mapper[userId] = new User(userId, 0);
    }
}
