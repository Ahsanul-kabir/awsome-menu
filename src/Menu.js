import React from 'react';

const Menu = ({ menuItem }) => {
  const { title, img, desc, price } = menuItem;

  return <div className='section-center'>
    <article className='menu-item'>
      <img src={img} alt={title} className='photo' />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className='price'>${price}</h4>
          <p className='item-text'>{desc}</p>
        </header>
      </div>
    </article>
  </div>;
};

export default Menu;
