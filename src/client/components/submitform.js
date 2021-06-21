import React from 'react';

import '../css/extra.css';

import TypeSelector from '../components/Type.selector';

import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';


import validator from 'validator';

class Submitform extends React.Component {

    constructor(props) {

        super(props);



        this.renderColorSelector = this.renderColorSelector.bind(this);

    }



    inputForm(fields) {
        const { meta: { error, touched } } = fields;

        const className = `${touched && error ? 'field error' : ''}`;

        return (
            <>
                <div className={className}>
                    <input type="text" className="inputMobile" placeholder={fields.placeholder} {...fields.input} />
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


    //options Renderer

    renderColorSelector({ input, meta: { touched, error } }) {
        let t = ['display', 'processer', 'all'];
        return (<div>
            <select className="ui selection dropdown" {...input}>
                <option value="">Select </option>
                {t.map(val => (
                    <option value={val} key={val}>
                        {val}
                    </option>
                ))}
            </select>
            {touched && error && <span>{error}</span>}
        </div>);
    }



    // mobile forms created

    mobile_form() {

        return (
            <>
                <form >

                    <div className="form-mobile-container">
                        <div className="Price">
                            <label>Amount</label>
                            <Field name="price" className="inputMobile" placeholder="ENTER PRICE" component={this.inputForm} />
                        </div>
                        <div>
                            <label>Favorite Color</label>
                            <Field name="favoriteColor" component={this.renderColorSelector} />
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

                    <div className="">

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

    if (!values.price) {
        errors.price = 'Required'
    } else if (isNaN(Number(values.price))) {
        errors.price = 'Must be a number'

    } else if (!validator.isInt(values.price, { min: 3000, max: 300000 })) {


        errors.price = 'Enter correct amount';
    }
    return errors
}




const mapStateToProps = (state) => {




    return { selected: state.typeselector };


}


export default reduxForm(

    { form: "mobileForm", validate }
)


    (connect(mapStateToProps)(Submitform));