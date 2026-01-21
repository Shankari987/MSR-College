//Internal Import
import ToastMessage from "../helpers/ToastMessage";

import RestClient from "./RestClient";

class ActiondataRequest {

  static async GetAdmissionBanner(postbody) {
    const { data } = await RestClient.getRequest(`/Website/admission_banner`,
    );
  }
  static async GetmajorEvents() {
    const { data } = await RestClient.getRequest(`/Website/GetMajorEvents`,
    );

    if(data){
      return data
    }
  }

  static async GetsecondaryEvents() {
    const { data } = await RestClient.getRequest(`/Website/GetsecondaryEvents`,
    );

    if(data){
      return data
    }
  }
  static async getallnews() {
    const { data } = await RestClient.getRequest(`/Website/getallnews`,
    );

    if (data) {

      ToastMessage.successMessage('Forms Fetched Successfully');
      return data;
    } else {
      ToastMessage.errorMessage('Oops!  Error in Creating Events');
    }
  }

}

export default ActiondataRequest;
