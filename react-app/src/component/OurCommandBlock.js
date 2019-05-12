import React from 'react';
import Worker from "./Worker";

class OurCommandBlock extends  React.Component{
    constructor(props){
        super(props);


        this.state = {
            workers: [{"photo":"https://pbs.twimg.com/profile_images/980145664712740864/aNWjR7MB_400x400.jpg", "name":"Николай Лукьянов", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque aut hic corporis unde. Suscipit, eaque! Blanditiis ratione quod cumque nostrum?" },
                {"photo":"http://www.stlouis-mo.gov/government/departments/mayor/profiles/images/debbie-allen-profile-photo-300px.jpg", "name":"Танюша Солнышко", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque aut hic corporis unde. Suscipit, eaque! Blanditiis ratione quod cumque nostrum?" },
                {"photo":"https://www.workreadygraduates.com/app/uploads/2016/10/Student-speaking-300x300.png", "name":"Валерия Алексеева ", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque aut hic corporis unde. Suscipit, eaque! Blanditiis ratione quod cumque nostrum?" },
                {"photo":"https://mfre.landfood.ubc.ca/files/2017/11/MFRE_Student_A_003-300x300.jpg", "name":"Иван Иванов", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque aut hic corporis unde. Suscipit, eaque! Blanditiis ratione quod cumque nostrum?" },
                {"photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRegxSaLZef23Gbg-yNnSVkqG4BPjOKvYLCxjQlFhlOzfGvwk8-", "name":"Петр Петров", "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque aut hic corporis unde. Suscipit, eaque! Blanditiis ratione quod cumque nostrum?" },
            ]

        }
    }

    render(){
        return (
            <div className="infoBlock">
                <div className="title"><p>Команда</p></div>
                {this.state.workers.map((item)=><Worker worker={item}/>)}
            </div>

        );
    }
}
export default OurCommandBlock;