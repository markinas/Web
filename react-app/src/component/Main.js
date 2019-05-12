import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FirstTextBlock from "./FirstTextBlock";
import SecondTextBlock from "./SecondTextBlock";
import ThirdTextBlock from "./ThirdTextBlock";
import OurCommandBlock from "./OurCommandBlock";
import FormBlock from "./FormBlock";
import FormModal from "./FormModal";
import QuestionButton from "./QuestionButton";

class Main extends  React.Component{
    render(){
        return (
            <div className="main">
                <FirstTextBlock/>
                <SecondTextBlock/>
                <ThirdTextBlock/>
                <OurCommandBlock/>
                <FormBlock/>
                <Route path="/modal" component={FormModal}/>
                <QuestionButton/>


            </div>
        );
    }
}
export default Main;