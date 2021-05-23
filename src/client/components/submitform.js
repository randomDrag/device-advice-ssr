import React from 'react';

import '../css/extra.css';

import TypeSelector from '../components/Type.selector';

import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';


import validator from 'validator';

class Submitform extends React.Component {

    constructor(props) {

        super(props);

    }



    inputForm(fields) {
        const { meta: { error, touched } } = fields;

        const className = `${touched && error ? 'field error' : ''}`;

        return (
            <>
                <div className={className}>
                    <input type="text" placeholder={fields.placeholder} {...fields.input} />
                    <div style={{ color: "red" }}>
                        {touched ? error : ""}
                    </div>

                </div>

            </>


        );



    }




    //helper for slected from  
    selector() {

        return <TypeSelector />;

    }




    mobile_form() {

        return (
            <>
                <form >
                    <div className="ui form">
                        <div className="three fields">
                            <div className="field">
                                <label>First name</label>
                                <Field name="price" placeholder="ENTER PRICE" component={this.inputForm} />
                            </div>
                            <div className="field">
                                <label>Middle name</label>
                                <Field name="display" placeholder="Mobile Number" component={this.inputForm} />
                            </div>
                           
                        </div>
                    </div>
                </form>

            </>
        );


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



    //render


    render() {



        return (

            <>

                {this.selectedPanal()}
            </>

        );


    }







}



const validate = (values) => {

    const errors = {}

    if (!values.Name) {
        errors.Name = 'Required'
    }

    if (!values.Phone_Number) {
        errors.Phone_Number = 'Required'
    } else if (isNaN(Number(values.Phone_Number))) {
        errors.Phone_Number = 'Must be a number'
    } else if (!validator.isMobilePhone(values.Phone_Number,'en-IN')  ) {

      
        errors.Phone_Number = 'Enter mobile number'
    }
    return errors
}




const mapStateToProps = (state) => {




    return { selected: state.typeselector };


}


export default reduxForm(

    { form: "mobileForm" , validate}
)


    (connect(mapStateToProps)(Submitform));