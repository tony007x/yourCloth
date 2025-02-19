import {ShoppingBasket} from 'lucide-react'

function PopularShirt() {
    const data = [
        {
            id: 1,
            name: 'Shirt 1',
            theme: 'Casual',
            src: '/images/shirt-1.jpg',
            price: 129.50
        },
        {
            id: 2,
            name: 'Shirt 2',
            theme: 'Vintage',
            src: '/images/shirt-2.jpg',
            price: 90.00
        },
        {
            id: 3,
            name: 'Shirt 3',
            theme: 'Hawaiian',
            src: '/images/shirt-3.jpg',
            price: 219.99
        },
        {
            id: 4,
            name: 'Shirt 4',
            theme: 'Vintage',
            src: '/images/shirt-4.jpg',
            price: 70.00
        }
    ]
  return (
        <div className="flex flex-col w-full items-center px-[65px] justify-center gap-10">

            <h1 className="text-2xl font-extralight text-white max-md:pt-10">Popular Shirts</h1>

        <div className="grid grid-cols-4 w-full h-fit gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {data.map((item) => (
                <div key={item.id} className="flex flex-col bg-[#1f1f1f] backdrop-blur-sm rounded-lg items-center p-4 gap-4 hover:scale-105 transition-all duration-300 shadow-sm shadow-white/10">
                    <div className="flex flex-col w-full items-center group hover:cursor-pointer" onClick={() => {
                        alert('Add to cart')
                    }}>
                        <img src={item.src} alt={item.theme} className="relative w-[400px] h-[300px] object-cover"/>
                        <ShoppingBasket color='white' className="absolute top-7 right-7 w-10 h-10 bg-black/30 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p className="text-sm font-bold text-white/30">{item.theme}</p>
                    <p className="text-sm font-bold text-white">{item.name}</p>
                    <p className="text-xl font-light text-white">${item.price}</p>
                    <div className='flex w-full h-full justify-center items-center gap-2 p-2 group'>
                        <button className='w-10 px-2 py-1 border border-white/30 text-white text-center ac'>S</button>
                        <button className='w-10 px-2 py-1 border border-white/30 text-white text-center transition-all duration-300'>M</button>
                        <button className='w-10 px-2 py-1 border border-white/30 text-white text-center transition-all duration-300'>L</button>
                        <button className='w-10 px-2 py-1 border border-white/30 text-white text-center transition-all duration-300'>XL</button>
                    </div>
                </div>
            ))}
        </div>
        </div>
    )
}

export default PopularShirt