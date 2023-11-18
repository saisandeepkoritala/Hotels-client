import React from 'react'
import {BsTelephone,BsCameraVideo,BsChatDots} from "react-icons/bs"
import {BiMessage} from "react-icons/bi";

const HomeContact = () => {
  return (
    <div className='contact'>
      <div className='top'>
        <h1>Our Contact information</h1>
        <h1>Easy to contact us</h1>
        <p>We always ready to help by providijng the best services for you.</p>
        <p>We beleive a good blace to live can make your life better</p>
      </div>
      <div className='bottom'>
          <div className='card'>
              <div className='card-top'>
                  <BsTelephone size="25"/>
                  <div>
                    <p>Call</p>
                    <p>021 123 145 14</p>
                  </div>
              </div>
              <div>
                <button>Call now</button>
              </div>
          </div>

          <div className='card'>
              <div className='card-top'>
                  <BsChatDots size="25"/>
                  <div>
                    <p>Chat</p>
                    <p>021 123 145 14</p>
                  </div>
              </div>
              <div>
                <button>Chat now</button>
              </div>
          </div>

          <div className='card'>
              <div className='card-top'>
                  <BsCameraVideo size="25"/>
                  <div>
                    <p>Video Call</p>
                    <p>021 123 145 14</p>
                  </div>
              </div>
              <div>
                <button>Video call now</button>
              </div>
          </div>

          <div className='card'>
              <div className='card-top'>
                  <BiMessage size="25"/>
                  <div>
                    <p>Message</p>
                    <p>021 123 145 14</p>
                  </div>
              </div>
              <div>
                <button>Message now</button>
              </div>
          </div>

      </div>

    </div>
  )
}

export default HomeContact