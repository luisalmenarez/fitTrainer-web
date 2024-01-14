"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "@/components/shared/container";
import Title from "@/components/ui/tite";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { trainingImages } from "@/assets/data";
import TrainingImages from "./ui/training-images";

const TrainingSection = () => {
  return (
    <section
      id="training"
      className="training__sessions relative min-h-screen flex items-center justify-center">
      <Image
        src="/images/heroTraining.jpg"
        alt="Hero image"
        layout="fill"
        objectFit="cover"
        className="object-cover"
      />
      <div className="absolute bg-black bg-opacity-75 left-0 top-0 w-full h-full" />
      <Container>
        <Title title="Sesiones de" titleColor="entrenamiento" />
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
            <div className="w-full grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
            {trainingImages.map((img, index) => (
              <SwiperSlide key={index}>
                <TrainingImages url={img.image} alt={img.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default TrainingSection;
