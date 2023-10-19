const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} = require("../constants/Constants");
import axios from "axios";

export const Login = (email, password) => async (dispatch) => {
  try {
    console.log(email, password)
    dispatch({ type: LOGIN_REQUEST });
    
    const {data} = await axios.post(
      //"https://jsonplaceholder.typicode.com/posts"
      "http://192.168.1.35:3000/api/v1/auth/login",
      {email, password}
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: LOGIN_FAIL, payload: err.response.data.message });
  }
};
