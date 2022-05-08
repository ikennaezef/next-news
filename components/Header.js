import React from 'react'

const Header = () => {
  return (
    <>
      <header className='header'>
        <h1 className='title'>
          <span>News</span>Inc
        </h1>
        <p>Get all the latest news here</p>
      </header>
      <style jsx>
        {`

          .header {
            padding-bottom: 1rem;
            border-bottom: 1px solid #ccc;
            margin-bottom: 2rem;
          }

          .title {
            font-size: 2.5rem;
          }

          .title span {
              color: #0070f3;
           }
        `}
      </style>
    </>
  )
}

export default Header