import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  const testimonialData = [1, 2, 3, 4];

  return (
    <div className="w-full bg-blue-200">
      {testimonialData.map((data) => (
        <div
          key={data}
          className="flex justify-center items-center w-full bg-gray-300"
        >
          <TestimonialCard />
        </div>
      ))}
    </div>
  );
}

export default Testimonial;
