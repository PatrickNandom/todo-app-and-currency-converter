import express from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;

app.get('/convert', async (req, res) => {
    const { from, to, amount } = req.query;
    const apiKey = '788a2d525b8040cb7d3bd20feaf3c021';
    const apiUrl = `https://manage.exchangeratesapi.io/dashboard/convert?from=${from}&to=${to}&amount=${amount}&api_key=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        const result = response.data;
        res.send(`Converted amount: ${result}`);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Error converting currency');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
