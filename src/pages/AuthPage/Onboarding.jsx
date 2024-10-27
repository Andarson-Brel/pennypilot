import React from "react";

import OnboardingCard from "../../components/Cards/OnboardingCard";
import { Onboardingdata } from "../../Dummy-data/DummyData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Button from "../../components/Buttons/MainBtn";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();
  const handleNavigateSignUp = () => {
    navigate("/sign-up");
  };
  const handleNavigateSignIn = () => {
    navigate("/sign-in");
  };
  return (
    <div className="  ">
      {/* <SplashScreen /> */}

      <div className=" flex flex-col h-screen justify-center ">
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            loop={false}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {Onboardingdata.map((data, index) => (
              <SwiperSlide key={index}>
                <OnboardingCard
                  image={data.image}
                  title={data.title}
                  description={data.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full flex justify-center gap-3 px-4 sm:px-6 md:px-8 lg:px-10">
          <Button type="primary" onClick={handleNavigateSignUp}>
            Sign Up
          </Button>
          <Button type="secondary" onClick={handleNavigateSignIn}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
