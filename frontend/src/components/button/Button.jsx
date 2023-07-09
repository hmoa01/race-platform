import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button className={props.className} type={props.type}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
