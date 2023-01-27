import axios from "axios"

export const countriesApi = axios.create({ baseURL: "https://restcountries.com/v3.1/" })
