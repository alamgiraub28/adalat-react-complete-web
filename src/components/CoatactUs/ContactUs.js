import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className="contact-bg py-5 mt-5" id="contactUs">
        <div className="container w-50">
            <h1 className="text-center text-light pt-4">Contact US</h1>
            <h2 className="text-center text-light fw-bold mb-5">Allways Connect with Us</h2>
            <form>
      <div class="mb-3">
       <input type="email" class="form-control" placeholder="Write Your Email Address" id="exampleInputEmail1" aria-describedby="emailHelp"/>
       </div>
       <div class="mb-3">
       <input type="text" class="form-control" placeholder="Subject" id="exampleInputEmail1" aria-describedby="emailHelp"/>
       </div>
    
       <div class="mb-3">
       <textarea class="form-control" placeholder="Write your message" id="floatingTextarea"></textarea>
       </div>
    
    
      <div className="text-center pb-5">
      <button type="submit" class="btn btn-custom">Submit</button>
      </div>
    </form>
        </div>

    </section>
    );
};

export default ContactUs;