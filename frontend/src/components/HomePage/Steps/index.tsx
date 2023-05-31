"use client";
import SingleStep from "./SingleStep";

function Steps() {
  const stepsData = [
    {
      id: 1,
      image: "img/Steps/step1.png",
      step: "Step 1",
      title: "Filter & Discover",
      description: "Smart filtering and suggestions make it easy to find",
    },
    {
      id: 2,
      image: "img/Steps/step2.png",
      step: "Step 2",
      title: "Filter & Discover",
      description: "Smart filtering and suggestions make it easy to find",
    },
    {
      id: 3,
      image: "img/Steps/step3.png",
      step: "Step 3",
      title: "Filter & Discover",
      description: "Smart filtering and suggestions make it easy to find",
    },
    {
      id: 4,
      image: "img/Steps/step4.png",
      step: "Step 4",
      title: "Filter & Discover",
      description: "Smart filtering and suggestions make it easy to find",
    },
  ];
  return (
    <div className="flex mx-32">
      {stepsData.map((step) => (
        <div className=" w-full " key={step.id}>
          <SingleStep step={step} />
        </div>
      ))}
    </div>
  );
}

export default Steps;

// import React from 'react';

// interface MyComponentProps {
//   name: string;
//   age: number;
// }

// function MyComponent(props: MyComponentProps) {
//   const { name, age } = props;

//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// }

// export default MyComponent;
