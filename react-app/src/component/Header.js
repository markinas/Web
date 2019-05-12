import React from 'react';

class Header extends  React.Component{
    render(){
        return (
            <header>
                <div className="firstPart">
                    <div className="firstRow">
                        <div className="logo">
                        </div>
                        <div>
                            <p><span className="stick">|</span></p>
                        </div>
                        <div>
                            <p>Энергия</p>
                        </div>
                    </div>
                    <div className="secondRow">
                        <div className="mainText">
                            <p><span style={{fontWeight: "0", fontFamily: "monospace"}}>Tipa</span>
                                <br/>
                                s h a g a u
                                <br/>
                                <span style={{fontWeight: "700"}}>Go!</span></p>
                        </div>
                    </div>
                </div>
                <div className="secondPart">
                    <div className="firstRow">
                        <div className="textBlock">

                            <div>
                                <p>Lorem.</p>
                            </div>
                            <div>
                                <p>Lorem.</p>
                            </div>
                            <div>
                                <p>Lorem.</p>
                            </div>
                            <div>
                                <p>Lorem.</p>
                            </div>
                        </div>
                        <div className="linkBlock">
                            <div className="facebook"></div>
                            <div className="instagram"></div>
                            <div className="telegram"></div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;