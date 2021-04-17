import React from 'react';
import { connect } from 'react-redux';

import {selected} from '../../actions';

class TypeSelector extends React.Component {


    //construtor 

    constructor(props){
        super(props);

        this.state = {selected_option: ""}

        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }

    //method 



    handleDropdownChange(e) {
        const value = e.target.value;
      
        this.props.selected(value)  
        this.setState({ selected_option: value });
       
    
      }



//reader method


    render() {

      
        return (


            <div>

                <select className="ui selection dropdown" name="" id="" value={this.state.selected_option} onChange={this.handleDropdownChange}>

                    <option value="mobile">MOBILE</option>
                    <option value="earphone">Earphone</option>
                    <option value="laptops">Laptops</option>

                </select>

            </div>




        );

    }






}

const mapStateToProps = (state)=>{


    return { selected : state.selected_option};

}

export default connect(mapStateToProps, {selected})(TypeSelector);



