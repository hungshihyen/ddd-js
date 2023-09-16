import { Controller } from './Controller';

describe('Controller', () => {

    it('save 100', () => {
        const controller = new Controller();
        controller.save(100);

        expect(controller.getBalance()).toBe(100);

    });

    it('save 200', () => {
        const controller = new Controller();

        controller.save(200);

        expect(controller.getBalance()).toBe(200);
    });

    it('save twice', () => {
        const controller = new Controller();

        controller.save(100);
        controller.save(200);

        expect(controller.getBalance()).toBe(300);
    });

});
