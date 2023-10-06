import React, { useState } from 'react';
import people from './Data'
import { FaMusic } from "react-icons/fa";
import './review.css'
import Modal from './Modal';

function index() {
  const [index, setIndex] = useState(0);
    const [followig, setFollowing] = useState('Follow')
    const {name, job, image, country, text} = people[index]
    const [openModal, setModal] = useState(false)



    const checkNumber = (num) =>{
      if(num > people.length - 1){
        return 0;
      }
      if(num < 0){
        return people.length - 1
      }
      return num
    }

    const nextPerson = () =>{
      setIndex((index)=>{
        let newIndex = index + 1;
        return checkNumber(newIndex)
      })
    };
    const prevPerson = () => {
      setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
      });
    };
    const randomPerson = ()=>{
      let randomNumber = Math.floor(Math.random() * people.length);
      if(randomNumber === index){
        randomNumber = index + 1;
      }
      setIndex(checkNumber(randomNumber))
    }
  return (
    <div>
      <div className='cards'>
        <div className='card-container'>
          {openModal && <Modal setModal={setModal}/> }
        	<a href="https://youtu.be/60ItHLz5WEA?si=izyPUwWle3kL7QSG">
            <button className='pro'><FaMusic/></button>
          </a>
        	<img className='round' src={image} alt="user" />
        	<h2>{name}</h2>
        	<h4>{country}</h4>
          <i className='job'>{job}</i>
          <p><i>{text}</i></p>
        	<div className='buttons'>
        		<button onClick={()=> setModal(true)} class="primary">
        			Message
        		</button>
        		<button onClick={() => setFollowing(()=> "Unfollow" )} class="primary ghost">
        			{followig}
        		</button>
        	</div>
        	<div className='skills'>
           <div className='next'>
            <button className='prev-btn' onClick={prevPerson}>
              prev
            </button>
            <button className='next-btn' onClick={nextPerson}>
              next
            </button>
           </div>
              <button className='random-btn' onClick={randomPerson}>
                random me
            </button>
        	</div>
        </div>
      </div>
    </div>
  )
}

export default index