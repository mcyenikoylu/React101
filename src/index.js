import React from 'react';
import PropTypes from 'prop-types';
export class FirstComponent extends React.Component()
{
    constructor(props){
        super(props);
        //this.ClickMe = this.ClickMe.bind(this); yöntem 1.
        this.state = {
            a: props.name,
            b: 2
        }
    }

    myMethod() {
        var x = this.props.name;
        return x + " name";
    }

    updateA(newValue){
        this.setState({
            a: newValue
        });
    }

    ClickMe=(e)=>{ //3. yöntem arrow function
        //e.preventDefault();
        //e.stopPropagation();
        alert("Clicked State A:" + this.state.a);
        callBackParam = this.state.a;
        this.props.onClick(callBackParam);
    }

    render(){
        return  <div>Hello {this.props.name} {this.props.surname}
        {/* <button onClick={this.ClickMe.bind(this)}></button> */}
        <button onClick={this.ClickMe}></button>
        {/* <div onClick="preventDefault">
            <hr></hr>
            <span onClick="preventDefault"></span>
        </div> */}
        </div>
    }
}

FirstComponent.PropTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

FirstComponent.defaultProps = {
    name: "",
    surname: "",
    onClick: null
};