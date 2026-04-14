import "./App.css";

export default function App() {
  return (
    <div className="main">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Sam's Designing</h2>

        <div>
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#works">My Works</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>



      {/* HERO */}
      <section className="hero">

        <div className="hero-text">

          <h1>
            Hi, I'm Sam 👋 <br/>
            <span>Web Designer for Modern Brands</span>
          </h1>

          <p>
            I design high-converting, modern websites that help businesses
            attract customers and grow faster online.
            Professional websites starting from just ₹5000.
          </p>

          <div className="buttons">

            <a href="#contact">
              <button className="primary">
                Get My Website
              </button>
            </a>

            <a href="#works">
              <button className="outline">
                View My Works
              </button>
            </a>

          </div>

        </div>


        <img
          src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b"
          alt="designer"
        />

      </section>



      {/* ABOUT */}
      <section className="about">

        <h2>About Me</h2>

        <p>
          I'm a freelance web designer helping small businesses create
          professional websites that attract more customers.
        </p>

        <p>
          I focus on clean UI design, fast performance and mobile-friendly layouts.
          My goal is to help your business look modern and trustworthy online.
        </p>

      </section>



      {/* SERVICES */}
      <section className="services" id="services">

        <h2>Services</h2>

        <div className="cards">

          <div className="card">
            <h3>Business Website</h3>
            <p>Modern website to showcase your business professionally.</p>
          </div>

          <div className="card">
            <h3>WhatsApp Order Website</h3>
            <p>Customers can contact and order directly via WhatsApp.</p>
          </div>

          <div className="card">
            <h3>Online Order System</h3>
            <p>Customers can place orders directly inside website.</p>
          </div>

          <div className="card">
            <h3>Website Redesign</h3>
            <p>Upgrade old website into modern professional design.</p>
          </div>

        </div>

      </section>



      {/* PRICING */}
      <section className="pricing">

        <h2>Affordable Pricing</h2>

        <p className="pricing-sub">
          Simple pricing for startups & small businesses.
        </p>

        <div className="cards">

          <div className="card">

            <h3>Starter Website</h3>

            <h1>₹5000</h1>

            <ul>
              <li>3-5 Pages</li>
              <li>Mobile Friendly</li>
              <li>WhatsApp Button</li>
              <li>Contact Form</li>
              <li>Fast Loading</li>
            </ul>

            <button>Choose Plan</button>

          </div>


          <div className="card popular">
  <h3>Portfolio Website</h3>
  <h1>₹2000</h1>
  <ul>
    <li>Personal Branding</li>
    <li>Responsive Gallery</li>
    <li>Contact Form Integration</li>
    <li>Modern & Elegant Layout</li>
    <li>Social Media Links</li>
  </ul>
  <button>Get Started</button>
</div>
  



          <div className="card">

            <h3>Maintenance</h3>

            <h1>₹1000/month</h1>

            <ul>
              <li>Website Updates</li>
              <li>Bug Fixing</li>
              <li>Content Changes</li>
              <li>Support</li>
            </ul>

            <button>Choose Plan</button>

          </div>

        </div>

      </section>



      {/* WHY CHOOSE ME */}
      <section className="features">

        <h2>Why Choose Me?</h2>

        <p className="pricing-sub">
          Designed to impress your customers & grow your business.
        </p>

        <div className="cards">

          <div className="feature">
            <h3>⚡ Fast & Modern UI</h3>
            <p>Clean Gen-Z style design that makes your brand look premium.</p>
          </div>

          <div className="feature">
            <h3>📱 Mobile First</h3>
            <p>Perfect look on mobile, tablet and laptop screens.</p>
          </div>

          <div className="feature">
            <h3>💸 Budget Friendly</h3>
            <p>Startup friendly pricing with high quality results.</p>
          </div>

          <div className="feature">
            <h3>🚀 Growth Focused</h3>
            <p>Website structured to increase enquiries & customers.</p>
          </div>

        </div>

      </section>



      {/* MY WORKS */}
      <section className="works" id="works">

        <h2>Selected Projects</h2>

        <p>
          Real websites designed for real businesses.
        </p>

        <div className="cards">

          <div className="card work">

            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="website"
            />

            <h3>Restaurant Website</h3>

            <a
              href="https://geesha-baker.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-btn"
            >
              View Website ↗
            </a>

          </div>



          <div className="card work">

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="website"
            />

            <h3>Boutique Website</h3>

            <a
              href="https://www.princyfashionboutique.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="work-btn"
            >
              View Website ↗
            </a>

          </div>



          <div className="card work">

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="website"
            />

            <h3>Portfolio Website</h3>

            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="work-btn"
            >
              View Website ↗
            </a>

          </div>

        </div>

      </section>



      {/* CONTACT */}
      <section className="contact" id="contact">

        <h2>Let's Build Your Website</h2>

        <p>
          Ready to grow your business online? Contact me now.
        </p>

        <p>📞 WhatsApp: 8667041407</p>

        <p>📧 Email: samnithish62@gmail.com</p>


        <a
          href="https://wa.me/918667041407"
          target="_blank"
          rel="noopener noreferrer"
        >

          <button className="primary whatsapp-btn">

            💬 Let's Talk on WhatsApp

          </button>

        </a>

      </section>

    </div>
  );
}