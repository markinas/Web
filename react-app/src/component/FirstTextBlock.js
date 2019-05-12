import React from 'react';

class FirstTextBlock extends  React.Component{
    constructor(props){
        super(props);


        this.state = {
            display: "first"

        }
    }

    render(){
        return (
        <div className={"textBlock1 " + (this.state.display === "first"?"pos1":(this.state.display === "second"?"pos2":"pos3") )}>
            <div className="photo"><img src="images/man2.PNG" alt=""/></div>
            <div className="title">
                <p>Lorem ipsum dolor.</p>
            </div>
            <div className="description"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis mollitia vel maxime ducimus. Aliquam impedit libero quibusdam beatae vel illum
                odit, laboriosam architecto sapiente, consequatur incidunt quis perspiciatis. Distinctio commodi
                voluptatibus dignissimos voluptatum praesentium sed maxime, sequi itaque amet nostrum quia
                blanditiis dolorum expedita dolores, quaerat perspiciatis, optio, officiis maiores doloremque
                eum! Iure omnis rerum, pariatur ipsa, ducimus expedita, illo quae veniam recusandae ratione
                voluptates? Commodi laboriosam deserunt sint, quasi dolor accusantium obcaecati animi at
                nesciunt quis labore itaque eius sapiente iusto esse consequuntur mollitia aliquid inventore
                magni aperiam iste ipsam? Totam voluptas labore nobis molestias, quasi corporis aliquid
                atque.</p></div>

                <div className="switch">
                    <div className="b1" onClick={()=> this.setState({display: 'first'})}>
                        <p>1</p>
                    </div>
                    <div className="b2" onClick={()=> this.setState({display: 'second'})}>
                        <p>2</p>
                    </div>
                    <div className="b3" onClick={()=> this.setState({display: 'third'})}>
                        <p>3</p>
                    </div>
                </div>

        </div>);
    }
}
export default FirstTextBlock;