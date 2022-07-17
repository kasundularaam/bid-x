import React from "react";

const orgCard = ({ org }) => {
  return (
    <div className="orgCard">
      <img src={org.logo} alt="" className="round_img" />
      <div>{org.name}</div>
    </div>
  );
};

export default orgCard;
