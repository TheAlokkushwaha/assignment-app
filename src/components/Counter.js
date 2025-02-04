import React, { useState } from 'react';
import { Card } from './ui/card';

const Counter = () => {
  const [count, setCount] = useState(0);

  const getBackgroundHeight = () => {
    return `${Math.min(count * 10, 100)}%`;
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute bottom-0 w-full bg-blue-500 transition-all duration-500 ease-in-out"
        style={{ height: getBackgroundHeight() }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center p-8">
        <Card className="p-6 bg-white/90 shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>
          <div className="space-x-4">
            <button 
              onClick={() => setCount(count + 1)}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Increment
            </button>
            <button 
              onClick={() => setCount(count - 1)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Decrement
            </button>
            <button 
              onClick={() => setCount(0)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Counter;