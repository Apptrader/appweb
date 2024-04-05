import getParamsEnv from "../functions/getParamsEnv";

const {VITE_HOME, VITE_TERMS_AND_CONDITION} = getParamsEnv()

const FooterComponent = ({ handleSectionChange }) => {
  return (
    <section className="bg-black pt-12 pb-4 shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href={VITE_HOME} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img className="w-24 h-auto md:w-32 md:h-auto" src="https://static.wixstatic.com/media/39c6da_c313300b528e4aa284d37b4c31f951a8~mv2.png/v1/crop/x_83,y_128,w_336,h_226/fill/w_154,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design.png" alt="Flowbite Logo" />
            <span className="self-center text-white text-xl md:text-2xl font-semibold whitespace-nowrap">AIQ TRAINING</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0 dark:text-gray-400">
            <li>
              <a href={VITE_TERMS_AND_CONDITION} onClick={() => handleSectionChange('disclaimer')} className="hover:underline me-4 md:me-6">Disclaimer</a>
            </li>
            <li>
              <a href={VITE_TERMS_AND_CONDITION} onClick={() => handleSectionChange('privacyPolicy')} className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href={VITE_TERMS_AND_CONDITION}onClick={() => handleSectionChange('termsAndConditions')} className="hover:underline me-4 md:me-6">Terms and Conditions</a>
            </li>
            <li>
              <a href="#" className="hover:underline">info@aiqtraining.com</a>
            </li>
          </ul>
        </div>
        <span className="block text-sm text-gray-300 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">AIQ LEARNING</a>. All Rights Reserved.</span>
      </div>
    </section>
  );
};

export default FooterComponent;