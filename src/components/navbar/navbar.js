import React from 'react'
import ScoreKeeper from '../scoreKeeper/scoreKeeper'


const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info" >
            <a className="navbar-brand my-3" href="/"><h2>Clicky Game</h2></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">

            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            </div>
            <ScoreKeeper high={props.high} current={props.current}></ScoreKeeper>
        </nav >

    )
}


export default Navbar;