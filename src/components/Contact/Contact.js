import React from 'react';

import './Contact.css';

const contact = () => (
  <div className="container flex flex-wrap justify-between w-80-ns m-auto-ns tc"
    style={{
      marginTop: 'auto',
      marginBottom: 'auto'
    }}>
    <div className="m-auto-ns">
      <p className="f3-l f4-m f5 b mt4 mt0-ns">As seen in...</p>
      <div className="links-1">
        <a href="https://www.facebook.com/zhanghongyuan1993">
          <img src={require('../../images/icons/icon-facebook.png')} alt="Facebook"/>
          <p>Facebook</p>
        </a>
        <a href="https://www.linkedin.com/in/zhanghongyuan/">
          <img src={require('../../images/icons/icon-linkedin.png')} alt="LinkedIn"/>
          <p>LinkedIn</p>
        </a>
        <a href="https://github.com/zhygwu2016">
          <img src={require('../../images/icons/icon-github.png')} alt="GitHub"/>
          <p>GitHub</p>
        </a>
        <a href="https://www.instagram.com/jasonzhang_byr/">
          <img src={require('../../images/icons/icon-Instagram.png')} alt="Instagram"/>
          <p>Instagram</p>
        </a>
        <a href="https://vsco.co/zhanghongyuan/images/1">
          <img src={require('../../images/icons/icon-VSCO.png')} alt="VSCO"/>
          <p>VSCO</p>
        </a>
        <a href="https://www.weibo.com/zhy1092030962/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1">
          <img src={require('../../images/icons/icon-Weibo.png')} alt="Weibo"/>
          <p>Weibo</p>
        </a>
        <a href="https://zhanghongyuan.tuchong.com">
          <img src={require('../../images/icons/icon-tuchong.png')} alt="Tuchong"/>
          <p>Tuchong</p>
        </a>
        <a href="http://matuanzhang.lofter.com">
          <img src={require('../../images/icons/icon-lofter.png')} alt="Lofter"/>
          <p>Lofter</p>
        </a>
      </div>

      <p className="f3-l f4-m f5 b mt3 mt0-ns">And...</p>
      
      <div className="links-2 flex flex-wrap justify-center tc">
        <div className="mt2 mt0-ns">
          <a href="mailto:zhygwu2016@gmail.com">
            <img src={require('../../images/icons/icon-email.png')} alt="email"/>
            <p>nathanzh117@gmail.com</p>
          </a>
        </div>
        <div className="mt2 mt0-ns mb5 mb1-ns">
          <a href="tel:1-571-214-7685" className="test">
            <img src={require('../../images/icons/icon-tel.png')} alt="tel"/>
            <p>Tel: 1-408-753-5987</p>
          </a>
        </div>
      </div>

    </div>
  </div>
);


export default contact;