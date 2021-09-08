import React from 'react';
import user from '@testing-library/user-event';
import FormLogin from './index';
import {
  render,
  act,
} from '../../../infra/test/testUtils';

describe('<FormLogin />', () => {
  describe('when from fields are valid', () => {
    test('complete the submission', async () => {
      const onSubmit = jest.fn();

      await act(async () => render(
        <FormLogin
          onSubmit={onSubmit}
        />,
      ));

      expect(onSubmit).toHaveBeenCalled(1);
    });
  });
});
