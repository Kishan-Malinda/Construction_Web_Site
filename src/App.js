
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Particles from  "react-particles-js";
import Footer from "./components/footer";

function App() {
  return (

    <>
    <Particles
                className="particles-canvas"
                params={{
                    particles:{
                        number:{
                            value:30,
                            density:{
                                enable:true,
                                area: 900
                            }
                        },
                        shape:{
                            type: "circle",
                            stroke:{
                                width: 6,
                                color: "#f9ab00"
                            }
                        }
                    }
                }}
            
    />
    <Navbar/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Footer/>
    </>
   
  );
}

export default App;
