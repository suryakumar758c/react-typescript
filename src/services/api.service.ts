import axios from "axios";

class ApiService {
  private readonly url: string = "http://localhost:3000/api";

  protected unAuthorizedRequestInterceptors(): void {
    axios.interceptors.request.use(
      (config: any): any => {
        // console.log("config", config);
        return config;
      },
      (error: any): Promise<any> => {
        return Promise.reject(error);
      }
    );
  }

  protected unAuthorizedResponseInterceptors(): void {
    axios.interceptors.response.use(
      (response: any): any => {
        return response;
      },
      (error): Promise<Error> => {
        return Promise.reject(error);
      }
    );
  }

  protected authorizedRequestInterceptors(): void {
    axios.interceptors.request.use(
      (config: any): any => {
        // console.log("config", config);
        return config;
      },
      (error: any): Promise<Error> => {
        return Promise.reject(error);
      }
    );
  }

  protected authorizedResponseInterceptors(): void {
    axios.interceptors.response.use(
      (response: any): any => {
        return response;
      },
      (error): Promise<Error> => {
        return Promise.reject(error);
      }
    );
  }

  protected get(url: string, params: any = {}): Promise<any> {
    return axios.get(this.url + url, params);
  }

  protected post(url: string, body: any = {}): Promise<any> {
    return axios.post(this.url + url, body);
  }
}

export default ApiService;
