"use client";

import MagicLine from "@/components/SubComponent/MagicLine";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    comment:
      "Career coaching changed everything. Identified strengths, set goals, achieved success. Thriving in new job.",
    img: "/img/testimonial/test1.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment:
      "Engaging app, gamified lessons. Now confidently speak and understand a new language. Highly recommended!",
    img: "/img/testimonial/test3.png",
  },
  {
    id: 3,
    name: "Jane Goal",
    comment:
      "Stress-free finances, secure future. Expert financial planner optimized investments, reduced debt, created savings plan.",
    img: "/img/testimonial/test2.png",
  },
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const value = 4.7;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="w-full space-y-24 py-16 ">
      <div>
        <MagicLine title="Testimonial" />
      </div>

      <div className="flex justify-center relative">
        <div className="">
          <Image
            className="h-16 w-16 rounded-full absolute md:left-[160px] left-0  top-[-80px]"
            height={64}
            width={64}
            src="/img/quotes.png"
            alt="Testimonial Image"
          />
        </div>
        <div className="flex flex-col shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] items-center justify-center w-[250px] md:w-[800px]">
          <div className="shadow-lg border col-span-2 border-gray-500 rounded">
            {/* <!-- Magic Dots --> */}
            <div className="relative flex p-4 justify-end border-b border-gray-500">
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-5 h-5 rounded-full ${
                      index === currentTestimonial
                        ? "bg-blue-500"
                        : "bg-gray-400"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  ></div>
                ))}
              </div>
            </div>
            <p className="block text-base p-2 md:text-2xl mt-4 text-center">
              {testimonial.comment}
            </p>
            <div className="text-lg mt-8 mb-4 font-bold flex flex-col justify-center items-center">
              <Image
                className="h-24 w-24 rounded-full"
                src={testimonial.img}
                height={64}
                width={64}
                alt=""
              />
              <span className="block text-lg font-semibold">
                {testimonial.name}
              </span>

              <span className=" block flex-col justify-center items-center">
                <Box
                  sx={{
                    // width: 200,
                    marginY: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="text-feedback"
                    value={value}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </Box>
              </span>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="h-16 w-16 ml-4  rounded-full absolute bottom-[-80px] transform rotate-180"
            src="/img/quotes.png"
            height={64}
            width={64}
            alt="Testimonial Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
