"use client";

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
    <div className="my-32 w-full space-y-24">
      <div>
        {/* Magic Line */}
        <div className="flex justify-start">
          <div className="border-4 border-gradient w-1/3"></div>
        </div>
        <h1 className="text-4xl font-semibold text-center">Testimonial</h1>
        {/* Magic Line */}
        <div className="flex justify-end">
          <div className="border-4 border-gradient w-1/3"></div>
        </div>
      </div>

      <div className="flex justify-center relative">
        <div className="-bottom-12">
          <img
            className="h-16 w-16 top-0 rounded-full -top-8"
            src="img/quotes.png"
            alt="Testimonial Image"
          />
        </div>
        <div className="flex flex-col shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] items-center justify-center w-[50vw]">
          <div className="shadow-lg border col-span-2 border-gray-500 rounded">
            {/* <!-- Magic Dots --> */}
            <div className="relative flex p-4 justify-between border-b border-gray-500">
              <h3 className="text-lg font-bold flex justify-center items-center">
                <img
                  className="h-16 w-16 -top-12 rounded-full"
                  src={testimonial.img}
                  alt=""
                />
                {testimonial.name}
              </h3>
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
            <p className="p-4">{testimonial.comment}</p>
          </div>
        </div>
        <div>
          <img
            className="h-16 w-16 ml-4 -bottom-12 rounded-full absolute bottom-0 transform rotate-180"
            src="img/quotes.png"
            alt="Testimonial Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
