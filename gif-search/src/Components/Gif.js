import React from 'react';

const Gif = ({url}) => (
  <li className="gif-wrap">
    <img src={url}/>
  </li>
);

export default Gif;