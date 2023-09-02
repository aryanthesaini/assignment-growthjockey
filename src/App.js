export default function App() {
  return (
    <>
      <div className='flex justify-center items-center h-[100vh] w-full bg-black'>
        <div className='h-[80%] w-[80%] md:w-[60%] bg-[#24232b] '>
          <div className='mx-auto md:w-[50%] md:text-center text-white md:text-3xl text-xl pt-[24px] pb-[32px] md:px-0 px-[24px]'>
            <div class='mx-auto max-w-screen-xl '>
              <div class='flex items-center justify-between'>
                <div class=' text-left'> PS3&SVBIA</div>

                <div class=' flex text-right  flex-row items-center '>
                  <svg
                    fill='#cbdccb'
                    height='30px'
                    width='30px'
                    version='1.1'
                    id='Layer_1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 442 442'
                    xmlSpace='preserve'>
                    <g>
                      <polygon points='291,0 51,0 51,332 121,332 121,80 291,80 	' />
                      <polygon points='306,125 306,195 376,195 	' />
                      <polygon points='276,225 276,110 151,110 151,442 391,442 391,225 	' />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className='px-[24px] pb-[24px]'>
            <span className='text-[#808080]  text-bold  text-xl'>
              Character Length
            </span>
            <span
              role='progressbar'
              aria-labelledby='ProgressLabel'
              aria-valuenow='75'
              className='my-4 block rounded-full bg-black'>
              <span
                class='block h-3 rounded-full bg-[#28ABAB]'
                style={{ width: '25%' }}></span>
            </span>
          </div>

          <div className='px-[24px] text-[#808080]'>
            <div class='flex items-center  border-gray-200 rounded dark:border-gray-700 text-[#808080]'>
              <input
                id='bordered-checkbox-1'
                type='checkbox'
                value=''
                name='bordered-checkbox'
                class='w-4 h-4  bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 text-[#808080]'
              />
              <label
                for='bordered-checkbox-1'
                class='w-full py-2 ml-2 text-md font-medium  text-[#808080]'>
                Include Uppercase Letters
              </label>
            </div>
            <div class='flex items-center  border-gray-200 rounded dark:border-gray-700'>
              <input
                id='bordered-checkbox-1'
                type='checkbox'
                value=''
                name='bordered-checkbox'
                class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label
                for='bordered-checkbox-1'
                class='w-full py-2 ml-2 text-md font-medium text-[#808080]'>
                Include Lowercase Letter
              </label>
            </div>
            <div class='flex items-center   border-gray-200 rounded dark:border-gray-700'>
              <input
                id='bordered-checkbox-1'
                type='checkbox'
                value=''
                name='bordered-checkbox'
                class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label
                for='bordered-checkbox-1'
                class='w-full py-2 ml-2 text-md font-medium text-[#808080]'>
                Include Numbers
              </label>
            </div>
            <div class='flex items-center   border-gray-200 rounded dark:border-gray-700'>
              <input
                id='bordered-checkbox-1'
                type='checkbox'
                value=''
                name='bordered-checkbox'
                class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label
                for='bordered-checkbox-1'
                class='w-full py-2 ml-2 text-md font-medium text-[#808080]'>
                Include Symbols
              </label>
            </div>{' '}
          </div>
          <div className='flex px-[24px] pt-[24px]'>
            <div className=' justify-center items-center px-[24px] bg-black w-[100%]  border-black rounded-lg '>
              <div class='mx-auto max-w-screen-xl py-4 '>
                <div class='flex items-center justify-between'>
                  <div class=' text-left text-[#808080]'> STRENGTH</div>

                  <div class=' flex text-right  flex-row items-center text-[#808080] '>
                    Poor
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex px-[24px] py-[12px]'>
            <button class='bg-[#28ABAB] hover:bg-gray-700 text-white font-bold py-4 px-4 rounded-lg w-full text-xl'>
              GENERATE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
