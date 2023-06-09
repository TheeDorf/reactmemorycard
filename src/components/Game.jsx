import React, { Component } from "react"
import Prompt from "./Prompt"
const items = [];

for (let i =65; i<80; i++){
    items.push({
        id: i,
        content: String.fromCharCode(i),
        displayed: false,

    });
}
class Game extends Component{
    constructor(props){
        super(props)

        this.state = {
            items,
        };

        this.handleAnswer = this.handleAnswer.bind(this);
    }
    
    handleAnswer(event, item, index, answer){
        // compare item.display with answer
        // increment or reset score
        this.props.handleScore(item.displayed === answer);


        // change the item that is displayed 
        if(!item.displayed){
            const items = this.state.items.map(item) => { 
                if(item.displayed){
                    return item;

                } else {
                    item.displayed = true;
                    return item;
                }
            };
            this.setState({ items });
        }
    }


        randomItemIndex(){
            let rand = Math.floor(Math.random() * items.length);
            return rand;
          
        }

    
    render(){
        const { items } = this.state;
        const index = this.randomItemIndex()
        const item = items[index];

        return(
            <main className="d-flex justify-content-around align-items-center">
                <p id={index}>Random Letter is " {item.content} "</p>
             <Prompt  item={item} index={index} handleAnswer={this.handleAnswer} />
            </main>
        );
    }
}


export default Game