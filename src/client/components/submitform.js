import React from 'react';

import '../css/extra.css';

import TypeSelector from '../components/Type.selector';

import { connect } from 'react-redux'

import MobileForm from '../components/forms/mobile.forms';

class Submitform extends React.Component {

    constructor(props) {

        super(props);

    }



    //helper for slected from  
    selector() {

        return  <TypeSelector /> ;

    }




    mobile_form() {

        return <MobileForm/>;


    }


    selectedPanal() {



        if (this.props.selected === "MOBILE") {


            return (
                <>

                    <div className="ui items ">

                        {this.selector()}


                        {this.mobile_form()}



                    </div>
                </>


            )

        } else if (this.props.selected === "EARPHONE") {

            return (
                <>

                    {this.selector()}

                    <div className="ui form">

                        <div className="fields">
                            <div className="field">
                                <label>First name</label>
                                <input type="text" />
                            </div>
                            <div className="field">
                                <label>Middle name</label>
                                <input type="text" placeholder="Middle Name" />
                            </div>

                        </div>
                    </div>

                </>
            );

        } else if (this.props.selected === "LAPTOPS") {

            return (

                <>
                    {this.selector()}
                </>

            );

        } else {

            return (


                <>

                    {this.selector()}





                </>


            )


        }
    }



    render() {



        return (

            <>

                {this.selectedPanal()}
            </>

        );


    }







}


const mapStateToProps = (state) => {




    return { selected: state.typeselector };


}


export default connect(mapStateToProps)(Submitform);