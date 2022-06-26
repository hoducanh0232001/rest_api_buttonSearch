import React, {useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from 'axios';


PostFiltersForm.propTypes ={
onSubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
    onSubmit: null,
}

function PostFiltersForm() {
    const [searchTerm ,setSearchTerm] = useState('');
    const [posts,setPosts]=useState([])

    useEffect(() => {
        const loadPosts = async () => {

          const response = await axios.get(
            'http://localhost:8686/api/v1/parking'
          );
          setPosts(response.data);

        };
  
        loadPosts();
      }, []);

    return(
      <div className="container">
      <div className="outline">
          <h2>Check Your Car</h2>
          <div class="form__group field">
<input type="input" class="form__field" placeholder="Search..." name="name" id='name' required       onChange={(e) => setSearchTerm(e.target.value)} 
/>

</div>
      </div>
          {posts
        .filter((value) => {
          if (searchTerm === "") {
            return "";
          } else if (
            value.parkingCode.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
        }).map((parking) =>
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
                <tr key = {parking.id}>
                    <td>{parking.id}</td>
                    <td>{parking.parkingCode}</td>
                    <td>{parking.vechile_cat_id}</td>
                    <td>{parking.rate_id}</td>
                    <td>{parking.slot_id}</td>
                    <td>
                      <script>
                      var s = new Date(parking.in_time).toLocaleDateString("en-US")
console.log(s);
                      </script>
                      {parking.in_time}</td>
                    <td>{parking.out_time}</td>
                    <td>{parking.total_time}</td>
                    <td>{parking.earned_amount}</td>
                    <td>{parking.paid_status}</td>

                </tr>
             
        }
        </tbody>
    </table>)}

      </div>
    );
}
export default PostFiltersForm;