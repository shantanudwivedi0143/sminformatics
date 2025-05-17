// src/topicsData.js

export const topics = [
    {
      label: "Raw Material Receiving", // <--- label name matching your infoLabel
      title: 'Condition Monitoring',
      desc: 'Learn how we keep your engine running smoothly.',
      desc2: 'Our condition monitoring products provide you with the essential data needed to prevent unplanned downtime before it costs you...',
      subItems: [
        {
          name: 'Safety Programmable Controllers',
          detail: 'The lantPAx Distributed Control System (DCS) by SM Informatics & Controls...',
          imgdetails: 'https://smiconline.com/wp-content/uploads/2024/03/1444-modules-on-rail-front1-large-312w255h.webp',
          subItems2: {
            title: "Detailed Title for A",
            description: "Longer explanation or body for Item A",
            image: "https://smiconline.com/wp-content/uploads/2024/03/1444-modules-on-rail-front1-large-312w255h.webp",
          },
        },
        {
          name: 'Boosting Utility Performance through Improved OT Cybersecurity',
          detail: 'Enhance utility performance with robust OT cybersecurity...',
          imgdetails: 'https://smiconline.com/wp-content/uploads/elementor/thumbs/16x9-emonitor-front1.1600-1024x576-1-qme5w7o1vujq3xa7yp5gp0c8sulj5f1wx89o7tfho8.webp',
          subItems2: {
            title: "Detailed Title for A",
            description: "Longer explanation or body for Item A",
            image: "link-to-full-image.jpg",
          },
        }
      ]
    },
    {
      label: "Raw material handeling", // another infoLabel
      title: 'What we Offer in Raw Material Handling ?',
      desc: 'We Provide wide range of solution in Raw Material Handling Some of our projects are',
      desc2: 'Our commitment to provide you best automation solution and to cut you production cost',
      subItems: [
        {
          name: 'Recipe Management and Control',
          detail: `Batch Management Systems (BMS): Software that automatically controls batching according to predefined recipes (correct quantities, order, timing).

SCADA Systems (Supervisory Control and Data Acquisition): Oversee and control the entire batching and blending operation remotely.

MES Integration (Manufacturing Execution Systems): Ensures batch production instructions come directly from production planning and ERP systems.`,
          imgdetails: 'https://edelteq.com/wp-content/uploads/2022/05/Picture94.png',
          subItems2: {
            title: "Our Project on Recipe Management and Control",
            description: "we have completed this project with partnership of MARS a leader in chocolate manufacturing",
            image: "https://edelteq.com/wp-content/uploads/2022/05/Picture94.png",
          },
        },
        {
          name: 'Weighing and Dosing Automation',
          detail: `Automatic Weighing Scales: Precise material weight capture before batching.

Gravimetric and Volumetric Feeders: Control flow of powders, granules, and liquids automatically.

Loss-in-Weight Systems: Accurately dispense small components by measuring the loss in container weight.

`,
          imgdetails: 'https://www.a-tech.ca/resource/solution/6/weigh_controller_-_types_of_weighing.JPG?1559138783020',
          subItems2: {
            title: "Our Project on Weighing and Dosing Automation",
            description: "we have completed this project with partnership of MARS a leader in chocolate manufacturing",
            image: "link-to-full-image.jpg",
          },
        },
        {
            name: 'Ingredient Dispensing Systems',
            detail: `Silo and Bin Automation: Automatically control material flow from storage.

Small Component Automation: For additives or ingredients required in very small but critical amounts.

Liquid Handling Systems: Automated pumps and flow meters for liquids involved in blending.

`,
            imgdetails : 'https://www.apecusa.com/wp-content/uploads/2017/12/specialty_ingredient-flow.jpg',
            subItems2: {
                title: "Detailed Title for A",
                description: "Longer explanation or body for Item A",
                image: "link-to-full-image.jpg",
              },
        },
        {
            name: 'Blending Automation',
            detail: `Automated Mixer Controls: Automatically set mixing times, speeds, and sequences.

Variable Frequency Drives (VFDs): Control motor speeds on mixers for different material types.

Homogeneity Monitoring: Sensors to measure blend quality or use AI/vision systems to ensure consistency.
`,
            imgdetails : 'https://5.imimg.com/data5/SELLER/Default/2022/11/BH/TE/BB/66538/blending-plant-500x500.png',
            subItems2: {
                title: "Detailed Title for A",
                description: "Longer explanation or body for Item A",
                image: "https://5.imimg.com/data5/SELLER/Default/2022/11/BH/TE/BB/66538/blending-plant-500x500.png",
              },
        },
      ]
    },
    {
      label: "Packaging",
      title: "Automated Packaging Systems",
      desc: "Speed up and standardize packaging processes across lines.",
      desc2: "We offer integrated robotic packaging, labeling, and quality inspection solutions.",
      subItems: [
        {
          name: "Robotic Pick and Place",
          detail: "High-speed robotic arms with vision systems for flexible and precise packaging.",
          imgdetails: "https://www.fanuc.eu/~/media/images/fanuc-products/robots/applications/packaging/packaging-applications.jpg",
          subItems2: {
            title: "High-Speed Robotic Packaging",
            description: "Robots optimized for various shapes, weights, and materials.",
            image: "https://www.fanuc.eu/~/media/images/fanuc-products/robots/applications/packaging/packaging-applications.jpg"
          }
        },
        {
          name: "Automated Sealing and Capping Systems",
          detail: "Automate package sealing and container capping to ensure airtight seals that preserve product quality.",
          imgdetails: "https://ae-automation.com/wp-content/uploads/2021/05/sealing-capping.jpg",
          subItems2: {
            title: "Automated Sealing and Capping",
            description: "Ensures consistency and reduces contamination risks.",
            image: "https://ae-automation.com/wp-content/uploads/2021/05/sealing-capping.jpg"
          }
        },
        {
          name: "Automated Labeling and Printing Systems",
          detail: "Apply labels directly to high-precision packages for consistent and accurate labeling.",
          imgdetails: "https://ae-automation.com/wp-content/uploads/2021/05/labeling-printing.jpg",
          subItems2: {
            title: "Automated Labeling and Printing",
            description: "Meets branding and regulatory requirements efficiently.",
            image: "https://ae-automation.com/wp-content/uploads/2021/05/labeling-printing.jpg"
          }
        },
        {
          name: "Automated Case Packing Systems",
          detail: "Automate the packing of products into cases or boxes, handling various product shapes and sizes.",
          imgdetails: "https://ae-automation.com/wp-content/uploads/2021/05/case-packing.jpg",
          subItems2: {
            title: "Automated Case Packing",
            description: "Ensures secure packaging and minimizes transit damage.",
            image: "https://ae-automation.com/wp-content/uploads/2021/05/case-packing.jpg"
          }
        },
        {
          name: "Robotic Palletizing Systems",
          detail: "Automate the stacking of products on pallets, handling complex stacking patterns efficiently.",
          imgdetails: "https://ae-automation.com/wp-content/uploads/2021/05/robotic-palletizing.jpg",
          subItems2: {
            title: "Robotic Palletizing",
            description: "Improves pallet organization for easier transport.",
            image: "https://ae-automation.com/wp-content/uploads/2021/05/robotic-palletizing.jpg"
          }
        },
        {
          name: "Automated Inspection and Quality Control Systems",
          detail: "Use advanced technologies to automatically inspect products for defects, ensuring consistent quality control.",
          imgdetails: "https://ae-automation.com/wp-content/uploads/2021/05/inspection-quality-control.jpg",
          subItems2: {
            title: "Automated Inspection and Quality Control",
            description: "Reduces human error and guarantees product quality.",
            image: "https://ae-automation.com/wp-content/uploads/2021/05/inspection-quality-control.jpg"
          }
        }
      ]
    },
    {
      label: "Processing",
      title: "Processing Automation Solutions",
      desc: "Enhance consistency, quality, and safety with our processing automation solutions.",
      desc2: "We deploy state-of-the-art process control systems across various industries.",
      subItems: [
        {
          name: "Distributed Control Systems (DCS)",
          detail: "Centralized control systems for managing complex processes with high reliability.",
          imgdetails: "https://www.rockwellautomation.com/content/dam/rockwell-automation/images/products/PlantPAx/PlantPAx-DCS.jpg",
          subItems2: {
            title: "Integrated DCS Solutions",
            description: "Achieve seamless process control with our advanced DCS platforms.",
            image: "https://www.rockwellautomation.com/content/dam/rockwell-automation/images/products/PlantPAx/PlantPAx-DCS.jpg"
          }
        },
        {
          name: "Programmable Logic Controllers (PLC)",
          detail: "Flexible and scalable control systems for various processing applications.",
          imgdetails: "https://www.siemens.com/global/en/products/automation/systems/industrial/plc/s7-1500.html",
          subItems2: {
            title: "Advanced PLC Systems",
            description: "Enhance your processing capabilities with our reliable PLC solutions.",
            image: "https://www.siemens.com/global/en/products/automation/systems/industrial/plc/s7-1500.html"
          }
        },
        {
          name: "Human-Machine Interface (HMI)",
          detail: "User-friendly interfaces for real-time monitoring and control of processes.",
          imgdetails: "https://www.schneider-electric.com/en/product-range/62085-harmony-gto---advanced-touchscreen-panels/",
          subItems2: {
            title: "Interactive HMI Panels",
            description: "Improve operational efficiency with our intuitive HMI solutions.",
            image: "https://www.schneider-electric.com/en/product-range/62085-harmony-gto---advanced-touchscreen-panels/"
          }
        },
        {
          name: "Supervisory Control and Data Acquisition (SCADA)",
          detail: "Comprehensive systems for data collection and control at the supervisory level.",
          imgdetails: "https://www.ge.com/digital/sites/default/files/GE-Digital-SCADA.jpg",
          subItems2: {
            title: "Robust SCADA Systems",
            description: "Monitor and control your processes effectively with our SCADA solutions.",
            image: "https://www.ge.com/digital/sites/default/files/GE-Digital-SCADA.jpg"
          }
        },
        {
          name: "Batch Processing Systems",
          detail: "Automated systems for managing batch production processes efficiently.",
          imgdetails: "https://www.honeywellprocess.com/library/marketing/brochures/Experion-Batch-Brochure.pdf",
          subItems2: {
            title: "Efficient Batch Processing",
            description: "Optimize your batch production with our advanced systems.",
            image: "https://www.honeywellprocess.com/library/marketing/brochures/Experion-Batch-Brochure.pdf"
          }
        },
        {
          name: "Process Analytics and Optimization",
          detail: "Tools and systems for analyzing and optimizing processing operations.",
          imgdetails: "https://www.emerson.com/images/analytics-solutions.jpg",
          subItems2: {
            title: "Process Optimization Tools",
            description: "Enhance process efficiency with our analytics and optimization solutions.",
            image: "https://www.emerson.com/images/analytics-solutions.jpg"
          }
        }
      ]
    },
    {
      label: "Shipping",
      title: "Smart Shipping & Dispatch Automation",
      desc: "Improve your shipping accuracy and reduce turnaround times.",
      desc2: "Track and automate all outbound logistics, from order confirmation to gate pass.",
      subItems: [
        {
          name: "Automated Loading Systems",
          detail: "Conveyor-based or robotic systems to optimize truck loading.",
          imgdetails: "https://www.beumergroup.com/fileadmin/_processed_/9/b/csm_BEUMER_autoloader_d3b6d56b1d.jpg",
          subItems2: {
            title: "Optimized Loading Operations",
            description: "Improves safety and speed during dispatch.",
            image: "https://www.beumergroup.com/fileadmin/_processed_/9/b/csm_BEUMER_autoloader_d3b6d56b1d.jpg"
          }
        },
        {
          name: "Digital Shipping Documentation",
          detail: "Automatic generation and printing of shipping labels, invoices, and delivery challans.",
          imgdetails: "https://www.shipbob.com/wp-content/uploads/2021/11/shipping-labels.png",
          subItems2: {
            title: "End-to-End Shipping Automation",
            description: "Fully digitized documentation for dispatch and logistics.",
            image: "https://www.shipbob.com/wp-content/uploads/2021/11/shipping-labels.png"
          }
        },
        {
          name: "Real-Time Tracking Systems",
          detail: "Track shipments in real-time to ensure timely deliveries.",
          imgdetails: "https://www.fleetx.io/assets/images/real-time-tracking.png",
          subItems2: {
            title: "Live Shipment Tracking",
            description: "Monitor your shipments with our real-time tracking solutions.",
            image: "https://www.fleetx.io/assets/images/real-time-tracking.png"
          }
        },
        {
          name: "Automated Sorting Systems",
          detail: "Efficiently sort packages based on destination using automated systems.",
          imgdetails: "https://www.dematic.com/globalassets/media-images/dematic-sorting-systems.jpg",
          subItems2: {
            title: "High-Speed Sorting Solutions",
            description: "Enhance sorting efficiency with our automated systems.",
            image: "https://www.dematic.com/globalassets/media-images/dematic-sorting-systems.jpg"
          }
        },
        {
          name: "Load Optimization Software",
          detail: "Software solutions to optimize load planning and maximize space utilization.",
          imgdetails: "https://www.kuebix.com/wp-content/uploads/2019/02/load-optimization.jpg",
          subItems2: {
            title: "Efficient Load Planning",
            description: "Maximize your shipping efficiency with our load optimization tools.",
            image: "https://www.kuebix.com/wp-content/uploads/2019/02/load-optimization.jpg"
          }
        },
        {
          name: "Automated Gate Pass Systems",
          detail: "Streamline the gate pass process with automated systems for faster dispatch.",
          imgdetails: "https://www.automatedgatesystems.com/wp-content/uploads/2019/06/gate-pass-system.jpg",
          subItems2: {
            title: "Quick Gate Pass Solutions",
            description: "Accelerate your dispatch process with our automated gate pass systems.",
            image: "https://www.automatedgatesystems.com/wp-content/uploads/2019/06/gate-pass-system.jpg"
          }
        }
      ]
    },
    {
      label: "Material Handling",
      title: "Factory-Wide Material Handling Automation",
      desc: "Optimize the flow of materials within your facility using smart systems.",
      desc2: "We implement automated conveyors, AGVs, and robotic handling to cut delays.",
      subItems: [
        {
          name: "Conveyor and Sorting Systems",
          detail: "Automated routing of materials across production areas using smart logic.",
          imgdetails: "https://www.interroll.com/fileadmin/_processed_/d/c/csm_Interroll-DC-Conveyor_04_300dpi_bf2fc8c3fa.jpg",
          subItems2: {
            title: "Smart Conveyor Systems",
            description: "Ensures high-speed, error-free material movement.",
            image: "https://www.interroll.com/fileadmin/_processed_/d/c/csm_Interroll-DC-Conveyor_04_300dpi_bf2fc8c3fa.jpg"
          }
        },
        {
          name: "Automated Guided Vehicles (AGVs)",
          detail: "Mobile robots that carry materials across your facility safely and efficiently.",
          imgdetails: "https://www.okubo.co.jp/english/products/images/agv/img_agv_01.jpg",
          subItems2: {
            title: "Mobile Material Transfer",
            description: "Perfect for heavy loads and dynamic routes.",
            image: "https://www.okubo.co.jp/english/products/images/agv/img_agv_01.jpg"
          }
        },
        {
          name: "Robotic Palletizing Systems",
          detail: "Automate the stacking of products on pallets, handling complex stacking patterns efficiently.",
          imgdetails: "https://ae-automation.com/wp-content/uploads/2021/05/robotic-palletizing.jpg",
          subItems2: {
            title: "Robotic Palletizing",
            description: "Improves pallet organization for easier transport.",
            image: "https://ae-automation.com/wp-content/uploads/2021/05/robotic-palletizing.jpg"
          }
        },
        {
          name: "Automated Storage and Retrieval Systems (AS/RS)",
          detail: "Computer-controlled systems that automatically store and retrieve materials from a warehouse or storage area.",
          imgdetails: "https://www.daifuku.com/solutions/automated-storage-and-retrieval-systems.jpg",
          subItems2: {
            title: "Efficient AS/RS Solutions",
            description: "Increase storage capacity and improve inventory management.",
            image: "https://www.daifuku.com/solutions/automated-storage-and-retrieval-systems.jpg"
          }
        },
        {
          name: "Pick and Place Systems",
          detail: "Automatically pick up and place materials, such as boxes or containers, onto a conveyor or other transport system.",
          imgdetails: "https://www.yaskawa.com/images/default-source/default-album/pick-and-place-robot.jpg",
          subItems2: {
            title: "Automated Pick and Place",
            description: "Enhance efficiency in material handling processes.",
            image: "https://www.yaskawa.com/images/default-source/default-album/pick-and-place-robot.jpg"
          }
        },
        {
          name: "Control Systems",
          detail: "Computer control systems to coordinate and monitor the movement of materials within a facility.",
          imgdetails: "https://www.rockwellautomation.com/content/dam/rockwell-automation/images/products/PlantPAx/PlantPAx-DCS.jpg",
          subItems2: {
            title: "Centralized Control Systems",
            description: "Ensure seamless coordination of material handling equipment.",
            image: "https://www.rockwellautomation.com/content/dam/rockwell-automation/images/products/PlantPAx/PlantPAx-DCS.jpg"
          }
        }
      ]
    },
    {
      label: "Control Room",
      title: "Centralized Plant Control & Monitoring",
      desc: "Total plant oversight and optimization from a single room.",
      desc2: "We deploy intelligent control systems that integrate all automation processes with real-time feedback and data analytics.",
      subItems: [
        {
          name: "Distributed Control Systems (DCS)",
          detail: "Enable plant-wide control and monitoring of processes in a modular fashion.",
          imgdetails: "https://www.honeywellprocess.com/library/news-and-events/PublishingImages/Honeywell%20Experion%20DCS.jpg",
          subItems2: {
            title: "Plant-Wide Control",
            description: "Ensure reliable, scalable control using modular DCS architecture.",
            image: "https://www.honeywellprocess.com/library/news-and-events/PublishingImages/Honeywell%20Experion%20DCS.jpg"
          }
        },
        {
          name: "Human-Machine Interface (HMI)",
          detail: "Visual interfaces for operators to interact with machines and process systems.",
          imgdetails: "https://scadahacker.com/images/hmi.png",
          subItems2: {
            title: "Operator Interface",
            description: "Real-time dashboards, controls, and alerts for better decision-making.",
            image: "https://scadahacker.com/images/hmi.png"
          }
        },
        {
          name: "SCADA Integration",
          detail: "Monitor and control plant operations remotely with centralized SCADA systems.",
          imgdetails: "https://inductiveautomation.com/images/uploads/blog/SCADA-diagram-labeled.jpg",
          subItems2: {
            title: "Real-Time SCADA",
            description: "Centralized monitoring of plant-wide systems through networked interfaces.",
            image: "https://inductiveautomation.com/images/uploads/blog/SCADA-diagram-labeled.jpg"
          }
        },
        {
          name: "Alarm Management Systems",
          detail: "Reduce operator overload and ensure priority-based alerts.",
          imgdetails: "https://cdn.automation.com/images/Alarm-Management-Software-Screenshot.jpg",
          subItems2: {
            title: "Smart Alarms",
            description: "Filter critical vs. nuisance alerts for faster incident response.",
            image: "https://cdn.automation.com/images/Alarm-Management-Software-Screenshot.jpg"
          }
        },
        {
          name: "Data Historian Systems",
          detail: "Log plant data for analysis, compliance, and optimization.",
          imgdetails: "https://www.aveva.com/contentassets/b4d262ddef7c40d28e5ac96bb71f0538/pi-system.jpg",
          subItems2: {
            title: "Long-Term Data Logging",
            description: "Analyze trends, traceability, and production efficiency.",
            image: "https://www.aveva.com/contentassets/b4d262ddef7c40d28e5ac96bb71f0538/pi-system.jpg"
          }
        },
        {
          name: "Cybersecurity for OT Systems",
          detail: "Secure your operational technology network from intrusions and threats.",
          imgdetails: "https://www.fortinet.com/content/dam/fortinet/assets/illustrations/illustration-industrial-cybersecurity-ot.svg",
          subItems2: {
            title: "OT Network Security",
            description: "Protect control room networks from unauthorized access and malware.",
            image: "https://www.fortinet.com/content/dam/fortinet/assets/illustrations/illustration-industrial-cybersecurity-ot.svg"
          }
        }
      ]
    },
    {
      label: "Batching Blending",
      title: "Automated Batching and Blending Solutions",
      desc: "Ensure precision and repeatability in formulation through automation.",
      desc2: "We help you eliminate manual errors in weighing, dosing, and mixing by introducing PLC-driven automation.",
      subItems: [
        {
          name: "Recipe Management and Control",
          detail: "BMS and MES systems automate batches based on precise instructions and allow tracking and repeatability.",
          imgdetails: "https://edelteq.com/wp-content/uploads/2022/05/Picture94.png",
          subItems2: {
            title: "Recipe Accuracy",
            description: "Implemented with MARS for chocolate production consistency.",
            image: "https://edelteq.com/wp-content/uploads/2022/05/Picture94.png"
          }
        },
        {
          name: "Weighing and Dosing Automation",
          detail: "Gravimetric and volumetric feeders combined with load cell feedback for high precision dosing.",
          imgdetails: "https://www.a-tech.ca/resource/solution/6/weigh_controller_-_types_of_weighing.JPG?1559138783020",
          subItems2: {
            title: "Precise Dosing",
            description: "Integrated into food and chemical industries for accuracy.",
            image: "https://www.a-tech.ca/resource/solution/6/weigh_controller_-_types_of_weighing.JPG?1559138783020"
          }
        },
        {
          name: "Ingredient Dispensing Systems",
          detail: "Controlled release of powders, liquids, and micro-ingredients from silos or tanks.",
          imgdetails: "https://www.apecusa.com/wp-content/uploads/2017/12/specialty_ingredient-flow.jpg",
          subItems2: {
            title: "Ingredient Flow Control",
            description: "Used in pet food and confectionery facilities.",
            image: "https://www.apecusa.com/wp-content/uploads/2017/12/specialty_ingredient-flow.jpg"
          }
        },
        {
          name: "Blending Automation",
          detail: "Automated mixers with VFDs and blend uniformity sensors.",
          imgdetails: "https://5.imimg.com/data5/SELLER/Default/2022/11/BH/TE/BB/66538/blending-plant-500x500.png",
          subItems2: {
            title: "Blending Consistency",
            description: "Applied in cosmetics and nutraceuticals.",
            image: "https://5.imimg.com/data5/SELLER/Default/2022/11/BH/TE/BB/66538/blending-plant-500x500.png"
          }
        },
        {
          name: "Batch Traceability Systems",
          detail: "Track and trace batch components from raw input to final output.",
          imgdetails: "https://www.sgs.com/-/media/sgscorp/images/temporary/misc/sgs-quality-control.jpg",
          subItems2: {
            title: "End-to-End Traceability",
            description: "Crucial for pharma and food safety compliance.",
            image: "https://www.sgs.com/-/media/sgscorp/images/temporary/misc/sgs-quality-control.jpg"
          }
        },
        {
          name: "Inline Quality Testing",
          detail: "Integrate pH, viscosity, moisture, and temperature sensors into blend lines.",
          imgdetails: "https://www.mt.com/dam/industrial/quality-testing-control.jpg",
          subItems2: {
            title: "Inline QC Sensors",
            description: "Instant quality validation without stopping the process.",
            image: "https://www.mt.com/dam/industrial/quality-testing-control.jpg"
          }
        }
      ]
    }
    

  ];
  