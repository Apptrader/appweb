import React from 'react';

const NeoTechBodyComponent = () => {
    return (
        <div className="container mx-auto max-w-screen-xxl px-4">
            <div className="mx-auto">
                {[
                    "https://aiqvideos.s3.us-east-2.amazonaws.com/aiq+fotos/aiq+1.png",
                    "https://aiqvideos.s3.us-east-2.amazonaws.com/aiq+fotos/aiq+2.png",
                    "https://aiqvideos.s3.us-east-2.amazonaws.com/aiq+fotos/aiq+3.png",
                    "https://aiqvideos.s3.us-east-2.amazonaws.com/aiq+fotos/aiq+4.png",
                    "https://aiqvideos.s3.us-east-2.amazonaws.com/aiq+fotos/aiq+5.png",
                    "https://aiqvideos.s3.us-east-2.amazonaws.com/aiq+fotos/aiq+6.png",
                    "https://aiqvideos.s3.us-east-2.amazonaws.com/aiq+fotos/aiq+7.png",
                    "https://aiqvideos.s3.us-east-2.amazonaws.com/aiq+fotos/aiq+8.png",
                    "https://aiqvideos.s3.us-east-2.amazonaws.com/aiq+fotos/aiq+9.png",
                    "https://aiqvideos.s3.us-east-2.amazonaws.com/aiq+fotos/aiq+10.png",
                    "https://aiqvideos.s3.us-east-2.amazonaws.com/aiq+fotos/aiq+11.png"
                ].map((imageUrl, index) => (
                    <div key={index} className="my-4">
                        <img className="mx-auto h-auto w-full md:w-3/4 lg:w-3/4 xl:w-3/4" src={imageUrl} alt={`Image ${index}`} />
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <h2 className="text-4xl font-semibold text-white mb-4">NeoTech</h2>
                <p className="text-lg text-white">
                    NeoTech is not owned by or affiliated with AIQ ACADEMY or any of its subsidiaries.
                    NeoTech is a financial technology company that specializes in the blockchain investment market. They develop market-proven tools that implement artificial intelligence and machine learning techniques.
                    Members with access to NeoTech AI robot who choose to become clients will gain access to NeoTech's market-proven AI Forex trading software and institutional trading strategies. NeoTech AI is a third-party product offering.
                </p>
            </div>
        </div>
    );
};

export default NeoTechBodyComponent;