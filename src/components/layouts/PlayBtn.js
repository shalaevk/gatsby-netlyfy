import React from "react"
import playBtnSM from "../../../static/playBtn-sm.svg"



export const PlayBtnT = (props) => {

   return <div className="playBtn styling-play-btn d-flex" onClick={props.func}>
      <img src={playBtnSM} />
      <span>play movie</span>
   </div>

};

