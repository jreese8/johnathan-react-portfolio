import React from 'react';
import { Button } from 'reactstrap';

function ContactForm (props) {
  return (
    
      <div className="text-center text-primary bg-light">
          <h1>Contact Us</h1>
  
          <form target="_blank" action="https://formsubmit.co/905dfbcbc473117283581859ec676ab6" method="POST">

                <div className="pt-3">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
                </div>
        
                <div className="pt-3">
                  <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
                </div>

            <div className="pt-3">
              <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
            </div>

            <div className="pt-3">
              <Button className="btn btn-outline-primary" type="submit">Submit</Button>
            </div>

          </form>
      </div>
   
  );
}

export default ContactForm;