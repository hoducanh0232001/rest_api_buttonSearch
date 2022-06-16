import axios from 'axios'

const CARPARKING_REST_API_URL = 'http://localhost:8081/api/v1/parking';

class CarParkingService{
    getsCarParking(){
    return axios.get(CARPARKING_REST_API_URL);
    
    }
}
export default new CarParkingService();