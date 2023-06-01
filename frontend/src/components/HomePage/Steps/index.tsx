"use client";

import SingleStep from "./SingleStep";

function Steps() {
  const stepsData = [
    {
      id: 1,
      image: "img/Steps/step1.svg",
      step: "Step 1",
      title: "Filter & Discover",
      description: "Smart filtering and suggestions make it easy to find",
      extraStyle: "text-red-800 bg-red-100",
    },
    {
      id: 2,
      image: "img/Steps/step2.svg",
      step: "Step 2",
      title: "Filter & Discover",
      description: "Smart filtering and suggestions make it easy to find",
      extraStyle: "text-indigo-800 bg-indigo-100",
    },
    {
      id: 3,
      image: "img/Steps/step3.svg",
      step: "Step 3",
      title: "Filter & Discover",
      description: "Smart filtering and suggestions make it easy to find",
      extraStyle: "text-yellow-800 bg-yellow-100",
    },
    {
      id: 4,
      image: "img/Steps/step4.svg",
      step: "Step 4",
      title: "Filter & Discover",
      description: "Smart filtering and suggestions make it easy to find",
      extraStyle: "text-purple-800 bg-purple-100",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 my-5 mx-16 border-b border-t  border-slate-300">
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
