import { useEffect, useState } from "react";


const CategoryId = () => {
    const [category, setCategory] = useState([])
    const getId = async (id) => {
        await getId(id).then(res => {
            setCategory(res.data)
          })
          .catch((err) => {
            console.log(err);
          })
    }
    useEffect(() => {
        getId()
    },[])
  return (
    <div className='categories-layout'>
        {category.map((res,index) => (
                <div className='box-categories' key={index}>
                  <img src={res.img} alt="" />
                  <p>{res.name}</p>
                </div>
        ))}
    </div>
  )
}

export default CategoryId
