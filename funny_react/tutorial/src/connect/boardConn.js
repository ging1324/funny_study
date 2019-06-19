import request from './request';

export const boardConn = (query) => {
    return request({
      url : '/boardList'
    });
  }