import request from './index';

export const getMovies = () => {
    return request({
        url: 'movie/popular?language=en-US',
        method: 'GET'
    })
}

export const getGendres = () => {
    return request({
        url: 'genre/movie/list?language=en-US',
        method: 'GET'
    })
}
