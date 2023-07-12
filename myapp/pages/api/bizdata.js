export default function handler(req, res) {
    if (req.method === 'GET') {
      const totalRevenue = getRandomNumber(1000000, 10000000);
      const totalTransactions = getRandomNumber(1000, 10000);
      const totalLikes = getRandomNumber(1000, 100000);
      const totalUsers = getRandomNumber(100, 8000);
      const data = [
        { 1: totalRevenue },
        { 2: totalTransactions },
        { 3: totalLikes },
        { 4: totalUsers }
      ];
  
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  }
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  