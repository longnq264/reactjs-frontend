import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getID } from "../api/categories";
const CategoryId = ({data}) => {
  const CatId = data._id
  const [state, setState] = useState([])

  const getCategoryId = async (id) => {
      try {
        const response = await getID(id);
        setState(response.data);
      } catch (error) {
          console.log(error);
      }
  }
  useEffect(() => {
    getCategoryId(CatId)
  },[CatId])

  return (
    <div className='categories-layout'>
      <div className='box-categories'>
        {state.map((res, index) => (
          <div key={index}>
            {res.map((res) => (
              <div key={res._id}>
                <img src={res.img} alt="img" />
              </div>
              
            ))}
            <p>{res.name}</p>
          </div>  
        ))}
        <p>{data.name}</p>
      </div>
    </div>
  )
}

CategoryId.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}
export default CategoryId
