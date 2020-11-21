import React from 'react';
import '../css/home.css';


function Homepage() {

    return (
        <>
            <section className="w-100 min-vh-100 m-0 p-0" style={{ backgroundColor: "#686EE2" }}>

                <div className="row w-100 h-100 m-0 p-0">

                    <div className="col-sm-9 w-100 m-0 d-flex align-items-center justify-content-center" >

                        <div className="main_heading">

                            <h1>find best device</h1>
                            <h1>With what you want</h1>
                            <h1>in your buget</h1>

                        </div>

                    </div>

                    {/* row two */}
                    <div className="col-sm-3 w-100 m-0" >

                    </div>

                </div>

            </section>
        </>
    );

}

export default {
    component: Homepage
}
