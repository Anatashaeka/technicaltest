import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const DetailPage = () => {
  const [dataProduk, setDataProduk] = useState([])
  let { slug } = useParams()
  console.log(slug)

  useEffect(() => {
    if (slug !== undefined) {
      axios.get(`https://dummyjson.com/products/${slug}`).then(res => {
        let result = res.data
        console.log(result)
        setDataProduk(result)
      })
    }
  }, [])

  return (
    <>
      <div>
        <h3 className='text-center'>Detail Produk</h3>
        <div className='container text-left border border-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
          <div className='row pt-2 pb-2 pl-3 '>
            <div className='col-4 h-auto'>
              <img
                alt='foto produk'
                src={dataProduk.thumbnail}
                class='img-fluid rounded w-auto h-auto mt-3'
              />
            </div>
            <div className='col h-auto mt-3 ml-5'>
              <h6> Title : {dataProduk.title}</h6>
              <h6>Price : {dataProduk.price}</h6>
              <h6>Rating : {dataProduk.rating}</h6>
              <h6 className='text-right mr-3'>
                Discount : {dataProduk.discountPercentage} %
              </h6>
            </div>
          </div>
          <div className='pl-3 mt-2'>
            <p>Description : {dataProduk.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPage
