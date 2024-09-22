"use client";
// This is a heavy computation function that blocks the main thread
function heavyComputation() {
  const start = Date.now();
  let count = 0;
  // Loop that simulates heavy CPU load for 10 seconds
  while (Date.now() - start < 10000) {
    // Intentionally doing a lot of work
    count += Math.random();
  }
  console.log("Heavy computation finished with count:", count);
}

// A React component that triggers the heavy computation on mount
import { useEffect } from "react";

const HeavyComponent = () => {
  useEffect(() => {
    heavyComputation();
  }, []);

  console.log("init");
  return (
    <div>
      <h1>This component is slow because of heavy computation</h1>
    </div>
  );
};

export default HeavyComponent;
