import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import getParamsEnv from "../functions/getParamsEnv";
import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import CreateChapterModal from "./modals/CreateChapterModal";

const { API_URL_BASE } = getParamsEnv();

const VideosTable = () => {
  const [showCreateVideoModal, setShowCreateVideoModal] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditServiceModal, setShowEditServiceModal] = useState(false);
  const [filaService, setFilaService] = useState(null);
  const [serviceId, setServiceId] = useState(null);



  const token = useSelector((state) => state?.token);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState([])


  useEffect(() => {

    const getVideos = async () => {
      try {
        const response = await axios.get(
          `${API_URL_BASE}/apiVideos/videos`,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            },
          }
        );
        console.log(response.data, "respuestas")
        setVideos(response.data)
      }


      catch (error) {
        console.log(error)
      }
    }

    getVideos();

  }, [aux]);


  const addVideo = async () => {
    showCreateVideoModal(true)
  }


  /*   useEffect(() => {
      setIsLoading(true);
      dispatch(getServices({ token }));
      setIsLoading(false);
    }, [token, aux]);
  
    const handleDelete = async () => {
      try {
        const response = await axios.post(
          `${API_URL_BASE}/v1/deleteservice/${serviceId}`,
          { token }
        );
        if (response.data.deleted === "ok") {
          setAux(!aux);
          toast.success("Procedimiento eliminado exitosamente");
  
          setServiceId(null);
        } else {
          toast.error("Hubo un problema al eliminar procedimiento");
        }
      } catch (error) {
        console.error(error);
        const errorMessage = error.response
          ? error.response.data
          : "An error occurred";
        toast.error(
          `Hubo un problema al eliminar procedimiento. ${errorMessage}`
        );
      }
    };
  
    const handleDeleteModal = (id) => {
      setServiceId(id);
      setShowDeleteConfirmation(true);
    };
  
    const deleteConfirmed = (confirmed) => {
      if (confirmed) {
        setShowDeleteConfirmation(false);
        handleDelete();
      } else {
        setShowDeleteConfirmation(false);
      }
    };
  
  
    const handleEditServiceModal = (filaService) => {
      setShowEditServiceModal(true);
      setFilaService(filaService);
    }; */

    const handleShowCreateModal = () => {
      setShowCreateVideoModal(true);
    };

  console.log(videos)

  if (!isLoading) {
    return (
      <>
        <div className="mx-auto">
          <div className=" overflow-auto max-h-[700px] relative overflow-x-auto shadow-md sm:rounded-lg ">
            <table className="w-full  text-left rtl:text-right text-white dark:text-beige dark:border-beige dark:border">
              <thead className="bg-gray-900 text-white text-left dark:bg-darkPrimary dark:text-darkText dark:border-secondaryColor">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Chapter
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-4 py-3">
                    URL
                  </th>
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
                {videos && videos
                  .slice()
                  .sort((a, b) => a.id - b.id) // Cambia la función de comparación aquí
                  .map((video, index) => (
                    <tr
                      key={index}
                      className="border text-center font-bold border-secondaryColor hover:bg-gray-200 hover:text-black hover:font-bold transition-colors duration-700 dark:hover:bg-gray-200 dark:hover:text-black"
                    >
                      <td className="px-4 py-4">{video.videoChapter.name}</td>
                      <td className="px-4 py-4">{video.title}</td>
                      <td className="px-4 py-4">{video.videoUrl}</td>

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
        {/* {showCreateVideoModal && (
          <CreateVideoModal
            aux={aux}
            setAux={setAux}
            token={token}
            setShowCreateVideoModal={setShowCreateVideoModal}
     
          />
        )}
        {showEditServiceModal && (
          <EditServiceModal
            aux={aux}
            setAux={setAux}
            filaService={filaService}
            token={token}
            setShowEditServiceModal={setShowEditServiceModal}
          
          />
        )}
        {showDeleteConfirmation && serviceId && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div
              className={`bg-white p-6 rounded-lg shadow-lg text-center sm:flex sm:flex-col ${
                window.innerWidth < 340 ? "max-w-sm" : "max-w-md"
              }`}
            >
              <p className="mb-4  sm:text-base">
                ¿Estás seguro de que deseas eliminar esta cita?
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => deleteConfirmed(true)}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600  sm:text-base"
                >
                  Aceptar
                </button>
                <button
                  onClick={() => deleteConfirmed(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600  sm:text-base"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
        <ToasterConfig /> */}
        {showCreateVideoModal && (
          <CreateVideoModal
            aux={aux}
            setAux={setAux}
            token={token}
            setShowCreateVideoModal={setShowCreateVideoModal}
     
          />
        )}
      </>
    );
  } else {
    return <p>cargando</p>;
  }
};

export default VideosTable;
