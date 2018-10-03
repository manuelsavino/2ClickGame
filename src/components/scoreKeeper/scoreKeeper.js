import React from 'react'

const ScoreKeeper = (props) => {

    return (
        <div><h3 className="text-white">Current: {props.current} | High Score: {props.high}</h3></div>
    )

}

export default ScoreKeeper