import React from "react";
import { Separator } from "@/components/ui/separator";

type Props = {
  title: string;
};
const Section: React.FC<Props> = ({ title }) => {
  return (
    <div className="my-5">
      <h3 className="font-bold">Best Seller</h3>
      <Separator className="my-4" />
      <div className="grid grid-cols-4 gap-5"></div>
    </div>
  );
};

export default Section;
