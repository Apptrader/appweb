import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import getParamsEnv from "../functions/getParamsEnv";
import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import CreateVideoModal from "./modals/CreateVideosModal";
import { useMediaQuery } from 'react-responsive';
import ToasterConfig from "./Toaster"
import toast from "react-hot-toast";
import EditVideoModal from "./modals/EditVideoModal.jsx"

const { API_URL_BASE } = getParamsEnv();

const VideosTable = () => {
  const [showCreateVideoModal, setShowCreateVideoModal] = useState(false);
  const [videos, setVideos] = useState([]);
  const token = useSelector((state) => state?.token);
  const [isLoading, setIsLoading] = useState(false);
  const [aux, setAux] = useState(false);
  const [deleteVideoID, setDeleteVideoId] = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [VideoEdit, setVideoEdit] = useState(null)
  const [showEditVideoModal, setShowEditVideoModal] = useState(false)
  const [filters, setFilters] = useState({ chapter: "", title: "", language: "" });
  const [languages, setLanguages] = useState([]);
  const [chapters, setChapters] = useState([]);

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
  }, [aux]);

  useEffect(() => {
    const getAllLanguages = async () => {
      try {
        const response = await axios.get(`${API_URL_BASE}/apiLanguages/languages`);
        setLanguages(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllLanguages();
  }, []);

  useEffect(() => {
    const getChapters = async () => {
      try {
        const response = await axios.get(`${API_URL_BASE}/apiChapters/chapters`);
        setChapters(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getChapters();
  }, []);

  const handleShowCreateModal = () => {
    setShowCreateVideoModal(true);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.post(
        `${API_URL_BASE}/apiVideos/deleteVideo`, {id: deleteVideoID}
      );
      if (response.data.deleted === "ok") {
        setAux(!aux);
        toast.success("Video deleted successfully");
        setDeleteVideoId(null);
      } else {
        toast.error("There was a problem deleting the video");
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data
        : "An error has occurred";
      toast.error(`${errorMessage}`);
    }
  };

  const handleDeleteModal = (id) => {
    setDeleteVideoId(id)
    setShowConfirmation(true)
  };

 const deleteConfirmed = (confirmed) => {
    if (confirmed) {
      setShowConfirmation(false);
      handleDelete();
    } else {
      setShowConfirmation(false);
    }
  };

  const handleEditVideoModal = (video) => {
    setVideoEdit(video)
    setShowEditVideoModal(true)
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name.toLowerCase()]: value });
  };

  const filteredVideos = videos.filter(video => {
    const chapterMatch = video.videoChapter.name.toLowerCase().includes(filters.chapter.toLowerCase());
    const titleMatch = video.title.toLowerCase().includes(filters.title.toLowerCase());
    const languageMatch = filters.language ? video.videoLanguage.id === parseInt(filters.language) : true;
    return chapterMatch && titleMatch && languageMatch;
  });

  return (
    <>
      <div className="mx-auto pb-20">
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
          <select
            name="chapter"
            value={filters.chapter}
            onChange={handleFilterChange}
            className="p-2 border text-black font-extrabold border-gray-300 rounded mb-2 sm:mb-0 sm:mr-2"
          >
            <option value="">Select a chapter</option>
            {chapters.map(chapter => (
              <option className="text-black font-bold" key={chapter.id} value={chapter.name}>{chapter.name}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={filters.title}
            onChange={handleFilterChange}
            className="p-2 text-black font-extrabold border border-gray-300 rounded mb-2 sm:mb-0 sm:mr-2"
          />
          <select
            name="language"
            value={filters.language}
            onChange={handleFilterChange}
            className="p-2 border text-black font-extrabold border-gray-300 rounded mb-2 sm:mb-0 sm:mr-2"
          >
            <option value="">Select a language</option>
            {languages.map(language => (
              <option className="text-black font-bold" key={language.id} value={language.id}>{language.name}</option>
            ))}
          </select>
          <button
            className="p-2 bg-gray-800 text-white font-bold rounded hover:bg-gray-700"
            onClick={() => setFilters({ chapter: "", title: "", language: "" })}
          >
            Clear Filters
          </button>
        </div>
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
                  Language
                </th>
                <th scope="col" className="px-4 py-3">
                  <button
                    className="flex flex-row gap-1 p-2 rounded-full hover:bg-primaryPink hover:text-gray-500"
                    onClick={handleShowCreateModal}
                  >
                    <IoIosAddCircle size={20} /> Add
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredVideos.map((video, index) => (
                <tr
                  key={index}
                  className="border text-center font-bold border-secondaryColor hover:bg-gray-200 hover:text-black hover:font-bold transition-colors duration-700 dark:hover:bg-gray-200 dark:hover:text-black"
                >
                  <td className="px-4 py-4">{video.videoChapter.name}</td>
                  <td className="px-4 py-4">{video.title}</td>
                  <td className="px-4 py-4">{video.videoLanguage.name}</td>
                  <td className="px-4 py-4">
                    <button
                      className="hover:bg-blue-700 text-black px-2 py-1 rounded mr-2"
                      onClick={() => handleEditVideoModal(video)}
                    >
                      <MdEdit size={25} className="dark:text-darkText group-hover:text-black dark:group-hover:text-black" />
                    </button>
                    <button
                      className="hover:bg-red-700 text-black px-2 py-1 rounded"
                      onClick={() => handleDeleteModal(video.id)}
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
      {showEditVideoModal && (
        <EditVideoModal
          aux={aux}
          setAux={setAux}
          token={token}
          setShowEditVideoModal={setShowEditVideoModal}
          videoEdit={VideoEdit}
        />
      )}
      {showConfirmation && deleteVideoID && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div
              className={`bg-white p-6 rounded-lg shadow-lg text-center sm:flex sm:flex-col ${
                window.innerWidth < 340 ? "max-w-sm" : "max-w-md"
              }`}
            >
              <p className="mb-4 text-black font-bold sm:text-base">
                Are you sure you want to delete this video?
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => deleteConfirmed(true)}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600  sm:text-base"
                >
                  Accept
                </button>
                <button
                  onClick={() => deleteConfirmed(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600  sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        <ToasterConfig />
    </>
  );
};

export default VideosTable;
