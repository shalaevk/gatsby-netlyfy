import React from "react"


// const App = () => {
//    state = { show: false }

//    showModal = () => {
//      this.setState({ show: true });
//    }

//    hideModal = () => {
//      this.setState({ show: false });
//    }

//    render() {
//      return (
//        <main>
//          <h1>React Modal</h1>
//          <Modal show={this.state.show} handleClose={this.hideModal} >
//            <p>Modal</p>
//            <p>Data</p>
//          </Modal>
//          <button type='button' onClick={this.showModal}>Open</button>
//        </main>
//      )
//    }
//  }

export const Modal = ({ handleClose, show, children }) => {
   // console.log({ handleClose, show, children })
   const showHideClassName = show ? 'modal display-block' : 'modal display-none';

   return (
      <div className={showHideClassName}>
         <section className='modal-main'>
            <button className="close-btn" onClick={handleClose}>Close</button>
            <video width="100%" height="auto" src={children} autoplay="true" track="true" loop="true" controls type="video/mp4" >
            </video>

         </section>
      </div>
   );
};

