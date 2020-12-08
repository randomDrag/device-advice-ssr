import React from 'react';
import '../css/home.css';
import iphoneimg from '../images/iphone2.png';
import headphoneimg from '../images/headphone.png';
import cameraimg from '../images/dslr.png';
import NavbarMain from '../components/NavbarMain';



function Homepage() {

    return (
        <>
            <section className="w-100 min-vh-100 m-0 p-0" style={{ backgroundColor: "#686EE2" }}>

          

                <div className="row w-100 h-100 m-0 p-0">

                    <div className="col-sm-8 w-100 m-0 d-flex align-items-center" style={{ border: "2px solid red" }} >


                        <div className="main-heading">

                            <h1 className="main-heading-1" >find best device</h1>
                            <h1 className="main-heading-2">With what you want</h1>
                            <h1 className="main-heading-3">in your  <span style={{ color: "#FFA87B" }}>budget</span></h1>

                        </div>


                    </div>

                    {/* row two */}
                    <div className="col-sm-4 w-100 m-0 d-flex align-items-center justify-content-center "  >
                        {/* <div  className="home-image-iphone">
                        <img src={iphoneimg} alt="" width="1080px" height="1920px" />
                        </div> */}

                        {/* <div className="home-image-camera">
                          <img src={cameraimg} alt="" width="100%" height="100%"  />
                          </div> */}

                        <div className="home-image-headphone"style={{ height: "90vh" }} >
                            <img src={headphoneimg} alt="" width="100%" height="100%" />
                        </div>



                    </div>

                </div>

            </section>
        </>
    );

}

export default {
    component: Homepage
}
