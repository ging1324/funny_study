import axios from 'axios';

const BASE_URL = 'http://localhost:3009';

/**
 * Returns a Axios Request Promise
 * method : get, post, put, patch, delete
 */

export default function request({url, method = 'get', data, config}) {
  let api_url = BASE_URL + url;
  return axios({
    method: method,
    url: api_url,
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
    // withCredentials: true,
    ...config
  }).then(
    response => {
      return response;
    }
  ).catch(
    error => {


    console.error('err', error);
    }
  );
}