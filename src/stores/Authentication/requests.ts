import userAPI from '../../config/request/userAPI';
import LoginParams from './interfaces/LoginParams';
import RefreshTokenParams from './interfaces/RefreshTokenParams';
import RegisterParams from './interfaces/RegisterParams';

export async function verify() {
  try {
    return await userAPI.get('/me');
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function refreshUserToken({refreshToken}: RefreshTokenParams) {
  try {
    return await userAPI.put('/refresh-token', {refreshToken});
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function login(params: LoginParams) {
  const formData = new FormData();
  formData.append('email', params.email.trim());
  formData.append('password', params.password.trim());

  try {
    return await userAPI.post('/login', formData);
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function register(params: RegisterParams) {
  const formData = new FormData();
  formData.append('email', params.email.trim());
  formData.append('username', params.username?.trim());

  formData.append('firstName', params.firstName.trim());
  formData.append('middleName', params.middleName?.trim());
  formData.append('lastName', params.lastName.trim());

  formData.append('address', params.address.trim());
  formData.append('phoneNumber', params.phoneNumber?.trim());

  formData.append('password', params.password.trim());
  formData.append('passwordConfirmation', params.passwordConfirmation.trim());

  try {
    return await userAPI.post('/register', formData);
  } catch (err) {
    console.log(err);
    return err;
  }
}
