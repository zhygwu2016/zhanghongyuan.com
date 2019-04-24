import React from 'react';

import './Book.css';

const book = () => (
  <div className="container flex flex-wrap justify-between w-80-ns m-auto-ns tc tl-l">
    <div className="w-40-l w-60-m ml-auto mr-auto pa4">
      <img src={require('../../images/publication-ZHY.jpg')} alt="publication" />
    </div>
    <div className="w-60-l f4-l f5-m f6 mb5 mb0-ns pl4-l buyLinksText">
      <div className="">
        <h2>《手机摄影手册1：拍出大片》</h2>
        <h3 className="f3 b">"Handbook of Mobile Photography: Make It Extraordinary"</h3>
        <h4 className="f5">Peking University Press, Sept 2017&nbsp;(ISBN: 978730128573)</h4>
        <p className="f4">Introduce basic photography knowledge, image processing skills,
          experience of composition and creative ideas for smartphones, like iPhone.</p>
      </div>
      <div className="tc mt5 mt3-ns">
        <h2 className="tc">Buy it on...</h2>
        <div className="flex flex-wrap justify-around buy-links mb3 mb5-m flex-column flex-row-ns">
          <a href="https://detail.tmall.com/item.htm?spm=a230r.1.14.83.67e77ec9UGZT6p&id=556712948748&ns=1&abbucket=12"
            className="mb2 mb1-ns">
            TMALL 天猫</a>
          <a href="https://item.jd.com/12158685.html" className="mb2 mb1-ns">
            JD.COM 京东</a>
          <a href="https://www.amazon.cn/dp/B0757CW9BW/ref=sr_1_1?ie=UTF8&qid=1533260814&sr=8-1&keywords=%E6%89%8B%E6%9C%BA%E6%91%84%E5%BD%B1%E6%89%8B%E5%86%8C" 
            className="mb2 mb1-ns">
            Amazon.cn 亚马逊</a>
        </div>
      </div>
    </div>
  </div>
);


export default book;