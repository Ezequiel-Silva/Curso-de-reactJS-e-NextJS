import './styled.css';

import { Component } from 'react';

export class Button extends Component {
    render(){
        const { text,onClick } = this.props;
        return (
            <button
                className='button' 
                onClick={onClick}
            >{text}</button>
        )
    }
}

export default Button;