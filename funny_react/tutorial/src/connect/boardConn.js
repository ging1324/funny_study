import request from './request';

export const boardConn = (query) => {
    return request({
      url : '/boardList'
    });
}

export const getBoardDetail = (num) => {
    return request({
        url : '/boardDetail?id='+num
    })
}

export const boardInsert = (data) => {
    return request({
        url: '/boardAdd',
        method:'POST',
        data:data,
    })
}