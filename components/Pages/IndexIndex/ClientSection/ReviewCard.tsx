import React from 'react'
import UpQuoteIcon from '../../../Global/Icons/UpQuoteIcon';

function ReviewCard() {
  return (
    <div className="rounded-lg ml-4 mg:ml-0 border space-y-4 max-w-2xl  p-6">
      <p className="text-zinc-400">
        <UpQuoteIcon />
      </p>
      <p>
        it has survived not only five centureies, but aslo the leap into
        electronic typesetting, remaining essentially best for theis unchanged.
      </p>
      <p className="float-right rotate-180 text-zinc-400">
        <UpQuoteIcon />
      </p>
      <div className="flex pt-5 items-center  space-x-3 mt-4">
        <img
          src="/images/male2.jpg"
          alt="males"
          className="rounded-full w-[50px] h-[50px] object-cover"
        />
        <div>
          <h4 className="font-medium text-textColor">Shawn Mendes</h4>
          <p className="text-zinc-500">United State</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard