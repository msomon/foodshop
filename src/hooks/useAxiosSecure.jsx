import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://foodshop-server.onrender.com'
    // baseURL: 'https://foodshop-server.onrender.com'
})

const useAxiosSecure = () => {
    axios.interceptors.request.use(function (config) {

       
       
        return config;
      }, function (error) {
       
        return Promise.reject(error);
      });

      return axiosSecure
   
};

export default useAxiosSecure;