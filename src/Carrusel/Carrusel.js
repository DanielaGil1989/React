import Imagen2 from "../vv2.jpg"
import React from "react"
export function Carrusel() {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="vv.jpg" className="d-block w-100" alt="..." height={800} width={200} /> 
                        {/*importando imagen de public*/}
                    </div>
                    <div className="carousel-item">
                        <img src={Imagen2} className="d-block w-100" alt="..." />
                        {/*importando imagen de SRC*/}
                    </div>
                    <div className="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.wUgBtq21Pj0Clki5CNwIxQHaEo?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." />
                        {/*importando usando url externa */}
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}
