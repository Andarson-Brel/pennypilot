import React from "react";

const OnboardingCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center p-3 text-center gap-3 py-4">
      <img src={image} alt={title} />
      <h2 className=" text-dark_100 text-3xl font-bold">{title}</h2>
      <p className="  text-light_20">{description}</p>
    </div>
  );
};

export default OnboardingCard;
