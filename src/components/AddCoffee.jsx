import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleAddCoffee = e =>{
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const photo = form.photo.value;

        const newCoffee = {name, chef, supplier, taste, category, details, price, photo};
        console.log(newCoffee);


        //send data to the server
        fetch('https://coffee-store-server-seven-beta.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title:'Success!',
                    text: 'Coffee Added Successfully',
                    icon:'success',
                    confirmButtonText: 'Cool'
                })
                form.reset();
            }
        })

    }

  return (
    <div className="bg-[#F4F3F0] p-10 md:p-24 rounded-md mx-6 md:mx-32 my-16">
      <h2 className="text-4xl text-center font-semibold text-gray-600 mb-8">
        Add New Coffee
      </h2>

      <form onSubmit={handleAddCoffee}>

        {/* name & chef row*/}
        <div className="md:flex md:gap-6">
          {/* Coffee Name */}
          <div className="form-control md:w-1/2 mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Chef Name */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              placeholder="Enter chef name"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* supplier & taste row */}
        <div className="md:flex md:gap-6">
      
          <div className="form-control md:w-1/2 mb-4">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full"
              required
            />
          </div>

          
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* category & details row */}
        <div className="md:flex md:gap-6">
        
          <div className="form-control md:w-1/2 mb-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="input input-bordered w-full"
              required
            />
          </div>

        
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* photo row */}
        <div className="md:flex md:gap-6">
       
          <div className="form-control md:w-1/2 mb-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Enter coffee price"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control md:w-1/2 mb-4">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* button */}
        <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C] mt-4" id="" />

        
      </form>
    </div>
  );
};

export default AddCoffee;
