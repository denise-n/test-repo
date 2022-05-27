import React, { useEffect } from "react";

export const TestComponent = () => {
  useEffect(() => {
    console.log("in test component");
  }, []);
  return (
    <div>
      <h1>Test Component</h1>
      <h2>new tesxt</h2>
    </div>
  );
};
