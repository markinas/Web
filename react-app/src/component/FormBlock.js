import React from 'react';

class FormBlock extends  React.Component{
    render(){
        return (
            <div className="formsBlock">

                <div className="form2">
                    <form action="">

                        <h1 style={{gridColumn:"span 2"}}>Задать вопрос</h1>
                        <input type="text" className="name" placeholder="Ваше Имя:"/>
                        <input type="email" className="email" placeholder="Ваше Email:"/>
                        <textarea name="" id="" cols="30" rows="10" className="comm"
                                  placeholder="Оставьте коментарий ;)"></textarea>

                        <p className="buttUp"><input type="submit" className="butt"
                                                     value="Отправить"/></p>

                    </form>
                </div>
            </div>
        );
    }
}
export default FormBlock;