import React, { useRef } from 'react'
import './modalStyle.css'

const SuccessModal = ({ setShowModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef()
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false)
    }
  }
  //render the modal JSX in the portal div.
  return (
    <div id='container' ref={modalRef} onClick={closeModal}>
      <div id='modal'>
        <h2>Sign Up Successful</h2>
        <p >
          Explore the app, enjoy the ease of digital record keeping while
          monitoring your patient's records and appointment seamlessly. All in
          one place!
        </p>
        <a href='dashboard/client'>Go to Dashboard</a>
      </div>
    </div>
  )
}

export default SuccessModal