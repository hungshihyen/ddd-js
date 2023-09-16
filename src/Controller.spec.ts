import { Controller } from './Controller';

describe('Controller', () => {
    let controller: Controller;
    beforeEach(() => {
        controller = new Controller({});

    });

    it('save 100', () => {
        controller.createAccount(1);

        controller.save(100, 1);

        expect(controller.getBalance(1)).toBe(100);

    });

    it('save 200', () => {
        controller.createAccount(1);

        controller.save(200, 1);

        expect(controller.getBalance(1)).toBe(200);
    });

    it('save twice', () => {
        controller.createAccount(1);

        controller.save(100, 1);
        controller.save(200, 1);

        expect(controller.getBalance(1)).toBe(300);
    });

    it('different user', () => {

        controller.createAccount(1);
        controller.createAccount(2);

        controller.save(100, 1);
        controller.save(200, 2);

        expect(controller.getBalance(1)).toBe(100);
        expect(controller.getBalance(2)).toBe(200);

    });

});
