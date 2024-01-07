"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "@/components/shared/container";
import Title from "@/components/ui/tite";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const TrainingSection = () => {
  return (
    <section
      id="training"
      className="training__sessions min-h-screen flex items-center justify-center">
      <Container>
        <Title title="Training" titleColor="Sessions" />
        <div>
          <Swiper
            spaceBetween={25}
            slidesPerView={3}
            loop={true}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}>
            <SwiperSlide>
              <div className="relative mx-auto w-full h-[70vh]">
                <Image
                  src="/images/training-5.jpg"
                  alt="Image Training"
                  fill
                  className="object-cover rounded-xl shadow-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto w-full h-[70vh]">
                <Image
                  src="/images/training-2.jpg"
                  alt="Image Training"
                  fill
                  className="object-cover rounded-xl shadow-xl opacity-50"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto w-full h-[70vh]">
                <Image
                  src="/images/training-3.jpg"
                  alt="Image Training"
                  fill
                  className="object-cover rounded-xl shadow-xl opacity-50"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto w-full h-[70vh]">
                <Image
                  src="/images/training-4.jpg"
                  alt="Image Training"
                  fill
                  className="object-cover rounded-xl shadow-xl opacity-50"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto w-full h-[70vh]">
                <Image
                  src="/images/training-1.jpg"
                  alt="Image Training"
                  fill
                  className="object-cover rounded-xl shadow-xl opacity-50"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative mx-auto w-full h-[70vh]">
                <Image
                  src="/images/training-6.jpg"
                  alt="Image Training"
                  fill
                  className="object-cover rounded-xl shadow-xl"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default TrainingSection;
