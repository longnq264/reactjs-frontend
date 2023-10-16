import BestSeller from '../components/BestSeller';
import Categories from '../components/Categories';
import NewProduct from '../components/NewProduct';
// import BgColor from '../assets/img/bg-color.jpg'
const DonnaPage = () => {
    const dataProducts = [
      {
        id:"1",
        title: "SLIP DONNA V. ALTA COSTINA RIB IVORY",
        price: "7,90",
        img: "https://res.cloudinary.com/da7r4robk/image/upload/v1696992834/Products/rnbaualoy3nikuzeazmo.png"
      },
      {
        id:"2",
        title: "SLIP DONNA V. ALTA COSTINA RIB IVORY",
        price: "7,90",
        img: "https://res.cloudinary.com/da7r4robk/image/upload/v1696992756/Products/hnyc6plfibi5xhd3bl1v.jpg"
      },
      {
        id:"3",
        title: "SLIP DONNA V. ALTA COSTINA RIB IVORY",
        price: "7,90",
        img: "https://res.cloudinary.com/da7r4robk/image/upload/v1696992722/Products/mirzxchsvn4jcb4pzmjl.jpg"
      },
      {
        id:"4",
        title: "SLIP DONNA V. ALTA COSTINA RIB IVORY",
        price: "7,90",
        img: "https://res.cloudinary.com/da7r4robk/image/upload/v1696992904/Products/vfb974t3tuyc6ka7dszv.jpg"
      }
    ]
    const dataBestSeller = [
      {
        id:"1",
        title: "SLIP DONNA V. ALTA COSTINA RIB IVORY",
        price: "7,90",
        img: "https://res.cloudinary.com/da7r4robk/image/upload/v1696992834/Products/rnbaualoy3nikuzeazmo.png"
      },
      {
        id:"2",
        title: "SLIP DONNA V. ALTA COSTINA RIB IVORY",
        price: "7,90",
        img: "https://res.cloudinary.com/da7r4robk/image/upload/v1696992756/Products/hnyc6plfibi5xhd3bl1v.jpg"
      },
      {
        id:"3",
        title: "SLIP DONNA V. ALTA COSTINA RIB IVORY",
        price: "7,90",
        img: "https://res.cloudinary.com/da7r4robk/image/upload/v1696992722/Products/mirzxchsvn4jcb4pzmjl.jpg"
      },
      {
        id:"4",
        title: "SLIP DONNA V. ALTA COSTINA RIB IVORY",
        price: "7,90",
        img: "https://res.cloudinary.com/da7r4robk/image/upload/v1696992904/Products/vfb974t3tuyc6ka7dszv.jpg"
      },
      {
        id:"5",
        title: "SLIP DONNA V. ALTA COSTINA RIB IVORY",
        price: "7,90",
        img: "https://res.cloudinary.com/da7r4robk/image/upload/v1696992904/Products/vfb974t3tuyc6ka7dszv.jpg"
      },
      {
        id:"6",
        title: "SLIP DONNA V. ALTA COSTINA RIB IVORY",
        price: "7,90",
        img: "https://res.cloudinary.com/da7r4robk/image/upload/v1696992904/Products/vfb974t3tuyc6ka7dszv.jpg"
      },
      {
        id:"7",
        title: "SLIP DONNA V. ALTA COSTINA RIB IVORY",
        price: "7,90",
        img: "https://res.cloudinary.com/da7r4robk/image/upload/v1696992904/Products/vfb974t3tuyc6ka7dszv.jpg"
      }
    ]
    // var settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };
    return (
        <main className="layout-web">
            <div className="main">
                <div className="slider-donna">
                    <img
                        src="https://res.cloudinary.com/da7r4robk/image/upload/v1696414592/san-valentino-donna-mob_2_un0tmy.jpg"
                        alt=""
                    />
                    <div className="donna-slider absolute">
                        <h1>Rilassati, sono morbidissimi</h1>
                        <p>
                            Piacevoli come una colazione al caldo, delicati come
                            sei tu!
                        </p>
                        <button>LASCIATI COCCOLARE</button>
                    </div>
                </div>
                <div className="main-content">
                    <Categories />
                    <NewProduct data={dataProducts}/>
                    <div className='content-main-donna'>
                      <h1>Acquista per colore</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat purus id ultrices lobortis</p>
                      <div className='bg-color'>
                      </div>
                      <button className='button-layout'>Scopri i Prodotti rossi</button>
                    </div>
                    <BestSeller data={dataBestSeller}/>
                </div>
            </div>
        </main>
    );
};

export default DonnaPage;
