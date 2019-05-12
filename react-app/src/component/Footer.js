import React from 'react';

class Footer extends  React.Component{
    render(){
        return (
            <footer>
                <div className="logoBlock">
                    <div className="logo">

                    </div>
                    <div>
                        <p><span className="stick">|</span></p>
                    </div>
                    <div>
                        <p>Энергия</p>
                    </div>
                </div>
                <div className="linkBlock">
                    <div className="facebook"></div>
                    <div className="instagram"></div>
                    <div className="telegram"></div>
                </div>
            </footer>
        );
    }
}
export default Footer;