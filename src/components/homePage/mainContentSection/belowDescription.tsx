import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const BelowDescription = () => {
  return (
    <div className="flex items-center  p-3 sm:p-4 border-[1px] border-solid rounded-md border-second-green bg-dirty-yellow leading-6">
      <div className="flex justify-center items-center rounded-[50%] bg-second-green w-8 h-8 mr-5">
        <FontAwesomeIcon
          icon={faLightbulb}
          className="m-5 text-end text-dirty-yellow"
        />
      </div>

      <p className="text-second-green">
        Il servizio Agency of Record (AOR) consente ai talenti e alle
        organizzazioni non pagati di lavorare insieme in modo snello e conforme,
        semplificando i rapporti di lavoro transfrontalieri per entrambe le
        parti.
      </p>
    </div>
  );
};

export default BelowDescription;
