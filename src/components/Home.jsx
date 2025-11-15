import { Link, useLoaderData } from "react-router-dom";
import "../App.css";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";
import headerbg from "../assets/images/more/3.png";
import icon1 from "../assets/images/icons/1.png";
import icon2 from "../assets/images/icons/2.png";
import icon3 from "../assets/images/icons/3.png";
import icon4 from "../assets/images/icons/4.png";
import bg from "../assets/images/more/1.png";
import cups9 from "../assets/images/cups/Rectangle 9.png";
import cups10 from "../assets/images/cups/Rectangle 10.png";
import cups11 from "../assets/images/cups/Rectangle 11.png";
import cups12 from "../assets/images/cups/Rectangle 12.png";
import cups13 from "../assets/images/cups/Rectangle 13.png";
import cups14 from "../assets/images/cups/Rectangle 14.png";
import cups15 from "../assets/images/cups/Rectangle 15.png";
import cups16 from "../assets/images/cups/Rectangle 16.png";

function Home() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <img
          src={headerbg}
          alt="Coffee Beans"
          className="w-full h-full object-cover opacity-90"
        />

        <div className="absolute top-10 md:top-80 left-6 md:left-60 lg:left-160  flex flex-col justify-center items-start  px-6">
          <h2 className="text-xl md:text-2xl lg:text-4xl text-white font-semibold mb-4">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="text-sm md:text-md lg:text-lg max-w-2xl mb-4 text-white">
            It’s coffee time — Sip & Savor — Relaxation in every sip! Get the
            nostalgic touch in every moment!
          </p>
          <button className="bg-[#E3B577] hover:bg-[#D2B48C] text-black px-3 py-1 lg:px-6 lg:py-2 rounded">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 py-12 px-14 bg-[#F3EFE7] text-center">
        <div className="mb-4 md:mb-0"> 
          <img src={icon1} alt="" className="mx-auto w-10 md:w-14" />
          <h3 className="font-semibold text-lg mt-2">Awesome Aroma</h3>
          <p className="text-sm">Your taste will love the aroma</p>
        </div>

        <div className="mb-4 md:mb-0">
          <img src={icon2} alt="" className="mx-auto w-10 md:w-14" />
          <h3 className="font-semibold text-lg mt-2">High Quality</h3>
          <p className="text-sm">We maintain the best quality</p>
        </div>

        <div>
          <img src={icon3} alt="" className="mx-auto w-10 md:w-14" />
          <h3 className="font-semibold text-lg mt-2">Pure Grades</h3>
          <p className="text-sm">Best green coffee beans</p>
        </div>

        <div>
          <img src={icon4} alt="" className="mx-auto w-10 md:w-14" />
          <h3 className="font-semibold text-lg mt-2">Proper Roasting</h3>
          <p className="text-sm">Perfectly roasted for great taste</p>
        </div>
      </section>


{/* products section */}

      <div className="relative mt-16">
          <img
            src={bg}
            alt="Coffee Beans"
            className="absolute inset-0 w-full h-full object-cover opacity-50 -z-10"
          />

        <div className="relative px-6 md:px-32">
          <p className="text-center text-sm mt-12">--- Sip & Savor ---</p>
          <h1 className="text-4xl text-amber-900 font-semibold text-center mb-12">
            Our Popular Products: {coffees.length}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coffees.map((coffee) => (
              <CoffeeCard
                key={coffee._id}
                coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
              ></CoffeeCard>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram Gallery */}
      <div className="text-center my-16">
        <h3 className="text-md ">Follow Us Now</h3>
        <h2 className="text-3xl  font-bold mb-12">Follow on Instagram</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 md:px-32">
          <img src={cups9} className="rounded-lg" alt="" />
          <img src={cups10} className="rounded-lg" alt="" />
          <img src={cups11} className="rounded-lg" alt="" />
          <img src={cups12} className="rounded-lg" alt="" />
          <img src={cups13} className="rounded-lg" alt="" />
          <img src={cups14} className="rounded-lg" alt="" />
          <img src={cups15} className="rounded-lg" alt="" />
          <img src={cups16} className="rounded-lg" alt="" />
        </div>
      </div>
    </div>

  );
}

export default Home;
