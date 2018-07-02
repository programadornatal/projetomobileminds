import axios from 'axios';
import Base64 from './util/Base64';

const urlRequest = "http://192.168.1.7/foxappreact/";

const post = (request, callback, callbackError, params) => {
    let axiosConfig = {
      headers: {
          'Content-type': 'application/x-www-form-urlencoded',
      },
      params: params
    };
    axios.post(urlRequest+request, axiosConfig)
        .then((res) => {
            // console.log("RESPONSE RECEIVED: ", res);
            if(callback){
                callback(res);
            }
        })
        .catch((err) => {
            // console.log("AXIOS ERROR: ", err);
            if(callbackError){
              callbackError(err);
            }
        })
    }

const get = (request, callback, callbackError) => {
        axios.get(urlRequest+request)
        .then((res) => {
            // console.log("RESPONSE RECEIVED: ", res);
            if(callback){
                callback(res);
            }
        })
        .catch((err) => {
            // console.log("AXIOS ERROR: ", err);
            if(callbackError){
              callbackError(err);
            }
        })
    }

const getApi = (request, callback, callbackError, params) => {
        let axiosConfig = {
          params: params
        }
        axios.post(request, axiosConfig)
        .then((res) => {
            // console.log("RESPONSE RECEIVED: ", res);
            if(callback){
                callback(res);
            }
        })
        .catch((err) => {
            // console.log("AXIOS ERROR: ", err);
            if(callbackError){
              callbackError(err);
            }
        })
    }

const getBasic = (request, params, callback, callbackError, usuario, senha) =>{
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': 'Basic '+Base64.btoa(usuario+':'+senha),
      },
      params: params,
    };

    axios.get(urlRequest, axiosConfig)
    .then((res) => {
        // console.log("RESPONSE RECEIVED: ", res);
        if(callback){
            callback(res);
        }
    })
    .catch((err) => {
        // console.log("AXIOS ERROR: ", err);
        if(callbackError){
          callbackError(err);
        }
    })
}

export { post, get, getBasic, urlRequest };
