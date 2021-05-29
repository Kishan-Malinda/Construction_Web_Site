import React from 'react' ;

const section2 = () => {
    return (
        <section className="section-2 container-fluid">
        <div className="cover">
          <div className="content text-center">
            <h1>What you can gain from Us...</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore commodi, recusandae explicabo sed
               dolor hic. Adipisci, dignissimos tempora asperiores accusantium distinctio exercitationem eaque, 
                quibusdam aspernatur quisquam, tenetur eius sed inventore! Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Fugiat nulla rerum quod similique, dolorem deleniti commodi enim eum est incidunt.</p>
          </div>
        </div>
        <div className="container-fluid text-center">
          <div className="numbers d-flex flex-md-row flex-wrap justify-content-center">
            
            <div className="rect">
              <h1>660</h1>
              <p>Total registered Suppliers</p>
            </div>
            <div className="rect">
              <h1>345</h1>
              <p>Total registered Companies</p>
            </div>
            <div className="rect">
              <h1>1200</h1>
              <p>Total registered Employees</p>
            </div>
            <div className="rect">
              <h1>950</h1>
              <p>Total registered Customers</p>
            </div>
          </div>
        </div>

        <div className="purchase text-center">
          <h2>Make your Constructions with us !!!</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo expedita totam quis, porro rerum repellat.</p>

          <div className="cards">
            <div className="d-flex flex-row justify-content-center flex-wrap">

            
              <div className="card">
                <div className="card-body">
                  <div className="title">
                    <h5 className="card-title">Special Offers</h5>
                  </div>
                  <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, facilis?</p>
                </div> 
                <div className="pricing">
                  <h3>Upto 40% <br/> Discounts...</h3>
                  <a href="#" className="btn btn-dark px-5 py-2 mb-3">Make Request</a>
                </div>
              </div>

              
              <div className="card">
                <div className="card-body">
                  <div className="title">
                    <h5 className="card-title">Special Offers</h5>
                  </div>
                  <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, facilis?</p>
                </div> 
                <div className="pricing">
                  <h3>Reliable deadlines <br/> for projects  !!!</h3>
                  <a href="#" className="btn btn-dark px-5 py-2 mb-3">Apply Contract</a>
                </div>
              </div>

              
              

            </div>
          </div>
        </div>
      </section>
    )
}

export default section2
