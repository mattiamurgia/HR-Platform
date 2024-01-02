import React, { useContext, useState } from "react";
import { Switch } from "@headlessui/react";
import { stateToggle } from "./ContainerSolution";

const Toggle = () => {
  const toggleState = useContext(stateToggle);
  const [enabled, setEnabled] = useState(true);


  return (
    <Switch
      checked={enabled}
      onClick={toggleState(enabled)}
      onChange={setEnabled}
      className="relative inline-flex items-center md:w-80 w-[300px] border-[1px] border-solid rounded-full bg-dirty-white h-16 border-second-green"
    >
      <span
        className={`${
          enabled ? "translate-x-2" : "right-[3%]"
        } inline-block h-12 w-36 transform rounded-full bg-second-green transition z-10 absolute`}
      />

      <p
        className={`${
          enabled ? "text-main-green z-10" : "text-second-green"
        }  z-10 absolute left-5 text-lg font-medium`}
      >
        Per i talenti
      </p>
      <p
        className={`${
          enabled ? "text-second-green" : "text-main-green"
        } z-10 absolute right-5 text-lg font-medium`}
      >
        Per le imprese
      </p>
    </Switch>
  );
};
export default Toggle;
