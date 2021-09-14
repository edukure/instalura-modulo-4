import { loginService } from './loginService';

describe('loginService', () => {
  describe('login()', () => {

  });

  describe('logout()', () => {
    describe('when user try to logout and succeed', () => {
      test('remove its token', async () => {
        const destroyCookie = jest.fn();
        await loginService.logout(destroyCookie);
        expect(destroyCookie).toHaveBeenCalledWith(null, 'APP_TOKEN'); // que apague o token
      });
    });
  });
});
