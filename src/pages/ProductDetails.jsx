import React from 'react'
import { useLocation } from 'react-router-dom';


export default function ProductDetails(props) {
    const location = useLocation();

    const shareeId = location.state.id;
    const ahareeImage = location.state.image;
    const shareeName = location.state.name;
    const shareePrice = location.state.price;
    const shareeCategory = location.state.category;
    const shareeLength = location.state.length;
    const shareeTags = location.state.tags.toString();
    const shareeDescription = location.state.description;
    const shareeRating = location.state.rating;

    function sayHello(name) {
        alert(`Sharee ID : ${shareeId}, Sharee Name : ${shareeName} has been successfully added to the ${name}`);
      }

  return (
     <div className="w-full bg-[#F2E9E0]">
            <section className="lg:w-5/6 mx-auto bg-[#F2E9E0] dark:bg-gray-900">
                <div className="grid max-w-screen-xl mb-0 px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

                    <div className="order-first lg:mt-0 lg:col-span-6 lg:flex">
                        <img src={ahareeImage} alt="" />

                    </div>
                    <div className="mr-auto place-self-center lg:col-span-6 md:ml-5 mt-3 md:mt-0">

                        <h1 className="max-w-2xl mb-3 text-lg font-extrabold tracking-tight leading-none md:text-xl xl:text-xl">{shareeName} </h1>
                        <h1 className="mb-3 text-lg tracking-tight leading-none ">Length : {shareeLength} </h1>
                        <h1 className="mb-3 text-lg tracking-tight leading-none ">Category : {shareeCategory} </h1>
                        <h1 className="mb-3 text-lg tracking-tight leading-none ">Price : {shareePrice} </h1>
                        <h1 className="mb-3 text-lg tracking-tight leading-none ">Tags : {shareeTags} </h1>
                        <h1 className="mb-3 text-lg tracking-tight leading-none ">Description : {shareeDescription} </h1>
                        <div className="flex items-center mt-2.5 mb-4">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{shareeRating}</span>
                        </div>
                        <button onClick={() => sayHello('Wishlist')}  className="bg-[#FECD66] inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  ">
                        Wish to Buy
                        </button>
                        <button onClick={() => sayHello('Cart')} className="bg-[#FECD66] ml-5 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 ">
                        Add to Cart
                        </button>
                        
                    </div>
                </div>
            </section>
        </div>
  )
}
