import React from 'react';
import './Card.css'

const Card = ({
  title,
  tag,
  description,
  author,
  date,
  avatar,
  mainImage
}) => {
  return (
    <div className="card">
      <div className="card__header">
        <img
          src={mainImage} alt="card__image" className="card__image" width="600"
        />
      </div>
      <div className="card__body">
        <span className="tag tag-blue">{tag}</span>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <div className="user">
          <img src={avatar} width={50} height={50} alt="user__image" className="user__image" />
          <div className="user__info">
            <h4>{author}</h4>
            <small>{date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
