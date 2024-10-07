import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const ProductPage=() => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Step 2: Use useEffect to fetch data when the component mounts
  useEffect(() => {
    // Fetch data from an API
    fetch('https://dream-shop-api.vercel.app/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Set the fetched data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // The empty array ensures this runs only once after the component mounts

  // Step 3: Handle loading, error, and display data
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log(data);
  return (
    <div className="bg-white pt-6">
     <div className="w-full">
      <div className='lg:w-5/6 mx-auto'>
      <div className="divider"><h1 className="text-center text-green-800 text-xl font-bold mb-2">All Products</h1></div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-5 mr-5">

          {data?.map((sharee) => (
            <ProductCard key={data.id} sharee={sharee} />
          ))}
        </section>

      </div>
      <br/>
    </div>
   
      </div>
  )
}

export default ProductPage;
