import React, { useState } from 'react';

const UserControlPanelComponent = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    walletLink: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos actualizados del usuario al servidor
    console.log(userData);
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="bg-gray-800 rounded-md shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">User Control Panel</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="text-sm font-semibold text-white block mb-1">First Name</label>
              <input type="text" id="firstName" name="firstName" value={userData.firstName} onChange={handleChange} className="input" />
            </div>
            <div>
              <label htmlFor="lastName" className="text-sm font-semibold text-white block mb-1">Last Name</label>
              <input type="text" id="lastName" name="lastName" value={userData.lastName} onChange={handleChange} className="input" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-white block mb-1">Email</label>
            <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} className="input" />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm font-semibold text-white block mb-1">Phone</label>
            <input type="text" id="phone" name="phone" value={userData.phone} onChange={handleChange} className="input" />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-semibold text-white block mb-1">Password</label>
            <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} className="input" />
          </div>
          <div>
            <label htmlFor="walletLink" className="text-sm font-semibold text-white block mb-1">Wallet Link</label>
            <input type="text" id="walletLink" name="walletLink" value={userData.walletLink} onChange={handleChange} className="input" />
          </div>
          <button type="submit" className="btn">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default UserControlPanelComponent;