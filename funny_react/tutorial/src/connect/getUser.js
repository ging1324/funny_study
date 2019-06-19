import request from './request';

export const getUserName = (query) => {
    return request({
      url : '/test'
    });
}

export const joinUser = ( data) => {
    return request({
      url : '/addUser',
      method:'POST',
      data:data,
    });
}

export const loginUser = ( user_id, user_passwd) => {
    return request({
      url : '/login?user_id='+user_id+'&user_passwd='+user_passwd,
    });
}