export default class Test {

    static INCREMENT:number = 1;
    static DECREMENT:number = 2;

    static increment() {
        return async (dispatch:any) => {
            dispatch({
                type:Test.INCREMENT
            })
        }
    }
}