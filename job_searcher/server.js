import express from 'express';
import {connectDB} from './config/db.js'
// import productRouter from './routes/Product.js';



const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    
});

// app.use('/api/product',productRouter)

console.log('monogo_URI:', process.env.mongo_URI);

app.listen(3000, () => {
    // connectToDatabase()
    console.log('Server is running at http://localhost:3000');
});