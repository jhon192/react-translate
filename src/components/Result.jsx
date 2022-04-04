import React from 'react'

const Result = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
    <div className="bg-red-300 w-3/4 rounded-lg shadow-lg">
      <div className="my-10 mx-5 text-center">
        <textarea
          name="textInput"
          className="resize-none w-full h-20 rounded-md"
          readOnly={true}
        ></textarea>
      </div>
    </div>
  </div>
  )
}

export default Result