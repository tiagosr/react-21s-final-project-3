import React from 'react';

export const Restaurant = ({ item }) => {
  return (
    <li class="restaurant_card">
      <div class="restaurant_image">
        <img class="image" src={item.photos[0].links[0]} alt="icon" />
      </div>
      <div class="card_content">
        <div class="restaurant">
          <div class="name-box">{item.name}</div>
          <div class="adress-box"> {item.formatted_address} </div>
        </div>
        <div class="categories-box">
          <div class="closed-box">
            {item.opening_hours.open_now ? ' open ' : ' closed '}{' '}
          </div>
          {item.pickup ? (
            <div class="pick-up-box">{item.pickup ? ' pickup ' : null} </div>
          ) : null}
          {item.delivery ? (
            <div class="delivery-box">
              {item.delivery ? ' delivery ' : null}
            </div>
          ) : null}
        </div>
      </div>
      <div class="thumb">
        <div>
          <span class="material-icons">thumb_up</span>
        </div>
        <div>
          <span class="material-icons">thumb_down_alt</span>
        </div>
      </div>
    </li>
  );
};
