import React from 'react'
import government_project from "../assets/Picture7.jpg";


const section1 = () => {
    return (
        <section class="section-1 p-5">
        <div class="container text-center">
          <div class="row">
            <div class="col-md-6">
              <div class="pray">
                <img src={government_project} alt="Succussful_projects" width="550"/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="panel text-left">
                <h1>Government Hospital Project</h1>
                <h4 class="pt-1">Present Successful Project...</h4>
                <p class="pt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quibusdam omnis voluptates
                   necessitatibus beatae voluptatibus alias mollitia, minima culpa magnam quos, consequuntur 
                   dolores recusandae eaque nam cum unde adipisci obcaecati? Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. A dolor delectus, adipisci vel deserunt ipsa, id eligendi ut ab perspiciatis 
                    doloribus fugit aperiam molestias est eum ad, ratione quis! Voluptates. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default section1
