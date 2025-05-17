import React from 'react';
import ContactCard from './ContactCard';
import { styles } from './components';
const ContactSection = () => {
  return (
    <div> <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize :'38px'}}>Contact Us</h2>
    <div style={styles.aboutContainer}>
              <div style={styles.imageContainer}>
                <img
                  src="/contactus.jpg"
                  alt="About us"
                  style={styles.aboutImage} 
                />
              </div>
              <div style={styles.textContainer}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <ContactCard
        icon= <img src="/360_F_181003490_CxW4fQ0H3VypIIsPkFGpMDviO8ysWjOZ.jpg" alt="Email Icon" style={{ width: 40, height: 40 }} />
        title=<a href="mailto:sales@sminformatics.com"
                    style={{
                        color: '#000',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#0077cc')}
                    onMouseLeave={(e) => (e.target.style.color = '#000')}
                    >
                    sales@sminformatics.com
                    </a>
                                description="sales@sminformatics.com"
                            />
                            <ContactCard
                                icon=<img src="/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png" alt="Location icon" style={{ width: 40, height: 40 }} />
                                title="Office Location"
                                description={`Ground Floor, House No. 664, Khasra No 2903, Near Karhera Petrol Pump, Karhera, Ghaziabad, UP-2010017`}
                            />
                </div>
                </div>
    </div>
    </div>
  );
};

export default ContactSection;
