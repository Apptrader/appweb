import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import getParamsEnv from "../../functions/getParamsEnv";
import Loader from "../Loader";

const { API_URL_BASE } = getParamsEnv();

const CreatePlanModal = ({
    aux,
    setAux,
    setShowCreatePlanModal,
}) => {
    const [plan, setPlan] = useState({
        name: "",
        planCost: "",
        bonus: "", 
        renewal: "",
        imageUrl: "", // Nuevo campo para la URL de la imagen
    });

    const [errors, setErrors] = useState({});
    const [submitLoader, setSubmitLoader] = useState(false);
    const [disableSubmit, setDisableSubmit] = useState(false);
    

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                setShowCreatePlanModal(false);
            }
        };
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    }, []);

    const closeModal = () => {
        setShowCreatePlanModal(false);
        setPlan({
            name: "",
            planCost: "",
            bonus: "", 
            renewal: "",
            imageUrl: "", // Resetear el campo de URL de imagen
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlan(prevState => ({
            ...prevState,
            [name]: value,
        }));
        const validationErrors = {
            ...errors,
            [name]: value.trim() === "" ? "This field is required" : ""
        };
        setErrors(validationErrors);
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
  }

 const deleteConfirmed = (confirmed) => {
    if (confirmed) {
      setShowConfirmation(false);
      handleDelete();
    } else {
      setShowConfirmation(false);
    }
  };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validations on submit
        const validationErrors = {
            name: plan.name.trim() === "" ? "This field is required" : "",
            planCost: plan.planCost.trim() === "" ? "This field is required" : "",
            bonus: plan.bonus.trim() === "" ? "This field is required" : "",
            renewal: plan.renewal.trim() === "" ? "This field is required" : "",
            imageUrl: plan.imageUrl.trim() === "" ? "This field is required" : "", // Validar la URL de la imagen
        };

        setErrors(validationErrors);

        const hasErrors = Object.values(validationErrors).some((error) => error !== "");
        if (!hasErrors) {
            try {
                setDisableSubmit(true);
                setSubmitLoader(true);

                const data = {
                    planName: plan.name,
                    planCost: plan.planCost,
                    bonus: plan.bonus,
                    renewal: plan.renewal,
                    planImage: plan.imageUrl, // Incluir la URL de la imagen en los datos
                }

                const response = await axios.post(`${API_URL_BASE}/apiPaidPlans/createPaidPlan`, data);

                if (response.data.created === "ok") {
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

    console.log(plan, "planes");

    return (
        <>
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full" style={{ background: "rgba(0, 0, 0, 0.70)" }}>
                <div>
                    <div className="w-4/5 mx-auto bg-gray-900 text-white shadow rounded-lg p-6 md:w-full dark:bg-darkBackground">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-semibold mb-4 text-white font-bold dark:text-darkText">Add New Plan</h1>
                            <IoClose onClick={closeModal} className="cursor-pointer mt-2 w-5 h-5 hover:scale-125 dark:text-darkText" />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                                <div>
                                    <label className="pl-1 font-bold dark:text-darkText">Plan Name</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="name"
                                        value={plan.name}
                                        placeholder="name"
                                        className={`border border-black p-2 text-black font-bold bg-gray-300 rounded w-full dark:text-darkText dark:bg-darkPrimary`}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 font-bold">{errors.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="pl-1 font-bold dark:text-darkText">Plan Cost</label>
                                    <input
                                        onChange={handleChange}
                                        type="number"
                                        name="planCost"
                                        value={plan.planCost}
                                        placeholder="Plan Cost"
                                        className={`border border-black p-2 text-black font-bold bg-gray-300 rounded w-full dark:text-darkText dark:bg-darkPrimary`}
                                    />
                                    {errors.planCost && (
                                        <p className="text-red-500 font-bold">{errors.planCost}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="pl-1 font-bold dark:text-darkText">Bonus</label>
                                    <input
                                        onChange={handleChange}
                                        type="number"
                                        name="bonus"
                                        value={plan.bonus}
                                        placeholder="Bonus"
                                        className={`border border-black p-2 text-black font-bold bg-gray-300 rounded w-full dark:text-darkText dark:bg-darkPrimary`}
                                    />
                                    {errors.bonus && (
                                        <p className="text-red-500 font-bold">{errors.bonus}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="pl-1 font-bold dark:text-darkText">Renewal</label>
                                    <input
                                        onChange={handleChange}
                                        type="number"
                                        name="renewal"
                                        value={plan.renewal}
                                        placeholder="Renewal"
                                        className={`border border-black p-2 text-black font-bold bg-gray-300 rounded w-full dark:text-darkText dark:bg-darkPrimary`}
                                    />
                                    {errors.renewal && (
                                        <p className="text-red-500 font-bold">{errors.renewal}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="pl-1 font-bold dark:text-darkText">Image URL</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="imageUrl"
                                        value={plan.imageUrl}
                                        placeholder="Image URL"
                                        className={`border border-black p-2 text-black font-bold bg-gray-300 rounded w-full dark:text-darkText dark:bg-darkPrimary`}
                                    />
                                    {errors.imageUrl && (
                                        <p className="text-red-500 font-bold">{errors.imageUrl}</p>
                                    )}
                                </div>
                            </div>
                            <div className="mt-8 mb-2">
                                {/* More fields can be added here if necessary */}
                            </div>
                            <div className="flex justify-center items-center">
                                <button
                                    type="submit"
                                    disabled={disableSubmit}
                                    className="mt-2 px-4 py-2 w-fit rounded bg-gray-800 hover:bg-gray-400  hover:text-black hover:font-bold shadow shadow-black text-white hover:bg-secondaryColor transition-colors duration-700 dark:text-darkText dark:bg-darkPrimary dark:hover:bg-blue-600"
                                >
                                    {submitLoader ? <Loader /> : "Create Plan"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePlanModal;
