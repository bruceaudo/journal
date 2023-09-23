import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React from "react";

type Loader2Props = {};

const Loader2: React.FC<Loader2Props> = () => {
  return (
    <div className="bg-white h-12 w-12 z-50 flex items-center justify-center rounded-lg shadow-xl">
          <div className="animate-spin">
              <ArrowPathIcon className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Loader2;
