
import ContactForm from './FormContactComponent';
import Map from './MapComponent';

const ContactComponent = () => {
    
    return(
        <div>
            <section className="bg-black pt-24 pb-4 shadow dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto  md:py-8">
                    <div className="flex justify-center ">
                        <h2 className="text-center self-center py-12 text-white text-6xl font-semibold whitespace-nowrap">Contact Us</h2>
                    </div>
                    <div className="flex justify-center ">
                        <p className="text-center self-center py-4 text-white text-xl ">We value your feedback, inquiries, and suggestions. Whether you have a question about our products, need assistance with an order, or just want to drop us a message, we're here to help.</p>
                    </div>
                </div>
            </section>
           
            <section className="bg-black pt-4 pb-4 shadow dark:bg-gray-900 m-4">
                <div className="flex justify-evenly  w-full max-w-screen-xl mx-auto  md:py-8">
                    <div className="">
                        <h2 className="text-center self-center py-4 text-blue-400 text-2xl font-semibold ">Address</h2>
                        <p className="text-center self-center py-4 text-blue-400 text-1xl font-semibold  ">23rd St Miami, Florida</p>
                    </div>
                    <div className="">
                        <h2 className="text-center self-center py-4 text-blue-400 text-2xl font-semibold ">Contact</h2>
                        <p className="text-center self-center py-4 text-blue-400 text-1xl font-semibold ">info@aiqlearning.com</p>
                    </div>
                </div>
            </section>

            <section className="bg-black  pb-4 shadow dark:bg-gray-900 m-4">
                <Map/>
            </section>

            
            <section className="bg-black pt-24 pb-4 shadow dark:bg-gray-900 m-4">
                <ContactForm/>
            </section>
        </div>
        
        

    )
}

export default ContactComponent

