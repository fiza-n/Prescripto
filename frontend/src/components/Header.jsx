
import { useAppContext } from "../context/AppContext"
import "./Header.css"

const Header = () => {

    const {assets} = useAppContext()
    return (
        <div className="header-container bg-primary">
            {/* Left Content Section */}
            <div className="header-content">
                <div className="header-left">
                    <p>Book Appointments <br /> With Trusted Doctors</p>
                </div>
                <div className="header-info">
                    <img src={assets.group_profiles} alt="Group profiles" />
                    <p>Simply browse through our extensive list of trusted doctor, schedule your appointments hassle-free.</p>
                </div>
                <a  className="header-appointment-btn" href="#speciality">
                    Book Appointment <img src={assets.arrow_icon} alt="arrow" />
                </a>
            </div>

            {/* Right Image Section */}
            <div className="header-image-section">
                <img src={assets.header_img} alt="header" />
            </div>
        </div>
    )
}

export default Header