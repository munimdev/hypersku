import React from "react";

type Props = {
  title: string;
  filter: string[];
};

const ProductFilter: React.FC<Props> = ({ title, filter }) => {
  return (
    <div className="w-full border border-gray-200 py-4">
      <p className="text-center">{title}</p>
      <hr className="my-5" />
      <div className="flex flex-col items-center">
        <div>
          {filter.map((item, idx) => (
            <div className="flex items-center gap-y-5 mb-4">
              <input
                id={`date-radio-${idx}`}
                type="radio"
                value=""
                name={`${title.toLowerCase()}-radio`}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-600"
              />
              <label
                htmlFor={`date-radio-${idx}`}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {item}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
