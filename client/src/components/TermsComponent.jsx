import React, { useState } from 'react';

const TermsComponent = () => {
  const [selectedSection, setSelectedSection] = useState('disclaimer');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="flex flex-col">
      <div className="flex w-1/3 m-auto bg-gray-900 text-white">
        <div
          className={`flex-1 px-4 py-2 cursor-pointer ${selectedSection === 'disclaimer' ? 'bg-gray-800' : ''
            }`}
          onClick={() => handleSectionChange('disclaimer')}
        >
          Disclaimer
        </div>
        <div
          className={`flex-1 px-4 py-2 cursor-pointer ${selectedSection === 'privacyPolicy' ? 'bg-gray-800' : ''
            }`}
          onClick={() => handleSectionChange('privacyPolicy')}
        >
          Privacy Policy
        </div>
        <div
          className={`flex-1 px-4 py-2 cursor-pointer ${selectedSection === 'termsAndConditions' ? 'bg-gray-800' : ''
            }`}
          onClick={() => handleSectionChange('termsAndConditions')}
        >
          Terms and Conditions
        </div>
      </div>
      <div className="w-full bg-black p-8">
        {selectedSection === 'disclaimer' && (
          <div className="max-w-md bg-white shadow-lg font-extrabold text-black rounded-lg overflow-y-auto mx-auto my-4 p-6 h-96">
            <h2 className="text-xl font-extrabold text-gray-800 mb-4">Disclaimer</h2>
            <p className="text-black">
            AIQ provides information for educational and informational purposes only. It does not constitute financial advice, and users should consult with a qualified financial professional before making any investment decisions based on the content published by AIQ. AIQ is not responsible for any actions taken by users in reliance on the information provided, and users engage with the content at their own risk.

AIQ is a publisher of information and does not offer financial advice. The content provided by AIQ is intended for general knowledge and educational purposes only. Users are encouraged to independently research and verify information before making any financial decisions. AIQ does not assume responsibility for the accuracy, completeness, or timeliness of the content, and any reliance on it is at the user's own discretion. It is advisable to consult with a qualified financial professional for personalized advice tailored to individual circumstances.
            </p>
          </div>
        )}
        {selectedSection === 'privacyPolicy' && (
          <div className="max-w-md bg-white shadow-lg font-extrabold text-black rounded-lg overflow-y-auto mx-auto my-4 p-6 h-96">
            <h2 className="text-xl font-extrabold text-black mb-4">Privacy Policy</h2>
            <p className="font-extrabold text-black">
              This Privacy Policy outlines how personal information is collected, used, and protected when you purchase and access the trading education course offered by AIQ Learning. By engaging with our services, you agree to the practices described herein.
            </p>
            <p>
              1. Information Collected:
              <br />
              - Personal Information: We collect information such as your name, email address, and payment details to facilitate the purchase and enrollment process.
              <br />
              - User Activity: We may gather data on your interaction with the course platform, including access times, pages visited, and progress within the course.
            </p>
            <p>
              2. Use of Information:
              <br />
              - Transaction Processing: Personal information is utilized for processing transactions and providing access to the trading education course.
              <br />
              - Communication: We may use your contact details to communicate course updates, relevant information, or promotional materials. You can opt out of non-essential communications.
              <br />
              - Improvement of Services: Aggregated and anonymized data may be used for analysis to enhance the quality of our services.
            </p>
            <p>
              3. Protection of Information:
              <br />
              - Security Measures: We implement industry-standard security measures to protect against unauthorized access, alteration, disclosure, or destruction of personal information.
              <br />
              - Data Encryption: All transactions are processed securely, and sensitive information is encrypted to ensure confidentiality.
            </p>
            <p>
              4. Third-Party Services:
              <br />
              - External Links: Our course platform may contain links to external websites or resources. We are not responsible for the content or privacy practices of these third-party sites.
            </p>
            <p>
              5. Cookies:
              <br />
              - Usage of Cookies: We may use cookies to enhance your browsing experience. You can modify your browser settings to disable cookies, but this may affect certain functionalities.
            </p>
            <p>
              6. Data Retention:
              <br />
              - Retention Period: We retain personal information only for the necessary duration to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <p>
              7. User Control:
              <br />
              - Access and Correction: You have the right to access and correct your personal information. You can do so by contacting us through the provided channels.
              <br />
              - Withdrawal of Consent: You can withdraw your consent for certain uses of your information. Please note that this may affect your ability to access the course.
            </p>
            <p>
              8. Children’s Privacy:
              <br />
              - Age Restriction: The trading education course is intended for individuals above a certain age (specified in compliance with applicable laws). We do not knowingly collect information from individuals below this age.
            </p>
            <p>
              9. Changes to the Privacy Policy:
              <br />
              - Notification: Any changes to this Privacy Policy will be communicated through the course platform. Continued use of our services constitutes acceptance of these changes.
            </p>
            <p>
              10. Contact Information:
              <br />
              - For questions, concerns, or requests regarding your privacy, please contact us at [your contact information].
            </p>
            <p>
              By engaging with our services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your personal information as outlined herein.
            </p>
          </div>
        )}
        {selectedSection === 'termsAndConditions' && (
          <div className="max-w-md bg-white shadow-lg rounded-lg overflow-y-auto mx-auto my-4 p-6 h-96">
            <h2 className="text-xl font-bold text-black mb-4">Terms and Conditions</h2>
            <p className="font-bold text-black">
              <p>1. Course Access:</p>
              <p>- Upon successful purchase, the buyer will receive access to the trading education course for a specified duration.</p>
              <p>- Access is non-transferable and limited to the individual purchaser only.</p>

              <p>2. Payment:</p>
              <p>- The course fee is to be paid in full at the time of purchase.</p>
              <p>- All transactions are processed securely, and no financial information is stored.</p>

              <p>3. Refund Policy:</p>
              <p>- Refunds will only be considered within a specified period from the date of purchase, subject to review.</p>
              <p>- Refund requests must be submitted in writing, providing a valid reason for the request.</p>

              <p>3.1 Non-Refundable Nature:</p>
              <p>- The course fee is non-refundable, and no refunds will be issued under any circumstances.</p>
              <p>- By completing the purchase, the buyer acknowledges and accepts the non-refundable nature of the trading education course.</p>

              <p>4. Intellectual Property:</p>
              <p>- All course materials, including but not limited to videos, text, and resources, are the intellectual property of the seller.</p>
              <p>- Purchasers are granted a limited, non-exclusive, non-transferable license for personal use only.</p>

              <p>5. Copyright Compliance:</p>
              <p>- Purchasers agree not to reproduce, distribute, or share course materials without explicit written consent from the seller.</p>
              <p>- Any unauthorized use may result in legal action.</p>

              <p>6. Disclaimer:</p>
              <p>- The seller does not guarantee financial success or specific trading outcomes as a result of taking the course.</p>
              <p>- Trading involves risk, and individuals are advised to make informed decisions based on their own analysis.</p>

              <p>7. Course Modifications:</p>
              <p>- The seller reserves the right to update, modify, or discontinue any part of the course content or structure, with or without notice.</p>

              <p>8. Communication:</p>
              <p>- Purchasers may receive course-related communications, updates, and promotional materials via the provided contact information.</p>
              <p>- Opting out of non-essential communications can be done through the provided communication channels.</p>

              <p>9. Technical Requirements:</p>
              <p>- Purchasers are responsible for ensuring their devices meet the technical requirements for accessing the course content.</p>

              <p>10. Termination of Access:</p>
              <p>- The seller reserves the right to terminate course access for any individual found in violation of these terms and conditions.</p>

              <p>11. Governing Law:</p>
              <p>- These terms and conditions are governed by and construed in accordance with the laws of [jurisdiction], and any disputes shall be resolved in the appropriate courts.</p>

              <p>12. User Conduct:</p>
              <p>- Purchasers are expected to conduct themselves respectfully in any online forums, discussion groups, or interactive elements associated with the course.</p>
              <p>- Any inappropriate or disruptive behavior may result in the immediate termination of course access without refund.</p>

              <p>13. Privacy Policy:</p>
              <p>- Personal information collected during the course of the transaction and course access will be handled in accordance with the seller's privacy policy.</p>
              <p>- The privacy policy outlines how information is collected, used, and protected.</p>

              <p>14. External Resources:</p>
              <p>- The seller may provide links or references to external resources for supplemental learning.</p>
              <p>- The seller is not responsible for the content or availability of these external resources.</p>

              <p>15. Feedback and Testimonials:</p>
              <p>- The seller may request feedback or testimonials from purchasers for promotional purposes.</p>
              <p>- Participation is voluntary, and any provided feedback may be used in marketing materials.</p>

              <p>16. Force Majeure:</p>
              <p>- The seller is not liable for any failure or delay in performing obligations under these terms and conditions due to unforeseen circumstances beyond reasonable control.</p>

              <p>17. Entire Agreement:</p>
              <p>- These terms and conditions constitute the entire agreement between the buyer and the seller and supersede any prior agreements, understandings, or negotiations.</p>

              <p>18. Amendments:</p>
              <p>- The seller reserves the right to amend these terms and conditions at any time, and such amendments will be effective immediately upon posting on the course platform.</p>
              <p>19. Contact Information: For any inquiries regarding these terms and conditions, please contact the seller using the provided contact information on the course platform.</p>

              <p>By continuing with the purchase and accessing the trading education course, the buyer affirms their understanding and acceptance of the expanded terms and conditions.</p>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermsComponent;
