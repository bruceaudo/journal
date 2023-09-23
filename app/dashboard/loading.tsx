import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React from "react";

type loadingProps = {};

const loading: React.FC<loadingProps> = () => {
  return (
    <div className="absolute z-40 top-0 bottom-0 left-0 right-0 bg-transparent h-screen flex flex-col items-center justify-center">
      <div className="bg-white h-12 w-12 z-50 flex items-center justify-center rounded-lg shadow-xl">
        <div className="animate-spin">
          <ArrowPathIcon className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};
export default loading;
