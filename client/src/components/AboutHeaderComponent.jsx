import React from 'react';

const AboutHeaderComponent = () => {
  return (
    <div className="font-bold">
      <section className="text-center">
        <h1 className="text-6xl p-6 font-bold text-white mb-8">About Us</h1>
        <h3 className="text-blue-400 text-2xl">Finding Inspiration in Every Turn</h3>
        <p className="text-lg lg:text-2xl text-white dark:text-gray-500 mt-12 px-4 lg:px-64">
          AIQ are driven by a commitment to providing valuable and insightful information. Our mission is to empower individuals with knowledge, serving as a trusted publisher in various domains. We prioritize accuracy and aim to foster a learning environment. While we offer information, it's important to note that we do not provide specific advice, especially in financial matters. Our focus is on contributing to your understanding, and we encourage users to exercise their own judgment and seek professional advice when needed.
        </p>
      </section>
      <section>
        <div className="mt-32 flex items-center justify-center">
          <img className="w-full md:w-2/3 lg:h-96 rounded-lg border-4 border-white" src="https://static.wixstatic.com/media/a1316e_40b7a7d4635a410f926ed8d3ec9c7494~mv2.png/v1/fill/w_1743,h_383,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a1316e_40b7a7d4635a410f926ed8d3ec9c7494~mv2.png" alt="Descripción de la imagen" />
        </div>
      </section>
    </div>
  );
};

export default AboutHeaderComponent;