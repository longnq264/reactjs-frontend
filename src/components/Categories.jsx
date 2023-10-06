import  { useEffect, useState} from 'react';
import { getAll } from '../api/categories';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
      await getAll().then(res => {
        setCategories(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    getCategories()
  },[])
  return (
    <div className="categories">
        <h2>Categorie</h2>
            <div className='wrap-categories flex between flex-wrap'>
            {categories.map((res,index) => (
                <div className='box-categories' key={index}>
                  <img src={res.img} alt="" />
                  <p>{res.name}</p>
                </div>
                ))}
            </div>
    </div>
  )
}

export default Categories
