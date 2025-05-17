// sectionData.js
const sectionData = [
    {
      title: "Shipping",
      image: "shipping.png",
      features: [
        { title: "Digital Dock Scheduling System", description: `\n1. Schedule truck arrivals.
2. Avoid bottlenecks.
3. Track loading time.
4. Communicate with logistics.
5. Improve turnaround.` },
        { title: "RFID-based Shipment Tracking", description: `\n"1. Real-time shipment location.
2. Reduce loss/misplacement.
3. Track vehicle movements.
4. Verify loading completion.
5. Automate shipment logs."` },
        { title: "Smart Loading Bay Monitoring", description: `\n1. Detect loading status.
2. Monitor door open/close.
3. Track load weight.
4. Raise alerts on mismatch.
5. Video surveillance sync.` },
          { title: "Automated Bill of Lading Generation", description: `\n1. Auto-generate documents.
2. Reduce manual entry errors.
3. Integrate with ERP.
4. Print/email on dispatch.
5. Track document history.` },
{ title: "GPS-Integrated Delivery Analytics", description: `\n1. Track delivery routes.
2. Analyze delivery times.
3. Improve route planning.
4. Detect delays.
5. Integrate with customer portals.` },
      ]
    },
    {
      title: "Office",
      image: "office.png",
      features: [
        { title: "Centralized Data Historian System", description: `1. Collect data from all systems.
2. Store securely over time.
3. Enable analytics.
4. Audit trail compliance.
5. Easy data export.` },
        { title: "Digital Shift Handover Logs", description: `1. Replace paper logs.
2. Standardize reporting.
3. Add comments/images.
4. Searchable history.
5. Timestamped entries.` },
        { title: "Cybersecurity & Access Control System", description: `1. Secure OT networks.
2. Role-based user access.
3. Audit login attempts.
4. Real-time threat alerts.
5. Periodic backup.` },
        { title: "Remote Monitoring & Mobile Apps", description: `1. Access dashboards remotely.
2. Get notifications.
3. View production KPIs.
4. Approve maintenance.
5. Enhance visibility.` },
        { title: "Integrated ERP Dashboards", description: `1. Show real-time plant data.
2. Combine finance + production KPIs.
3. Make informed decisions.
4. Reduce reporting time.
5. Enable drill-down insights.` },
      ]
    },
    {
  title: "Raw Material Receiving",
  image: "RawMaterialReceivingSoraAI.png",
  features: [
    {
      title: "RFID Tagging System",
      description: `\n1. Tag materials with RFID on arrival.\n2. Enable real-time identification.\n3. Prevent material mix-ups.\n4. Speed up unloading.\n5. Integrate with inventory system.`
    },
    {
      title: "Automated Inbound Quality Check",
      description: `\n1. Digitally inspect material specs.\n2. Log quality results instantly.\n3. Raise alerts on deviations.\n4. Store quality history.\n5. Improve compliance.`
    },
    {
      title: "Smart Unloading Assistance",
      description: `\n1. Guide workers during unloading.\n2. Prevent damage.\n3. Assign materials to correct zones.\n4. Confirm via sensor feedback.\n5. Improve efficiency.`
    },
    {
      title: "Auto-Logging to ERP",
      description: `\n1. Log material data automatically.\n2. Eliminate manual entries.\n3. Sync with receiving documents.\n4. Improve traceability.\n5. Ensure real-time inventory.`
    },
    {
      title: "Digital Supplier Coordination",
      description: `\n1. Notify suppliers of issues.\n2. Schedule deliveries.\n3. Track material status.\n4. Share live inspection data.\n5. Strengthen supplier relations.`
    }
  ]
},
    {
      title: "Material Handling",
      image: "materialHandling.png",
      features: [
        { title: "Automated Guided Vehicles (AGVs)", description: `1. Move materials autonomously.
2. Reduce manual labor.
3. Avoid collisions.
4. Integrate with WMS.
5. Track AGV status live.` },
        { title: "IoT-enabled Forklift Monitoring", description: `1. Monitor forklift usage.
2. Prevent over-speeding.
3. Alert on impact.
4. Track maintenance.
5. Operator authentication.` },
        { title: "Warehouse Management System (WMS)", description: `1. Track inventory locations.
2. Optimize space usage.
3. Replenish alerts.
4. Audit trail logs.
5. ERP integration.` },
        { title: "Automated Pallet Tracking", description: `1. Track pallet movement.
2. Reduce missing inventory.
3. RFID/barcode support.
4. Visualize stock.
5. History tracking.` },
        { title: "Energy Monitoring for Handling Equipment", description: `1. Measure equipment energy usage.
2. Identify high-consumption devices.
3. Optimize energy cost.
4. Schedule low-load operations.
5. ISO50001 reporting.` },
      ]
    },
    {
  title: "Batching & Blending",
  image: "batchingAndBlending2.png",
  features: [
    {
      title: "Automated Recipe Management System",
      description: `\n1. Digitally manage and update recipes.\n2. Ensure consistency in batches.\n3. Integrate with SCADA/PLC.\n4. Track ingredient usage.\n5. Store historical data for audits.`
    },
    {
      title: "Real-Time Batch Monitoring Dashboard",
      description: `\n1. Monitor batch progress live.\n2. Visualize key parameters (temperature, weight, etc.).\n3. Raise alerts on deviation.\n4. Enable remote access.\n5. Export batch reports.`
    },
    {
      title: "IoT-enabled Load Cell Integration",
      description: `\n1. Accurate measurement of ingredients.\n2. Real-time weighing feedback.\n3. Reduces over/under batching errors.\n4. Integrate with MES/ERP.\n5. Data logging for compliance.`
    },
    {
      title: "Digital Batch Scheduling System",
      description: `\n1. Plan batches based on demand forecast.\n2. Optimize ingredient availability.\n3. Avoid machine downtime.\n4. Track batch status.\n5. Integrate with ERP.`
    },
    {
      title: "Cloud-based Batching Analytics",
      description: `\n1. Analyze batch performance.\n2. Identify bottlenecks.\n3. Compare batch efficiency.\n4. Report generation.\n5. Machine learning predictions.`
    },
  ]
},
    {
      title: "Packaging",
      image: "packaging.png",
      features: [
        { title: "Vision Inspection Systems", description: `1. Detect defects or mislabeling.
2. Ensure quality compliance.
3. Track reject rates.
4. High-speed processing.
5. Store image evidence.` },
        { title: "IAutomated Labeling Control", description: `1. Ensure accurate label placement.
2. Barcode/QR code verification.
3. Match packaging and product.
4. Real-time labeling data.
5. Reduce rework.` },
        { title: "Smart Conveyor System Monitoring", description: `1. Monitor conveyor speed/load.
2. Predict jams.
3. Synchronize with filling machines.
4. Adjust in real-time.
5. Centralized control.` },
        { title: "Packaging Line OEE Dashboard", description: `1. Track Overall Equipment Effectiveness.
2. Identify downtime reasons.
3. Monitor cycle times.
4. Generate shift-wise reports.
5. Benchmark performance.` },
        { title: "Packaging Line OEE Dashboard", description: `1. Monitor packaging machine health.
2. Alert for overheating or misalignment.
3. Reduce breakdowns.
4. Collect maintenance logs.
5. Enhance machine longevity.` },
      ]
    },
    {
      title: "Processing",
      image: "processingArea.png",
      features: [
         { title: "SCADA-Controlled Process Automation", description: `1. Real-time monitoring of process parameters.
2. Alarm management.
3. Remote control capability.
4. Data trends and logging.
5. Integration with ERP.` },
        { title: "Digital Twin for Process Simulation", description: `1. Simulate production lines.
2. Optimize process flow.
3. Predict failures.
4. Train operators virtually.
5. Improve energy efficiency.` },
        { title: "AI-based Predictive Maintenance", description: `1. Analyze equipment health data.
2. Predict failure before it occurs.
3. Minimize downtime.
4. Schedule maintenance proactively.
5. Reduce repair costs.` },
        { title: "Centralized HMI Interfaces", description: `1. Unified process control.
2. User-friendly visualization.
3. Operator authentication.
4. Log operator actions.
5. Reduce training time.` },
        { title: "PLC-Driven Automatic Process Adjustment", description: `1. Auto-tune process parameters.
2. Reduce human error.
3. Maintain optimal conditions.
4. Feedback-based correction.
5. Increase product consistency.` },
      ]
    },
  ];
  
  export default sectionData;
  