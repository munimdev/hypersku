import React from "react";

type Props = {
  name: string;
};

const Category: React.FC<Props> = ({ name }) => {
  return (
    <div className="border border-gray-200 py-4 px-3 flex flex-row gap-3 hover:bg-gray-200 cursor-pointer">
      <span>+</span>
      <span>{name}</span>
    </div>
  );
};

export default Category;
