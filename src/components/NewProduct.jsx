import PropTypes from 'prop-types';
import Slider from 'react-slick';
const NewProduct = ({ data }) => {
    console.log(data);
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024, // Kích thước màn hình >= 1024px
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 768, // Kích thước màn hình >= 768px
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480, // Kích thước màn hình >= 480px
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    };
    return (
        <div className="layout-newProduct">
            <h2>Nuovi arrivi</h2>
            <div className="new-productDetail">
                <div className='wrap-newProduct'>
                    <Slider {...settings}>
                    {data.map((res) => (
                        <div className='product-item' key={res.id}>
                            <img src={res.img} alt="" />
                            <div>
                                <h3>{res.title}</h3>
                                <p>{res.price}</p>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};
NewProduct.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
        }),
    ).isRequired,
};
export default NewProduct;
