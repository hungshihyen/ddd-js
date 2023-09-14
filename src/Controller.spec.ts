import { WalletController } from './WalletController';

describe('Controller', () => {

    it('should save money ok', () => {

        new WalletController().save(1000);

        expect(WalletController.getBalance()).toBe(1000);

    });

});
