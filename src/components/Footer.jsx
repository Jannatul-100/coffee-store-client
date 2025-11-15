import footerbg from '../assets/images/more/13.jpg';
import footerbg2 from '../assets/images/more/24.jpg';
import logo from '../assets/images/more/logo1.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
    <footer className="pt-8 md:pt-16"
            style={{
                backgroundImage: `url(${footerbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

      {/* Footer Main Content */}
      <div className="px-6 md:px-32 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12">
        
        {/* Left */}
        <div>

            <img className='w-16 h-16 mb-2' src={logo} alt='' />
            <h1 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">Espresso Emporium</h1>

          <p className="mb-4 md:mb-8 text-sm md:text-md">
            Always ready for your fresh coffee moments. Enjoy the rich flavor 
            & aroma that will make your day special!
          </p>

          <div className="flex gap-4 mb-4 md:mb-8 text-xl">
            <a><FaFacebook /></a>
            <a><FaTwitter /></a>
            <a><FaInstagram /></a>
            <a><FaLinkedin /></a>
          </div>

            <h2 className='text-xl font-semibold mb-2 md:mb-3'>Get in Touch</h2>
          <p>📞 +880 5555 333 333</p>
          <p>📧 espresso@mail.com</p>
          <p>📍 70 Well Street, King Road, Dhaka</p>
        </div>

        {/* Right - Contact Form */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 mt-16">Connect with Us</h2>

          <form className="grid gap-4">
            <input type="text" placeholder="Name" className="input input-bordered w-full" />
            <input type="email" placeholder="Email" className="input input-bordered w-full" />
            <textarea placeholder="Message" className="textarea textarea-bordered h-28 w-full"></textarea>
            <button className="btn btn-neutral btn-outline border-2 w-fit rounded-full">Send Message</button>
          </form>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-white py-3"
      style={{
                backgroundImage: `url(${footerbg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
        © 2025 Espresso Emporium | All Rights Reserved
      </div>

    </footer>
    );
};

export default Footer;