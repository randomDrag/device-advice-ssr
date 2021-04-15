import React from 'react';
import { connect } from 'react-redux';

import {selectType} from '../../actions';

class TypeSelector extends React.Component {

    constructor(props){
        super(props);

        this.state = {term : ""}

        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }

    handleDropdownChange(e) {
        const value = e.target.value;
      
        this.props.selectType(value)  
        this.setState({ term: value });
       
    
      }
    render() {

        console.log(this.props);
        return (


            <div>

                <select className="ui selection dropdown" name="" id="" value={this.state.term} onChange={this.handleDropdownChange}>

                    <option value="mobile">MOBILE</option>
                    <option value="earphone">Earphone</option>
                    <option value="laptops">Laptops</option>

                </select>

            </div>




        );

    }






}

const mapStateToProps = (state)=>{

 console.log(state);
    return { selected : state.term};

}

export default connect(mapStateToProps, {selectType})(TypeSelector);



