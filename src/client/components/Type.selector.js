import React from 'react';
import { connect } from 'react-redux';
import {selectType} from '../../actions';

class TypeSelector extends React.Component {

    constructor(props){
        super(props);

        this.state = {term : ''}
    }


    render() {

        return (


            <div>

                <select className="ui selection dropdown" name="" id="">

                    <option value="mobile">MOBILE</option>
                    <option value="earphone">Earphone</option>
                    <option value="laptops">Laptops</option>

                </select>

            </div>




        );

    }






}

const mapStateToProps = ()=>{

    
}

export default connect()(TypeSelector);



