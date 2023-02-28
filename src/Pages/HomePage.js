import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function HomePage () {
  const endpoint = 'https://dummyjson.com/products'
  const [dataApi, setDataApi] = useState(null)

  const getData = async () => {
    const response = await axios.get(endpoint)
    console.log(response.data)
    setDataApi(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1 className='text-center'>List Produk</h1>
      <div className='container text-left border border-5 shadow p-3 mb-5 bg-body-tertiary rounded'>
        <div className='App '>
          {dataApi === null
            ? ' Data sedang loading...'
            : dataApi.products.map((item, products) => (
                <div className='container text-left border border-5 mb-5'>
                  <div className='row pt-2 pb-2 pl-3'>
                    <div className='col-4 h-auto'>
                      <div key={products}>
                        <img
                          className='rounded w-auto h-auto img-fluid mt-3 mb-3'
                          alt='foto produk'
                          src={item.thumbnail}
                        />
                      </div>
                    </div>

                    <div className='col h-auto mt-3 ml-5'>
                      <h6>Title : {item.title}</h6>
                      <h6>Brand : {item.brand}</h6>
                      <h6>Price : {item.price}</h6>
                      <h6 className='text-right mr-3'>
                        Discount : {item.discountPercentage} %
                      </h6>

                      <Link to={`/detailpage/${item.id}`}>
                        <button className='btn btn-secondary'>
                          Detail Produk
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}
