import React, { useState } from "react";

import { Card, Row } from 'react-bootstrap';
import { PlayBtnT } from "./layouts/PlayBtn";
import { Modal } from "./layouts/Modal";
import playBtn from "../../static/play-button.svg"

const Post = (props) => {

   const [show, setState] = useState(false);

   const [id, setId] = useState(0);
   let showModal = () => {
      setState(true);
   }
   let hideModal = () => {
      setState(false);
   }

   return <div className="justify-content-center post-wrap p-5">
      <Row as="div" className="post-container">
         <Card.Body>
            <Card.Title className="post-title">{props.title}</Card.Title>
            <span className="postDate">{new Date(props.date).toLocaleString('en', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <PlayBtnT lang={props.lang} func={showModal} />
         </Card.Body>
         <div className="post-video-img">
            <Card.Img variant="left" src={props.image}  alt="Poster" />
            <img className="play-btn" onClick={() => {
               showModal()
            }} data-video="1" src={playBtn} alt="Play"/>
         </div>

      </Row>


      <Modal handleClose={hideModal} id={id} show={show}>
         {props.video}
      </Modal>
   </div>
}

export default Post;