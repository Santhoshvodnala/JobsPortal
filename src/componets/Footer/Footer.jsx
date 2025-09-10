import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">JobsPortal 📋</h3>
          <p className="text-sm">
            Connecting talent with opportunity. <br />
            Explore thousands of job listings and <br /> build your career with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">About</a></li>
            <li><a href="#" className="hover:text-orange-500">Jobs</a></li>
            <li><a href="#" className="hover:text-orange-500">Companies</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm flex items-center gap-2">📍 Hyderabad, India</p>
          <p className="text-sm flex items-center gap-2">📧 support@jobsportal.com</p>
          <p className="text-sm flex items-center gap-2">📞 +91 98765 43210</p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="hover:text-orange-500 text-xl"><FaFacebook /></a>
            <a href="#" className="hover:text-orange-500 text-xl"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-500 text-xl"><FaLinkedin /></a>
            <a href="#" className="hover:text-orange-500 text-xl"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} JobsPortal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
