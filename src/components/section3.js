import React from 'react'

const section3 = () => {
    return (
        <section class="section-3 container-fluid p-0 text-center">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <h2>You can download our app for all platforms</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sequi et nisi quam nemo sunt 
              deleniti, vel odio facere alias, explicabo quisquam id voluptatem veritatis soluta excepturi magnam
               deserunt. Veritatis?</p>
          </div>
        </div>
        <div class="platform row">
          <div class="col-md-6 col-sm-12 text-right">
            <div class="desktop shadow-lg">
              <div class="d-flex flex-row justify-content-center">
                <i class="fas fa-desktop fa-3x mt-2"></i>
                <div class="text text-left">
                  <h4 class="pt-1 ml-2">Desktop Version</h4>
                  <p class="p-0 ml-2">On Web</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-sm-12 text-left">
            <div class="desktop shadow-lg">
              <div class="d-flex flex-row justify-content-center">
                <i class="fas fa-mobile-alt fa-3x mt-2"></i>
                <div class="text text-left">
                  <h4 class="pt-1 ml-2">Mobile App</h4>
                  <p class="p-0 ml-2">On Play Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default section3
