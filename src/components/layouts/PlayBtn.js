import React from "react"
import playBtnSM from "../../../static/playbtn-sm.svg"



export const PlayBtnT = (props) => {

   return <div className="playBtn styling-play-btn d-flex" role="button" tabIndex={0} onClick={props.func} onKeyDown={props.func}>
      <img src={playBtnSM} alt="Play" />
      <span>play movie</span>
   </div>

};

