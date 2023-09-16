class Account {
    userId: number;
    amount: number;

    constructor(userId: number, amount: number) {
        this.amount = amount;
        this.userId = userId;
    }

}

export class AccountRepository {
    private mapper: any;

    constructor(mapper: any) {
        this.mapper = mapper;
    }

    create(userId: number) {
        this.mapper[userId] = new Account(userId, 0);

    }
}

export class Controller {
    private mapper: any = {};
    private accountRepository: AccountRepository;

    constructor(mapper: any) {
        this.mapper = mapper;
        this.accountRepository = new AccountRepository(mapper);
    }

    createAccount(userId: number) {
        this.accountRepository.create(userId);
    }

    getBalance(userId: number): any {
        return this.mapper[userId].amount;
    }

    save(amount: number, userId: number) {

        const account = this.mapper[userId];

        account.amount += amount;

        this.mapper[userId] = account;
    }
}
