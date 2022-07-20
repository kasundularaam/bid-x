import React from "react";
import { useNavigate } from "react-router-dom";

const OrgCard = ({ org }) => {
  const navigate = useNavigate();
  return (
    <div
      className="orgCard"
      onClick={() => navigate(`/organizations/${org._id}`, { state: org })}
    >
      <img src={org.logo} alt="" className="round_img" />
      <div>{org.name}</div>
    </div>
  );
};

export default OrgCard;
