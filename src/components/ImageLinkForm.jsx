import Rank from './Rank';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div className="flex flex-col bg-gray-500 bg-opacity-25 w-3/4 lg:w-2/4 rounded-xl mx-auto mt-2  backdrop-blur-sm shadow-xl">
      <Rank />
      <h3 className="mb-3 mt-4 mx-auto text-xl text-center font-medium text-gray-900 dark:text-white">Input an image URL for face recognition</h3>
      
        <div className="flex mb-5 mx-3 justify-center">
            <input onChange={onInputChange} type="text" className="w-3/4 h-10 px-3 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent" placeholder="Image URL" />
            <button onClick={onButtonSubmit} className="h-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-r-xl text-white px-5 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 select-none shadow-xl cursor-pointer">Detect</button>
        </div>

    </div>
  );
}

export default ImageLinkForm;