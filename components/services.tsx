"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Container from "./shared/container";
import ItemService from "@/components/ui/item-service";
import Title from "@/components/ui/tite";
import { servicesData } from "@/assets/data";
import Image from "next/image";

const Services = () => {
  return (
    <section
      id="services"
      className="services__section relative min-h-screen flex items-center justify-center mb-10 lg:mb-0">
      <Image
        src="/images/heroServices.webp"
        alt="Hero image"
        layout="fill"
        objectFit="cover"
        className="object-cover"
      />
      <div className="absolute bg-black bg-opacity-75 left-0 top-0 w-full h-full " />
      <Container>
        <Title
          title="Fitness & Nutrición Integral"
          titleColor="Transforma Vida"
        />
        <div>
          <Swiper
            spaceBetween={25}
            slidesPerView={3}
            loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            // navigation={true}
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
            <div className="w-full grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {servicesData.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="grid place-items-center relative mx-auto w-full h-[80vh]">
                    <ItemService
                      image={service.image}
                      title={service.title}
                      description={service.description}
                      thumb={service.thumb}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Services;
