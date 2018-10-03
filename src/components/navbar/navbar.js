import React from 'react'
import ScoreKeeper from '../scoreKeeper/scoreKeeper'


const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info" >
            <a className="navbar-brand my-3" href="/"><h2>Clicky Game</h2></a>
            <div className="mx-auto">
                <h2 className="text-center text-white">{props.message}</h2>
            </div>
            <ScoreKeeper high={props.high} current={props.current}></ScoreKeeper>
        </nav >

    )
}


export default Navbar;