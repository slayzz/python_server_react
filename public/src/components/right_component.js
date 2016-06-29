import React from 'react';

class AskQest extends React.Component{
    constructor(){
        super();
        this.state = {

        };
    }

    render(){
        return(
            <div className="ask-box">
                <h3>Задай Вопрос<span>@Einshtein</span></h3>
                <form id="ask-form" autoComplete="off" className="new-question">
                    <div className="question">
                        <textarea placeholder="Расскажи, что там навопросил"
                            id="question_text">

                        </textarea>
                    </div>
                    <div className="option-bar">
                    </div>

                </form>
            </div>
        );
    }

}

export default class RigthComponent extends React.Component{
    constructor(){
        super();
        this.state = {

        };
    }

    render(){
        return(
            <div className="right-main-component">
                <AskQest />
            </div>
        );
    }

}
