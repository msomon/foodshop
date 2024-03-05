import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
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