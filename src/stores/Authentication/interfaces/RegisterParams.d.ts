export default interface RegisterParams {
  email: string;
  password: string;
  firstName: string;
  username?: string;
  middleName?: string | null;
  lastName: string;
  birthDate: string;
  phoneNumber?: string | null;
  address: string;
  passwordConfirmation: string;
}
