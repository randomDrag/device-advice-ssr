import React from 'react';

import '../css/extra.css';

import TypeSelector from '../components/Type.selector';

import { connect } from 'react-redux'

class Submitform extends React.Component {

    constructor(props) {

        super(props);

    }



    //helper for slected from  
    selector() {

        <TypeSelector />

    }




    mobile_form() {

        return (

            <div className="ui form">
                <div className="fields">
                    <div className="field">
                        <label>First name</label>
                        <input type="text" placeholder={this.state.typeselector} />
                    </div>
                    <div className="field">
                        <label>Middle name</label>
                        <input type="text" placeholder="Middle Name" />
                    </div>

                </div>
            </div>

        );


    }


    selectedPanal() {



        if (this.props.selected === "MOBILE") {


            return (
                <>

                    <div className="ui items ">

                        {this.selector()}



                        <form >


                            <div className="ui form">
                                <div className="fields">
                                    <div className="field">
                                        <label>First name</label>
                                        <input type="text" placeholder="name" />
                                    </div>
                                    <div className="field">
                                        <label>Middle name</label>
                                        <input type="text" placeholder="Middle Name" />
                                    </div>

                                </div>
                            </div>


                            <button type="submit" className="circular ui icon button " ><i className="search icon"></i></button>

                        </form>



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