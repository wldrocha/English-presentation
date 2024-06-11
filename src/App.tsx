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
import stylesPet from './pet.module.css'

function App() {
  return (
    <main className='grid grid-cols-2 place-items-center gap-2'>
      <section className='w-9/12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <figure className='flex flex-col items-center'>
          <img src={myPic} alt='' className='rounded-full w-9/12' />
          <figcaption>
            <h1 className=' my-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>
              I'm Wladimir Rocha
            </h1>
            <p className='mb-3 text-2xl text-center font-normal text-gray-700 dark:text-gray-400'>I'm 30 years old</p>
          </figcaption>
        </figure>
      </section>
      <section className='w-9/12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <figure>
          <img
            src={myLovePic}
            alt=''
            className='object-left-top w-full rounded-t-lg h-96 md:h-auto w-3/6  md:rounded-none md:rounded-s-lg'
          />
        </figure>
        <div className={stylesHeart['container-heart']}>
          <div className={stylesHeart.heart} />
        </div>
        <h2 className=' my-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>Alondra</h2>
      </section>
      <section className='w-9/12 h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center'>
        <div className='flex justify-center w-full'>
          <figure className='flex items-center'>
            <img
              src={chessPic}
              alt=''
              className={`${stylesSports.chess} object-left-top w-full  rounded-t-lg h-96 md:h-auto w-40 md:rounded-none md:rounded-s-lg`}
            />
          </figure>
          <figure className='flex items-center'>
            <img
              src={baseballPic}
              alt=''
              className={`${stylesSports.baseball} object-left-top w-full  rounded-t-lg h-96 md:h-auto w-40 md:rounded-none md:rounded-s-lg`}
            />
          </figure>
        </div>
        <h2 className='mt-4 my-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>
          Sports
        </h2>
      </section>
      <section className='w-9/12 h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center'>
        <div className='flex justify-center w-full'>
          <figure className='flex justify-center items-center overflow-hidden size-72'>
            <img src={momPic} alt='' className={` object-top w-full h-96 md:h-auto w-40 `} />
          </figure>
          <figure className='flex justify-center items-center overflow-hidden size-72'>
            <img src={dadPic} alt='' className={` object-top w-full h-96 md:h-auto w-40 `} />
          </figure>
        </div>
        <h2 className='mt-4 my-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>
          Parents
        </h2>
      </section>
      <section className='w-9/12 h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center'>
        <div className='flex justify-center w-full'>
          <figure className='flex justify-center items-center overflow-hidden size-72'>
            <img src={pizzaPic} alt='' className={` object-top w-full h-96 md:h-auto w-40 `} />
          </figure>
          <figure className='flex justify-center items-center overflow-hidden size-72'>
            <img src={passionFruitPic} alt='' className={` object-top w-full h-96 md:h-auto w-40 `} />
          </figure>
        </div>
        <h2 className='mt-4 my-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>
          Parents
        </h2>
      </section>
      <section className='w-9/12 h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center'>
        <div className='flex justify-center w-full'>
          <figure className={`${stylesPet.pet} flex items-center`}></figure>
        </div>
        <h2 className='mt-4 my-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>Pet</h2>
      </section>
    </main>
  )
}

export default App
