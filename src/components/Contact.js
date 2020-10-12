import React, {Component} from "react";
import {Container,Row, Col} from "react-bootstrap";


function Contact (){
    return(

           <div>
               <h3 className="pb-3">Do you think I will be a good fit for your team? Let me know!</h3>
               <div className="">
                   <div className="btn-group" role="group">
                       <a role="button" className="btn btn-primary pl-1" href="tel:+15854905546"><i className="fa fa-phone pr-1"></i>Call Me</a>
                       <a role="button" className="btn btn-info pl-1" href="https://www.linkedin.com/in/sarah-zaman/"><i className="fa fa-linkedin pr-1"></i>My LinkedIn</a>
                       <a role="button" className="btn btn-success pl-1" href="mailto:szaman@u.rochester.edu"><i className="fa fa-envelope pr-1"></i>Email Me</a>

                   </div>
               </div>



           </div>



    )


}

export default Contact;