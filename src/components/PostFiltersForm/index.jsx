import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from 'axios';


PostFiltersForm.propTypes ={
onSubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
    onSubmit: null,
}

function PostFiltersForm(props) {
    const { onSubmit } = props;
    const [searchTerm ,setSearchTerm] = useState('');
    const [posts,setPosts]=useState([])
    const typingTimeoutRef = useRef(null);

    useEffect(() => {
        const loadPosts = async () => {

          const response = await axios.get(
            "http://localhost:8081/api/v1/parking"
          );
          setPosts(response.data);

        };
    
        loadPosts();
      }, []);

    return(
        <div >
            <h2>Check Your Car</h2>
            <input type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} />
            {posts
          .filter((value) => {
            if (searchTerm === "") {
              return "";
            } else if (
              value.parkingCode.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          }).map((carparking) =>
          <table className="table table-striped ">
          <thead> 
              
              <tr>
                  <td>STT</td>
                  <td>Mã đỗ xe</td>
                  <td>Loại xe</td>
                  <td>Giá</td>
                  <td>Vị trí</td>
                  <td>Thời gian vào</td>
                  <td>Thời gian ra</td>
                  <td>Tổng thời gian</td>
                  <td>Tổng tiền</td>
                  <td>Trạng thái</td>
              </tr>
          </thead>
          <tbody>
              {
                  <tr key = {carparking.id}>
                      <td>{carparking.id}</td>
                      <td>{carparking.parkingCode}</td>
                      <td>{carparking.vechile_cat_id}</td>
                      <td>{carparking.rate_id}</td>
                      <td>{carparking.slot_id}</td>
                      <td>{carparking.in_time}</td>
                      <td>{carparking.out_time}</td>
                      <td>{carparking.total_time}</td>
                      <td>{carparking.earned_amount}</td>
                      <td>{carparking.paid_status}</td>

                  </tr>
               
          }
          </tbody>
      </table>)}
                             
        </div>
    );
}
export default PostFiltersForm;