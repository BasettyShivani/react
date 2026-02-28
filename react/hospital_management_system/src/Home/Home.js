import Navbar from "../Navbar/Navbar";
import './Home.css';
export default function Home(){
    return(
        <>
         <Navbar/>
        <div class="home">

       <center>     <h2 className="welcome">Welcome to home </h2>
                  <img src="https://images.stockcake.com/public/d/9/e/d9e0f1cb-6bb7-406a-aa30-c72cf629d5ac_large/hospital-emergency-room-stockcake.jpg"  height="350" width="350"/>
        </center><p className="para">A hospital homepage must immediately convey trust, compassion, and professionalism, acting as a digital front door. Essential elements include clear navigation, prominent "Book Appointment" calls-to-action, 24/7 emergency contact details, and a list of key services/specialties. It should prioritize user experience with a mobile-responsive design, featuring doctor profiles, patient testimonials, and location maps. 
            Already have an account? <a href="/login">Log in</a> to continue where
        you left off, or <a href="/register">Register</a> to start your journey
        with us today!
        We are committed to excellence in patient care. Our team provides:</p>
        <ul>
          <li>Qualified and Experienced Doctors</li>
          <li>State-of-the-Art Medical Technology</li>
          <li>24/7 Emergency Services</li>
          <li>Compassionate and Friendly Staff</li>
          <li>Affordable and Transparent Pricing</li>
</ul>
        </div>
        </>
    )
}