import React from 'react'

const CardLastSection = () => {
  return (
    <div className="min-[996px]:w-6/12 w-12/12 h-auto py-10 px-5 md:leading-tight leading-normal tracking-wide  text-second-green rounded-3xl border-[1px] border-second-green bg-dirty-white font-medium text-4xl">
      <h5 className="whitespace-pre-wrap">
        Talent Talks #4: Incontra il fotografo e direttore della fotografia.
      </h5>
      <div className="flex flex-row items-center justify-start ">
        <img
          className="mt-6 mb-3 rounded-full w-14 h-14 ring-1 ring-second-green"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="flex flex-col mt-5">
          <h6 className="ml-2 text-sm font-semibold">Alessio Giammaria</h6>
          <p className="ml-2 text-xs font-normal">Settembre 13, 2023</p>
        </div>
      </div>
    </div>
  );
}

export default CardLastSection
