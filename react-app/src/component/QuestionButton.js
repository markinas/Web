import React from 'react';
import {Link} from "react-router-dom";

class QuestionButton extends  React.Component{
    constructor(props){
        super(props);


        this.state = {
            quest: false

        }
    }
    render(){
        return (
            <Link to="/modal" >
            <div className="questionButton" >
                <p >Поддержать</p>
            </div>
            </Link>
            );
    }
}
export default QuestionButton;