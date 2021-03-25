import React from "react"
import playBtnSM from "../../../static/playbtn-sm.svg"
import { Modal } from "./Modal"
import { graphql, useStaticQuery } from "gatsby"



export const PlayBtnT = (props) => {
console.log(props.lang)

   return <div className="playBtn styling-play-btn d-flex" role="button" tabIndex={0} onClick={props.func} onKeyDown={props.func}>
      <img src={playBtnSM} alt="Play" />
      {
         props.lang === "ja" ?   <span>映画を再生</span> : <span>play movie</span>
      }
   </div>

};

