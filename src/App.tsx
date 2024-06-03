import myPic from './assets/my_pic.png'


function App() {
  return (
    <main className='grid grid-cols-2 place-items-center gap-2'>
      <section className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
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
    
    </main>
  )
}

export default App
