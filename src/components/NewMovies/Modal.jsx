import React from 'react';
import './modal.css'
function Modal({setModal}) {
  return (
    <div className='modal-back'>
        <div className='modal'>
            <img className='modalImg' onClick={()=>setModal(false)} width='35px' src="https://img.favpng.com/6/17/8/greek-alphabet-letter-case-x-png-favpng-cHuZ2q2FSYJixmFrb7gtTP1XA.jpg" alt="" />
            <form action="">
              <input type="text" />
            </form>
            <button className='modalBtn' onClick={()=>setModal(false)}>Send</button>
        </div>
    </div>
  )
}

export default Modal