import React from 'react';
import { connect } from 'react-redux';

import { selected } from '../../actions';

class TypeSelector extends React.Component {


    //construtor 

    constructor(props) {
        super(props);

        this.state = { selected_option: null }

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

                <select className="ui selection dropdown" name="" id="" value={this.state.selected_option} onChange={this.handleDropdownChange} >
                    <option value="null">SELECT</option>
                    <option value="MOBILE">MOBILE</option>
                    <option value="EARPHONE">EARPHONES</option>
                    <option value="LAPTOPS">LAPTOPS</option>

                </select>

            </div>




        );

    }






}

const mapStateToProps = (state) => {


    return { selected: state.selected_option };

}

export default connect(mapStateToProps, { selected })(TypeSelector);



