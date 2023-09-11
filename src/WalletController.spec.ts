import { WalletController } from './WalletController';
import { CreateUserService } from './CreateUserService';
import { SaveService } from './SaveService';
import { GetBalanceService } from './GetBalanceService';
import { UserRepository } from './UserRepository';
import { BAD_FORMAT_DATA, INVALID_AMOUNT, USER_LOCKED, USER_NOT_FOUND } from './ErrorCode';
import { LockUserService } from './LockUserService';

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
        walletController = new WalletController(new CreateUserService(userRepository), new SaveService(userRepository), new GetBalanceService(userRepository), new LockUserService(userRepository));
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

    it('user not found', () => {
        expect(() => walletController.save(1, 100)).toThrowError(
            USER_NOT_FOUND
        );
    });

    it('user locked', () => {

        walletController.create(1);

        walletController.lockUser(1);

        expect(() => walletController.save(1, 100)).toThrowError(
            USER_LOCKED
        );
    });

    it('invalid amount', () => {
        walletController.create(1);

        expect(() => walletController.save(1, -100)).toThrowError(
            INVALID_AMOUNT
        );
    });

    it('bad format amount', () => {
        walletController.create(1);

        expect(() => walletController.save(1, '100')).toThrowError(
            BAD_FORMAT_DATA
        );

    });
});
