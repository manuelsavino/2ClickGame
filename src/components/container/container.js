import React from 'react'
import GameBoard from '../gameBoard/gameBoard'



const Container = (props) => {
    return (
        <div className="container">
            <GameBoard handleClick={props.handleClick} currentClass={props.currentClass}></GameBoard>
        </div>

    )
}


export default Container;