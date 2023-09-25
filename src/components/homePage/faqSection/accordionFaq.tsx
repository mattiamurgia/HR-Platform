import React from "react";
import { Card } from "../../../types/Card";

const AccordionFaq = ({
  id,
  title,
  description,
}: Pick<Card, "id" | "title" | "description">) => {
  return (
    <div id="accordion-collapse" data-accordion="collapse" className="my-5">
      <h2 id={`accordion-collapse-heading-${id}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left border text-second-green border-second-green rounded-xl focus:ring-transparent"
          data-accordion-target={`#accordion-collapse-body-${id}`}
          aria-expanded="false"
          aria-controls={`accordion-collapse-body-${id}`}
        >
          <span className="font-semibold">{title}</span>
          <div className="p-3.5 bg-second-green rounded-md">
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
                className="text-main-green"
              />
            </svg>
          </div>
        </button>
        <div
          id={`accordion-collapse-body-${id}`}
          className="hidden"
          aria-labelledby={`accordion-collapse-heading-${id}`}
        >
          <div className="p-5 ">
            <p className="mb-2 text-second-green ">{description}</p>
          </div>
        </div>
      </h2>
    </div>
  );
};

export default AccordionFaq;
