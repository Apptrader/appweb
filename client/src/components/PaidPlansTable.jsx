import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import getParamsEnv from "../functions/getParamsEnv";
import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever, MdEdit } from "react-icons/md";


const { API_URL_BASE } = getParamsEnv();

const PaidPlansTable = () => {
  const [showCreateChapterModal, setShowCreateChapterModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [paidPlans, setPaidPlans] = useState([]); // Cambia chapters por paidPlans
  const token = useSelector((state) => state?.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPaidPlans = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${API_URL_BASE}/apiPaidPlans/paidplans`,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            },
          }
        );
        // Guarda los datos de los planes pagados en el estado
        setPaidPlans(response.data);
        
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPaidPlans();
  }, [token]);

  const handleShowCreateModal = () => {
    setShowCreateChapterModal(true);
  };
  console.log(paidPlans)
  if (!isLoading) {
    return (
      <>
        <div className="mx-auto">
          <div className="overflow-auto max-h-[700px] relative overflow-x-auto shadow-md sm:rounded-lg ">
            <table className="w-full text-left rtl:text-right text-white dark:text-beige dark:border-beige dark:border">
              <thead className="bg-gray-900 text-white text-left dark:bg-darkPrimary dark:text-darkText dark:border-secondaryColor">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Plan Cost
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Description
                  </th>
                  {/* Agrega más encabezados según necesites */}
                  <th scope="col" className="px-4 py-3">
                    <button
                      className="flex flex-row gap-1 p-2 rounded-full hover:bg-primaryPink hover:text-gray-500"
                      onClick={handleShowCreateModal}
                    >
                      <IoIosAddCircle size={20} /> Agregar
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {paidPlans.map((plan, index) => (
                  <tr
                    key={index}
                    className="border text-center font-bold border-secondaryColor hover:bg-gray-200 hover:text-black hover:font-bold transition-colors duration-700 dark:hover:bg-gray-200 dark:hover:text-black"
                  >
                    <td className="px-4 py-4">{plan.planName}</td>
                    <td className="px-4 py-4">{plan.planCost}</td>
                    <td className="px-4 py-4">{plan.description}</td>
                    {/* Agrega más celdas según necesites */}
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
        {showCreateChapterModal && (
          <CreateChapterModal
            // Pasar las props necesarias al componente CreateChapterModal
          />
        )}
      </>
    );
  } else {
    return <p>Cargando...</p>;
  }
};

export default PaidPlansTable;
