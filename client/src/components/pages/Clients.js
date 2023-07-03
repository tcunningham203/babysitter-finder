import Header from "../Header"

function Clients() {
   return<div 
   className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Header/>
  <img className="w-40 h-40 object-cover" src="profile-image.jpg" alt="Profile Image"></img>
  <div className="p-4">
    <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
    <p className="text-gray-600">Software Developer</p>
    <div className="mt-4">
      <p className="text-sm text-gray-700">Bio:</p>
      <p className="text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
        ante non elit tincidunt hendrerit. Mauris venenatis tortor a
        tristique scelerisque.
      </p>
    </div>
    <div className="mt-4 flex justify-end">
      <a
        href="#"
        className="text-blue-500 hover:text-blue-700 font-semibold text-sm"
      >
        View Profile
      </a>
    </div>
  </div>

  <img className="w-40 h-40 object-cover" src="profile-image.jpg" alt="Profile Image"></img>
  <div className="p-4">
    <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
    <p className="text-gray-600">Software Developer</p>
    <div className="mt-4">
      <p className="text-sm text-gray-700">Bio:</p>
      <p className="text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
        ante non elit tincidunt hendrerit. Mauris venenatis tortor a
        tristique scelerisque.
      </p>
    </div>
    <div className="mt-4 flex justify-end">
      <a
        href="#"
        className="text-blue-500 hover:text-blue-700 font-semibold text-sm"
      >
        View Profile
      </a>
    </div>
  </div>
</div>

}


export default Clients