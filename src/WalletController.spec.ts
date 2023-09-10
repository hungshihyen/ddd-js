import { WalletController } from './WalletController';
import { CreateUserService } from './CreateUserService';
import { SaveService } from './SaveService';
import { GetBalanceService } from './GetBalanceService';
import { UserRepository } from './UserRepository';

describe('WalletController', () => {
    let walletController: WalletController;
    // get balance
    // save 100
    // save 100 twice
    // different users
    // invalid amount
    // bad format amount
    // user not found
    // user locked
    beforeEach(() => {
        const userRepository = new UserRepository();
        walletController = new WalletController(
            new CreateUserService(userRepository),
            new SaveService(userRepository),
            new GetBalanceService(userRepository)
        );
    });

    it('get balance', () => {
        walletController.create(1);
        expect(walletController.getBalance(1)).toBe(0);
    });

    it('save 100', () => {
        walletController.create(1);
        walletController.save(1, 100);
        expect(walletController.getBalance(1)).toBe(100);
    });

    it('save 100 twice', () => {

        walletController.create(1);

        walletController.save(1, 100);
        walletController.save(1, 100);
        expect(walletController.getBalance(1)).toBe(200);
    });

    it('different users', () => {

        walletController.create(1);
        walletController.create(2);

        walletController.save(1, 100);
        walletController.save(2, 200);

        expect(walletController.getBalance(1)).toBe(100);
        expect(walletController.getBalance(2)).toBe(200);
    });

});
