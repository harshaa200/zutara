import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>ZUTARA</h1>
        <nav>
          <a href="#features" style={styles.navLink}>Features</a>
          <a href="#pricing" style={styles.navLink}>Pricing</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <h2 style={styles.heroTitle} className="slide-in">Empower Entrepreneurs & Designers</h2>
        <p style={styles.heroSubtitle}>
          A dedicated platform for freelancers, entrepreneurs, and young designers to connect, collaborate, and grow.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <button style={styles.ctaButton}>Explore Now</button>
    <button style={styles.ctaButtonSecondary}>Learn More</button>
</div>

      </section>

      <section style={styles.features} id="features">
        <h3 style={styles.sectionTitle}>Why ZUTARA?</h3>
        <div style={styles.featureList}>
          <div style={styles.featureItem}>
            <h4 style={styles.featureTitle}>Find the Best Talent</h4>
            <p style={styles.featureDescription}>
              Our platform connects you with top freelancers and creative minds across various industries.
            </p>
          </div>
          <div style={styles.featureItem}>
            <h4 style={styles.featureTitle}>Work Your Way</h4>
            <p style={styles.featureDescription}>
              Flexible work opportunities tailored to your needs, whether you're looking for full-time or part-time gigs.
            </p>
          </div>
          <div style={styles.featureItem}>
            <h4 style={styles.featureTitle}>Grow Your Network</h4>
            <p style={styles.featureDescription}>
              Engage with a community of like-minded entrepreneurs and designers, and expand your professional network.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.pricing} id="pricing">
        <h3 style={styles.sectionTitle}>Affordable Pricing Plans</h3>
        <div style={styles.pricingList}>
          <div style={styles.pricingItem}>
            <h4 style={styles.pricingTitle}>Starter</h4>
            <p style={styles.pricingCost}>$19/month</p>
            <ul style={styles.pricingFeatures}>
              <li>Basic job postings</li>
              <li>Access to freelancers</li>
              <li>Community support</li>
            </ul>
          </div>
          <div style={styles.pricingItem}>
            <h4 style={styles.pricingTitle}>Pro</h4>
            <p style={styles.pricingCost}>$49/month</p>
            <ul style={styles.pricingFeatures}>
              <li>All Starter features</li>
              <li>Premium job postings</li>
              <li>Advanced analytics</li>
            </ul>
          </div>
          <div style={styles.pricingItem}>
            <h4 style={styles.pricingTitle}>Enterprise</h4>
            <p style={styles.pricingCost}>$99/month</p>
            <ul style={styles.pricingFeatures}>
              <li>All Pro features</li>
              <li>Dedicated support</li>
              <li>Custom solutions</li>
            </ul>
          </div>
        </div>
      </section>

      <footer style={styles.footer} id="contact">
        <h3 style={styles.footerTitle}>Get in Touch</h3>
        <p style={styles.footerDescription}>
          Ready to start your freelancing journey with us? Contact us at <a href="mailto:support@zutara.com" style={styles.footerLink}>support@zutara.com</a>.
        </p>
        <p style={styles.footerDescription}>© 2024 ZUTARA. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif", // Robotic font
    color: '#F5F5DC', // Cream color for text
    backgroundColor: '#D2691E', // Chocolate brown background color
    textAlign: 'center',
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },
  header: {
    backgroundColor: '#8B4513', // Darker shade of chocolate brown
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: '#F5F5DC', // Cream color
    fontSize: '30px',
    fontWeight: 'bold',
    margin: '0',
  },
  navLink: {
    color: '#F5F5DC', // Cream color
    marginLeft: '20px',
    textDecoration: 'none',
    fontSize: '18px',
  },
  hero: {
    padding: '120px 20px',
    backgroundColor: '#8B4513', // Darker shade of chocolate brown
  },
  heroTitle: {
    fontSize: '60px',
    fontWeight: 'bold',
    margin: '0 0 20px',
    color: '#F5F5DC', // Cream color
    opacity: '0',
    transform: 'translateX(-50px)',
    animation: 'slideIn 1s ease-out forwards',
  },
  heroSubtitle: {
    fontSize: '22px',
    marginBottom: '30px',
    color: '#F5F5DC', // Cream color
  },
  ctaButton: {
    backgroundColor: '#A0522D', // Lighter shade of chocolate brown
    color: '#F5F5DC', // Cream color
    border: 'none',
    padding: '18px 36px',
    fontSize: '20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom: '10px', // Adjusted margin to create spacing between buttons
  },
  ctaButtonSecondary: { // Styles for the new button
    backgroundColor: '#CD853F', // Even lighter shade of chocolate brown
    color: '#F5F5DC', // Cream color
    border: 'none',
    padding: '18px 36px',
    fontSize: '20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  features: {
    padding: '60px 20px',
    backgroundColor: '#D2691E', // Chocolate brown background color
  },
  sectionTitle: {
    fontSize: '38px',
    fontWeight: 'bold',
    marginBottom: '50px',
    color: '#F5F5DC', // Cream color
  },
  featureList: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  featureItem: {
    width: '320px',
    margin: '20px',
    textAlign: 'left',
  },
  featureTitle: {
    fontSize: '26px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#F5F5DC', // Cream color
  },
  featureDescription: {
    fontSize: '18px',
    color: '#F5F5DC', // Cream color
  },
  pricing: {
    padding: '60px 20px',
    backgroundColor: '#8B4513', // Darker shade of chocolate brown
  },
  pricingList: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  pricingItem: {
    width: '320px',
    margin: '20px',
    backgroundColor: '#D2691E', // Chocolate brown background color
    padding: '25px',
    borderRadius: '10px',
    textAlign: 'left',
  },
  pricingTitle: {
    fontSize: '26px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#F5F5DC', // Cream color
  },
  pricingCost: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#F5F5DC', // Cream color
    marginBottom: '25px',
  },
  pricingFeatures: {
    fontSize: '18px',
    color: '#F5F5DC', // Cream color
    listStyleType: 'none',
    paddingLeft: '0',
  },
  footer: {
    padding: '40px 20px',
    backgroundColor: '#8B4513', // Darker shade of chocolate brown
  },
  footerTitle: {
    fontSize: '26px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#F5F5DC', // Cream color
  },
  footerDescription: {
    fontSize: '18px',
    color: '#F5F5DC', // Cream color
    margin: '0',
  },
  footerLink: {
    color: '#F5F5DC', // Cream color
    textDecoration: 'none',
  },
};

// Keyframes for sliding animation
const keyframes = `
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
`;

// Injecting the keyframes into the document's style
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default App;


