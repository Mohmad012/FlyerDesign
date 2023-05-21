import React from 'react'

const OtherAddressesBox = ({setCurrentAddresses}) => {
  return (
    <div className='flex flex-col items-start gap-5 mt-14'>
      <h2>Other Address</h2>
      <div className='p-3 ring-1 w-full ring-gray-500 rounded-lg pb-10'>
        <div className='flex justify-between'>
          <h3 className='flex items-center justify-between'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='none'
              viewBox='0 0 30 29'>
              <path
                stroke='#3D3B3B'
                strokeWidth='0.112'
                d='M.921 28.207V.227h28.53v27.98H.921z'></path>
              <path
                stroke='#3D3B3B'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.79'
                d='M7.129 25.625H23.24M15.186 15.093c1.977 0 3.58-1.572 3.58-3.511 0-1.94-1.603-3.512-3.58-3.512-1.978 0-3.58 1.572-3.58 3.512 0 1.939 1.602 3.511 3.58 3.511z'></path>
              <path
                stroke='#3D3B3B'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.79'
                d='M24.138 11.583c0 7.9-8.951 14.046-8.951 14.046s-8.95-6.145-8.95-14.046c0-2.328.942-4.56 2.62-6.207a9.04 9.04 0 016.33-2.571 9.04 9.04 0 016.329 2.57 8.694 8.694 0 012.622 6.208z'></path>
            </svg>
            <span className='text-primary-500 font-semibold'>home</span>
          </h3>
          <div className='flex items-center gap-10 mx-5'>
            <button className='flex items-center justify-between'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='27'
                  height='27'
                  fill='none'
                  viewBox='0 0 27 27'>
                  <path
                    fill='#525050'
                    d='M22.23 5.555H4.355a.813.813 0 000 1.625h.813v14.625a1.625 1.625 0 001.625 1.625h13a1.625 1.625 0 001.625-1.625V7.18h.813a.812.812 0 000-1.625zm-2.437 16.25h-13V7.18h13v14.625zM8.418 3.117a.813.813 0 01.812-.812h8.125a.812.812 0 010 1.625H9.23a.812.812 0 01-.812-.813z'></path>
                </svg>
              </span>
              <span>delete</span>
            </button>
            <button
              className='flex items-center justify-between'
              onClick={() => setCurrentAddresses('AboutAddresses')}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  fill='none'
                  viewBox='0 0 23 23'>
                  <path
                    fill='#525050'
                    d='M20.423 6.592l-4.015-4.015a1.438 1.438 0 00-2.033 0L3.296 13.656a1.426 1.426 0 00-.421 1.016v4.015a1.437 1.437 0 001.438 1.438h15.093a.719.719 0 100-1.438h-9.045L20.423 8.625a1.438 1.438 0 000-2.033zM8.328 18.687H4.313v-4.015l7.906-7.906 4.015 4.015-7.906 7.906zm8.922-8.922L13.236 5.75l2.156-2.156 4.014 4.015-2.156 2.156z'></path>
                </svg>
              </span>
              <span>edit</span>
            </button>
          </div>
        </div>
        <div className='flex flex-col items-start my-3'>
          <h3 className='mb-3'>mohmad gamal</h3>
          <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
        </div>
        <div className='flex gap-2 items-center'>
          <span>01223072359</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='19'
            height='20'
            fill='none'
            viewBox='0 0 19 20'>
            <circle cx='9.398' cy='9.957' r='9.398' fill='#EB008C'></circle>
            <path
              stroke='#fff'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.79'
              d='M14.014 7.023L8.14 12.897 5.203 9.96'></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default OtherAddressesBox
