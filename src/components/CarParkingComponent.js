import React from 'react';
import CarParkingService from '../services/CarParkingService';

class CarParkingComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            carparking:[]
        }
    }

    componentDidMount(){
        CarParkingService.getsCarParking().then((response) =>{
            this.setState({carparking: response.data})
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