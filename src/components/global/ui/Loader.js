const Loader = ({ text = 'Loading' }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {text && <p className="text-gray-500 text-xl mb-4">{text}</p>}
      <div className="flex gap-2">
        <div className="w-4 h-4 bg-gray-400 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-gray-400 rounded-full animate-bounce delay-300"></div>
        <div className="w-4 h-4 bg-gray-400 rounded-full animate-bounce delay-600"></div>
      </div>
    </div>
  );
};

export default Loader;