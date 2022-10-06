import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
const axios = require('axios');


function App() {
  const [char, setchar] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(function (res) {
        console.log(res.data.products);
        setchar(res.data.products);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
  return (
    <div className="App container">
      <div className='row'>
        {
          char.map((item) => {
            return (
              <>
                <div className='col-12'>
                  <div className='flex main'>
                    <div className='w-30'>
                      <h3 className='title'>{item.title}</h3>
                      <h4>Category:{item.category}</h4>
                      <img src={item.thumbnail} alt="" />
                    </div>
                    <div className='w-70'>
                      <h6 className='main_dis'><h3 className='discri'>Description:</h3>{item.description}</h6>
                      <div className='flex'>
                        <h4 className='price'>Price:{item.price}/-</h4>
                        <h5 className='dis'>Discount:{item.discountPercentage}%</h5>
                      </div>
                      <h5>Rating:{item.rating}</h5>
                      <h4 className='brand'>Brand:{item.brand}</h4>
                      <h5>Stock:{item.stock}</h5>
                      <div className='flex'>
                        <button className='btn1'>Buy now</button>
                        <button className='btn2'>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
      </div>
    </div>
  );
}
export default App;
