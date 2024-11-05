import React, { useState } from 'react';
import SelfMapVisualization from './SelfMapVisualization';

const defaultData = {
  "Self Map 9": {
    "Name": "Priya Sharma",
    "Age": 30,
    "Gender": "Female",
    "Racial Attributes": {
      "Description": "South Asian",
      "Attachment Strength": 8
    },
    "Family": {
      "Mother": 9,
      "Younger Sister": 8,
      "Father": 4
    },
    "Morals / Ethics / Values / Philosophy": {
      "Independence": 8,
      "Personal Growth": 8,
      "Open-mindedness": 8
    }
  }
};

export default function App() {
  const [jsonInput, setJsonInput] = useState(JSON.stringify(defaultData, null, 2));
  const [currentData, setCurrentData] = useState(defaultData);
  const [error, setError] = useState<string | null>(null);

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.target.value);
    try {
      const parsed = JSON.parse(e.target.value);
      setCurrentData(parsed);
      setError(null);
    } catch (err) {
      setError('Invalid JSON format');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Input JSON Data</h2>
          <div className="space-y-4">
            <textarea
              value={jsonInput}
              onChange={handleJsonChange}
              className="w-full h-64 p-4 font-mono text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Paste your JSON here..."
            />
            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}
          </div>
        </div>
        
        <SelfMapVisualization data={currentData} />
      </div>
    </div>
  );
}