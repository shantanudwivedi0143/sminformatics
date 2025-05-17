import React, { useState } from 'react';
import './App.css'; // Optional: if you want to style globally or add styles for sections
const clickSound = new Audio('https://www.soundjay.com/buttons/button-31.mp3');
// clickSound.src = '/Users/shantanudwivedi/Downloads/reactproject/castrol-learn-clone/src/pick-92276.mp3';
// clickSound.type = 'audio/mpeg';

export function Header() {
  const [hovered, setHovered] = useState(false);

  const playClickSound = () => {
    clickSound.currentTime = 0;
    clickSound.play();
  };
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
  className={`header ${hovered ? 'header-hovered' : ''}`}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  <div className="header-left">
    <img src="/image.png" alt="Logo" className="header-logo" />
    <h3 className="header-title">SM INFORMATICS & CONTROL</h3>
  </div>

  <button className="menu-button" onClick={() => setNavOpen(!navOpen)}>
    Menu
  </button>

  <nav className={`header-nav ${navOpen ? 'open' : ''}`}>
    <ul>
      {[
        { label: 'Back to top', href: '#learn' },
        { label: 'Our Products', href: '#technology' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
        { label: 'Client', href: '#Client' },
        { label: 'Careers', href: '#Careers' },
      ].map(({ label, href }) => (
        <li key={label}>
          <a href={href} onClick={playClickSound}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
</header>

  );
}

export function Hero() {
  const [hovered, setHovered] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 300;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 300;
    setOffset({ x, y });
  };

  const bgImage = "https://png.pngtree.com/png-vector/20241225/ourmid/pngtree-interactive-toy-robot-with-colorful-lights-and-movable-parts-for-imaginative-png-image_14872359.png";

  return (
    <section
      style={{ ...styles.hero, position: 'relative', overflow: 'hidden' , marginTop : '100px'}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setOffset({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      {/* ✅ Hoverable Background Image Layer */}
      <div
        style={{
          ...styles.bgLayer,
          backgroundImage: `url(${bgImage})`,
          transform: hovered ? `translate(${offset.x}px, ${offset.y}px)` : 'translate(0, 0)',
          transition: 'transform 0.4s ease-out',
          zIndex: 1,
        }}
      />

      {/* ✅ Fixed Right-Side Image (shows half only) */}
      <img
        src="/AI_image-removebg-preview.png"
        alt="Right Fixed"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          height: '100%',
          width: '60%',
          objectFit: 'cover',
          objectPosition: 'right',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* ✅ Overlay Text */}
      <div style={{ ...styles.overlay, position: 'relative', zIndex: 3 }}>
        <h1 style={styles.heroTitle}>Welcome to the official site of SM Informatics & Control</h1>
        <p style={styles.heroText}>
          where Technology meets innovation
        </p>
      </div>
    </section>
  );
}



export function ContentGrid() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const topics = [
    {
      title: 'Condition Monitoring',
      desc: 'Learn how we keep your engine running smoothly.',
      desc2: 'Our condition monitoring products provide you with the essential data needed to prevent unplanned downtime before it costs you. Real-time monitoring of the health and condition of your machines enables smart manufacturing. This allows you to predict and protect against potential equipment failures before they have a chance to impact quality and maintenance costs.',
      subItems: [
        {
          name: 'Safety Programmable Controllers',
          detail: 'The lantPAx Distributed Control System (DCS) by SM Informatics & Controls is a modern approach to process control that can significantly improve process reliability.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/2024/03/1444-modules-on-rail-front1-large-312w255h.webp'
        },
        {
          name: 'Boosting Utility Performance through Improved OT Cybersecurity',
          detail: 'Enhance utility performance with robust OT cybersecurity, ensuring resilience and safeguarding critical operations for optimal functionality and reliability.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/16x9-emonitor-front1.1600-1024x576-1-qme5w7o1vujq3xa7yp5gp0c8sulj5f1wx89o7tfho8.webp'
        },
      ],
    },
    {
      title: 'Safety Products',
      desc: 'Our technology behind EV fluid engineering.',
      desc2: 'Our condition monitoring products provide you with the essential data needed to prevent unplanned downtime before it costs you. Real-time monitoring of the health and condition of your machines enables smart manufacturing. This allows you to predict and protect against potential equipment failures before they have a chance to impact quality and maintenance costs.',
      subItems: [
        {
          name: 'Enhanced Operational Dependability with Process Automation',
          detail: 'Our safety control systems bring the benefits of traditional programmable control to complex safety applications, replacing the hard-wired relay systems normally required to bring automated processes to a safe state. ',
          imgdetails : 'https://smiconline.com/wp-content/uploads/2024/03/SafetyProgrammableController.768-1.webp'
        },
        {
          name: 'Safety Input/Output (I/O) Modules',
          detail: 'Our safety I/O portfolio offers local, distributed and On-Machine™ options with a wide range of performance and connectivity attributes to help improve compliance and machine performance. ',
          imgdetails : 'https://smiconline.com/wp-content/uploads/2024/03/SafetyIOproductComposite.768.webp'
        },
        {
          name: 'Safety Connection Systems',
          detail: 'Our Guardmaster® Safety t-ports/splitters, distribution boxes, shorting plugs, and taps are parts of a quick-disconnect system dedicated to machine safety.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/2024/03/16x9-Safety-connection-system_1920x1080.768.webp'
        },
      ],
    },
    {
      title: 'PLC Programmable Controllers',
      desc: 'How racing inspires real-world solutions.',
      desc2: 'Our condition monitoring products provide you with the essential data needed to prevent unplanned downtime before it costs you. Real-time monitoring of the health and condition of your machines enables smart manufacturing. This allows you to predict and protect against potential equipment failures before they have a chance to impact quality and maintenance costs.',
      subItems: [
        {
          name: 'Large PLC Control Systems',
          detail: 'We provide top-tier solutions for demanding applications, offering exceptional capabilities in process, safety, and motion requirements, ensuring world-class performance and reliability.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/1756controllogixcontrolsystemfamily-right1-1.768-qme5w7o0nzruyigrvuyr41bw5cu3rjtdmx6c3dh8oo.webp'
        },
        {
          name: 'Process Controllers',
          detail: 'Boost digital transformation with PlantPAx® 5.0 DCS. Explore enhanced capabilities with ControlLogix® 5580 and CompactLogix™ 5380 Process controllers for expanded opportunities in automation.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/16x9-controllogix-5580-1756-l85ep-compactlogix-5380-5069-l340erp.640-qme5w7o0nzruyigrvuyr41bw5cu3rjtdmx6c3dh8oo.webp'
        },
        {
          name: 'Small PLC Control Systems',
          detail: 'Adapt to manufacturing’s smart machine needs with standard or safety-certified controllers in chassis, packaged, or modular forms, ensuring optimal performance and compatibility with equipment.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/16x9-compactlogix-5370-compactlogix-5380-compact-guardlogix-5380-sil3-compactlogix-5480-compact-guardlogix-5380-sil2.768-qme5w7o0nzruyigrvuyr41bw5cu3rjtdmx6c3dh8oo.webp'
        },
      ],
    },
    {
      title: 'Human Machine Interface',
      desc: 'Our commitment to a greener future.',
      desc2: 'Our condition monitoring products provide you with the essential data needed to prevent unplanned downtime before it costs you. Real-time monitoring of the health and condition of your machines enables smart manufacturing. This allows you to predict and protect against potential equipment failures before they have a chance to impact quality and maintenance costs.',
      subItems: [
        {
          name: 'Graphic Terminals',
          detail: 'Our Graphic Terminals provide durable electronic interface solutions in various sizes, input methods, and configurations. These rugged devices are fully integrated with hardware, software, and communications, tested for high shock, vibration, and temperature, ensuring reliable human-machine interface operation.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/Graphic-Terminals1.768-qme5w7o1vukakimiartx84696p1qfb13ipri8rygps.webp'
        },
        {
          name: 'Tethered Operator Terminals and Thin Clients',
          detail: 'MobileView™ Tethered Operator Terminals enhance productivity and safety. Operating on Windows Embedded Standard 7, these mobile devices enable reuse of FactoryTalk® View ME and FactoryTalk View Studio apps, minimizing development expenses while boosting efficiency in industrial settings.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/Tethered-Operator-Terminals.768-qme5w7o1vukakimiartx84696p1qfb13ipri8rygps.webp'
        },
        {
          name: 'Industrial Computers and Monitors',
          detail: 'Visualization products offer a robust industrial computing platform for vital infrastructure and analytical solutions. They expedite development and improve operations in diverse industries, applications, and manufacturing settings, ensuring accelerated progress and enhanced efficiency across the board.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/ASEM-VersaView-Industrial-Computers-Family.768-qme5w7o1vukakimiartx84696p1qfb13ipri8rygps.webp'
        },
      ],
    },
  ];

  return (
    <section style={styles.gridSection}>
      <h2 style={{ textAlign: 'center' }}><b>Our Top Selling Products</b></h2>
      <div style={styles.grid}>
        {topics.map((item, idx) => (
          <div
            key={idx}
            style={{
              ...styles.card,
              transform: hoveredCardIndex === idx ? 'scale(1.05)' : 'scale(1)',
              boxShadow: hoveredCardIndex === idx 
                ? '0 8px 20px rgba(0, 26, 255, 0.4)' 
                : '0 4px 12px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease',
              background: hoveredCardIndex === idx ? '#9fc5e8': '#cfe2f3'
            }}
            onMouseEnter={() => setHoveredCardIndex(idx)}
            onMouseLeave={() => setHoveredCardIndex(null)}
            onClick={() => setSelectedCard(item)}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCard && (
        <div style={styles.modalOverlay} onClick={() => setSelectedCard(null)} >
          <div
            style={styles.modal}
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.desc}</p>
            <p>{selectedCard.desc2}</p>

            {/* Dynamically render sub-items with card styles */}
            <div style={{ marginTop: '20px', maxHeight: '400px', overflowY: 'auto',display: 'grid',gridTemplateColumns: '1fr 1fr', gap: '16px', }}>
              {selectedCard.subItems.map((sub, index) => (
                <div
                  key={index}
                  style={{
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    padding: '15px',
                    marginBottom: '15px',
                    backgroundColor: '#f9f9f9',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <h4 style={{ color: '#003366', marginBottom: '5px' }}>{sub.name}</h4>
                  <p style={{ marginLeft: '10px' }}>{sub.detail}</p>
                  <img
                    src={sub.imgdetails}
                    alt='subIMG'
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                    }}
                  />
                </div>
              ))}
            </div>

            <button
              style={styles.closeBtn}
              onMouseEnter={(e) => e.target.style.background = '#0055aa'}
              onMouseLeave={(e) => e.target.style.background = '#003366'}
              onClick={() => setSelectedCard(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}


export function Industries() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const topics = [
    {
      title: 'Cement Plant Automation',
      desc: 'Learn how we keep your engine running smoothly.',
      desc2: 'Digitalization in the cement industry can lead to increased efficiency, reduced environmental impact, and enhanced competitiveness. However, it also requires significant investments, skilled personnel, and a commitment to ongoing innovation and adaptation.',
      desc3: `1. Automation and Control Systems:

 Process Automation: Digital control systems help optimize the manufacturing process, ensuring consistent product quality and reducing energy consumption.
PLC (Programmable Logic Controller) and DCS (Distributed Control System): These systems automate tasks such as kiln operation, material blending, and grinding, leading to improved efficiency.
2. Predictive Maintenance:

Sensors and IoT (Internet of Things): Installing sensors on equipment and using IoT devices enable real-time monitoring of machinery. Predictive maintenance algorithms can anticipate equipment failures, minimizing downtime and reducing maintenance costs.
3. Data Analytics:

Big Data Analytics: Analyzing large datasets generated by various sensors and systems allows for better decision-making, process optimization, and identification of areas for improvement.
Machine Learning: ML algorithms can help predict equipment failures, optimize energy consumption, and enhance overall efficiency.
4. Digital Twins:

Simulation Models: Creating digital twins of the entire manufacturing process helps simulate and optimize operations in a virtual environment, allowing for better decision-making and process improvement without disrupting actual production.
5. Supply Chain Optimization:

Blockchain Technology: Implementing blockchain for supply chain management helps enhance transparency, traceability, and efficiency in the procurement of raw materials and the distribution of finished products.
6. Energy Management:

Energy Monitoring Systems: Implementing systems to monitor and analyze energy consumption helps identify areas for improvement, leading to energy efficiency gains and cost savings.
7. Smart Cement:

Incorporating Sensors in Concrete: Smart cement includes embedded sensors that can monitor structural health, temperature, and stress, providing valuable data for construction and maintenance purposes.
8. Safety and Environmental Compliance:

Monitoring and Reporting Systems: Digital tools help monitor emissions, track environmental performance, and ensure compliance with regulatory standards.
9. Remote Operations and Maintenance:

Remote Monitoring and Control: Advanced technologies enable remote monitoring and control of equipment, reducing the need for on-site presence and improving operational flexibility.
10. Customer Engagement:

Digital Customer Interaction: Utilizing digital platforms for order placement, tracking, and customer communication improves the overall customer experience.
`,
      subItems: [
        {
          name: 'Start Cement',
          detail: 'The lantPAx Distributed Control System (DCS) by SM Informatics & Controls is a modern approach to process control that can significantly improve process reliability.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/1-qme5w7nyu7lhrswbfj087gzcs9qreuze3z1hvr0w5s.png'
        },
        {
          name: 'JK Laxmi Cement',
          detail: 'Enhance utility performance with robust OT cybersecurity, ensuring resilience and safeguarding critical operations for optimal functionality and reliability.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/2-2-qme5w7nyu7lhrswbfj087gzcs9qreuze3z1hvr0w5s.webp'
        },
      ],
    },
    {
      title: 'Pharma & Lifesciences',
      desc: 'Our technology behind EV fluid engineering.',
      desc2: 'Digitalization in the pharmaceutical and life sciences industry is an ongoing process that requires collaboration between traditional pharmaceutical companies, technology providers, and regulatory bodies. As technology continues to advance, digital solutions will play an increasingly crucial role in shaping the future of healthcare and drug development.',
      desc3: `Fast launches. Personalized medicine. Fewer supply chain disruptions. The demands of life sciences manufacturing have grown. You can meet them with a new kind of facility: a facility of the future that is S, secure, connected, flexible, and compliant to the global industry standards.
We join hands with life sciences leaders every day to develop digital transformation strategies that move them beyond a piecemeal implementation. Together, we’ll create a more agile and connected enterprise that allows you to:

Speed time to market
Outperform quality standards
Maximize productivity
Protect against security threats
Streamline compliance
Flexible operations in the pharmaceutical industry involve the adoption of strategies and technologies that allow companies to adapt to changing market conditions, respond to regulatory requirements, and improve overall efficiency in drug development, manufacturing, and distribution. Here are key aspects of achieving flexible operations in the pharma industry:

1. Modular Manufacturing:

 Flexible Facilities: Designing manufacturing facilities with modular and adaptable features that allow for easy reconfiguration and scaling based on production needs.
Single-Use Technologies: Implementing single-use systems and disposable equipment to reduce the need for complex cleaning and sterilization processes during changeovers.
2. Agile Supply Chain Management:

Risk Management: Identifying and mitigating risks in the supply chain to ensure a steady flow of materials and avoid disruptions.
Real-Time Monitoring: Utilizing technology for real-time tracking of inventory, shipments, and production status to enhance supply chain visibility.
3. Digital Twins and Simulation:

Digital Twin Technology: Creating digital twins of manufacturing processes to simulate and optimize production without affecting actual operations.
Process Simulation: Using advanced simulation tools to model and analyze different scenarios, helping optimize production processes and resource utilization.
4. Advanced Process Control:

Automation and Robotics: Implementing automation and robotic systems to improve precision, reduce errors, and enhance the efficiency of manufacturing processes.
Process Analytical Technology (PAT): Utilizing real-time monitoring and control of critical process parameters to ensure product quality and consistency.
5. Collaborative and Cross-Functional Teams:

Cross-Training Employees: Enabling employees to have a broad skill set, allowing them to contribute to different aspects of the manufacturing process.
Collaborative Decision-Making: Encouraging collaboration between different departments, including research and development, manufacturing, and quality assurance.
6. Regulatory Compliance and Quality Assurance:

Electronic Batch Records (EBR): Transitioning from paper-based to electronic systems for batch record keeping to improve accuracy and compliance.
Real-Time Quality Management: Implementing real-time quality monitoring and control systems to identify and address issues promptly.
7. Outsourcing and Collaboration:

Strategic Partnerships: Collaborating with contract manufacturing organizations (CMOs) and other partners to enhance manufacturing capacity and capabilities.
Outsourcing Non-Core Activities: Outsourcing non-core activities, such as packaging or certain testing processes, to focus on core competencies.
8. Continuous Manufacturing:

Continuous Processing: Adopting continuous manufacturing approaches to reduce batch processing time and enhance overall production efficiency.
Integration of PAT: Integrating Process Analytical Technology into continuous manufacturing processes for real-time monitoring and control.
9. Lean Manufacturing Principles:

 Kaizen and Continuous Improvement: Embracing lean manufacturing principles to continuously identify and implement improvements in efficiency and waste reduction.
Six Sigma Methodologies: Applying Six Sigma methodologies to reduce process variability and enhance product quality.
10. Adaptive Clinical Trials:

  Decentralized Trials: Embracing decentralized and virtual clinical trial models to enhance flexibility and patient participation.
By implementing these strategies and technologies, pharmaceutical companies can achieve more flexible and adaptive operations, allowing them to respond effectively to industry changes, market demands, and regulatory requirements.

1. Drug Discovery and Development:

  Computational Biology and Bioinformatics: Utilizing computational tools and algorithms for analyzing biological data, predicting drug interactions, and identifying potential drug candidates.
AI and Machine Learning: Accelerating drug discovery by analyzing vast datasets, predicting drug efficacy, and optimizing trial designs.
2. Clinical Trials:

Electronic Data Capture (EDC): Streamlining data collection and management in clinical trials through digital platforms.
eClinical Systems: Implementing integrated electronic systems for managing various aspects of clinical trials, including randomization, data capture, and monitoring.
3. Regulatory Compliance:

Electronic Regulatory Submissions: Using digital platforms for submitting regulatory documents and managing compliance with regulatory requirements.
Track-and-Trace Technologies: Implementing digital solutions for tracking and tracing pharmaceutical products to ensure compliance with safety and regulatory standards.
4. Manufacturing and Supply Chain:

Industrial IoT (IIoT): Employing sensors and connected devices to monitor and optimize manufacturing processes, improving efficiency and quality control.
Blockchain: Enhancing supply chain visibility, traceability, and security by implementing blockchain technology.
5. Data Analytics and Real-World Evidence:

Big Data Analytics: Analyzing large datasets, including real-world evidence, to gain insights into treatment outcomes, disease patterns, and healthcare trends.
Predictive Analytics: Employing predictive modeling to forecast disease trends, optimize treatment plans, and improve resource allocation.
6. Artificial Intelligence in Healthcare:

Diagnostic Imaging: Using AI algorithms for more accurate and efficient interpretation of medical imaging data.
Drug Safety Monitoring: Enhancing drug safety surveillance through AI-driven analysis of adverse event reports and other safety data.

`,
      subItems: [
        {
          name: 'Medley',
          detail: 'Our safety control systems bring the benefits of traditional programmable control to complex safety applications, replacing the hard-wired relay systems normally required to bring automated processes to a safe state. ',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/10-qme5w7nzg4zpksz6mzft9iejaxukqql91vc2yg9i6c.png'
        },
        {
          name: 'Cadila',
          detail: 'Our safety I/O portfolio offers local, distributed and On-Machine™ options with a wide range of performance and connectivity attributes to help improve compliance and machine performance. ',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/11-qme5w7nzg4zpksz6mzft9iejaxukqql91vc2yg9i6c.png'
        },
        {
          name: 'Safety Connection Systems',
          detail: 'Our Guardmaster® Safety t-ports/splitters, distribution boxes, shorting plugs, and taps are parts of a quick-disconnect system dedicated to machine safety.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/2024/03/16x9-Safety-connection-system_1920x1080.768.webp'
        },
      ],
    },
    {
      title: 'Household and Personal Care',
      desc: 'How racing inspires real-world solutions.',
      desc2: 'Automation has played a significant role in the household and personal care industry, bringing increased efficiency, precision, and innovation to various aspects of production, packaging, and distribution. Here are some key areas where automation is commonly applied in this industry:',
      desc3: `1. Manufacturing and Production:

Robotic Assembly Lines: Robots are used for tasks such as filling bottles, capping, labeling, and packaging, increasing production speed and consistency.
Automated Mixing and Blending: Automated systems ensure accurate and consistent blending of ingredients in the formulation of household and personal care products.
Batch Processing: Automated batch processing systems help in the precise mixing of raw materials, ensuring product uniformity.
2. Packaging:

Pick-and-Place Robots: These robots are employed for picking products and placing them in packaging, increasing the speed of packaging lines.
Automated Filling and Sealing Machines: Machines that fill product containers, seal packages, and apply labels automatically, reducing manual labor and enhancing efficiency.
Automated Inspection Systems: Vision systems and sensors are used for quality control, ensuring that products are properly filled, labeled, and packaged.
3. Quality Control:

Automated Testing Equipment: Machines for testing product attributes, such as viscosity, pH, and weight, to ensure that products meet quality standards.
Vision Inspection Systems: Automated cameras and sensors to inspect product appearance, labels, and packaging for defects.
4. Material Handling:

Conveyor Systems: Automated conveyor systems are used for the efficient transport of products between different stages of production and packaging.
Automated Guided Vehicles (AGVs): AGVs are employed for moving raw materials and finished products within the manufacturing facility.
5. Inventory Management:

Automated Storage and Retrieval Systems (AS/RS): Systems that automatically store and retrieve products in warehouses, optimizing space and improving inventory management.
RFID Technology: RFID tags are used for tracking and managing inventory, providing real-time visibility into stock levels.
6. Order Fulfillment and Distribution:

Automated Order Picking Systems: Systems that automatically pick and pack products for order fulfillment in warehouses, reducing manual labor.
Automated Sortation Systems: Systems for sorting and routing products efficiently in distribution centers.
7. Data Analytics and Forecasting:

Demand Planning Software: Automated tools for analyzing sales data, predicting demand, and optimizing production and inventory levels.
Supply Chain Visibility: Real-time data analytics for monitoring and optimizing the entire supply chain, from raw material procurement to distribution.
8. Customer Service:

Chatbots and Virtual Assistants: Automated systems for handling customer inquiries, providing information, and assisting with common issues.
Order Tracking Systems: Automated systems that provide customers with real-time updates on the status and location of their orders.
9. Product Development and Research:

Lab Automation: Automated systems for testing and analyzing new formulations, improving the speed and accuracy of research and development processes.
10. Environmental Monitoring:

Automated Systems for Environmental Compliance: Monitoring and controlling manufacturing processes to comply with environmental regulations and sustainability goals.
Implementing automation in the household and personal care industry not only improves efficiency and reduces costs but also allows for greater consistency in product quality and faster response to market demands. However, it requires strategic planning, investment, and ongoing maintenance to ensure optimal performance.

`,
      subItems: [
        {
          name: 'P&G',
          detail: 'We provide top-tier solutions for demanding applications, offering exceptional capabilities in process, safety, and motion requirements, ensuring world-class performance and reliability.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/3-2-qme5w7nzg4zpksz6mzft9iejaxukqql91vc2yg9i6c.png'
        },
        {
          name: 'Gillette',
          detail: 'Boost digital transformation with PlantPAx® 5.0 DCS. Explore enhanced capabilities with ControlLogix® 5580 and CompactLogix™ 5380 Process controllers for expanded opportunities in automation.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/5-qme5w7nzg4zpksz6mzft9iejaxukqql91vc2yg9i6c.png'
        },
        {
          name: 'ITC',
          detail: 'Adapt to manufacturing’s smart machine needs with standard or safety-certified controllers in chassis, packaged, or modular forms, ensuring optimal performance and compatibility with equipment.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/4-qme5w7nzg4zpksz6mzft9iejaxukqql91vc2yg9i6c.png'
        },
      ],
    },
    {
      title: 'Human Machine Interface',
      desc: 'Our commitment to a greener future.',
      desc2: 'Our condition monitoring products provide you with the essential data needed to prevent unplanned downtime before it costs you. Real-time monitoring of the health and condition of your machines enables smart manufacturing. This allows you to predict and protect against potential equipment failures before they have a chance to impact quality and maintenance costs.',
      desc3: `1. Automation and Control Systems:

 Process Automation: Digital control systems help optimize the manufacturing process, ensuring consistent product quality and reducing energy consumption.
PLC (Programmable Logic Controller) and DCS (Distributed Control System): These systems automate tasks such as kiln operation, material blending, and grinding, leading to improved efficiency.
2. Predictive Maintenance:

Sensors and IoT (Internet of Things): Installing sensors on equipment and using IoT devices enable real-time monitoring of machinery. Predictive maintenance algorithms can anticipate equipment failures, minimizing downtime and reducing maintenance costs.
3. Data Analytics:

Big Data Analytics: Analyzing large datasets generated by various sensors and systems allows for better decision-making, process optimization, and identification of areas for improvement.
Machine Learning: ML algorithms can help predict equipment failures, optimize energy consumption, and enhance overall efficiency.
4. Digital Twins:

Simulation Models: Creating digital twins of the entire manufacturing process helps simulate and optimize operations in a virtual environment, allowing for better decision-making and process improvement without disrupting actual production.
5. Supply Chain Optimization:

Blockchain Technology: Implementing blockchain for supply chain management helps enhance transparency, traceability, and efficiency in the procurement of raw materials and the distribution of finished products.
6. Energy Management:

Energy Monitoring Systems: Implementing systems to monitor and analyze energy consumption helps identify areas for improvement, leading to energy efficiency gains and cost savings.
7. Smart Cement:

Incorporating Sensors in Concrete: Smart cement includes embedded sensors that can monitor structural health, temperature, and stress, providing valuable data for construction and maintenance purposes.
8. Safety and Environmental Compliance:

Monitoring and Reporting Systems: Digital tools help monitor emissions, track environmental performance, and ensure compliance with regulatory standards.
9. Remote Operations and Maintenance:

Remote Monitoring and Control: Advanced technologies enable remote monitoring and control of equipment, reducing the need for on-site presence and improving operational flexibility.
10. Customer Engagement:

Digital Customer Interaction: Utilizing digital platforms for order placement, tracking, and customer communication improves the overall customer experience.
`,
      subItems: [
        {
          name: 'Graphic Terminals',
          detail: 'Our Graphic Terminals provide durable electronic interface solutions in various sizes, input methods, and configurations. These rugged devices are fully integrated with hardware, software, and communications, tested for high shock, vibration, and temperature, ensuring reliable human-machine interface operation.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/Graphic-Terminals1.768-qme5w7o1vukakimiartx84696p1qfb13ipri8rygps.webp'
        },
        {
          name: 'Tethered Operator Terminals and Thin Clients',
          detail: 'MobileView™ Tethered Operator Terminals enhance productivity and safety. Operating on Windows Embedded Standard 7, these mobile devices enable reuse of FactoryTalk® View ME and FactoryTalk View Studio apps, minimizing development expenses while boosting efficiency in industrial settings.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/Tethered-Operator-Terminals.768-qme5w7o1vukakimiartx84696p1qfb13ipri8rygps.webp'
        },
        {
          name: 'Industrial Computers and Monitors',
          detail: 'Visualization products offer a robust industrial computing platform for vital infrastructure and analytical solutions. They expedite development and improve operations in diverse industries, applications, and manufacturing settings, ensuring accelerated progress and enhanced efficiency across the board.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/ASEM-VersaView-Industrial-Computers-Family.768-qme5w7o1vukakimiartx84696p1qfb13ipri8rygps.webp'
        },
      ],
    },
    {
      title: 'Human Machine Interface',
      desc: 'Our commitment to a greener future.',
      desc2: 'Our condition monitoring products provide you with the essential data needed to prevent unplanned downtime before it costs you. Real-time monitoring of the health and condition of your machines enables smart manufacturing. This allows you to predict and protect against potential equipment failures before they have a chance to impact quality and maintenance costs.',
      desc3: `1. Automation and Control Systems:

 Process Automation: Digital control systems help optimize the manufacturing process, ensuring consistent product quality and reducing energy consumption.
PLC (Programmable Logic Controller) and DCS (Distributed Control System): These systems automate tasks such as kiln operation, material blending, and grinding, leading to improved efficiency.
2. Predictive Maintenance:

Sensors and IoT (Internet of Things): Installing sensors on equipment and using IoT devices enable real-time monitoring of machinery. Predictive maintenance algorithms can anticipate equipment failures, minimizing downtime and reducing maintenance costs.
3. Data Analytics:

Big Data Analytics: Analyzing large datasets generated by various sensors and systems allows for better decision-making, process optimization, and identification of areas for improvement.
Machine Learning: ML algorithms can help predict equipment failures, optimize energy consumption, and enhance overall efficiency.
4. Digital Twins:

Simulation Models: Creating digital twins of the entire manufacturing process helps simulate and optimize operations in a virtual environment, allowing for better decision-making and process improvement without disrupting actual production.
5. Supply Chain Optimization:

Blockchain Technology: Implementing blockchain for supply chain management helps enhance transparency, traceability, and efficiency in the procurement of raw materials and the distribution of finished products.
6. Energy Management:

Energy Monitoring Systems: Implementing systems to monitor and analyze energy consumption helps identify areas for improvement, leading to energy efficiency gains and cost savings.
7. Smart Cement:

Incorporating Sensors in Concrete: Smart cement includes embedded sensors that can monitor structural health, temperature, and stress, providing valuable data for construction and maintenance purposes.
8. Safety and Environmental Compliance:

Monitoring and Reporting Systems: Digital tools help monitor emissions, track environmental performance, and ensure compliance with regulatory standards.
9. Remote Operations and Maintenance:

Remote Monitoring and Control: Advanced technologies enable remote monitoring and control of equipment, reducing the need for on-site presence and improving operational flexibility.
10. Customer Engagement:

Digital Customer Interaction: Utilizing digital platforms for order placement, tracking, and customer communication improves the overall customer experience.
`,
      subItems: [
        {
          name: 'Graphic Terminals',
          detail: 'Our Graphic Terminals provide durable electronic interface solutions in various sizes, input methods, and configurations. These rugged devices are fully integrated with hardware, software, and communications, tested for high shock, vibration, and temperature, ensuring reliable human-machine interface operation.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/Graphic-Terminals1.768-qme5w7o1vukakimiartx84696p1qfb13ipri8rygps.webp'
        },
        {
          name: 'Tethered Operator Terminals and Thin Clients',
          detail: 'MobileView™ Tethered Operator Terminals enhance productivity and safety. Operating on Windows Embedded Standard 7, these mobile devices enable reuse of FactoryTalk® View ME and FactoryTalk View Studio apps, minimizing development expenses while boosting efficiency in industrial settings.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/Tethered-Operator-Terminals.768-qme5w7o1vukakimiartx84696p1qfb13ipri8rygps.webp'
        },
        {
          name: 'Industrial Computers and Monitors',
          detail: 'Visualization products offer a robust industrial computing platform for vital infrastructure and analytical solutions. They expedite development and improve operations in diverse industries, applications, and manufacturing settings, ensuring accelerated progress and enhanced efficiency across the board.',
          imgdetails : 'https://smiconline.com/wp-content/uploads/elementor/thumbs/ASEM-VersaView-Industrial-Computers-Family.768-qme5w7o1vukakimiartx84696p1qfb13ipri8rygps.webp'
        },
      ],
    },
  ];

  return (
    <section style={{ ...styles.gridSection, position: 'relative', padding: '40px 20px' }}>
      {/* Section Heading */}
      <h2 style={{
        textAlign: 'center',
        background: '#709d61',
        borderRadius: '30px',
        height: '40px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
        color: '#fff',
        zIndex: 2,
        position: 'relative'
      }}>
        <b>Industries We Are Serving</b>
      </h2>

      
  
      {/* ✅ Background Image Layer */}
      <img
        src='https://smiconline.com/wp-content/uploads/2024/03/Household-and-Personal-Care-scaled.jpg'
        alt='Background'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.4,
        }}
      />
  
      {/* ✅ Cards Grid Layer */}
      <div style={{
        ...styles.grid,
        position: 'relative',
        zIndex: 2,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '30px',
      }}>
        {topics.map((item, idx) => (
          <div
            key={idx}
            style={{
              ...styles.card,
              transform: hoveredCardIndex === idx ? 'scale(1.05)' : 'scale(1)',
              boxShadow: hoveredCardIndex === idx 
                ? '0 8px 20px rgba(0, 26, 255, 0.4)' 
                : '0 4px 12px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease',
              background: hoveredCardIndex === idx ? '#9fc5e8' : '#cfe2f3',
              borderRadius: '16px',
              padding: '20px',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredCardIndex(idx)}
            onMouseLeave={() => setHoveredCardIndex(null)}
            onClick={() => setSelectedCard(item)}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
  
      {/* ✅ Modal Section (unchanged) */}
      {selectedCard && (
        <div style={styles.modalOverlay} onClick={() => setSelectedCard(null)}>
          <div
            style={styles.modal}
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.desc}</p>
            <p>{selectedCard.desc2}</p>
            <h1>Our Clients in {selectedCard.title} Industries</h1>
  
            <div style={{
              marginTop: '20px',
              maxHeight: '400px',
              overflowY: 'auto',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '16px',
            }}>
              {selectedCard.subItems.map((sub, index) => (
                <div
                  key={index}
                  style={{
                    border: '1px solid #ccc',
                    borderRadius: '20px',
                    padding: '15px',
                    marginBottom: '15px',
                    backgroundColor: '#f9f9f9',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <h4 style={{ color: '#003366', marginBottom: '5px' }}>{sub.name}</h4>
                  <p style={{ marginLeft: '10px' }}>{sub.detail}</p>
                  <img
                    src={sub.imgdetails}
                    alt='subIMG'
                    style={{
                      width: '150px',
                      height: '150px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                    }}
                  />
                </div>
              ))}
            </div>
  
            <div style={{ textAlign: 'left', marginTop: '20px' }}>
              <h3 style={{ marginBottom: '10px' }}>Key Highlights:</h3>
              {selectedCard.desc3
                .split('\n')
                .filter(line => line.trim() !== '')
                .map((line, index) => (
                  <div key={index} style={{ marginBottom: '8px' }}>
                    {line}
                  </div>
                ))}
            </div>
  
            <button
              style={styles.closeBtn}
              onMouseEnter={(e) => e.target.style.background = '#0055aa'}
              onMouseLeave={(e) => e.target.style.background = '#003366'}
              onClick={() => setSelectedCard(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
  
}



export function OurClient() {
  const topics = [
    { title: 'Star Cement', desc: 'Learn how we keep your engine running smoothly.' , imagelnk:'https://smiconline.com/wp-content/uploads/elementor/thumbs/1-qme5w7nyu7lhrswbfj087gzcs9qreuze3z1hvr0w5s.png' },
    { title: 'JK laxmi cement', desc: 'Our technology behind EV fluid engineering.',imagelnk:'https://smiconline.com/wp-content/uploads/elementor/thumbs/2-2-qme5w7nyu7lhrswbfj087gzcs9qreuze3z1hvr0w5s.webp' },
    { title: 'Tata steel', desc: 'How racing inspires real-world solutions.' ,imagelnk:'https://smiconline.com/wp-content/uploads/elementor/thumbs/2-1-qme5w7nyu7lhrswbfj087gzcs9qreuze3z1hvr0w5s.png'},
    { title: 'Aditya Birla Hindalco', desc: 'Our commitment to a greener future.' ,imagelnk:'https://smiconline.com/wp-content/uploads/elementor/thumbs/1-2-qme5w7nyu7lhrswbfj087gzcs9qreuze3z1hvr0w5s.png'},
    { title:'Gillete' , desc:'',imagelnk:'https://smiconline.com/wp-content/uploads/elementor/thumbs/5-qme5w7nzg4zpksz6mzft9iejaxukqql91vc2yg9i6c.png'}
  ];

  return (
    <section style={styles.gridSection}>
      <h2 style={{ textAlign: 'center' }}><b>Our Top Clients</b></h2>
      <div style={styles.grid}>
        {topics.map((item, idx) => (
          <HoverCardWithImg key={idx} title={item.title} desc={item.desc} imgs={item.imagelnk} />
        ))}
      </div>
    </section>
  );
}

export function Conditionalmonitoringmachine() {
  const topics = [
    { title: 'Aditya Birla Hindalco', desc: 'Our commitment to a greener future.' ,imagelnk:'https://smiconline.com/wp-content/uploads/elementor/thumbs/1-2-qme5w7nyu7lhrswbfj087gzcs9qreuze3z1hvr0w5s.png'},
    { title:'Gillete' , desc:'',imagelnk:'https://smiconline.com/wp-content/uploads/elementor/thumbs/5-qme5w7nzg4zpksz6mzft9iejaxukqql91vc2yg9i6c.png'},
    { title:'Gillete' , desc:'',imagelnk:'https://smiconline.com/wp-content/uploads/elementor/thumbs/5-qme5w7nzg4zpksz6mzft9iejaxukqql91vc2yg9i6c.png'},
    { title:'Gillete' , desc:'',imagelnk:'https://smiconline.com/wp-content/uploads/elementor/thumbs/5-qme5w7nzg4zpksz6mzft9iejaxukqql91vc2yg9i6c.png'},
    { title:'Gillete' , desc:'',imagelnk:'https://smiconline.com/wp-content/uploads/elementor/thumbs/5-qme5w7nzg4zpksz6mzft9iejaxukqql91vc2yg9i6c.png'}
  ];

  return (
    <section style={styles.gridSection}>
      <h2 style={{ textAlign: 'center' }}><b>Our Top Clients</b></h2>
      <div style={styles.grid}>
        {topics.map((item, idx) => (
          <HoverCardConditionalm key={idx} title={item.title} desc={item.desc} imgs={item.imagelnk} />
        ))}
      </div>
    </section>
  );
}


// function HoverCard({ title, desc }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       style={{
//         ...styles.card,
//         background: hovered ? '#e0e0e0' : styles.card.background,
//         transform: hovered ? 'scale(1.05)' : 'scale(1)',
//         transition: 'all 0.3s ease',
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <h3>{title}</h3>
//       <p>{desc}</p>
//     </div>
//   );
// }

function HoverCardWithImg({ title, desc ,imgs}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        background: hovered ? '#e0e0e0' : styles.card.background,
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
      <img src= {imgs} alt='subIMG' height={230} width={230} style={styles.card}></img>
    </div>
  );
}

function HoverCardConditionalm({ title, desc ,imgs}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        background: hovered ? '#e0e0e0' : styles.card.background,
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
      <img src= {imgs} alt='subIMG' height={230} width={230} style={styles.card}></img>
    </div>
  );
}


export function Footer() {
  const [hovered, setHovered] = useState(false);

  return (
    <footer
      style={{
        ...styles.footer,
        background: hovered ? '#2a2a2a' : styles.footer.background,
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p>&copy;  2024 All Rights Reserved SMIC Technology for Growth</p>
    </footer>
  );
}

// 💅 Style object
export const styles = {
  header: {
    background: '#101820',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    alignItems: 'center',
    minminHeight: '100px',
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  nav: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    // overflow : 'visible',
    // background : 'red',
  },
  gridSection: {
    padding: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginTop: '1rem',
  },
  card: {
    background: '#f4f4f4',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    },
  footer: {
    background: '#101820',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
    marginTop: '2rem',
  },
  aboutContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '40px',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap', // ensures responsiveness on small screens
    maxWidth: '1000px',
    margin: '0 auto',
  },
  imageContainer: {
    flex: '1 1 300px',
    textAlign: 'center',
  },
  aboutImage: {
    maxWidth: '100%',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  textContainer: {
    flex: '1 1 400px',
    fontSize: '18px',
    lineHeight: '1.6',
  },
  containerabout2: {
    position: 'relative',
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageabout2: {
    width: '100%',
    borderRadius: '15px',
    boxShadow: '0 15px 25px rgba(103, 120, 226, 0.5)',
    marginBottom : '15%',
  },
  textCardabout2: {
    position: 'absolute',
    bottom: '20px',
    left: '40px',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '15px',
    maxWidth: '60%',
    boxShadow: '0 15px 20px rgba(0, 0, 0, 0.25)', // ✅ Drop shadow
    zIndex: 2,
  },
  hero: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    boxSizing: 'border-box',
  },
  bgLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '60%', // slight oversize for nice movement
    height: '60%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: 'transform 0.3s ease',
    zIndex: 1,
    opacity: 0.9, // make it a soft background
    marginTop : '100px'
  },
  overlay: {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'rgba(104, 97, 97, 0.5)',
    padding: '30px',
    borderRadius: '16px',
    color: '#fff',
    textAlign: 'center',
    maxWidth: '1400px',
  },
  heroTitle: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    marginRight:'20px'
  },
  heroText: {
    fontSize: '1.2rem',
  },
  card23:{
    background: '#f4f4f4',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    height:'40px',
    width:'80px'
  },
    modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },
  modal: {
    background:'#ebe3fa',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    maxWidth: '1200px',
    width: '90%',
    maxHeight: '80vh', // limit height
    overflowY: 'auto',  // scrollable vertically
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  closeBtn: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    padding: '10px 20px',
    background: '#003366',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  },  
};
