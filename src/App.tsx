import myPic from './assets/my_pic.png'
import myLovePic from './assets/my_love_pic.jpg'
import chessPic from './assets/chess_pic.webp'
import baseballPic from './assets/ball_pic.webp'
import momPic from './assets/mom_pic.jpg'
import dadPic from './assets/dad_pic.jpg'
import pizzaPic from './assets/pizza_pic.png'
import passionFruitPic from './assets/passion_fruit_pic.png'
import stylesHeart from './heart.module.css'
import stylesSports from './sports.module.css'
import stylesParents from './parents.module.css'
import stylesPet from './pet.module.css'
import StyleFoodDrink from './food-drink.module.css'

function App() {
  return (
    <main className='h-full grid grid-cols-1 place-items-center gap-2 bg-blue-50 md:grid-cols-2 xl:grid-cols-3 dark:dark:bg-gray-900'>
      <section className='w-9/12 h-96 p-6 bg-blue-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-evenly'>
        <figure className='flex flex-col items-center'>
          <img src={myPic} alt='' className='rounded-full w-9/12' />
        </figure>
        <h1 className=' my-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>
          I'm Wladimir Rocha
        </h1>
      </section>
      <section className='w-9/12 h-96 p-6 bg-blue-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-evenly'>
        <figure>
          <img
            src={myLovePic}
            alt=''
            className='object-left-top w-full rounded-t-lg h-auto w-3/6  md:rounded-none md:rounded-s-lg'
          />
        </figure>
        <div className={stylesHeart['container-heart']}>
          <div className={stylesHeart.heart} />
        </div>
        <h2 className=' my-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>Alondra</h2>
      </section>
      <section className='w-9/12 h-96 p-6 bg-blue-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-evenly'>
        <div className='flex justify-center w-full'>
          <figure className='flex items-center'>
            <img
              src={chessPic}
              alt=''
              className={`${stylesSports.chess} object-left-top w-full  rounded-t-lg h-auto w-40 md:rounded-none md:rounded-s-lg`}
            />
          </figure>
          <figure className='flex items-center'>
            <img
              src={baseballPic}
              alt=''
              className={`${stylesSports.baseball} object-left-top w-full  rounded-t-lg h-auto w-40 md:rounded-none md:rounded-s-lg`}
            />
          </figure>
        </div>
        <h2 className='mt-4 my-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>
          Sports
        </h2>
      </section>
      <section className='w-9/12 h-96 p-6 bg-blue-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-evenly'>
        <div className='flex justify-center w-full'>
          <figure className='flex justify-center items-center overflow-hidden size-72'>
            <img src={momPic} alt='' className={` object-top w-full h-auto w-40 `} />
          </figure>
          <figure className='flex justify-center items-center overflow-hidden size-72'>
            <img src={dadPic} alt='' className={` object-top w-full h-auto w-40 `} />
          </figure>
        </div>
        <h2 className='mt-4 my-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>
          Parents
        </h2>
      </section>
      <section className='w-9/12 h-96 p-6 bg-blue-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-evenly'>
        <div className='flex justify-center w-full'>
          <figure className='flex justify-center items-center overflow-hidden size-72'>
            <img src={pizzaPic} alt='' className={`${StyleFoodDrink['fade-in']} object-top w-full  h-auto w-40 `} />
          </figure>
          <figure className='flex justify-center items-center overflow-hidden size-72'>
            <img
              src={passionFruitPic}
              alt=''
              className={`${StyleFoodDrink['fade-out']} object-top w-full  h-auto w-40 `}
            />
          </figure>
        </div>
        <h2 className='mt-4 my-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>
          Food and drink
        </h2>
      </section>
      <section className='w-9/12 h-96 p-6 bg-blue-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-evenly'>
        <div className='flex justify-center w-full'>
          <figure className={`${stylesPet.pet} flex items-center`}></figure>
        </div>
        <h2 className='mt-4 my-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>Pet</h2>
      </section>
    </main>
  )
}

export default App
