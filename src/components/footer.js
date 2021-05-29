import React from 'react'

const footer = () => {
    return (
        <footer>

        <div className="container-fluid p-4 ">
            <div className="row text-left">
              <div className="col-md-5 col-sm-12">
                <h1 className="text-light">About Us</h1>
                <p className="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, fugiat sequi necessitatibus non veritatis iste?</p>
                <p className="pt-4 text-muted">@copyright Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div className="col-md-5 col-sm-12">
                <h4 className="text-light pt-3">GET EMAILS</h4>
                <p className="text-muted">Get Details</p>
                <form className="form_inline">
                  <div className="col pl-2">
                    <div className="input-group pr-5">
                      <input type="text" className="form-control bg-dark text-white" placeholder="Enter Email"/>
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-2 col-sm-12 pt-3">
                <h4 className="text-light">Follow Us</h4>
                <p className="text-muted">Let us be connected with you</p>
                <div className="column">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-whatsapp"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-viber"></i>
                  <i className="fab fa-youtube"></i>
                </div>
              </div>
            </div> 
        </div>
  
      </footer>
  
    )
}

export default footer
