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
            "localhost:8686/api/v1/parkigniter"
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
          }).map((parkigniter) =>
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
                  <tr key = {parkigniter.id}>
                      <td>{parkigniter.id}</td>
                      <td>{parkigniter.parkingCode}</td>
                      <td>{parkigniter.vechile_cat_id}</td>
                      <td>{parkigniter.rate_id}</td>
                      <td>{parkigniter.slot_id}</td>
                      <td>{parkigniter.in_time}</td>
                      <td>{parkigniter.out_time}</td>
                      <td>{parkigniter.total_time}</td>
                      <td>{parkigniter.earned_amount}</td>
                      <td>{parkigniter.paid_status}</td>

                  </tr>
               
          }
          </tbody>
      </table>)}
                             
        </div>
    );
}
export default PostFiltersForm;