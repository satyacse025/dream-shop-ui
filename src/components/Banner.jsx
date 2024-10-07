import bannerImage from '../assets/banner.png'

export default function Banner() {
    return (
        <div className="w-full pt-3 pb-3">
            <section className="lg:w-5/6 mx-auto">
                <figure>
                    <img src={bannerImage} alt="Banner Image" />
                    <figcaption class="mt-2 text-[16px] text-center text-[#34AE9F]"><span className='text-[#B95255]'>D</span><span className='text-[#34AE9F]'>ream </span> <span className='text-[#B95255]'>S</span><span className='text-[#2684C7]'>hop</span> - Your Online Shop Destination</figcaption>
                </figure>
            </section>
        </div>
    )
}
