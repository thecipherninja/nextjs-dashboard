export default function handler(req, res) {
    // Generate three random numbers between 0 and 100
    const random1 = Math.random() * 100;
    const random2 = Math.random() * (100 - random1);
    const random3 = 100 - random1 - random2;
  
    // Create an array with the percentages
    const percentages = [
      { value: random1.toFixed(2) },
      { value: random2.toFixed(2) },
      { value: random3.toFixed(2) },
    ];
  
    // Sort the percentages in descending order
    percentages.sort((a, b) => b.value - a.value);
  
    // Send the percentages as JSON response
    res.status(200).json(percentages);
  }
  