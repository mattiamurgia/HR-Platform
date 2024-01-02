import React from "react";
import HeadingFaq from "./HeadingFaq";
import AccordionFaq from "./AccordionFaq";
import useGetTableDB from "../../../hook/useConnectDB";
import { Card } from "../../../types/Card";
import Spinner from "../../mainComponents/spinner/Spinner";

const SectionFaq = () => {
  const faqCard: Pick<Card, "id" | "title" | "description">[] =
    useGetTableDB("FAQ");

  return (
    <div className="flex min-[992px]:flex-row items-center justify-center h-full p-20 md:gap-11 bg-dirty-white flex-col w-screen border-solid border-b-[1px] border-second-green">
      <HeadingFaq />
      <div className="w-screen px-8 md:w-10/12">
        {faqCard ? (
          faqCard.map(({ title, description }, index) => (
            <AccordionFaq
              title={title}
              id={index.toString()}
              description={description}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default SectionFaq;
