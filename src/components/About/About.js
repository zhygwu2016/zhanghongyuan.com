import React from 'react';

import './About.css';

// import resume from '../../assets/Resume_HongyuanZhang.pdf';
import resume from '../../assets/Resume_Axel_Zhang.pdf';

const about = () => (
  <div className="flex flex-wrap justify-between container w-80-ns m-auto-ns">
    <div className="order-2-l w-40-l w-50-m ml-auto mr-auto pa4 imageMargin">
      <img src={require('../../images/portrait-ZHY.jpg')} alt="portrait" />
    </div>

    <div className="order-1-l w-60-l f4-l f5-m f6 mb5 mb0-ns pr4-l textAdjust tc tl-ns">
      <p>
        Hey! I'm Axel(Hongyuan), a Bay-Area-based junior software developer.
        As an international student from China, I have
        obtained my Master's degree at The George Washington University in May 2018.       
      </p>
      <p>
        In addition to writing code, I'm also a part-time photographer, providing
        photos for stock photo agencies, like Getty Images. Besides,
        I have published a book about iPhone photography in China.
      </p>
      <p> 
        I'm currently looking for a full-time SDE role in Seattle.
        Please take a look at my <a href={resume} download="Resume_Axel_Zhang">resume</a> if you're interested.
      </p>
    </div>

  </div>
);

export default about;