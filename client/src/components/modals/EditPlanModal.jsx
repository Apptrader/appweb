import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import getParamsEnv from "../../functions/getParamsEnv";
import Loader from "../Loader";

const { API_URL_BASE } = getParamsEnv();

const EditPlanModal = ({
    aux,
    setAux,
    setShowEditPlanModal,
    planEdit
}) => {

    console.log(planEdit)

    const [plan, setPlan] = useState({
        planName: planEdit.planName || "",
        planCost: planEdit.planCost || "",
        planImage: planEdit.planImage || "",
        renewal: planEdit.renewal || "",
        bonus: planEdit.bonus || ""
    });

    const [errors, setErrors] = useState({});
    const [submitLoader, setSubmitLoader] = useState(false);
    const [disableSubmit, setDisableSubmit] = useState(false);

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                setShowEditPlanModal(false);
            }
        };
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    }, []);

    const closeModal = () => {
        setShowEditPlanModal(false);
        setPlan({
            planName: "",
            planCost: "",
            planImage: "",
            renewal: "",
            bonus: ""
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validations on submit
        const validationErrors = {
            planName: plan.planName.trim() === "" ? "This field is required" : "",
            planCost: isNaN(plan.planCost) ? "Please enter a valid number" : "",
            planImage: plan.planImage.trim() === "" ? "This field is required" : "",
            renewal: isNaN(plan.renewal) ? "Please enter a valid number" : "",
            bonus: isNaN(plan.bonus) ? "Please enter a valid number" : ""
        };

        setErrors(validationErrors);

        const hasErrors = Object.values(validationErrors).some((error) => error !== "");
        if (!hasErrors) {
            try {
                setDisableSubmit(true);
                setSubmitLoader(true);

                const data = {
                    planName: plan.planName,
                    planCost: plan.planCost,
                    planImage: plan.planImage,
                    renewal: plan.renewal,
                    bonus: plan.bonus,
                }

                const response = await axios.put(`${API_URL_BASE}/apiPaidPlans//updatePaidPlan/${planEdit.idPaidPlan}`, data);
                console.log(response)
                if (response.data.updated === "ok") {
                    setSubmitLoader(false);
                    setAux(!aux);
                    closeModal();
                } else {
                    setDisableSubmit(false);
                    setSubmitLoader(false);
                    // Error handling if update was not successful
                }
            } catch (error) {
                setDisableSubmit(false);
                setSubmitLoader(false);
                // Error handling if there's any issue with the request
            }
        }
    };

    console.log(plan, "capitulos")

    return (
        <>
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full" style={{ background: "rgba(0, 0, 0, 0.70)" }}>
                <div>
                    <div className="w-4/5 mx-auto bg-gray-900 text-white shadow rounded-lg p-6 md:w-full dark:bg-darkBackground">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-semibold mb-4 text-white font-bold dark:text-darkText">Edit Plan</h1>
                            <IoClose onClick={closeModal} className="cursor-pointer mt-2 w-5 h-5 hover:scale-125 dark:text-darkText" />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                                <div>
                                    <label className="pl-1 font-bold dark:text-darkText">Plan Name</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="planName"
                                        value={plan.planName}
                                        placeholder="Plan Name"
                                        className={`border border-black p-2 text-black font-bold bg-gray-300 rounded w-full dark:text-darkText dark:bg-darkPrimary`}
                                    />
                                    {errors.planName && (
                                        <p className="text-red-500 font-bold">{errors.planName}</p>
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
                                    <label className="pl-1 font-bold dark:text-darkText">Plan Image</label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="planImage"
                                        value={plan.planImage}
                                        placeholder="Plan Image URL"
                                        className={`border border-black p-2 text-black font-bold bg-gray-300 rounded w-full dark:text-darkText dark:bg-darkPrimary`}
                                    />
                                    {errors.planImage && (
                                        <p className="text-red-500 font-bold">{errors.planImage}</p>
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
                                    {submitLoader ? <Loader /> : "Update Plan"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditPlanModal;