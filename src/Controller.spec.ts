class Controller {
    getBalance(): any {
        return 100;
    }

    save(arg0: number) {

    }
}

describe('Controller', () => {

    it('save 100', () => {
        const controller = new Controller();
        controller.save(100);

        expect(controller.getBalance()).toBe(100);

    });

});
