
const Navbar = () => {
  return (
    <div className="flex justify-around items-center bg-gray-900 py-4  text-white">
     <div>
        <img className="h-24" src="./public/logo.png" alt="" />
        
     </div>
      <ul className="flex justify-between  gap-8">
        <li>HOME</li>
        <li>Department</li>
        <li>Clubs</li>
        <li>Events</li>
      </ul>
    </div>
  )
}

export default Navbar
