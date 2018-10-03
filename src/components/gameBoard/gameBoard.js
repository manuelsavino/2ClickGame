import React from 'react'
import './gameBoard.css'




const GameBoard = (props) => {
    const images = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    shuffle(images)
    const allImages = images.map(img => {
        return <img className="p-3 img-fluid  img-thumbnail" onClick={(e) => props.handleClick(e, img)} key={img} src={"./images/" + img + ".png"} alt="test"></img>
    })
    return (
        <div className="board text-center mt-3" > {allImages}</div>
    )

}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


export default GameBoard;