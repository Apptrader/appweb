const ProfileCard = ({ user }) => {

  console.log(user)

  const userInfo = user.userFound

  return (
    <div className='card bg-gradient-to-br from-gray-700 to-black text-white p-4 shadow-md rounded-lg'>
      <div className='p-4 w-full'>
        <h2 className='text-2xl font-bold text-center'>{userInfo.UserName}</h2>
        <p className='text-center pt-4 pb-4'>Your next payment</p>
        <p className="m-auto text-center p-2 text-2xl font-bold mt-2 border border-gray-300 rounded-full w-1/3" style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}>$2825.25</p>
        <p className="text-center pt-4">Details</p>
      </div>
      <div className="p-4 text-white text-xl font-bold ">
        <ul className="list-none p-0 m-0">
          <li className="flex p-2 justify-between items-center py-2 border-b border-gray-300">
            <span>AIQ ID number:</span>
            <span>{userInfo.UserCode}</span>
          </li>
          <li className="flex p-2 py-4 justify-between items-center py-2 border-b border-gray-300">
            <span>Commission Week:</span>
            <span>texto</span>
          </li>
          <li className="flex p-2 py-4 justify-between items-center py-2 border-b border-gray-300">
            <span>Status:</span>
            <span style={{ color: userInfo.status === 1 ? 'green' : 'red' }}>
              {userInfo.status === 1 ? 'active' : 'inactive'}
            </span>
          </li>
          <li className="flex p-2 py-4 justify-between items-center py-2 border-b border-gray-300">
            <span>Distributor Eligibility:</span>
            <span>texto</span>
          </li>
          <li className="flex p-2 py-4 justify-between items-center py-2 border-b border-gray-300">
            <span>Total Active Members:</span>
            <span>texto</span>
          </li>
          <li className="flex p-2 py-4 justify-between items-center py-2 border-b border-gray-300">
            <span>Highest Rank:</span>
            <span>texto</span>
          </li>
          <li className="flex p-2 py-4 justify-between items-center py-2 border-b border-gray-300">
            <span>Subscription:</span>
            <span>texto</span>
          </li>
          <li className="flex p-2 py-4 justify-between items-center py-2 border-b border-gray-300">
            <span>AIQ-ADU Token:</span>
            <span>texto</span>
          </li>
          <li className="flex p-2 py-4 justify-between items-center py-2 border-b border-gray-300">
            <span>Enroller's Name:</span>
            <span>texto</span>
          </li>
          <li className="flex p-2 py-4 justify-between items-center py-2 border-b border-gray-300">
            <span>Enroller's Phone:</span>
            <span>texto</span>
          </li>
          <li className="flex p-2 py-4 justify-between items-center py-2 border-b border-gray-300">
            <span>Enroller's Email:</span>
            <span>texto</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileCard;
