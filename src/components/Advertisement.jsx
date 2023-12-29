import React from 'react'
import flipkartLogo from '/images/flipkart.png'
import amazonLogo from '/images/amazon.png'
import shoe_image from '/images/shoe_image.png'

const Advertisement = () => {
  return (
    <div className='advertisement'>
        <div className="frames">
            <div className="frame1">
                <p className="punchline">YOUR FEET DESERVE THE BEST</p>
                <p className="line">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="buttons">
                    <button className="shop">Shop Now</button>
                    <button className="category">Category</button>
                </div>
                <div className="outlets">
                    <p>Also Available On</p>
                    <div className="images">
                        <img src={flipkartLogo} alt="Flipkart" />
                        <img src={amazonLogo} alt="Amazon" />
                    </div>
                </div>
            </div>
            <div className="frame2">
                <img src={shoe_image} alt="Nike Red Shoe Image" />
            </div>
        </div>
    </div>
  )
}

export default Advertisement