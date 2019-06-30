import request from './request';

export const boardConn = (num) => {
    return request({
      url : '/boardList?num='+num
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
        data: data,
    })
}

export const boardUpdateData = (data) => {
    return request({
        url: '/boardUpdate',
        method: 'POST',
        data: data,
    })
}

export const boardDelete = (num) => {
    return request ({
        url: '/boardDelete?id='+num,
        method: 'POST',
    })
}

export const boardTotNum = () => {
    return request ({
        url: '/boardTotNum'
    })
}