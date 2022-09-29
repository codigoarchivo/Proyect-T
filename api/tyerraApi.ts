import axios from 'axios';



const tyerraApi = axios.create({
    baseURL: '/api'
});


export default tyerraApi;


