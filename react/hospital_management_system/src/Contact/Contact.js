import Navbar from "../Navbar/Navbar";
import"./Contact.css";
export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact">
        
        <center><h2 className="cont">Contact Us</h2>
        <p>
          We are here to help. Reach out to our hospital for appointments,
emergency care, or general inquiries.
        </p>
           </center>
        <section className="info">
          <h3>Hospital Address</h3>
          <p>
           MediCare Hospital<br />
            123 Health Avenue <br />
            New Town, NY 10001 <br />
            United States
          </p>
        </section>
<section className="info">
          <h3>Phone & Email</h3>
          <p>
            <strong>Emergency:</strong> +1 (555) 911-0000 <br />
            <strong>Appointments:</strong> +1 (555) 123-4567 <br />
            <strong>Email:</strong> contact@medicarehospital.com
          </p>
        </section>

        <section className="info">
          <h3>Working Hours</h3>
          <p>
            Monday -Friday: 8:00 AM - 8:00 PM <br />
            Saturday - Sunday: 9:00 AM - 5:00 PM <br />
            Emergency Services: 24/7
          </p>
        </section>
      </div>
    </>
  );
}
