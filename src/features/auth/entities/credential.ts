import validator from "validator";

export class Credential {
  email!: string;
  password!: string;

  constructor(email: string, password: string) {
    if (Credential.isEmptyOrNull(email) || Credential.isEmptyOrNull(password)) {
      throw new Error("You must fill email and password");
    }

    if (Credential.isInvalidAddress(email)) {
      throw new Error("Invalid email address");
    }

    this.email = email;
    this.password = password;
  }

  static isInvalidAddress(email: string) {
    if (!validator.isEmail(email)) {
      return false;
    }
    return true;
  }

  static isEmptyOrNull(word: string) {
    return !word || word.trim().length === 0;
  }
}
