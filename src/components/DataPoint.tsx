import React from 'react';
import { Point, DataPoint } from '../types/selfMap';

interface DataPointProps {
  point: DataPoint;
  position: Point;
  color: string;
}

export const DataPointComponent: React.FC<DataPointProps> = ({ point, position, color }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <g transform={`translate(${position.x},${position.y})`}>
      <circle
        r={6}
        fill={color}
        stroke="white"
        strokeWidth={2}
        className="transition-all duration-200 cursor-pointer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      {showTooltip && (
        <g transform="translate(10,-10)">
          <rect
            x={0}
            y={0}
            width={120}
            height={60}
            rx={4}
            fill="white"
            stroke="#e2e8f0"
            className="shadow-lg"
          />
          <text x={8} y={20} className="text-sm fill-gray-800">{point.label}</text>
          <text x={8} y={40} className="text-sm fill-gray-600">Value: {point.value}</text>
        </g>
      )}
    </g>
  );
};