import React from 'react'

function Carousel() {
  return (
    <div className="container">
       <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://thumbs.dreamstime.com/b/internet-information-technology-businessman-hand-showing-concept-75784736.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHRlY2h8ZW58MHx8MHx8&w=1000&q=80" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://wallpaperaccess.com/full/829012.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  )
}

export default Carousel