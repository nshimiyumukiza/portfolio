

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16">
     <div className="py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Erneste</div>
        <div className="space-x-6">
            <a href=""className="hover:text-gray-400">home</a>
            <a href=""className="hover:text-gray-400">about me</a>
            <a href=""className="hover:text-gray-400">services</a>
            <a href=""className="hover:text-gray-400">projects</a>
            <a href=""className="hover:text-gray-400">contact</a>
        </div>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        px-4 py-2 rounded-full">contact me</button>
        </div> 
    </nav>
  )
}

export default Navbar
