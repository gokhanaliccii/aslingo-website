// lg:w-[24rem] md:w-[22rem] sm:w-[20rem] w-[18rem] 
const EmailForm = () => {
  return (
    <div className=" max-w-[24rem] mx-auto md:m-0  bg-white rounded-lg flex justify-between">
          <input
            type="text"
            placeholder="Your Email"
            className="border-none rounded-xl  outline-none text-black p-3 w-full"
          />
          <button className="text-sm rounded-r-lg py-1 px-1 bg-slateGray text-white w-32  ">
            Subscribe
          </button>
    </div>
  )
}

export default EmailForm