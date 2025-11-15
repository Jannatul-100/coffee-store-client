import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MdEdit, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

   const handleUserDelete = _id =>{

        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:5000/users/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your coffee has been deleted.",
                    icon: "success"
                    });
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                }
            })
            
        }
     
      })

    }

    return (
      <div className='mx-6 md:mx-32 my-16'>
        <h2 className='mb-4 text-center text-2xl font-semibold'>Users : {users.length}</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
                {
                    users.map(user =>               
                        <tr key={user._id}>
                            <th></th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.createAt}</td>
                            <td>{user.lastSignInTime}</td>
                            <td>
                               
                                <button className="btn btn-md w-14 mr-2 text-white text-2xl bg-[#3C393B]"> <MdEdit /> </button>
                                <button onClick={() => handleUserDelete(user._id)} className="btn btn-md w-14 text-white text-2xl bg-[#EA4744]"><MdDelete /></button>
                                
                            </td>
                        </tr>
                    )
                }
              
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Users;