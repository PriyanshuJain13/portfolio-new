import React from 'react'

const page = () => {
  return (
    <div className='text-white resumePage' >
      <embed width="100%" height="100%" name="plugin" src="/resume.pdf" type="application/pdf"/>
    </div>
  )
}

export default page