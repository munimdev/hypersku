import React from "react";

type Props = {
  title: string;
  filter: {
    name: string;
    value: string;
  }[];
  onChange: (value: string) => void;
};
const ProductFilter: React.FC<Props> = ({ title, filter, onChange }) => {
  return (
    <div className="w-full py-4 border border-gray-200">
      <p className="text-center">{title}</p>
      <hr className="my-5" />
      <div className="flex flex-col items-center">
        <div>
          {filter.map((item, idx) => (
            <div key={idx} className="flex items-center mb-4 gap-y-5">
              <input
                id={`${title.toLowerCase()}-radio-${idx}`}
                type="radio"
                value={item.value}
                name={`${title.toLowerCase()}-radio`}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-600"
                onChange={(e) => {
                  if (e.target.checked) {
                    onChange(e.target.value);
                  }
                }}
              />
              <label
                htmlFor={`${title.toLowerCase()}-radio-${idx}`}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {item.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
