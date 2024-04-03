import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import getParamsEnv from "../functions/getParamsEnv";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import ConfirmWeeklyCalculation from "./modals/ConfirmWeeklycalculation";

const { API_URL_BASE } = getParamsEnv();

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({ name: "", userCode: "" });
  const token = useSelector((state) => state?.token);
  const [showWeeklyCalculationModal, setShowWeeklyCalculationModal] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_URL_BASE}/apiUser/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, [token]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const clearFilters = () => {
    setFilters({ name: "", userCode: "" });
  };

  const filteredUsers = users.filter((user) => {
    const nameMatch = user.UserName.toLowerCase().includes(filters.name.toLowerCase());
    const userCodeMatch = user.UserCode.toString().includes(filters.userCode);
    return nameMatch && userCodeMatch;
  });

  
  const calculate = async () => {
   
    const response = await axios.post(`${API_URL_BASE}/apiUser/calculate`)

    if(response.data.calculated === "ok") {
      setShowWeeklyCalculationModal(false)
    }
  
  }

  const handleConfirm = () => {
    console.log("hola")
    calculate()
  }

  return (
    <>
      <div className="mx-auto">
        <div className="overflow-auto max-h-[700px] relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={filters.name}
              onChange={handleFilterChange}
              className="p-2 text-black font-extrabold border border-gray-300 rounded mb-2 sm:mb-0 sm:mr-2"
            />
            <input
              type="text"
              placeholder="User Code"
              name="userCode"
              value={filters.userCode}
              onChange={handleFilterChange}
              className="p-2 text-black font-extrabold border border-gray-300 rounded mb-2 sm:mb-0 sm:mr-2"
            />
            <button
              onClick={clearFilters}
              className="p-2 bg-gray-800 text-white font-bold rounded hover:bg-gray-700"
            >
              Clear Filters
            </button>
            <button
              onClick={() => setShowWeeklyCalculationModal(true)}
              className="p-2 bg-red-800 text-white font-bold rounded ml-auto hover:bg-red-700"
            >
              Weekly Calculation
            </button>
          </div>
          <table className="w-full text-left rtl:text-right text-white dark:text-beige dark:border-beige dark:border">
            <thead className="bg-gray-900 text-white text-left dark:bg-darkPrimary dark:text-darkText dark:border-secondaryColor">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Name
                </th>
                <th scope="col" className="px-4 py-3">
                  User Code
                </th>
                <th scope="col" className="px-4 py-3">
                  Referral account
                </th>
                <th scope="col" className="px-4 py-3">
                  Rank
                </th>
                <th scope="col" className="px-4 py-3">
                  Plan
                </th>
                <th scope="col" className="px-4 py-3">
                  Belongs To
                </th>
                <th scope="col" className="px-4 py-3">
                  Next Payment
                </th>
                <th scope="col" className="px-4 py-3">
                  <button
                    className="flex flex-row gap-1 p-2 rounded-full hover:bg-primaryPink hover:text-black"
                  ></button>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr
                  key={index}
                  className="border text-center font-bold border-secondaryColor hover:bg-gray-200 hover:text-black hover:font-bold transition-colors duration-700 dark:hover:bg-gray-200 dark:hover:text-black"
                >
                  <td className="px-4 py-4">{user.UserName}</td>
                  <td className="px-4 py-4">{user.UserCode}</td>
                  <td className="px-4 py-4">{user.referralsCount}</td>
                  <td className="px-4 py-4">{user.rank && user.rank.name ? user.rank.name : "-"}</td>
                  <td className="px-4 py-4">{user.paidPlan && user.paidPlan.planName ? user.paidPlan.planName : "-"}</td>
                  <td className="px-4 py-4">{user.CodeReferenced}</td>
                  <td className="px-4 py-4">${user.payAmount}</td>
                  <td className="px-4 py-4">
                    <button
                      className="hover:bg-blue-700 text-black px-2 py-1 rounded mr-2"
                      onClick={() => handleEditServiceModal(fila)}
                    >
                      <MdEdit size={25} className="dark:text-darkText group-hover:text-black dark:group-hover:text-black" />
                    </button>
                    <button
                      className="hover:bg-red-700 text-black px-2 py-1 rounded"
                      onClick={() => handleDeleteModal(fila.id)}
                    >
                      <MdDeleteForever size={25} className="dark:text-darkText group-hover:text-black dark:group-hover:text-black" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showWeeklyCalculationModal && (
            <ConfirmWeeklyCalculation 
            onClose={() => setShowWeeklyCalculationModal(false)}
            onConfirm={handleConfirm}
             />
          )}
    </>
  );
};

export default UsersTable;