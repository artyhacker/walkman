import React from 'react';
import { Slider, Button, Row, Col } from "antd";
import classes from './Player.module.css';
import axios from '../../utils/axios';
import { getLoginUrl } from "../../api";

const mainBtnStyle = {
  width: '4rem',
  height: '4rem',
  fontSize: '2rem',
};

const toggleBtnStyle = {
  margin: '0 1rem',
};

const smallBtnStyle =  {
  marginTop: '2rem',
};

function Player() {
  const fetchLogin = () => {
    axios.get(getLoginUrl('15135197519', 2800599))
      .then(res => {
        if (res.statusText === 'OK') {
          console.log(res.data);
        } else {
          throw new Error('登陆失败');
        }
      })
      .catch(e => {
        console.log(e);
      })
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        SONY
      </div>
      <div className={classes.cover}>
        COVER
      </div>
      <div className={classes.slider}>
        <div>
          <span>00:00</span>
          <span style={{ float: 'right' }}>05:00</span>
        </div>
        <Slider />
      </div>
      <div className={classes.info}>
        <div>歌名</div>
        <div>歌手</div>
        <div>专辑名</div>
      </div>
      <Row style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Col span={7}>
          <Button style={smallBtnStyle} type="primary" icon="sync" size="small" title="是否循环" />
        </Col>
        <Col span={10}>
          <Button style={toggleBtnStyle} type="primary" shape="circle" icon="fast-backward" size="large" title="上一首" />
          <Button
            style={mainBtnStyle}
            type="primary"
            shape="circle"
            icon="caret-right"
            title="播放/暂停"
            onClick={fetchLogin}
          />
          <Button style={toggleBtnStyle} type="primary" shape="circle" icon="fast-forward" size="large" title="下一首" />
        </Col>
        <Col span={7}>
          <Button style={smallBtnStyle} type="primary" icon="redo" size="small" title="播放顺序" />
        </Col>
      </Row>
      <div className={classes.playlist}>
        播放列表
      </div>
    </div>
  );
}

export default Player;
