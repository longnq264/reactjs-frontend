    import PropTypes from 'prop-types';
    import { getID } from '../../api/products';
    import { useEffect, useState } from 'react';
    const ProductDetail = ({ data }) => {
        const [product, setProduct] = useState([]);
        const [loading, setLoading] = useState(true);
        console.log('props', data);
        const id = data._id;
        console.log('id',id);
        console.log('products', product.data);
        const getProduct = async (id) => {
            try {
                const response = await getID(id);
                setProduct(response.data);
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        };
        useEffect(() => {
            if(id) {
                getProduct(id);
            }
        }, [id]);
        return (
            <div className="product-box">
                {loading ? (
                    <div className="Loading">Loading ...</div>
                ) : (
                    <div className='wrap-detail'>
                        {/* {productDetail.map((res) => (
                            <div key={res.id}>
                                <img src={res.img} alt="" />
                            </div>
                        ))} */}
                    </div>
                )}
            </div>
        );
    };
    ProductDetail.propTypes = {
        data: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
        }).isRequired,
    };
    export default ProductDetail;
