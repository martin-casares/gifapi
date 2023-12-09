import React from "react";

export const GifItem = ({ title, url }) => {
  return (
    <div className="gif">
      <img src={url} alt={title} />
      <p> {title}</p>
    </div>
  );
};
