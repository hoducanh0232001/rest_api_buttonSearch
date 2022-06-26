import axios from 'axios';

const CARPARKING_REST_API_URL = 'http://localhost:8686/api/v1/parking';

class CarParkingService{
   getCarParking(){
    return axios.get(CARPARKING_REST_API_URL);
   }
}
export default new CarParkingService();