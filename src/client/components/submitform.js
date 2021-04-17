import React from 'react';

import '../css/extra.css';

import TypeSelector from '../components/Type.selector';

import {connect} from 'react-redux'
class Submitform extends React.Component {


    render() {

        return (

            <>
                <div className="ui items ">

                    <TypeSelector />

                    <form >




                        <div className="ui form">
                            <div className="fields">
                                <div className="field">
                                    <label>First name</label>
                                    <input type="text" placeholder="First Name" />
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

    }







}


const mapStateToProps = (state)=> {

    console.log(state);


    return state ;


}


export default connect( mapStateToProps )(Submitform);