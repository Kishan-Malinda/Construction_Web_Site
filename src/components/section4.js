import React from 'react'
import Person1 from '../assets/Person1.jpg';
import Person2 from '../assets/Person2.jpg';
import Person3 from '../assets/Person3.jpg';
import Person4 from '../assets/Person4.jpg';

const section4 = () => {
    return (
        <section className="section-4">
        <div className="container text-center">
          <h1 className="text-dark m-2">What Our Customer's Say About Us...</h1>
          <p className="text-secondary">Customer Feedback</p>
        </div>

        <div className="team row">
          <div className="col-md-4 col-12 text-center">
            <div className="card mr-2 d-inline-block shadow-lg">
              <div className="card-img-top">
                <img src={Person1} alt="Customer1" className="img-fluid border-radius p-2"/>
              </div>
              <div className="card-body">
                <h3 className="card-title">Mr.A.B.Perera</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus labore 
                  consequuntur distinctio veniam, nulla asperiores, eos error maiores molestiae iusto cumque.
                   Eum adipisci, eligendi aut temporibus libero illo reprehenderit!
                </p>
                <a href="" className="text-info text-decoration-none">Visit Profile</a>
                <p className="text-black-50">General Manager at <br/>MAGA Construction</p>
              </div>

            </div>
          </div>
          <div className="col-md-4 col-12">
            
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active text-center">
                    
                    <div className="card mr-2 d-inline-block shadow-lg">
                      <div className="card-img-top">
                        <img src={Person2} alt="Customer2" className="img-fluid border-radius p-2"/>
                      </div>
                      <div className="card-body">
                        <h3 className="card-title">Mr.A.B.de Silva</h3>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus labore 
                          consequuntur distinctio veniam, nulla asperiores, eos error maiores molestiae iusto cumque.
                           Eum adipisci, eligendi aut temporibus libero illo reprehenderit!
                        </p>
                        <a href="" className="text-info text-decoration-none">Visit Profile</a>
                        <p className="text-black-50">HR Manager at <br/>City Construction</p>
                      </div>
                    </div>
                </div>
                <div className="carousel-item text-center">
                  
                  <div className="card mr-2 d-inline-block shadow-lg">
                    <div className="card-img-top">
                      <img src={Person3} alt="Customer3" className="img-fluid border-radius p-2"/>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">Mr.A.B.Cooray</h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus labore 
                        consequuntur distinctio veniam, nulla asperiores, eos error maiores molestiae iusto cumque.
                         Eum adipisci, eligendi aut temporibus libero illo reprehenderit!
                      </p>
                      <a href="" className="text-info text-decoration-none">Visit Profile</a>
                      <p className="text-black-50">Finance Manager at <br/>ICC Construction</p>
                    </div>
                  </div>

                </div>
                
              </div>
            </div>

          </div>
          <div className="col-md-4 col-12 text-center">
            
            <div className="card mr-2 d-inline-block shadow-lg">
              <div className="card-img-top">
                <img src={Person4} alt="Customer4" className="img-fluid border-radius p-2"/>
              </div>
              <div className="card-body">
                <h3 className="card-title">Mr.A.B.C.Prasad</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus labore 
                  consequuntur distinctio veniam, nulla asperiores, eos error maiores molestiae iusto cumque.
                   Eum adipisci, eligendi aut temporibus libero illo reprehenderit!
                </p>
                <a href="" className="text-info text-decoration-none">Visit Profile</a>
                <p className="text-black-50">Technical Director at <br/>Cetlon Construction</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
}

export default section4
