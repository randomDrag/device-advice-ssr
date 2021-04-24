import React from 'react';

import { Field, reduxForm } from 'redux-form';

class MobileForm extends React.Component {


    inputForm(Fprops) {

        return (
            <input {...Fprops.input} />


        );

    }



    render() {

        console.log(this.props);

        return (

            <form >

                <Field name="PRICE" component={this.inputForm} />



            </form>

        );

    }





}

export default reduxForm({ form: 'MobileForm' })(MobileForm)