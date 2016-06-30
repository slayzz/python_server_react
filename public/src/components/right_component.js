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
<<<<<<< HEAD

                        </textarea>
                    </div>
                    <div className="option-bar">
=======
                        </textarea>
                    </div>
                    <div className="option-bar">
                        <button className="option-bar-option button-primary">Спроси</button>
                        <div className="option-bar-option option-bar-counter">300</div>
                        <input className="checkbox" type="checkbox" id="question-anonymous" defaultChecked="true"/>
                        <label for="question-anonymous" className="option-bar-askmode">
                            <span>Спроси Анонимно</span>
                        </label>
>>>>>>> f19aa2bdce17c6f09606f67959350673a0e5bf57
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
