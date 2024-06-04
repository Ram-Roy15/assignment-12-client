import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";
import Slide2 from "./Slide2";

const Carosel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={`https://i.ibb.co/nsWL0rs/image.png`}
            text={
              "Are you looking for a great way to help others, learn new skills, gain experience, build your resume, and meet more people? Try volunteering! There are many ways you can assist those in need, whether it's in your own neighborhood or on the other side of the world. 1st Financial Bank USA believes in the importance of giving back. Here are 25 different ways to volunteer in your community."
            }
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide2
            image={"https://i.ibb.co/SPQT9ky/image.png"}
            text={
              "Volunteering can help you gain experience in skill sets that many employers want. For example, nonprofits frequently need help with accounting, marketing, event planning, and much more.Volunteering is also a great way for you to test out a new job if you arent sure you want to shift to a new career. You may not experience the full range of job duties, but it does give you a sneak peek of your possible new career"
            }
          ></Slide2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carosel;
