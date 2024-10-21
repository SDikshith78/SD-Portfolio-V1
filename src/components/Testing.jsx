import { Tilt } from 'react-tilt'

const Testing = () => {

  const images = [
    "/public/images/adobe-after-effects.png",
    "/public/images/adobe-photoshop.png",
    "/public/images/css3.png",
    "/public/images/java.png",
  ]
  return (
    <div className='h-screen w-full bg-zinc-400 flex justify-center items-center '>
      
      {/* <div className='rounded-[11px] bg-[#ffffff] shadow-[ -11px_-11px_21px_#a6a6a6,11px_11px_21px_#ffffff]'> */}

      <div className='border-layout h-[30%] w-[30%]  flex justify-center items-center space-x-8'>
      
        {images.map((img, index) =>(
          <div key={index}>
            <Tilt>

          <img src={img} alt="" className='rounded-[11px] bg-[#ffffff] shadow-[ -11px_-11px_21px_#a6a6a6,11px_11px_21px_#ffffff] flex gap-9 space-x-5' />
            </Tilt>
        </div>
        ))}
      </div>
        </div>

    // </div>
  )
}

export default Testing
