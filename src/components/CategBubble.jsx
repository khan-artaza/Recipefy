import React from 'react'

const CategBubble = ({title, src}) => {

    let bg = ""

    if(title){
         bg = 'bg-lime-400'
    }

  return (
    <div className='flex flex-col items-center w-fit justify-center'>
      <div className={`w-fit ${title=="My Recipe" ? "bg-rose-500" : " bg-lime-400" } py-5 px-3 rounded-4xl`}>
          <img className={`w-8 ${title=="My Recipe" ? "invert" : "" }`} src={src} alt="" />
        </div>
        <p className='font-medium opacity-75'>{title}</p>

    <div className="reccipe">

    </div>

    </div>
  )
}

export default CategBubble