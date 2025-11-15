import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewCoffee = () => {

    const coffee = useLoaderData();
    const {name, chef, supplier, taste, category, details, price, photo} = coffee;    

    return (
        <div className="card md:card-side shadow-sm bg-[#F4F3F0] p-8 md:p-20 mx-6 md:mx-32 my-16">
            <figure className='w-1/2'>
                <img
                className='w-full object-cover'
                src={photo}
                alt="Album" />
            </figure>
            <div className="card-body m-4">
                <h2 className="card-title">{name}</h2>
                <p>Chef: {chef}</p>
                <p>Supplier: {supplier}</p>
                <p>Taste: {taste}</p>
                <p>Category: {category}</p>
                <p>Details: {details}</p>
                <p>Price: {price}</p>

                <div className="card-actions justify-end">
                    <Link to="/" className="btn btn-ghost">Back To Home</Link>
                </div>

            </div>
        </div>
    );
};

export default ViewCoffee;