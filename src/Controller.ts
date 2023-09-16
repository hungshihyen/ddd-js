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

    save(account: any) {
        this.mapper[account.userId] = account;
    }

    create(userId: number) {
        this.mapper[userId] = new Account(userId, 0);

    }

    find(userId: number) {
        return this.mapper[userId];

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
        return this.accountRepository.find(userId).amount;

    }

    save(amount: number, userId: number) {

        const account = this.accountRepository.find(userId);

        account.amount += amount;

        this.accountRepository.save(account);
    }
}
