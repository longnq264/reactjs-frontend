// import React from 'react'
import slide from "../assets/img/slide.jpg";
import slide2 from "../assets/img/slide copy.jpg";
import slide3 from "../assets/img/slide copy 2.jpg";
const HomePage = () => {
    return (
      <main className="layout-web">
        <div className="main">
        <div className="myButton layout-humburger">
                <h1>layout humburger</h1>
                <div className="clicked">
                <span className="material-symbols-outlined">close</span>
                </div>
            </div>
            <div className="main-content">
                <div className="banner-content flex ">
                    <section className="box">
                        <img src={slide} alt="" />
                        <div className="overlay" />
                        <div className="box-content">
                            <h1>Collezione Donna</h1>
                            <a href="#">Scopri i prodotti seamless per lei </a>
                        </div>
                    </section>
                    <section className="box">
                        <img src={slide2} alt="" />
                        <div className="overlay" />
                        <div className="box-content">
                            <h1>Collezione Bambini</h1>
                            <a href="#">Scopri i prodotti sportivi</a>
                        </div>
                    </section>
                    <section className="box">
                        <img src={slide3} alt="" />
                        <div className="overlay" />
                        <div className="box-content">
                            <h1>Collezione Uomo</h1>
                            <a href="#">Scopri i prodotti per lui</a>
                        </div>
                    </section>
                </div>
                <div className="overview-content">
                    <div className="introduce">
                        <h1 className="title">Welcome to Focenza</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec consequat purus id ultrices lobortis.
                        </p>
                        <p>
                            Donec porttitor, leo nec vestibulum facilisis,
                            mauris elit.
                        </p>
                    </div>
                    <div className="text">
                        <h3 className="title">
                            Intimo online: scopri il coloratissimo assortimento
                            di Focenza
                        </h3>
                        <p>
                            Focenza è un negozio di{" "}
                            <strong>intimo on line</strong> che ti propone -
                            rispetto a tutti gli altri
                            <strong>negozi intimo</strong> - articoli realizzati
                            in oltre 30 differenti colori, brillanti e alla
                            moda. I capi colorati che trovi nel nostro{" "}
                            <span>negozio intimo online</span> sono realizzati
                            con filati che garantiscono massima facilità di
                            tintura e buona solidità al colore. L’omogeneità dei
                            colori dei nostri tantissimi diversi prodotti è
                            garantita dalla composizione stessa dei capi, in
                            modo che la resa della colorazione sia costante nel
                            tempo.
                        </p>
                    </div>
                    <a href="#">Leggi di più</a>
                </div>
            </div>
        </div>
      </main>
    );
};

export default HomePage;
