import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const details = useLoaderData()
    console.log(details)
    return (
        <div>
            this is service details
        </div>
    );
};

export default ServiceDetails;