import bannerImage from '../assets/banner.png'

export default function Banner() {
    return (
        <div className="w-full pt-3 pb-3">

<div className="shadow-2xl flex justify-center items-center flex-col px-3 py-3">
                    <img src={bannerImage} alt="Centered Image"/>
                    <h1 class="mt-2 text-[16px] text-center"><span className='text-[#B95255]'>D</span><span className='text-[#34AE9F]'>ream </span> <span className='text-[#B95255]'>S</span><span className='text-[#2684C7]'>hop</span> - Your Online Shop Destination</h1>
                </div>
            
        </div>
    )
}
