import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:7150/api/";

const queries = {
    get:(url: string) => axios.get(url).then((response:AxiosResponse) => response.data),
    post:(url: string, body: {object}) => axios.post(url, body).then((response:AxiosResponse) => response.data),
    put:(url: string, body: object) => axios.put(url, body).then((response:AxiosResponse) => response.data),
    delete:(url: string) => axios.delete(url).then((response:AxiosResponse) => response.data),
}

const Catalog ={
    list:() => queries.get("products"),
    details:(id: number) => queries.get(`products/${id}`),
}

