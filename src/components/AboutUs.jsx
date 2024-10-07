import aboutUs from '../assets/about-us.jpg'

export default function AboutUs() {
  return (
    <div className="lg:w-5/6 mx-auto mt-5 pb-6">
            <div className="divider"><h1 className="text-center text-green-800 text-xl font-bold mb-2">About Us</h1></div>
            <p className='text-center text-lg'>Welcome to Dream Shop, where fashion meets passion! We are a dedicated online clothing store that prides itself on offering the latest trends, timeless classics, and unique pieces that suit every style and occasion. Whether you're looking for chic casual wear, elegant evening outfits, or something in between, we’ve got you covered.</p>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                <div className="flex justify-center items-center flex-col px-3 py-3">
                    <img src={aboutUs} alt="Centered Image"/>
                   
                </div>
                <div className="flex flex-col px-3 py-3">
                   
                    <h1 className="mt-3 text-[16px] font-bold">Our Mission</h1>
                    <p className='mt-3 text-[16px] text-justify'>At Dream Shop, our mission is simple: to empower individuals to express themselves through fashion. We believe that what you wear is an extension of who you are, and we are here to help you find pieces that resonate with your personality, boost your confidence, and make you feel amazing.</p>
                    <h1 className="mt-3 text-[16px] font-bold">Quality and Affordability</h1>
                    <p className='mt-3 text-[16px] text-justify'>We are committed to providing our customers with high-quality clothing at affordable prices. Every item in our collection is carefully curated to ensure it meets the highest standards of craftsmanship, durability, and design. Fashion should be accessible to everyone, and we strive to make that a reality.</p>
                    <h1 className="mt-3 text-[16px] font-bold">Join the Dream Shop Community</h1>
                    <p className='mt-3 text-[16px] text-justify'>We believe fashion is more than just clothing—it’s a lifestyle. Follow us on social media and subscribe to our newsletter to stay updated with the latest trends, exclusive deals, and styling tips. We can’t wait to see how you express your unique style with Dream Shop!</p>
                </div>
            </div>
        </div>
  )
}
