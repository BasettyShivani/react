import Navbar from "../Navbar/Navbar";
import "./About.css";
export default function About(){
    return(
        <>
        <Navbar/>
        <div className="about">
           <center><h1 className="About"> About</h1></center>  
             <p>Welcome to MediCare Hospital. We are dedicated to creating innovative solutions that make life easier and more enjoyable for our users. Our mission is to combine cutting-edge technology with user-friendly design to deliver products you can trust.</p>
       <h4>Our Mission:</h4>
       <p>At MediCare Hospital, our mission is to empower individuals and businesses through high-quality software and services. We strive to solve real-world problems with creativity, precision, and passion.</p>
      
        <h4>Our Values:</h4>

<p>Innovation: We constantly push the boundaries to bring fresh ideas to life.</p>
<p>
Integrity: We prioritize honesty thses using list in react</p>

       
        </div>
       </>
    )
}