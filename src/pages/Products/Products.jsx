import { useEffect, useState } from "react";
import { getAll } from "../../api/products";
import ProductDetail from "./ProductDetail";
const Products = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const getCategories = async () => {
        try {
            const response = await getAll();
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    getCategories();
}, []);
  return (
    <div className="layout-product-detail">
        <h2>Nuovi arrivi</h2>
        <div className="flex">
          {products.map((product) => (
            <ProductDetail key={product._id} data={product}/>
          ))
          }
        </div>
    </div>
  )
}

export default Products
