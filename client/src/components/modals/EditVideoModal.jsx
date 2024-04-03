

import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import getParamsEnv from "../../functions/getParamsEnv";
import Loader from "../Loader";

const { API_URL_BASE } = getParamsEnv();

const EditVideoModal = ({
    aux,
    setAux,
    setShowEditVideoModal,
    videoEdit
}) => {

    console.log(videoEdit)

    const [video, setVideo] = useState({
        chapter: videoEdit.videoChapter || "",
        title: videoEdit.title || "",
        videoUrl: videoEdit.videoUrl || "",
        language: videoEdit.videoLanguage,
    });

    const [errors, setErrors] = useState({});
    const [submitLoader, setSubmitLoader] = useState(false);
    const [disableSubmit, setDisableSubmit] = useState(false);
    const [chapters, setChapters] = useState([]);
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                setShowEditVideoModal(false);
            }
        };
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    }, []);

    useEffect(() => {
        const getAllChapters = async () => {
            try {
                const response = await axios.get(`${API_URL_BASE}/apiVideos/chapterVideos`);
                setChapters(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getAllChapters();
    }, []);

    useEffect(() => {
        const getLanguages = async () => {
            try {
                const response = await axios.get(`${API_URL_BASE}/apiLanguages/languages`);
                setLanguages(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getLanguages();
    }, []);

    const closeModal = () => {
        setShowEditVideoModal(false);
        setVideo({
            chapter: "",
            title: "",
            videoUrl: "", // Cambio de video a videoUrl
            language: false,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'chapter') {
            const parsedValue = JSON.parse(value);

            setVideo((prevInfo) => ({
                ...prevInfo,
                chapter: {
                    id: parsedValue.id,
                    name: parsedValue.name,
                }
            }));
        } else
        if (name === 'language') {
            const parsedValue = JSON.parse(value);

            setVideo((prevInfo) => ({
                ...prevInfo,
                language: {
                    id: parsedValue.id,
                    name: parsedValue.name,
                }
            }));
        } else {
            setVideo(prevState => ({
                ...prevState,
                [name]: value,
            }));
            const validationErrors = {
                ...errors,
                [name]: value.trim() === "" ? "This field is required" : ""
            };

            setErrors(validationErrors);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validations on submit
        const validationErrors = {
            title: video.title.trim() === "" ? "This field is required" : "",
            videoUrl: video.videoUrl.trim() === "" ? "This field is required" : "", // Cambio de video a videoUrl
            language: video.language === "" ? "Please select a language" : "",
            chapter: video.chapter === "" ? "Please select a chapter" : "",
        };

        setErrors(validationErrors);

        const hasErrors = Object.values(validationErrors).some((error) => error !== "");
        if (!hasErrors) {
            try {
                setDisableSubmit(true);
                setSubmitLoader(true);

                const data = {
                    title: video.title,
                    chapter_id: video.chapter.id,
                    videoUrl: video.videoUrl,
                    language: video.language.id,
                    id: videoEdit.id
                }

                const response = await axios.post(`${API_URL_BASE}/apiVideos/editVideo`, data);

                if (response.data.updated === "ok") {
                    setSubmitLoader(false);
                    setAux(!aux);
                    closeModal();
                } else {
                    setDisableSubmit(false);
                    setSubmitLoader(false);
                    // Error handling if creation was not successful
                }
            } catch (error) {
                setDisableSubmit(false);
                setSubmitLoader(false);
                // Error handling if there's any issue with the request
            }
        }
    };

    console.log(video, "capitulos")

    return (
        <>
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full" style={{ background: "rgba(0, 0, 0, 0.70)" }}>
                <div>
                    <div className="w-4/5 mx-auto bg-gray-900 text-white shadow rounded-lg p-6 md:w-full dark:bg-darkBackground">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-semibold mb-4 text-white font-bold dark:text-darkText">Edit Video</h1>
                            <IoClose onClick={closeModal} className="cursor-pointer mt-2 w-5 h-5 hover:scale-125 dark:text-darkText" />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                                <div>
                                    <label className="pl-1 font-bold dark:text-darkText">Video Title</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="title"
                                        value={video.title}
                                        placeholder="Title"
                                        className={`border border-black p-2 text-black font-bold bg-gray-300 rounded w-full dark:text-darkText dark:bg-darkPrimary`}
                                    />
                                    {errors.title && (
                                        <p className="text-red-500 font-bold">{errors.title}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="pl-1 font-bold dark:text-darkText">Video URL</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="videoUrl" // Cambio de video a videoUrl
                                        value={video.videoUrl} // Cambio de video a videoUrl
                                        placeholder="Video URL"
                                        className={`border border-black p-2 text-black font-bold bg-gray-300 rounded w-full dark:text-darkText dark:bg-darkPrimary`}
                                    />
                                    {errors.videoUrl && (
                                        <p className="text-red-500 font-bold">{errors.videoUrl}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="pl-1 font-bold dark:text-darkText">Language</label>
                                    <select
                                        onChange={handleChange}
                                        name="language"
                                        className={`border border-black p-2 rounded text-black font-bold bg-gray-300  w-full dark:text-darkText dark:bg-darkPrimary`}
                                    >
                                        <option className="text-black font-bold" value="">Select Language</option>
                                        {languages.map(language => (
                                            <option
                                                className="text-black font-bold"
                                                key={language.id}
                                                value={JSON.stringify(language)} // Establece el valor de la opción como el id del idioma
                                                selected={video.language.id === language.id} // Establece el atributo 'selected' si coincide con el id del idioma del video
                                            >
                                                {language.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.language && (
                                        <p className="text-red-500 font-bold">{errors.language}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="pl-1 font-bold dark:text-darkText">Chapter</label>
                                    <select
                                        onChange={handleChange}
                                        name="chapter"
                                        className={`border border-black p-2 rounded text-black font-bold bg-gray-300  w-full dark:text-darkText dark:bg-darkPrimary`}
                                    >
                                        <option value="">Select Chapter</option>
                                        {chapters.map(chapter => (
                                            <option
                                                className="text-black font-bold"
                                                key={chapter.id}
                                                value={JSON.stringify(chapter)}
                                                selected={video.chapter.id === chapter.id}
                                            >
                                                {chapter.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.chapter && (
                                        <p className="text-red-500 font-bold">{errors.chapter}</p>
                                    )}
                                </div>
                            </div>
                            <div className="mt-8 mb-2">
                                {/* More video fields can be added here if necessary */}
                            </div>
                            <div className="flex justify-center items-center">
                                <button
                                    type="submit"
                                    disabled={disableSubmit}
                                    className="mt-2 px-4 py-2 w-fit rounded bg-gray-800 hover:bg-gray-400  hover:text-black hover:font-bold shadow shadow-black text-white hover:bg-secondaryColor transition-colors duration-700 dark:text-darkText dark:bg-darkPrimary dark:hover:bg-blue-600"
                                >
                                    {submitLoader ? <Loader /> : "Edit Video"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditVideoModal;