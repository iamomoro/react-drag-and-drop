import React from 'react';

const Card = (props) => {
  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData('card_id', target.id);

    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  return (
    <div
      className={props.className}
      id={props.id}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    ></div>
  );
};

export default Card;
