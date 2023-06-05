// // export default Testimonial;
"use client";
// import { useEffect, useState } from "react";

// const testimonials = [
// {
//   id: 1,
//   name: "John Doe",
//   comment:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum tortor eu pharetra pellentesque.",
// },
// {
//   id: 2,
//   name: "Jane Smith",
//   comment:
//     "Sed pulvinar, leo a vestibulum tempus, tortor dui blandit velit, vitae ullamcorper urna mauris non magna.",
// },
// {
//   id: 3,
//   name: "Jane Goal",
//   comment:
//     "Sed pulvinar, leo a vestibulum tempus, tortor dui blandit velit, vitae ullamcorper urna mauris non magna.",
// },
//   // Add more testimonials as needed
// ];

// const Testimonial = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) =>
//         prev === testimonials.length - 1 ? 0 : prev + 1
//       );
//     }, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const handleNext = () => {
//     setCurrentTestimonial((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentTestimonial((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const testimonial = testimonials[currentTestimonial];

//   return (
//     <div className="my-24 min-h-screen w-full space-y-24 ">
//       <div>
//         <h1 className="text-7xl text-center">Testimonial</h1>
//       </div>

//       <div className=" flex justify-center item">
//         <img
//           className="h-16 w-16 rounded-full"
//           src="img/quotes.png"
//           alt="Testimonial Image"
//         />
//         <div className="flex flex-col items-center justify-center w-[50vw] ">
//           <div className="shadow-lg border col-span-2 border-gray-500 rounded">
//             {/* <!-- Magic Dots --> */}
//             <div className="relative flex p-4 justify-between  border-b border-gray-500">
//               <h3 className="text-lg font-bold flex justify-center items-center">
//                 <img
//                   className="h-16 w-16 rounded-full"
//                   src="https://www.clipartmax.com/png/small/17-172602_computer-icons-user-profile-male-portrait-of-a-man.png"
//                   alt=""
//                 />
//                 {testimonial.name}
//               </h3>
//               <div className="flex gap-2 items-center">
//                 {testimonials.map((_, index) => (
//                   <div
//                     key={index}
//                     className={`w-3 h-3 rounded-full ${
//                       index === currentTestimonial
//                         ? "bg-blue-500"
//                         : "bg-gray-400"
//                     }`}
//                     onClick={() => setCurrentTestimonial(index)}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//             <p className="p-4">{testimonial.comment}</p>
//           </div>
//         </div>
//         <img
//           className="h-16 w-16 rounded-full transform rotate-180"
//           src="img/quotes.png"
//           alt="Testimonial Image"
//         />
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum tortor eu pharetra pellentesque.",
    img: "/img/testimonial/test1.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment:
      "Sed pulvinar, leo a vestibulum tempus, tortor dui blandit velit, vitae ullamcorper urna mauris non magna.",
    img: "/img/testimonial/test3.png",
  },
  {
    id: 3,
    name: "Jane Goal",
    comment:
      "Sed pulvinar, leo a vestibulum tempus, tortor dui blandit velit, vitae ullamcorper urna mauris non magna.",
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
    <div className="mt-48 h-screen w-full space-y-24">
      <div>
        <h1 className="text-7xl text-center">Testimonial</h1>
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
