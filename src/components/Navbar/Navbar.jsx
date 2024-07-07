const Navbar = () => {
  return (
    <nav className="max-w-6xl mx-auto py-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">QR Check</h2>
        <div>
          <button className="bg-blue-400 py-1.5 px-4 rounded text-white font-medium">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
