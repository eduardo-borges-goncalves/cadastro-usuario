import axios from "axios"

const axiosApiInstance = axios.create();

axiosApiInstance.defaults.baseURL = "http://localhost:3333"
axiosApiInstance.interceptors.request.use(

  async (config: any) => {

    config.url = `${axiosApiInstance.defaults.baseURL}${config.url}`

    return config;
  },
  error => {
    Promise.reject(error)
  },
)

export default axiosApiInstance;