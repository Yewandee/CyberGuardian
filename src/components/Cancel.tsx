const Cancel = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-red-500">Payment Cancelled</h1>
      <p className="mt-4 text-gray-300">You can try again anytime.</p>
      <a href="/" className="mt-6 underline text-blue-400">Return Home</a>
    </div>
  );
};

export default Cancel;


