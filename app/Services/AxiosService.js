// @ts-ignore
export const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
    tiemout: 50000
})

// @ts-ignore
export const apiTODO = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/ethan/todos',
    tiemout: 50000
})