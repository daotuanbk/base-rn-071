import { api } from '@app/constants';
import axios from '@app/helpers/axios';
import { ILoginParams, ILoginResponse } from '@app/store';

const login = async (
  params: ILoginParams,
): Promise<ILoginResponse | undefined> => {
  try {
    const { username, password } = params;
    const result = await axios.post(api.LOGIN, {
      username: username,
      password,
      grant_type: 'password',
    });
    return result?.data;
  } catch (err) {}
};

export default { login };
