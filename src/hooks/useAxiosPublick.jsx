import axios from "axios";

const axiosPublick = axios.create({
    baseURL: 'https://foodshop-server.onrender.com'
   
})

const useAxiosPublick = () => {
    return axiosPublick;
};

export default useAxiosPublick;