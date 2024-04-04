import ContactForm from './FormContactComponent';
import Map from './MapComponent';

const ContactComponent = () => {
    return (
        <div className="bg-black">
            {/* Sección de encabezado */}
            <section className="text-center text-white py-12 md:py-24">
                <h2 className="text-4xl md:text-6xl font-semibold">Contact Us</h2>
                <p className="text-lg md:p-10 md:text-xl mt-4 md:mt-8">We value your feedback, inquiries, and suggestions. Whether you have a question about our products, need assistance with an order, or just want to drop us a message, we're here to help.</p>
            </section>

            {/* Sección de dirección y contacto */}
            <section className="text-center text-blue-400 py-8 md:py-16">
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-16">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold">Address</h2>
                        <p className="text-lg md:text-xl mt-2">23rd St Miami, Florida</p>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
                        <p className="text-lg md:text-xl mt-2">info@aiqlearning.com</p>
                    </div>
                </div>
            </section>

            {/* Sección del mapa */}
            <section className="py-8 md:py-16">
                <Map />
            </section>

            {/* Sección del formulario de contacto */}
            <section className="py-8 md:py-16">
                <ContactForm />
            </section>
        </div>
    );
}

export default ContactComponent;