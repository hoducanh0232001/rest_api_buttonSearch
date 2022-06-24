import axios from 'axios'

const CARPARKING_REST_API_URL = 'localhost:8686/api/v1/parkigniter';

class CarParkingService{
    getsCarParking(){
    return axios.get(CARPARKING_REST_API_URL);
    
    }
}
export default new CarParkingService();