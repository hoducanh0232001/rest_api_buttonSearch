import React from 'react';
import CarParkingService from '../services/CarParkingService';

class CarParkingComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            parkings: []
        }
    }

componentDidMount(){
    CarParkingService.getCarParking().then((response)=>{
        this.setState({parkings: response.data});
    });
}

    render() {

        return (
            <div>
                
            </div>
        //     <div className="carlist">   
        //         <h1> Car List </h1>
        //         <table className="table table-striped ">
        //   <thead> 
              
        //       <tr>
        //           <td>STT</td>
        //           <td>Mã đỗ xe</td>
        //           <td>Loại xe</td>
        //           <td>Giá</td>
        //           <td>Vị trí</td>
        //           <td>Thời gian vào</td>
        //           <td>Thời gian ra</td>
        //           <td>Tổng thời gian</td>
        //           <td>Tổng tiền</td>
        //           <td>Trạng thái</td>
        //       </tr>
        //   </thead>
        //   <tbody>
        //     {
        //         this.state.parkings.map(
        //             parking =>

        //             <tr key = {parking.id}>
        //             <td>{parking.id}</td>
        //             <td>{parking.parkingCode}</td>
        //             <td>{parking.vechile_cat_id}</td>
        //             <td>{parking.rate_id}</td>
        //             <td>{parking.slot_id}</td>
        //             <td>{parking.in_time}</td>
        //             <td>{parking.out_time}</td>
        //             <td>{parking.total_time}</td>
        //             <td>{parking.earned_amount}</td>
        //             <td>{parking.paid_status}</td>

        //         </tr>
                
        //         )

        //     }
         
        //   </tbody>

        //     </table>
        //     </div>
        )
    }
}
export default CarParkingComponent;
