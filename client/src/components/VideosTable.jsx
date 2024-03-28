import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import getParamsEnv from "../functions/getParamsEnv";
import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import CreateVideoModal from "./modals/CreateVideosModal";
import { useMediaQuery } from 'react-responsive';

const { API_URL_BASE } = getParamsEnv();

const VideosTable = () => {
  const [showCreateVideoModal, setShowCreateVideoModal] = useState(false);
  const [videos, setVideos] = useState([]);
  const token = useSelector((state) => state?.token);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [aux, setAux] = useState(false);


  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(`${API_URL_BASE}/apiVideos/videos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setVideos(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getVideos();
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleShowCreateModal = () => {
    setShowCreateVideoModal(true);
  };

  return (
    <>
      <div className="mx-auto">
        <div className="overflow-auto max-h-[700px] relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left rtl:text-right text-white dark:text-beige dark:border-beige dark:border">
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
              {videos && videos.map((video, index) => (
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
};

export default VideosTable;