export function renderHome(container) {
  container.innerHTML = `
    <header>
        <div class="nav">
            <div class="head">Medicare</div>
            <div class="sections" id="navMenu">
                <div class="nav-item"><a href="#home">Home</a></div>
                <div class="nav-item"><a href="#features">Features</a></div>
                <div class="nav-item"><a href="#about">About</a></div>
                <div class="nav-item"><a href="#testimonials">Testimonials</a></div>
                <div class="nav-item"><a href="#contact">Contact</a></div>
            </div>
            <div class="nav-buttons">
           



<button class="sign" onclick="window.location.hash='#login'">Login</button>
                <div class="hamburger" id="hamburger">
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div>
    </header>

    <section class="b-head">
        <div class="bbbb">
            <div class="bbb slide-left">
                <button class="butt">Trusted Healthcare</button>
                <div class="b-text">
                    Your Health Is Our <br>
                    <span style="color: rgb(78, 152, 248)">Priority</span>
                </div>
                <div class="b-mini">
                    We provide exceptional healthcare services with a focus on 
                    patient comfort, innovative treatments, and compassionate 
                    care from our team of experts.
                </div>
                <button class="bb" onclick="window.location.hash='#dashboard'">Book Appointment</button>
            </div>
            <div class="img" slide-right>
                <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800" class="b-img" alt="Medical professional">
            </div>
        </div>

        <div class="percent">
            <div class="percent1">
                <span>25+</span>
                <div class="num-mini">Years Experience</div>
            </div>
            <div class="percent2">
                <span>100+</span>
                <div class="num-mini">Specialist Doctors</div>
            </div>
            <div class="percent3">
                <span>50k+</span>
                <div class="num-mini">Happy Patients</div>
            </div>
            <div class="percent4">
                <span>24/7</span>
                <div class="num-mini">Emergency Care</div>
            </div>
        </div>
    </section>

    <section class="bb-head">
        <button class="our">Our Services</button>
        <h2 class="com">Comprehensive Healthcare Services</h2>
        <p class="com-mini">Wide range of medical services from routine checkups to specialized treatments.</p>
        
        <div class="containers">
            <div class="contain">
                <div class="contain1">
                    <i class="fas fa-heartbeat" style="font-size: 2.5rem; color: #4e98f8; margin-bottom: 1rem;"></i>
                    <div class="con-b">Cardiology</div>
                    <p class="con-mini">Advanced diagnostic and treatment for heart conditions.</p>
                    <div class="more1">Learn more →</div>
                </div>
                <div class="contain1">
                    <i class="fas fa-brain" style="font-size: 2.5rem; color: #4e98f8; margin-bottom: 1rem;"></i>
                    <div class="con-b">Neurology</div>
                    <p class="con-mini">Expert diagnosis and treatment of nervous system disorders.</p>
                    <div class="more2">Learn more →</div>
                </div>
                <div class="contain1">
                    <i class="fas fa-stethoscope" style="font-size: 2.5rem; color: #4e98f8; margin-bottom: 1rem;"></i>
                    <div class="con-b">General Medicine</div>
                    <p class="con-mini">Primary healthcare services for patients of all ages.</p>
                    <div class="more3">Learn more →</div>
                </div>
            </div>
        </div>
    </section>

    <section class="doctors">
        <button class="doc">Our Doctors</button>
        <h2 class="expert">Meet Our Expert Physicians</h2>
        <div class="doc-pic">
            <div class="doc1" hidden>
                <img src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600" style="object-position: center 15%;">
                <div class="dn">Dr. Sarah Johnson<br><span>Cardiologist</span></div>
                <p class="doc-description">Specializes in heart diseases and conditions, with over 15 years of experience in interventional cardiology and preventive heart care.</p>
                
            </div>
            <div class="doc1" hidden>
                <img src="https://images.pexels.com/photos/3279197/pexels-photo-3279197.jpeg?auto=compress&cs=tinysrgb&w=600" style="object-position: center 10%;">
                <div class="dn">Dr. Michael Chen<br><span>Neurologist</span></div>
                <p class="doc-description">Expert in treating disorders of the nervous system, including brain and spinal cord conditions, with special focus on migraine treatment.</p>
                
            </div>
            <div class="doc1" hidden>
                <img src="https://images.pexels.com/photos/3902481/pexels-photo-3902481.jpeg?auto=compress&cs=tinysrgb&w=600" style="object-position: center 10%;">
                <div class="dn">Dr. Emily Rodriguez<br><span>Pediatrician</span></div>
                <p class="doc-description">Dedicated to providing comprehensive healthcare for children from birth through adolescence, with expertise in developmental pediatrics.</p>
                
            </div>
        </div>
    </section>

    <section class="say">
        <button class="test">Testimonials</button>
        <h2 class="What">What Our Patients Say</h2>
        <div class="boxs">
            <div class="box1">
                <div class="icons"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i></div>
                <p class="bt">"The care I received at Medicare was exceptional. The doctors were knowledgeable and compassionate."</p>
                <div class="btt">Jennifer Lewis <br><span>Patient</span></div>
            </div>
            <div class="box1">
                <div class="icons"><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star-half'></i></div>
                <p class="bt">"Professional staff and modern clean facilities. I highly recommend this hospital."</p>
                <div class="btt">Maria Garcia <br><span>Patient</span></div>
            </div>
        </div>
    </section>


   <section class="contact" id="contact-section">
        <button class="uss">Contact Us</button>
        <h2 class="touch">Get in Touch with Us</h2>
        <p class="touch-mini">Have questions? Our team is here to help you with all your healthcare needs.</p>
        
        <div class="contact-grid">
            <div class="contact-item">
                <div class="contact-icon"><i class="fas fa-phone-alt"></i></div>
                <div class="contact-text">
                    <div class="contact-title">Phone</div>
                    <div class="contact-detail">(123) 456-7890<br>Emergency: (123) 456-7899</div>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                <div class="contact-text">
                    <div class="contact-title">Email</div>
                    <div class="contact-detail">info@medicare-hospital.com<br>support@medicare.com</div>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
                <div class="contact-text">
                    <div class="contact-title">Location</div>
                    <div class="contact-detail">123 Healthcare Avenue<br>Medical District, NY 12345</div>
                </div>
            </div>
        </div>

        <div class="contact-form">
            <h3 class="form-title">Send Us a Message</h3>
            <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-input" placeholder="Your Name">
            </div>
            <div class="form-group">
                <label class="form-label">Email Address</label>
                <input type="email" class="form-input" placeholder="Your Email">
            </div>
            <div class="form-group">
                <label class="form-label">Message</label>
                <textarea class="form-textarea" placeholder="Your Message"></textarea>
            </div>
            <button class="sign" style="width: 100%;">Send Message</button>
        </div>
    </section>

    <footer>
    <div class="footer-content">
        <div class="footer-column">
            <h3 style="color: #4e98f8; margin-bottom: 1rem;">Medicare</h3>
            <p style="color: #b0b7c3; font-size: 0.9rem;">
                Providing world-class healthcare with a personal touch since 1998. 
                Our mission is to make quality medical care accessible to everyone.
            </p>
        </div>

        <div class="footer-column">
            <h3>Our Services</h3>
            <ul class="footer-links" style="list-style: none; padding: 0;">
                <li><a href="#features">Cardiology</a></li>
                <li><a href="#features">Neurology</a></li>
                <li><a href="#features">Pediatrics</a></li>
            </ul>
        </div>

        <div class="footer-column">
            <h3>Contact Us</h3>
            <ul class="footer-links" style="list-style: none; padding: 0;">
                <li style="color: #b0b7c3;"><i class="fas fa-map-marker-alt" style="margin-right: 10px;"></i> 123 Healthcare Ave, NY</li>
                <li style="color: #b0b7c3;"><i class="fas fa-phone" style="margin-right: 10px;"></i> (123) 456-7890</li>
                <li style="color: #b0b7c3;"><i class="fas fa-envelope" style="margin-right: 10px;"></i> info@medicare.com</li>
            </ul>
        </div>
    </div>
    
    <div class="footer-bottom" style="margin-top: 2rem; border-top: 1px solid #2d3e5f; padding-top: 1rem;">
        <p>&copy; 2026 Medicare Healthcare. All rights reserved.</p>
    </div>
</footer>
  `;
}