import './App.css';
import './Component/App.css'
import React, { useState, useEffect } from 'react'
import Products from './Component/Products/Products'


export default function App() {

  const [info, setinfo] = useState([])

  useEffect(() => {

    fetch('https://fakestoreapi.com/products/')
      .then(response => {

        if (response.status !== 200) {
          console.log(`error ${response.status}`)
        } response.json()
          .then(data => {
            // console.log(data)
            // console.log(data[0].title)
            setinfo(data)

          })

          .catch(err => {
            console.error(err);
          });

      })

  },[])
  

  const AddItem = () => {
    fetch('https://fakestoreapi.com/products', {
      method: "POST",
      body: JSON.stringify(
        {
          title: 'test product',
          price: 13.5,
          description: 'lorem ipsum set',
          image: 'https://i.pravatar.cc',
          category: 'electronic'
        }
      )
    })
      .then(response => {

        if (response.status !== 200) {
          console.log(`error ${response.status}`)
        } response.json()
          .then(addItem => {

            setinfo(addItem)
            
          }).then(
            console.log(info)
          )

          .catch(err => {
            console.error(err);
          });
      })
  }



  return (

    <div className="body">
      <Products data={info} />
      <button onClick={AddItem}>Add item</button>
    </div>

  );
}

