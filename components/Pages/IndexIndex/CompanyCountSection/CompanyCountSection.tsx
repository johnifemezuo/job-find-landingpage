import React from "react";
import Container from "../../../../Layout/Container";

function CompanyCountSection() {
  return (
    <div className="lg:h-[300px] h-[350px]  relative  overflow-hidden">
      <img src="/images/unspleashpeople.jpg" alt="people" className="h-[350px] md:h-auto object-cover "  />
      <div className=" bg-black/50 absolute place-content-center inset-0 ">
        <Container>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-6 py-20 place-content-center">
            <div className="space-y-4 text-center text-white">
              <h2 className="font-bold text-2xl lg:text-7xl">150</h2>
              <hr className="w-12 mx-auto" />
              <p className="font-medium text-lg lg:text-xl">Jobs Every Day</p>
            </div>

            <div className="space-y-4 text-center text-white">
              <h2 className="font-bold text-2xl lg:text-7xl">150</h2>
              <hr className="w-12 mx-auto" />
              <p className="font-medium text-lg lg:text-xl">Jobs Every Day</p>
            </div>

            <div className="space-y-4 text-center text-white">
              <h2 className="font-bold text-2xl lg:text-7xl">150</h2>
              <hr className="w-12 mx-auto" />
              <p className="font-medium text-lg lg:text-xl">Jobs Every Day</p>
            </div>

            <div className="space-y-4 text-center text-white">
              <h2 className="font-bold text-2xl lg:text-7xl">150</h2>
              <hr className="w-12 mx-auto" />
              <p className="font-medium text-lg lg:text-xl">Jobs Every Day</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default CompanyCountSection;
