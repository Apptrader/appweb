import axios from "axios";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import ToasterConfig from './Toaster';

import getParamsEnv from '../functions/getParamsEnv';
import { setUser } from '../redux/actions';

const { API_URL_BASE } = getParamsEnv()

const UserControlPanelComponent = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state?.user);
  const userInfo = user.userFound;

  const [userData, setUserData] = useState({
    firstName: userInfo.UserName || '',
    lastName: userInfo.UserLastName || '',
    email: userInfo.Email || '',
    phone: userInfo.Phone || '',
    walletLink: userInfo.walletLink || '',
    walletType: userInfo.walletType || ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fieldToEdit, setFieldToEdit] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        UserName: userData.firstName,
        UserLastName: userData.lastName,
        Email: userData.email,
        Phone: userData.Phone,
        walletLink: userData.walletLink,
        walletType: userData.walletType
      }
      const response = await axios.put(`${API_URL_BASE}/apiUser/update`, data, {
        headers: {
          Authorization: `Bearer ${user.token}` // Agrega el token al encabezado de autorización
        }
      });
      if (response.data.updated === "ok") {
        dispatch(setUser(response.data))
        toast.success("User updated successfully");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
      console.error(error);
    }
  };

  const openModal = (fieldName) => {
    setFieldToEdit(fieldName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFieldToEdit('');
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="bg-black rounded-md border border-blue-500 p-8 text-white">
        <h2 className="text-3xl font-semibold mb-6">User Control Panel</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(userData).map(([key, value]) => (
              <div key={key}>
                <label htmlFor={key} className="text-sm font-semibold block mb-1 capitalize">{key}</label>
                <div className="relative flex items-center">
                  {key === 'walletType' ? (
                    <select id={key} name={key} value={value} readOnly={!isModalOpen} className="input text-black font-extrabold p-2 rounded-full mr-2" onChange={handleChange}>
                      <option className="text-black font-bold" value="">Select Wallet Type</option>
                      <option className="text-black font-bold" value="Bitcoin">Bitcoin</option>
                      <option className="text-black font-bold" value="Ethereum">Ethereum</option>
                      <option className="text-black font-bold" value="Litecoin">Litecoin</option>
                      {/* Agrega más opciones según sea necesario */}
                    </select>
                  ) : (
                    <>
                      <input type="text" id={key} name={key} value={value} readOnly={!isModalOpen} className="input text-black font-extrabold p-2 rounded-full mr-2" onChange={handleChange} />
                      {!isModalOpen && (
                        <button type="button" className="text-white bg-blue-500 rounded-full px-4 py-2 hover:bg-blue-600 transition-colors duration-300 focus:outline-none" onClick={() => openModal(key)}>Edit</button>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Save Changes</button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-gray-300 p-6 rounded-md">
            <h3 className="text-lg font-semibold mb-4">Edit {fieldToEdit}</h3>
            <input
              type="text"
              name={fieldToEdit}
              value={userData[fieldToEdit]}
              onChange={handleChange}
              className="input text-black font-extrabold p-2 rounded-full"
            />
            <div className="flex justify-end mt-4">
              <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 mr-2" onClick={closeModal}>Cancel</button>
              <button type="button" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300" onClick={closeModal}>Save</button>
            </div>
          </div>
        </div>
      )}
      <ToasterConfig />
    </div>
  );
}

export default UserControlPanelComponent;