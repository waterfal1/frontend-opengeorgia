import React from 'react';
import './styles.scss';

interface IInfo{
    info: IText
}

interface IText{
    text1: string,
    text2: string,
    text3: string
}

export function Block(props: IInfo) {
  const { info } = props;
  return (
    <div>
      <div className="home-choose-us">
        {info.text1}
      </div>
      <div className="home-choose-us-explanation">
        {info.text2} <br />
        {info.text3}
      </div>
    </div>
  );
}
