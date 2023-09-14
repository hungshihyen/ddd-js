import { WalletController } from './WalletController';
import { INVALID_AMOUNT, USER_NOT_FOUND } from './ErrorCode';
import { WalletRepository } from './WalletRepository';

describe('Controller', () => {
    let walletController: WalletController;
    let walletRepository: WalletRepository;

    beforeEach(() => {
        walletRepository = new WalletRepository();
        walletController = new WalletController(walletRepository);
    });

    it('should save money ok', () => {
        walletRepository.mapper[1] = 0;

        walletController.save(1, 1000);

        expect(walletController.getBalance(1)).toBe(1000);
    });

    it('should save 2000', () => {

        walletRepository.mapper[1] = 0;

        walletController.save(1, 2000);

        expect(walletController.getBalance(1)).toBe(2000);
    });

    it('should save 1000 twice', () => {

        walletRepository.mapper[1] = 0;

        walletController.save(1, 1000);
        walletController.save(1, 1000);

        expect(walletController.getBalance(1)).toBe(2000);
    });

    it('different users', () => {

        walletRepository.mapper[1] = 0;
        walletRepository.mapper[2] = 0;

        walletController.save(1, 1000);
        walletController.save(2, 1000);

        expect(walletController.getBalance(1)).toBe(1000);
        expect(walletController.getBalance(2)).toBe(1000);
    });

    it('should fail when saving negative amount', () => {
        walletRepository.mapper[1] = 0;

        expect(() => walletController.save(1, -1000)).toThrowError(INVALID_AMOUNT);
    });

    it('should fail when user not found', () => {
        expect(() => walletController.save(1, 1000)).toThrowError(USER_NOT_FOUND);
    });

});

