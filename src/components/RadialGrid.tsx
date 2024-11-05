import React from 'react';
import * as d3 from 'd3';

interface RadialGridProps {
  radius: number;
  radiusScale: d3.ScaleLinear<number, number>;
}

export const RadialGrid: React.FC<RadialGridProps> = ({ radius, radiusScale }) => {
  const gridCircles = [2, 4, 6, 8, 10];

  return (
    <g className="radial-grid">
      {gridCircles.map((value) => (
        <circle
          key={value}
          r={radiusScale(value)}
          fill="none"
          stroke="#94a3b8"
          strokeWidth={1.5}
          strokeDasharray="4,4"
        />
      ))}
      <circle
        r={radius}
        fill="none"
        stroke="#64748b"
        strokeWidth={2}
      />
    </g>
  );
};