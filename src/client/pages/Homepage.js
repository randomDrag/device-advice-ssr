import React from 'react';
import '../css/home.css';


function Homepage() {

    return (
        <>
            <section className="w-100 min-vh-100 m-0 p-0" style={{ backgroundColor: "#686EE2" }}>

                <div className="row w-100 h-100 m-0 p-0">

                    <div className="col-sm-8 w-100 m-0 d-flex align-items-center" style={{ border: "2px solid red" }} >

                       
                            <div className="main-heading">

                                <h1 className="main-heading-1" >find best device</h1>
                                <h1 className="main-heading-2">With what you want</h1>
                                <h1 className="main-heading-3">in your  <span style={{ color: "#FFA87B" }}>buget</span></h1>

                            </div>
                     

                    </div>

                    {/* row two */}
                    <div className="col-sm-4 w-100 m-0" >

                    </div>

                </div>

            </section>
        </>
    );

}

export default {
    component: Homepage
}
