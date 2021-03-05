interface LoginFormDataType {
    email:string;
    password:string;
}

interface LoginApiResponseDataType {
    code:number;
    message:string;
    data:any;
}

export type {
    LoginFormDataType,
    LoginApiResponseDataType
}