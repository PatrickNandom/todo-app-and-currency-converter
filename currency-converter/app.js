import express from 'express';
import axios from 'axios';
const app = express();
// import { postRouter } from './routers/posts.js';
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use("/posts", postRouter);

// app.get('/convert', (req, res) => {
//     res.render('index')
// })

app.get('/convert', async (req, res) => {
    const { from, to, amount } = req.body;
    const apiKey = '788a2d525b8040cb7d3bd20feaf3c021';
    const apiUrl = `https://manage.exchangeratesapi.io/dashboard/convert?from=${from}&to=${to}&amount=${amount}&apiKey=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        const result = response.data;
        res.send(`Converted amount: ${result}`);
    } catch (error) {
        res.send('Error converting currency');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
