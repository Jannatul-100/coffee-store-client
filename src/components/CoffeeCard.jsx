import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, name, chef, price, photo} = coffee;

    const handleDelete = _id =>{
        console.log(_id);

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

            fetch(`http://localhost:5000/coffee/${_id}`, {
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
                    const remaining = coffees.filter(coff => coff._id !== _id);
                    setCoffees(remaining);
                }
            })
            
        }
     
      })

    }

  return (
    
    <div className="card card-side bg-[#F5F4F1] shadow-sm p-4">
      <figure  className="w-50 h-50 md:w-60 md:h-60 overflow-hidden">
        <img
          src={photo}
          className="w-full h-full object-cover"
          alt=""
        />
      </figure>

      <div className=" flex justify-between w-full  items-center">

        <div className="pl-0 md:pl-2">
            <h2 className="card-title text-md md:text-xl">Name: {name}</h2>
            <p className="text-sm md:text-md">Chef: {chef}</p>
            <p className="text-sm md:text-md">Price: {price} Taka</p>
        </div>

        <div className="card-actions flex flex-col ">

            <Link to={`/coffee/${_id}`}>
                <button className="btn btn-sm md:btn-md w-12 md:w-14 text-white text-xl md:text-2xl bg-[#D2B48C]"> <FaEye /> </button>
            </Link>

            <Link to={`/updateCoffee/${_id}`}>
                <button className="btn btn-sm md:btn-md w-12 md:w-14 text-white text-xl md:text-2xl bg-[#3C393B]"> <MdEdit /> </button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-sm md:btn-md w-12 md:w-14 text-white text-xl md:text-2xl bg-[#EA4744]"><MdDelete /></button>

        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
