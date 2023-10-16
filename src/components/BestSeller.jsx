import PropTypes from 'prop-types';
import Slider from 'react-slick';
const BestSeller = ({ data }) => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024, // Kích thước màn hình >= 1024px
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 768, // Kích thước màn hình >= 768px
              settings: {
                slidesToShow: 1,
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
        <div className="layout-bestseller">
            <h2>Best Seller</h2>
            <div className="new-productSeller">
                <div className="wrap-newProductSeller">
                    <Slider {...settings}>
                        {data.map((res) => (
                            <div className="productseller-item" key={res.id}>
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
BestSeller.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
        }),
    ).isRequired,
};
export default BestSeller;
