import React from 'react';
import {Link} from "react-router-dom";

class FormModal extends  React.Component{
    render(){
        return (
            <div className="form1">
                <form action="">
                    <h3>Стать инвестором</h3>
                    <input type="text" className="name" placeholder="Ваше Имя:"/>
                    <input type="email" className="email" placeholder="Ваше Email:"/>
                    <textarea name="" id="" cols="30" rows="10" className="comm"
                              placeholder="Оставьте коментарий ;)"></textarea>

                    <Link to="/"><p className="buttUp"><input type="submit" className="butt" value="Перейти к переводу средств"/></p></Link>
                </form>
            </div>
        );
    }
}
export default FormModal;