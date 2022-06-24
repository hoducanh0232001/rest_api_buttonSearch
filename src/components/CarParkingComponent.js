import React from 'react';
import CarParkingService from '../services/CarParkingService';

class CarParkingComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            parkigniter:[]
        }
    }

    componentDidMount(){
        CarParkingService.getsCarParking().then((response) =>{
            this.setState({parkigniter: response.data})
        });
    }

    render (){
        return (
            <div>
               
                
               
            </div>
        )
    }
}
export default CarParkingComponent