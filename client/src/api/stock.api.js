import axios from 'axios';

export const getStockRequest = async() => 
    await axios.get("https://localhost:4000/stock")

export const createStockRequest = async(stock) => 
    await axios.post('http://localhost:4000/stock',stock)
