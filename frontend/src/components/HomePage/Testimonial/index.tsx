// export default Testimonial;
"use client";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum tortor eu pharetra pellentesque.",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment:
      "Sed pulvinar, leo a vestibulum tempus, tortor dui blandit velit, vitae ullamcorper urna mauris non magna.",
  },
  {
    id: 3,
    name: "Jane Goal",
    comment:
      "Sed pulvinar, leo a vestibulum tempus, tortor dui blandit velit, vitae ullamcorper urna mauris non magna.",
  },
  // Add more testimonials as needed
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
    <div className="my-24 min-h-screen w-full space-y-24 ">
      <div>
        <h1 className="text-7xl text-center">Testimonial</h1>
      </div>
      <div className=" flex justify-center item">
        <div className="flex flex-col items-center justify-center  w-2/3 ">
          <div className="shadow-lg border col-span-2 border-gray-500 rounded">
            {/* <!-- Magic Dots --> */}
            <div className="relative flex p-4 justify-between  border-b border-gray-500">
              <h3 className="text-lg font-bold flex justify-center items-center">
                {/* <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="AccountCircleIcon"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"></path>
                </svg> */}
                <img
                  className="h-16 w-16 rounded-full"
                  src="https://www.clipartmax.com/png/small/17-172602_computer-icons-user-profile-male-portrait-of-a-man.png"
                  alt=""
                />
                {testimonial.name}
              </h3>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
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
      </div>
    </div>
  );
};

export default Testimonial;
