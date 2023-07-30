import { TSubCategory } from "@/types/category";
import React from "react";

type Props = {
  navLinks: TSubCategory[];
};

const SubNav: React.FC<Props> = ({ navLinks }) => {
  return (
    <div className="grid grid-cols-4">
      {navLinks.map((link, index) => (
        <div className="col-span-1" key={link.id}>
          <a href="" className="text-blue-600">
            {link.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SubNav;
