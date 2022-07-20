import axios from "axios";

const postSuccess = (data) =>{
    return{
        type:"POST_SUCCESS",
        data
    }
}
const postFailure = () =>{
    return{
        type:'POST_FAILURE'
    }
}

export const postData = (data) =>{
    return async (dispatch) => {
        try{
            let result = await axios.post('https://plugxrapi.brugu.io/dev/v1/addUser',data, {
                headers: {
                    'content-Type': "application/json",
                    'apiKey': "xCNpcsufSi5yYvGVCncEx0HAw1LonW1JoFY",
                    'Authorization': "eyJhbGciOiJIUzI1NiJ9.MHhqNkY0OHViMzR2Zjg3Yg.4B6Cw_VnheVrQfngZVkU2yrHyLI2dPnJq4oEhgj7Xfo",
                },
            }
            );
            console.log(result);
            dispatch(postSuccess(data));
        }
        catch(ex){
            dispatch(postFailure());
        }
    }
}