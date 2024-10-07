import shareeOne from '../assets/sharee-01.jpg'
import shareeTwo from '../assets/sharee-02.jpg'
import shareeThree from '../assets/sharee-03.jpg'

export default function ProductRelatedImage() {
    return (
        <div className="lg:w-5/6 mx-auto mt-5 mb-5">
            <div className="divider"><h1 className="text-center text-green-800 text-xl font-bold mb-2">Product Related Image</h1></div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-6">

                <div className="shadow-2xl flex justify-center items-center flex-col px-3 py-3">
                    <img src={shareeOne} alt="Centered Image"/>
                    <h1 class="mt-2 text-[16px] text-center">Trendy and Fashionable Tangail Tat Full Body Exclusive Pure Nakful Jamdani Saree Saree For Women</h1>
                </div>
                <div className="shadow-2xl flex justify-center items-center flex-col px-3 py-3">
                    <img src={shareeTwo} alt="Centered Image"/>
                    <h1 class="mt-2 text-[16px] text-center">Design Tangail Satkathan Saree for Woman - Fashionable Tangail Satkathan Saree</h1>
                </div>
                <div className="shadow-2xl flex justify-center items-center flex-col px-3 py-3">
                    <img src={shareeThree} alt="Centered Image"/>
                    <h1 className="mt-2 text-[16px] text-center">Trendy and Fashionable Tangail Tat Full Body Exclusive Pure Nakful Jamdani Saree Saree For Women</h1>
                </div>
                
               
            </div>
        </div>
    )
}
