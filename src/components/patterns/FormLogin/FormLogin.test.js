import React from 'react';
import user from '@testing-library/user-event';
import FormLogin from './index';
import {
  render,
  act,
  screen,
  waitFor,
} from '../../../infra/test/testUtils';

const onSubmit = jest.fn();
onSubmit.mockImplementation((event) => {
  event.preventDefault();
});

describe('<FormLogin />', () => {
  describe('when from fields are valid', () => {
    test('complete the submission', async () => {
      await act(async () => render(
        <FormLogin
          onSubmit={onSubmit}
        />,
      ));

      expect(screen.getByRole('button')).toBeDisabled();

      const inputUsuario = screen.getByPlaceholderText('Usuário');
      user.type(inputUsuario, 'someusername');
      await waitFor(() => expect(inputUsuario).toHaveValue('someusername'));

      const inputSenha = screen.getByPlaceholderText('Senha');
      user.type(inputSenha, 'somepassword');
      await waitFor(() => expect(inputSenha).toHaveValue('somepassword'));

      expect(screen.getByRole('button')).not.toBeDisabled();

      user.click(screen.getByRole('button'));

      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('when form fields are invalid', () => {
    describe('displays the respective errors', () => {
      test('invalid Usuário field', async () => {
        render(<FormLogin onSubmit={onSubmit} />);

        const inputUsuario = screen.getByPlaceholderText('Usuário');
        inputUsuario.focus();
        inputUsuario.blur();

        await waitFor(() => screen.getByRole('alert'));

        expect(screen.getByRole('alert')).toHaveTextContent('Preencha ao menos 3 caracteres');
      });

      test('invalid Senha field', async () => {
        render(<FormLogin onSubmit={onSubmit} />);

        const inputSenha = screen.getByPlaceholderText('Senha');
        inputSenha.focus();
        inputSenha.blur();

        await waitFor(() => screen.getByRole('alert'));

        expect(screen.getByRole('alert')).toHaveTextContent('Sua senha precisa ter ao menos 8 caracteres');
      });
    });
  });
});
