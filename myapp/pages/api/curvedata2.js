import React from "react";

function generateGraphPoints2() {
    const numPoints = 35; // Number of points to generate
    const minValue = 150; // Minimum value for the points
    const maxValue = 350; // Maximum value for the points
    const amplitude = (maxValue - minValue) / 2;
    const midpoint = (maxValue + minValue) / 2;
    const randomnessFactor = 50; // Adjust this to control the randomness of the points
    const points = [];
  
    for (let i = 0; i < numPoints; i++) {
      const x = i; // Increment by 7 days
      const y =
        amplitude * Math.sin((2 * Math.PI * i) / numPoints) +
        midpoint +
        (Math.random() * randomnessFactor - randomnessFactor / 2);
      points.push({ x, y });
    }
  
    return points;
  }
  
  // Example usage
const graphPoints = generateGraphPoints2();
console.log(graphPoints);
  
export default async function handler(req, res) {
    try {
        const graphPoints = await generateGraphPoints2();
        res.status(200).json(graphPoints);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}