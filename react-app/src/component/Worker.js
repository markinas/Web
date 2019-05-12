import React from 'react';

class Worker extends  React.Component{

    render(){
        return (
            <div className="person">
                <div className="perPhoto"><img src={this.props.worker.photo} alt=""/></div>
                <div className="perTitle">{this.props.worker.name}</div>
                <div className="perDescrip">{this.props.worker.description}
                </div>
            </div>
        );
    }
}
export default Worker;