import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '1000px'
}
const slideImages = [
  {
    url: 'https://i0.wp.com/etconsultants.us/wp-content/uploads/2017/03/lms-slider-1.jpg?fit=1281%2C574&ssl=1'
   
  },
  {
    url: 'https://www.shutterstock.com/image-vector/learning-management-system-lms-web-260nw-2134369007.jpg'
   
  },
  {
    url: 'https://blog.coursify.me/wp-content/uploads/2019/09/online-education-coursifyme.jpg'
   
  },
];


function imageslider() {
  return (
    <div><Slide>
    {slideImages.map((slideImage, index)=> (
       <div key={index}>
         <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
           <span style={spanStyle}>{slideImage.caption}</span>
         </div>
       </div>
     ))} 
   </Slide></div>
  )
}

export default imageslider