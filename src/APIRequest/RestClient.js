//External Lib Import
import axios from "axios";
import SessionHelper from "../helpers/SessionHelper";
import ToastMessage from "../helpers/ToastMessage";

//Axios default setting
axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_API_URL;
console.log('sf',process.env.NEXT_PUBLIC_APP_API_URL)
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

function axiosHeaders() {
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + SessionHelper.GetToken();
}

const ResponseReturn = (response) => {

  return response;
};

const ErrorReturn = (error) => {
  console.log(error)
 
  if (error.response.status === 500) {
    ToastMessage.errorMessage("Sorry, Something went wrong");
  } else if (error.response.status === 401) {
    ToastMessage.errorMessage(error.response.data.message);

  } else {
    ToastMessage.errorMessage(error.response.data.message);
  }

  return false;
};

class RestClient {
  static async getRequest(url) {
   
    return await axios
      .get(url, axiosHeaders())
      .then((response) => {
        return ResponseReturn(response);
      })
      .catch((error) => {
        return ErrorReturn(error);
      });
  }
  static async postRequest(url, postBody) {
  
    return await axios
      .post(url, postBody, axiosHeaders())
      .then((response) => {
        return ResponseReturn(response);
      })
      .catch((error) => {
     
        return ErrorReturn(error);
      });
  }
  static async updateRequest(url, postBody) {
 
    return await axios
      .patch(url, postBody, axiosHeaders())
      .then((response) => {
        return ResponseReturn(response);
      })
      .catch((error) => {
        return ErrorReturn(error);
      });
  }
  static async putRequest(url, postBody) {
   
    return await axios
      .put(url, postBody, axiosHeaders())
      .then((response) => {
        return ResponseReturn(response);
      })
      .catch((error) => {
        return ErrorReturn(error);
      });
  }
  static async deleteRequest(url) {
 
    return await axios
      .delete(url, axiosHeaders())
      .then((response) => {
        return ResponseReturn(response);
      })
      .catch((error) => {
        return ErrorReturn(error);
      });
  }
  static async fileupload(url, formData) {
  
    return await axios
      .post(url,formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }}, axiosHeaders())
      .then((response) => {
        return ResponseReturn(response);
      })
      .catch((error) => {
        return ErrorReturn(error);
      });
  }
}

export default RestClient;
