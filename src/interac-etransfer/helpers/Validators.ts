import { PhoneNumberUtil } from 'google-libphonenumber';

const emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const isValidEmail = (data: string): boolean => emailRegExp.test(data);

export const isValidPhone = (data: string): boolean => {
  const phoneUtil = PhoneNumberUtil.getInstance();
  try {
    const number = phoneUtil.parse(data);
    return phoneUtil.isValidNumber(number);
  } catch (e) {
    return false;
  }
};
