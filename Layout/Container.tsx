import React from "react";

function Container({ children }: any) {
  return (
    <div
      style={{ maxWidth: "1300px", margin: "0 auto" }}
      className="relative px-4"
    >
      {children}
    </div>
  );
}

export default Container;
