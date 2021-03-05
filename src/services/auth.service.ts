import ApiService from "./api.service";

import type { RegisterFormDataType } from "../types/register/register.types";

import type { LoginFormDataType } from "../types/login/login.types";

class AuthService extends ApiService {
  constructor() {
    super();
    // this.unAuthorizedRequestInterceptors()
    // this.unAuthorizedResponseInterceptors()
  }

  register(data: RegisterFormDataType): Promise<any> {
    return this.post("/register", data);
  }

  login(data: LoginFormDataType): Promise<any> {
    return this.post("/login", data);
  }
}

export default new AuthService();
