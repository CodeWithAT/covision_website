/**
 * CoVision Enterprise Image Assets Catalog
 */

export interface CatalogImageItem {
  id: string
  rank: number
  title: string
  angleDescription: string
  photoId: string
  localPath: string
  previewUrl: string
  fullUrl: string
}

export interface CatalogCategory {
  id: string
  name: string
  shortName: string
  focus: string
  description: string
  folder: string
  items: CatalogImageItem[]
}

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  {
    "id": "cloud",
    "name": "Cloud & Infrastructure Architecture",
    "shortName": "Cloud & Infra",
    "focus": "Tier-1 Datacenters, Optical Cabling, Server Clusters & Edge Nodes",
    "description": "High-density enterprise server racks with active cooling, symmetrical fiber optic lines, and redundant multi-cloud switching fabric.",
    "folder": "01_Cloud_and_Datacenter",
    "items": [
      {
        "id": "cloud-1",
        "rank": 1,
        "title": "Enterprise Datacenter Array",
        "angleDescription": "High-density server racks with blue neon indicators & active cooling.",
        "photoId": "PEXELS-325229",
        "localPath": "/senior_image_catalog/01_Cloud_and_Datacenter/01_enterprise_datacenter_array.jpg",
        "previewUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/01_enterprise_datacenter_array.jpg",
        "fullUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/01_enterprise_datacenter_array.jpg"
      },
      {
        "id": "cloud-2",
        "rank": 2,
        "title": "Optical Fiber Corridors",
        "angleDescription": "Symmetrical glowing fiber optic lines representing high-throughput edge delivery.",
        "photoId": "PEXELS-1148820",
        "localPath": "/senior_image_catalog/01_Cloud_and_Datacenter/02_optical_fiber_corridors.jpg",
        "previewUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/02_optical_fiber_corridors.jpg",
        "fullUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/02_optical_fiber_corridors.jpg"
      },
      {
        "id": "cloud-3",
        "rank": 3,
        "title": "Multi-Cloud Rack Clusters",
        "angleDescription": "Precision hardware arrays with enterprise patch cabling and power redundancy.",
        "photoId": "PEXELS-2881232",
        "localPath": "/senior_image_catalog/01_Cloud_and_Datacenter/03_multi-cloud_rack_clusters.jpg",
        "previewUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/03_multi-cloud_rack_clusters.jpg",
        "fullUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/03_multi-cloud_rack_clusters.jpg"
      },
      {
        "id": "cloud-4",
        "rank": 4,
        "title": "Switch Fabric & Network Core",
        "angleDescription": "Close-up of enterprise Ethernet switches & low-latency optical interconnects.",
        "photoId": "PEXELS-1181354",
        "localPath": "/senior_image_catalog/01_Cloud_and_Datacenter/04_switch_fabric_and_network_core.jpg",
        "previewUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/04_switch_fabric_and_network_core.jpg",
        "fullUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/04_switch_fabric_and_network_core.jpg"
      },
      {
        "id": "cloud-5",
        "rank": 5,
        "title": "Global Anycast Edge Facility",
        "angleDescription": "Clean industrial server facility showing international reach across PoPs.",
        "photoId": "PEXELS-2582937",
        "localPath": "/senior_image_catalog/01_Cloud_and_Datacenter/05_global_anycast_edge_facility.jpg",
        "previewUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/05_global_anycast_edge_facility.jpg",
        "fullUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/05_global_anycast_edge_facility.jpg"
      },
      {
        "id": "cloud-6",
        "rank": 6,
        "title": "Zero-Trust Silicon Core",
        "angleDescription": "Microarchitecture chip representing SOC-2 Type II secure cloud compute.",
        "photoId": "PEXELS-373543",
        "localPath": "/senior_image_catalog/01_Cloud_and_Datacenter/06_zero-trust_silicon_core.jpg",
        "previewUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/06_zero-trust_silicon_core.jpg",
        "fullUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/06_zero-trust_silicon_core.jpg"
      },
      {
        "id": "cloud-7",
        "rank": 7,
        "title": "Hardware Failover Motherboard",
        "angleDescription": "Precision printed circuit board running cloud server architecture.",
        "photoId": "PEXELS-442150",
        "localPath": "/senior_image_catalog/01_Cloud_and_Datacenter/07_hardware_failover_motherboard.jpg",
        "previewUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/07_hardware_failover_motherboard.jpg",
        "fullUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/07_hardware_failover_motherboard.jpg"
      },
      {
        "id": "cloud-8",
        "rank": 8,
        "title": "Cloud Telemetry Operations Desk",
        "angleDescription": "Operations control desk monitoring distributed multi-cloud health telemetry.",
        "photoId": "PEXELS-2004161",
        "localPath": "/senior_image_catalog/01_Cloud_and_Datacenter/08_cloud_telemetry_operations_desk.jpg",
        "previewUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/08_cloud_telemetry_operations_desk.jpg",
        "fullUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/08_cloud_telemetry_operations_desk.jpg"
      },
      {
        "id": "cloud-9",
        "rank": 9,
        "title": "Infrastructure Architect Review",
        "angleDescription": "Senior cloud engineer testing hardware failover switches in staging facility.",
        "photoId": "PEXELS-1181675",
        "localPath": "/senior_image_catalog/01_Cloud_and_Datacenter/09_infrastructure_architect_review.jpg",
        "previewUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/09_infrastructure_architect_review.jpg",
        "fullUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/09_infrastructure_architect_review.jpg"
      },
      {
        "id": "cloud-10",
        "rank": 10,
        "title": "Distributed Cloud Engineering Lab",
        "angleDescription": "Principal infrastructure team aligning multi-region Kubernetes deployments.",
        "photoId": "PEXELS-1181244",
        "localPath": "/senior_image_catalog/01_Cloud_and_Datacenter/10_distributed_cloud_engineering_la.jpg",
        "previewUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/10_distributed_cloud_engineering_la.jpg",
        "fullUrl": "/senior_image_catalog/01_Cloud_and_Datacenter/10_distributed_cloud_engineering_la.jpg"
      }
    ]
  },
  {
    "id": "software",
    "name": "Software Engineering & Systems Architecture",
    "shortName": "Software Eng",
    "focus": "Clean Code Architecture, Microservices, Dev Rig & Zero Tech Debt",
    "description": "High-contrast syntax highlighting on 4K vertical monitors, peer code reviews, and robust algorithmic pipelines.",
    "folder": "02_Software_Engineering_and_Code",
    "items": [
      {
        "id": "software-1",
        "rank": 1,
        "title": "Clean Dark Mode Workstation",
        "angleDescription": "Syntax-highlighted clean architecture code with strict modular separation.",
        "photoId": "PEXELS-3861969",
        "localPath": "/senior_image_catalog/02_Software_Engineering_and_Code/01_clean_dark_mode_workstation.jpg",
        "previewUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/01_clean_dark_mode_workstation.jpg",
        "fullUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/01_clean_dark_mode_workstation.jpg"
      },
      {
        "id": "software-2",
        "rank": 2,
        "title": "Principal Architect Workspace",
        "angleDescription": "Modern developer studio with laptop, mechanical keyboard, and active backend services.",
        "photoId": "PEXELS-3861958",
        "localPath": "/senior_image_catalog/02_Software_Engineering_and_Code/02_principal_architect_workspace.jpg",
        "previewUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/02_principal_architect_workspace.jpg",
        "fullUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/02_principal_architect_workspace.jpg"
      },
      {
        "id": "software-3",
        "rank": 3,
        "title": "Vertical Code Architecture",
        "angleDescription": "High-density TypeScript microservices code on high-contrast vertical monitor.",
        "photoId": "PEXELS-1181671",
        "localPath": "/senior_image_catalog/02_Software_Engineering_and_Code/03_vertical_code_architecture.jpg",
        "previewUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/03_vertical_code_architecture.jpg",
        "fullUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/03_vertical_code_architecture.jpg"
      },
      {
        "id": "software-4",
        "rank": 4,
        "title": "Full-Stack Development Desk",
        "angleDescription": "Clean minimalist workstation featuring code testing, responsive preview & notes.",
        "photoId": "PEXELS-1181263",
        "localPath": "/senior_image_catalog/02_Software_Engineering_and_Code/04_full-stack_development_desk.jpg",
        "previewUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/04_full-stack_development_desk.jpg",
        "fullUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/04_full-stack_development_desk.jpg"
      },
      {
        "id": "software-5",
        "rank": 5,
        "title": "Algorithmic Logic Terminal",
        "angleDescription": "High-speed algorithms and mathematical logic executed in dark CLI terminal.",
        "photoId": "PEXELS-1181467",
        "localPath": "/senior_image_catalog/02_Software_Engineering_and_Code/05_algorithmic_logic_terminal.jpg",
        "previewUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/05_algorithmic_logic_terminal.jpg",
        "fullUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/05_algorithmic_logic_terminal.jpg"
      },
      {
        "id": "software-6",
        "rank": 6,
        "title": "Peer Architecture Code Review",
        "angleDescription": "Senior engineers conducting pull request code review in bright modern tech loft.",
        "photoId": "PEXELS-3861972",
        "localPath": "/senior_image_catalog/02_Software_Engineering_and_Code/06_peer_architecture_code_review.jpg",
        "previewUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/06_peer_architecture_code_review.jpg",
        "fullUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/06_peer_architecture_code_review.jpg"
      },
      {
        "id": "software-7",
        "rank": 7,
        "title": "TypeScript Interface Modeling",
        "angleDescription": "Close-up typography of type-safe enterprise data contracts and API models.",
        "photoId": "PEXELS-1181243",
        "localPath": "/senior_image_catalog/02_Software_Engineering_and_Code/07_typescript_interface_modeling.jpg",
        "previewUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/07_typescript_interface_modeling.jpg",
        "fullUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/07_typescript_interface_modeling.jpg"
      },
      {
        "id": "software-8",
        "rank": 8,
        "title": "Git Version Control Flow",
        "angleDescription": "Interactive git branch visualization and automated CI/CD pipeline triggers.",
        "photoId": "PEXELS-1181373",
        "localPath": "/senior_image_catalog/02_Software_Engineering_and_Code/08_git_version_control_flow.jpg",
        "previewUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/08_git_version_control_flow.jpg",
        "fullUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/08_git_version_control_flow.jpg"
      },
      {
        "id": "software-9",
        "rank": 9,
        "title": "Modern Web Standards Code",
        "angleDescription": "HTML5/React component tree on crisp display with zero clutter.",
        "photoId": "PEXELS-574071",
        "localPath": "/senior_image_catalog/02_Software_Engineering_and_Code/09_modern_web_standards_code.jpg",
        "previewUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/09_modern_web_standards_code.jpg",
        "fullUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/09_modern_web_standards_code.jpg"
      },
      {
        "id": "software-10",
        "rank": 10,
        "title": "Distributed Backend Services Desk",
        "angleDescription": "Engineer debugging high-concurrency microservices with sub-5ms response.",
        "photoId": "PEXELS-574077",
        "localPath": "/senior_image_catalog/02_Software_Engineering_and_Code/10_distributed_backend_services_des.jpg",
        "previewUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/10_distributed_backend_services_des.jpg",
        "fullUrl": "/senior_image_catalog/02_Software_Engineering_and_Code/10_distributed_backend_services_des.jpg"
      }
    ]
  },
  {
    "id": "saas",
    "name": "Custom SaaS Platforms & Enterprise Products",
    "shortName": "SaaS Platforms",
    "focus": "Multi-Tenant Architecture, Executive Dashboards, Real-Time Streams",
    "description": "Executive KPI telemetry portals, revenue growth analytics, and multi-device cloud software platforms.",
    "folder": "03_Custom_SaaS_and_Platforms",
    "items": [
      {
        "id": "saas-1",
        "rank": 1,
        "title": "Executive SaaS Performance Dashboard",
        "angleDescription": "Comprehensive multi-pane metrics visualization with real-time KPI indicators.",
        "photoId": "PEXELS-590022",
        "localPath": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/01_executive_saas_performance_dashb.jpg",
        "previewUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/01_executive_saas_performance_dashb.jpg",
        "fullUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/01_executive_saas_performance_dashb.jpg"
      },
      {
        "id": "saas-2",
        "rank": 2,
        "title": "Revenue & Growth Telemetry Portal",
        "angleDescription": "Financial SaaS portal tracking churn reduction, MRR growth, and customer retention.",
        "photoId": "PEXELS-590020",
        "localPath": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/02_revenue_and_growth_telemetry_por.jpg",
        "previewUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/02_revenue_and_growth_telemetry_por.jpg",
        "fullUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/02_revenue_and_growth_telemetry_por.jpg"
      },
      {
        "id": "saas-3",
        "rank": 3,
        "title": "Real-Time Event Stream UI",
        "angleDescription": "Low-latency telemetry charts processing 50k+ customer events per second.",
        "photoId": "PEXELS-669615",
        "localPath": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/03_real-time_event_stream_ui.jpg",
        "previewUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/03_real-time_event_stream_ui.jpg",
        "fullUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/03_real-time_event_stream_ui.jpg"
      },
      {
        "id": "saas-4",
        "rank": 4,
        "title": "Enterprise Platform Insights Hub",
        "angleDescription": "Senior analytics lead analyzing customer conversion funnels on modern SaaS app.",
        "photoId": "PEXELS-669619",
        "localPath": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/04_enterprise_platform_insights_hub.jpg",
        "previewUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/04_enterprise_platform_insights_hub.jpg",
        "fullUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/04_enterprise_platform_insights_hub.jpg"
      },
      {
        "id": "saas-5",
        "rank": 5,
        "title": "Cross-Device SaaS Suite",
        "angleDescription": "Coherent web application ecosystem displayed across tablet and laptop screens.",
        "photoId": "PEXELS-3183150",
        "localPath": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/05_cross-device_saas_suite.jpg",
        "previewUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/05_cross-device_saas_suite.jpg",
        "fullUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/05_cross-device_saas_suite.jpg"
      },
      {
        "id": "saas-6",
        "rank": 6,
        "title": "SaaS Product Team Pod",
        "angleDescription": "Agile product managers and engineers monitoring sprint velocity and live users.",
        "photoId": "PEXELS-3183153",
        "localPath": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/06_saas_product_team_pod.jpg",
        "previewUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/06_saas_product_team_pod.jpg",
        "fullUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/06_saas_product_team_pod.jpg"
      },
      {
        "id": "saas-7",
        "rank": 7,
        "title": "Executive Platform Demo Session",
        "angleDescription": "Live SaaS client demonstration in boardroom with crisp projection metrics.",
        "photoId": "PEXELS-3184291",
        "localPath": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/07_executive_platform_demo_session.jpg",
        "previewUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/07_executive_platform_demo_session.jpg",
        "fullUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/07_executive_platform_demo_session.jpg"
      },
      {
        "id": "saas-8",
        "rank": 8,
        "title": "Platform Architecture Blueprint Workshop",
        "angleDescription": "Strategic architecture workshop charting microservice dependencies and gateways.",
        "photoId": "PEXELS-3184338",
        "localPath": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/08_platform_architecture_blueprint_.jpg",
        "previewUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/08_platform_architecture_blueprint_.jpg",
        "fullUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/08_platform_architecture_blueprint_.jpg"
      },
      {
        "id": "saas-9",
        "rank": 9,
        "title": "SaaS Design Token Foundry",
        "angleDescription": "Design system tokens and responsive components built for rapid SaaS rollout.",
        "photoId": "PEXELS-3184360",
        "localPath": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/09_saas_design_token_foundry.jpg",
        "previewUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/09_saas_design_token_foundry.jpg",
        "fullUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/09_saas_design_token_foundry.jpg"
      },
      {
        "id": "saas-10",
        "rank": 10,
        "title": "Modern SaaS Headquarters",
        "angleDescription": "Bright architectural tech workspace with active cloud monitoring stations.",
        "photoId": "PEXELS-3184465",
        "localPath": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/10_modern_saas_headquarters.jpg",
        "previewUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/10_modern_saas_headquarters.jpg",
        "fullUrl": "/senior_image_catalog/03_Custom_SaaS_and_Platforms/10_modern_saas_headquarters.jpg"
      }
    ]
  },
  {
    "id": "mobile",
    "name": "Mobile App Engineering & Native Experience",
    "shortName": "Mobile Apps",
    "focus": "Native iOS & Android, Biometric Authentication, 60fps Micro-Interactions",
    "description": "High-conversion dark mode mobile UIs, device test labs, tablet telemetry, and seamless gesture navigation.",
    "folder": "04_Mobile_App_Engineering",
    "items": [
      {
        "id": "mobile-1",
        "rank": 1,
        "title": "Dark Mode Mobile App UX",
        "angleDescription": "Handheld smartphone running high-retention enterprise app with fluid touch.",
        "photoId": "PEXELS-5082579",
        "localPath": "/senior_image_catalog/04_Mobile_App_Engineering/01_dark_mode_mobile_app_ux.jpg",
        "previewUrl": "/senior_image_catalog/04_Mobile_App_Engineering/01_dark_mode_mobile_app_ux.jpg",
        "fullUrl": "/senior_image_catalog/04_Mobile_App_Engineering/01_dark_mode_mobile_app_ux.jpg"
      },
      {
        "id": "mobile-2",
        "rank": 2,
        "title": "FinTech Mobile Interface",
        "angleDescription": "Sleek mobile transaction experience with biometric authentication UI.",
        "photoId": "PEXELS-5082581",
        "localPath": "/senior_image_catalog/04_Mobile_App_Engineering/02_fintech_mobile_interface.jpg",
        "previewUrl": "/senior_image_catalog/04_Mobile_App_Engineering/02_fintech_mobile_interface.jpg",
        "fullUrl": "/senior_image_catalog/04_Mobile_App_Engineering/02_fintech_mobile_interface.jpg"
      },
      {
        "id": "mobile-3",
        "rank": 3,
        "title": "Mobile Layout & Orientation Testing",
        "angleDescription": "Mobile engineer testing responsive orientation across tablet and smartphone.",
        "photoId": "PEXELS-607812",
        "localPath": "/senior_image_catalog/04_Mobile_App_Engineering/03_mobile_layout_and_orientation_te.jpg",
        "previewUrl": "/senior_image_catalog/04_Mobile_App_Engineering/03_mobile_layout_and_orientation_te.jpg",
        "fullUrl": "/senior_image_catalog/04_Mobile_App_Engineering/03_mobile_layout_and_orientation_te.jpg"
      },
      {
        "id": "mobile-4",
        "rank": 4,
        "title": "Production App Store Release Rig",
        "angleDescription": "Clean mobile prototype validated against iOS Human Interface Guidelines.",
        "photoId": "PEXELS-1092671",
        "localPath": "/senior_image_catalog/04_Mobile_App_Engineering/04_production_app_store_release_rig.jpg",
        "previewUrl": "/senior_image_catalog/04_Mobile_App_Engineering/04_production_app_store_release_rig.jpg",
        "fullUrl": "/senior_image_catalog/04_Mobile_App_Engineering/04_production_app_store_release_rig.jpg"
      },
      {
        "id": "mobile-5",
        "rank": 5,
        "title": "Secure Field Team Application",
        "angleDescription": "Biometric authentication and offline data sync for enterprise field teams.",
        "photoId": "PEXELS-404280",
        "localPath": "/senior_image_catalog/04_Mobile_App_Engineering/05_secure_field_team_application.jpg",
        "previewUrl": "/senior_image_catalog/04_Mobile_App_Engineering/05_secure_field_team_application.jpg",
        "fullUrl": "/senior_image_catalog/04_Mobile_App_Engineering/05_secure_field_team_application.jpg"
      },
      {
        "id": "mobile-6",
        "rank": 6,
        "title": "Mobile Design Prototyping Artboard",
        "angleDescription": "Product designer calibrating 60fps gesture feedback loops on mobile artboards.",
        "photoId": "PEXELS-887751",
        "localPath": "/senior_image_catalog/04_Mobile_App_Engineering/06_mobile_design_prototyping_artboa.jpg",
        "previewUrl": "/senior_image_catalog/04_Mobile_App_Engineering/06_mobile_design_prototyping_artboa.jpg",
        "fullUrl": "/senior_image_catalog/04_Mobile_App_Engineering/06_mobile_design_prototyping_artboa.jpg"
      },
      {
        "id": "mobile-7",
        "rank": 7,
        "title": "Cross-Platform Form Factor Lab",
        "angleDescription": "Simultaneous automated testing across multiple iOS and Android form factors.",
        "photoId": "PEXELS-196644",
        "localPath": "/senior_image_catalog/04_Mobile_App_Engineering/07_cross-platform_form_factor_lab.jpg",
        "previewUrl": "/senior_image_catalog/04_Mobile_App_Engineering/07_cross-platform_form_factor_lab.jpg",
        "fullUrl": "/senior_image_catalog/04_Mobile_App_Engineering/07_cross-platform_form_factor_lab.jpg"
      },
      {
        "id": "mobile-8",
        "rank": 8,
        "title": "Modern Consumer Banking App",
        "angleDescription": "High-converting digital banking app with instantaneous transaction feedback.",
        "photoId": "PEXELS-1294886",
        "localPath": "/senior_image_catalog/04_Mobile_App_Engineering/08_modern_consumer_banking_app.jpg",
        "previewUrl": "/senior_image_catalog/04_Mobile_App_Engineering/08_modern_consumer_banking_app.jpg",
        "fullUrl": "/senior_image_catalog/04_Mobile_App_Engineering/08_modern_consumer_banking_app.jpg"
      },
      {
        "id": "mobile-9",
        "rank": 9,
        "title": "Mobile Developer Workstation",
        "angleDescription": "Dual testing rig connecting iPhone/Android simulator directly to IDE.",
        "photoId": "PEXELS-3585088",
        "localPath": "/senior_image_catalog/04_Mobile_App_Engineering/09_mobile_developer_workstation.jpg",
        "previewUrl": "/senior_image_catalog/04_Mobile_App_Engineering/09_mobile_developer_workstation.jpg",
        "fullUrl": "/senior_image_catalog/04_Mobile_App_Engineering/09_mobile_developer_workstation.jpg"
      },
      {
        "id": "mobile-10",
        "rank": 10,
        "title": "Healthcare Telemetry Tablet",
        "angleDescription": "HIPAA-compliant medical application interface with live vitals sync.",
        "photoId": "PEXELS-4348404",
        "localPath": "/senior_image_catalog/04_Mobile_App_Engineering/10_healthcare_telemetry_tablet.jpg",
        "previewUrl": "/senior_image_catalog/04_Mobile_App_Engineering/10_healthcare_telemetry_tablet.jpg",
        "fullUrl": "/senior_image_catalog/04_Mobile_App_Engineering/10_healthcare_telemetry_tablet.jpg"
      }
    ]
  },
  {
    "id": "ai",
    "name": "Enterprise AI, ML & Intelligent Automation",
    "shortName": "AI & Automation",
    "focus": "Industrial Robotics, Computer Vision, Neural Hardware, Agentic Workflows",
    "description": "Autonomous industrial robotic arms, real-world machine vision labs, AI silicon accelerators, and multi-agent systems.",
    "folder": "05_Enterprise_AI_and_Robotics",
    "items": [
      {
        "id": "ai-1",
        "rank": 1,
        "title": "Autonomous Industrial Robotics Arm",
        "angleDescription": "Precision robotic arm executing sub-millimeter factory automation.",
        "photoId": "PEXELS-8438918",
        "localPath": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/01_autonomous_industrial_robotics_a.jpg",
        "previewUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/01_autonomous_industrial_robotics_a.jpg",
        "fullUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/01_autonomous_industrial_robotics_a.jpg"
      },
      {
        "id": "ai-2",
        "rank": 2,
        "title": "AI Machine Vision Inspection Lab",
        "angleDescription": "Research engineer tuning automated visual inspection and computer vision models.",
        "photoId": "PEXELS-8438922",
        "localPath": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/02_ai_machine_vision_inspection_lab.jpg",
        "previewUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/02_ai_machine_vision_inspection_lab.jpg",
        "fullUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/02_ai_machine_vision_inspection_lab.jpg"
      },
      {
        "id": "ai-3",
        "rank": 3,
        "title": "Neural Network Silicon Microarchitecture",
        "angleDescription": "Glowing mathematical neural nodes visualizing deep learning inference.",
        "photoId": "PEXELS-2599244",
        "localPath": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/03_neural_network_silicon_microarch.jpg",
        "previewUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/03_neural_network_silicon_microarch.jpg",
        "fullUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/03_neural_network_silicon_microarch.jpg"
      },
      {
        "id": "ai-4",
        "rank": 4,
        "title": "Synthetic Intelligence Core Processor",
        "angleDescription": "High-throughput NPU accelerator board running private enterprise LLMs.",
        "photoId": "PEXELS-8386440",
        "localPath": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/04_synthetic_intelligence_core_proc.jpg",
        "previewUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/04_synthetic_intelligence_core_proc.jpg",
        "fullUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/04_synthetic_intelligence_core_proc.jpg"
      },
      {
        "id": "ai-5",
        "rank": 5,
        "title": "Autonomous Workflow Robotic Station",
        "angleDescription": "Synchronized robotic workcell executing high-precision assembly.",
        "photoId": "PEXELS-8386434",
        "localPath": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/05_autonomous_workflow_robotic_stat.jpg",
        "previewUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/05_autonomous_workflow_robotic_stat.jpg",
        "fullUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/05_autonomous_workflow_robotic_stat.jpg"
      },
      {
        "id": "ai-6",
        "rank": 6,
        "title": "Humanoid Autonomous Agent Prototype",
        "angleDescription": "Modern intelligent assistance hardware interacting with human workspace.",
        "photoId": "PEXELS-8566472",
        "localPath": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/06_humanoid_autonomous_agent_protot.jpg",
        "previewUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/06_humanoid_autonomous_agent_protot.jpg",
        "fullUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/06_humanoid_autonomous_agent_protot.jpg"
      },
      {
        "id": "ai-7",
        "rank": 7,
        "title": "Predictive 3D CAD Diagnostics",
        "angleDescription": "Interactive model with machine learning automated defect diagnostics.",
        "photoId": "PEXELS-3825586",
        "localPath": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/07_predictive_3d_cad_diagnostics.jpg",
        "previewUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/07_predictive_3d_cad_diagnostics.jpg",
        "fullUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/07_predictive_3d_cad_diagnostics.jpg"
      },
      {
        "id": "ai-8",
        "rank": 8,
        "title": "AI Strategy & Data Governance Board",
        "angleDescription": "Senior data science team aligning enterprise RAG and data governance.",
        "photoId": "PEXELS-3825581",
        "localPath": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/08_ai_strategy_and_data_governance_.jpg",
        "previewUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/08_ai_strategy_and_data_governance_.jpg",
        "fullUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/08_ai_strategy_and_data_governance_.jpg"
      },
      {
        "id": "ai-9",
        "rank": 9,
        "title": "Autonomous Document Intelligence Flow",
        "angleDescription": "Real-time intelligent routing eliminating manual business document entry.",
        "photoId": "PEXELS-3913025",
        "localPath": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/09_autonomous_document_intelligence.jpg",
        "previewUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/09_autonomous_document_intelligence.jpg",
        "fullUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/09_autonomous_document_intelligence.jpg"
      },
      {
        "id": "ai-10",
        "rank": 10,
        "title": "Air-Gapped Private Model Enclosure",
        "angleDescription": "Secure model infrastructure guaranteeing zero proprietary training data leaks.",
        "photoId": "PEXELS-3912981",
        "localPath": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/10_air-gapped_private_model_enclosu.jpg",
        "previewUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/10_air-gapped_private_model_enclosu.jpg",
        "fullUrl": "/senior_image_catalog/05_Enterprise_AI_and_Robotics/10_air-gapped_private_model_enclosu.jpg"
      }
    ]
  },
  {
    "id": "ecommerce",
    "name": "Enterprise eCommerce & Retail Tech",
    "shortName": "eCommerce Tech",
    "focus": "Luxury Storefronts, Contactless Payments, Automated Logistics & POS",
    "description": "High-conversion flagship boutique retail, sub-second edge checkout, high-bay automated warehouses, and multi-currency POS.",
    "folder": "06_eCommerce_and_Retail",
    "items": [
      {
        "id": "ecommerce-1",
        "rank": 1,
        "title": "Flagship Digital Retail Experience",
        "angleDescription": "Modern boutique storefront representing high-converting luxury commerce.",
        "photoId": "PEXELS-135620",
        "localPath": "/senior_image_catalog/06_eCommerce_and_Retail/01_flagship_digital_retail_experien.jpg",
        "previewUrl": "/senior_image_catalog/06_eCommerce_and_Retail/01_flagship_digital_retail_experien.jpg",
        "fullUrl": "/senior_image_catalog/06_eCommerce_and_Retail/01_flagship_digital_retail_experien.jpg"
      },
      {
        "id": "ecommerce-2",
        "rank": 2,
        "title": "Sub-Second Contactless Payment POS",
        "angleDescription": "Instant contactless consumer payment flow during high-volume retail hours.",
        "photoId": "PEXELS-298863",
        "localPath": "/senior_image_catalog/06_eCommerce_and_Retail/02_sub-second_contactless_payment_p.jpg",
        "previewUrl": "/senior_image_catalog/06_eCommerce_and_Retail/02_sub-second_contactless_payment_p.jpg",
        "fullUrl": "/senior_image_catalog/06_eCommerce_and_Retail/02_sub-second_contactless_payment_p.jpg"
      },
      {
        "id": "ecommerce-3",
        "rank": 3,
        "title": "Omnichannel Smart Terminal Gateway",
        "angleDescription": "Connected payment gateway integrating seamlessly into enterprise ERP.",
        "photoId": "PEXELS-298864",
        "localPath": "/senior_image_catalog/06_eCommerce_and_Retail/03_omnichannel_smart_terminal_gatew.jpg",
        "previewUrl": "/senior_image_catalog/06_eCommerce_and_Retail/03_omnichannel_smart_terminal_gatew.jpg",
        "fullUrl": "/senior_image_catalog/06_eCommerce_and_Retail/03_omnichannel_smart_terminal_gatew.jpg"
      },
      {
        "id": "ecommerce-4",
        "rank": 4,
        "title": "Automated RFID Logistics Facility",
        "angleDescription": "High-bay automated logistics facility managing real-time RFID inventory.",
        "photoId": "PEXELS-4482900",
        "localPath": "/senior_image_catalog/06_eCommerce_and_Retail/04_automated_rfid_logistics_facilit.jpg",
        "previewUrl": "/senior_image_catalog/06_eCommerce_and_Retail/04_automated_rfid_logistics_facilit.jpg",
        "fullUrl": "/senior_image_catalog/06_eCommerce_and_Retail/04_automated_rfid_logistics_facilit.jpg"
      },
      {
        "id": "ecommerce-5",
        "rank": 5,
        "title": "Minimalist Haute Couture Showcase",
        "angleDescription": "Architectural retail showcase for premium luxury fashion brands.",
        "photoId": "PEXELS-1884581",
        "localPath": "/senior_image_catalog/06_eCommerce_and_Retail/05_minimalist_haute_couture_showcas.jpg",
        "previewUrl": "/senior_image_catalog/06_eCommerce_and_Retail/05_minimalist_haute_couture_showcas.jpg",
        "fullUrl": "/senior_image_catalog/06_eCommerce_and_Retail/05_minimalist_haute_couture_showcas.jpg"
      },
      {
        "id": "ecommerce-6",
        "rank": 6,
        "title": "Zero-Downtime E-Commerce Cutover",
        "angleDescription": "Enterprise commerce team managing database cutover with zero lost orders.",
        "photoId": "PEXELS-230544",
        "localPath": "/senior_image_catalog/06_eCommerce_and_Retail/06_zero-downtime_e-commerce_cutover.jpg",
        "previewUrl": "/senior_image_catalog/06_eCommerce_and_Retail/06_zero-downtime_e-commerce_cutover.jpg",
        "fullUrl": "/senior_image_catalog/06_eCommerce_and_Retail/06_zero-downtime_e-commerce_cutover.jpg"
      },
      {
        "id": "ecommerce-7",
        "rank": 7,
        "title": "Global Multi-Currency POS Checkout",
        "angleDescription": "Streamlined localized checkout eliminating international cart abandonment.",
        "photoId": "PEXELS-3965545",
        "localPath": "/senior_image_catalog/06_eCommerce_and_Retail/07_global_multi-currency_pos_checko.jpg",
        "previewUrl": "/senior_image_catalog/06_eCommerce_and_Retail/07_global_multi-currency_pos_checko.jpg",
        "fullUrl": "/senior_image_catalog/06_eCommerce_and_Retail/07_global_multi-currency_pos_checko.jpg"
      },
      {
        "id": "ecommerce-8",
        "rank": 8,
        "title": "High-Speed Barcode Sorting Belt",
        "angleDescription": "Automated package sorting with sub-second tracking sync to customer portal.",
        "photoId": "PEXELS-4481259",
        "localPath": "/senior_image_catalog/06_eCommerce_and_Retail/08_high-speed_barcode_sorting_belt.jpg",
        "previewUrl": "/senior_image_catalog/06_eCommerce_and_Retail/08_high-speed_barcode_sorting_belt.jpg",
        "fullUrl": "/senior_image_catalog/06_eCommerce_and_Retail/08_high-speed_barcode_sorting_belt.jpg"
      },
      {
        "id": "ecommerce-9",
        "rank": 9,
        "title": "Peak Flash-Sale Concurrency Handling",
        "angleDescription": "Architecture hardened against flash-sale traffic spikes and viral surges.",
        "photoId": "PEXELS-5632402",
        "localPath": "/senior_image_catalog/06_eCommerce_and_Retail/09_peak_flash-sale_concurrency_hand.jpg",
        "previewUrl": "/senior_image_catalog/06_eCommerce_and_Retail/09_peak_flash-sale_concurrency_hand.jpg",
        "fullUrl": "/senior_image_catalog/06_eCommerce_and_Retail/09_peak_flash-sale_concurrency_hand.jpg"
      },
      {
        "id": "ecommerce-10",
        "rank": 10,
        "title": "Commerce Conversion Funnel Telemetry",
        "angleDescription": "Granular funnel analytics attributing revenue directly to edge checkout speed.",
        "photoId": "PEXELS-5632386",
        "localPath": "/senior_image_catalog/06_eCommerce_and_Retail/10_commerce_conversion_funnel_telem.jpg",
        "previewUrl": "/senior_image_catalog/06_eCommerce_and_Retail/10_commerce_conversion_funnel_telem.jpg",
        "fullUrl": "/senior_image_catalog/06_eCommerce_and_Retail/10_commerce_conversion_funnel_telem.jpg"
      }
    ]
  },
  {
    "id": "data",
    "name": "Data Intelligence, BI & Telemetry",
    "shortName": "Data & Telemetry",
    "focus": "Multivariate Dashboards, Candlestick Latency, Demand Forecasting",
    "description": "High-density executive telemetry monitors, event stream processing, and boardroom data briefings.",
    "folder": "07_Data_Analytics_and_BI",
    "items": [
      {
        "id": "data-1",
        "rank": 1,
        "title": "Financial BI Telemetry Hub",
        "angleDescription": "Real-time executive performance dashboard with multivariate trendlines.",
        "photoId": "PEXELS-590045",
        "localPath": "/senior_image_catalog/07_Data_Analytics_and_BI/01_financial_bi_telemetry_hub.jpg",
        "previewUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/01_financial_bi_telemetry_hub.jpg",
        "fullUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/01_financial_bi_telemetry_hub.jpg"
      },
      {
        "id": "data-2",
        "rank": 2,
        "title": "High-Density KPI Scorecard Wall",
        "angleDescription": "Multi-metric telemetry board tracking customer lifetime value and cohort health.",
        "photoId": "PEXELS-590016",
        "localPath": "/senior_image_catalog/07_Data_Analytics_and_BI/02_high-density_kpi_scorecard_wall.jpg",
        "previewUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/02_high-density_kpi_scorecard_wall.jpg",
        "fullUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/02_high-density_kpi_scorecard_wall.jpg"
      },
      {
        "id": "data-3",
        "rank": 3,
        "title": "Real-Time Telemetry Event Stream",
        "angleDescription": "Streaming clickstream telemetry monitor processing 100k+ events/sec.",
        "photoId": "PEXELS-186461",
        "localPath": "/senior_image_catalog/07_Data_Analytics_and_BI/03_real-time_telemetry_event_stream.jpg",
        "previewUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/03_real-time_telemetry_event_stream.jpg",
        "fullUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/03_real-time_telemetry_event_stream.jpg"
      },
      {
        "id": "data-4",
        "rank": 4,
        "title": "Market Depth Candlestick Telemetry",
        "angleDescription": "High-frequency financial metrics with sub-second latency visualization.",
        "photoId": "PEXELS-187041",
        "localPath": "/senior_image_catalog/07_Data_Analytics_and_BI/04_market_depth_candlestick_telemet.jpg",
        "previewUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/04_market_depth_candlestick_telemet.jpg",
        "fullUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/04_market_depth_candlestick_telemet.jpg"
      },
      {
        "id": "data-5",
        "rank": 5,
        "title": "Mobile Executive BI Reporting Tablet",
        "angleDescription": "Executive reviewing revenue attribution models on tablet during transit.",
        "photoId": "PEXELS-7947707",
        "localPath": "/senior_image_catalog/07_Data_Analytics_and_BI/05_mobile_executive_bi_reporting_ta.jpg",
        "previewUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/05_mobile_executive_bi_reporting_ta.jpg",
        "fullUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/05_mobile_executive_bi_reporting_ta.jpg"
      },
      {
        "id": "data-6",
        "rank": 6,
        "title": "Predictive Statistical Forecast Models",
        "angleDescription": "Statistical forecast models predicting inventory stockouts and customer churn.",
        "photoId": "PEXELS-7947712",
        "localPath": "/senior_image_catalog/07_Data_Analytics_and_BI/06_predictive_statistical_forecast_.jpg",
        "previewUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/06_predictive_statistical_forecast_.jpg",
        "fullUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/06_predictive_statistical_forecast_.jpg"
      },
      {
        "id": "data-7",
        "rank": 7,
        "title": "Encrypted Data Pipeline Governance",
        "angleDescription": "End-to-end data governance with GDPR and SOC-2 audit compliance.",
        "photoId": "PEXELS-7947721",
        "localPath": "/senior_image_catalog/07_Data_Analytics_and_BI/07_encrypted_data_pipeline_governan.jpg",
        "previewUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/07_encrypted_data_pipeline_governan.jpg",
        "fullUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/07_encrypted_data_pipeline_governan.jpg"
      },
      {
        "id": "data-8",
        "rank": 8,
        "title": "Boardroom Capital Allocation Briefing",
        "angleDescription": "Data insights presented directly to leadership for capital allocation decisions.",
        "photoId": "PEXELS-7947735",
        "localPath": "/senior_image_catalog/07_Data_Analytics_and_BI/08_boardroom_capital_allocation_bri.jpg",
        "previewUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/08_boardroom_capital_allocation_bri.jpg",
        "fullUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/08_boardroom_capital_allocation_bri.jpg"
      },
      {
        "id": "data-9",
        "rank": 9,
        "title": "Edge Telemetry Sensor Ingestion Grid",
        "angleDescription": "Hardware IoT telemetry ingested into ClickHouse with deterministic queries.",
        "photoId": "PEXELS-7947743",
        "localPath": "/senior_image_catalog/07_Data_Analytics_and_BI/09_edge_telemetry_sensor_ingestion_.jpg",
        "previewUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/09_edge_telemetry_sensor_ingestion_.jpg",
        "fullUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/09_edge_telemetry_sensor_ingestion_.jpg"
      },
      {
        "id": "data-10",
        "rank": 10,
        "title": "Datacenter Load Balancing Telemetry",
        "angleDescription": "Real-time server rack telemetry ensuring 99.999% availability during peaks.",
        "photoId": "PEXELS-7947750",
        "localPath": "/senior_image_catalog/07_Data_Analytics_and_BI/10_datacenter_load_balancing_teleme.jpg",
        "previewUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/10_datacenter_load_balancing_teleme.jpg",
        "fullUrl": "/senior_image_catalog/07_Data_Analytics_and_BI/10_datacenter_load_balancing_teleme.jpg"
      }
    ]
  },
  {
    "id": "ux",
    "name": "UX/UI Design Systems & CoUI\u2122 Standard",
    "shortName": "UX/UI Design",
    "focus": "Design Tokens, Figma Component Foundries, 60fps Micro-Motions",
    "description": "Minimalist Figma tokens, user journey sprint boards, responsive cross-platform specs, and WCAG contrast fidelity.",
    "folder": "08_UX_UI_Design_Systems",
    "items": [
      {
        "id": "ux-1",
        "rank": 1,
        "title": "Design Studio UI Wireframing",
        "angleDescription": "Senior product designer crafting clean, accessible component wireframes.",
        "photoId": "PEXELS-1181396",
        "localPath": "/senior_image_catalog/08_UX_UI_Design_Systems/01_design_studio_ui_wireframing.jpg",
        "previewUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/01_design_studio_ui_wireframing.jpg",
        "fullUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/01_design_studio_ui_wireframing.jpg"
      },
      {
        "id": "ux-2",
        "rank": 2,
        "title": "CoUI\u2122 Token Foundry & Style Guide",
        "angleDescription": "Design tokens, responsive layout rules, and component libraries in Figma.",
        "photoId": "PEXELS-196645",
        "localPath": "/senior_image_catalog/08_UX_UI_Design_Systems/02_coui_token_foundry_and_style_gu.jpg",
        "previewUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/02_coui_token_foundry_and_style_gu.jpg",
        "fullUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/02_coui_token_foundry_and_style_gu.jpg"
      },
      {
        "id": "ux-3",
        "rank": 3,
        "title": "Minimalist Design Palette Harmonizer",
        "angleDescription": "Curated harmonious color palette reducing cognitive load and visual noise.",
        "photoId": "PEXELS-1779487",
        "localPath": "/senior_image_catalog/08_UX_UI_Design_Systems/03_minimalist_design_palette_harmon.jpg",
        "previewUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/03_minimalist_design_palette_harmon.jpg",
        "fullUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/03_minimalist_design_palette_harmon.jpg"
      },
      {
        "id": "ux-4",
        "rank": 4,
        "title": "I3D Journey Sprint Workshop Board",
        "angleDescription": "Collaborative design workshop investigating user journeys and drop-off points.",
        "photoId": "PEXELS-326503",
        "localPath": "/senior_image_catalog/08_UX_UI_Design_Systems/04_i3d_journey_sprint_workshop_boar.jpg",
        "previewUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/04_i3d_journey_sprint_workshop_boar.jpg",
        "fullUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/04_i3d_journey_sprint_workshop_boar.jpg"
      },
      {
        "id": "ux-5",
        "rank": 5,
        "title": "Design Director Quality Audit",
        "angleDescription": "Executive design leadership auditing pixel-perfect developer handoff fidelity.",
        "photoId": "PEXELS-196655",
        "localPath": "/senior_image_catalog/08_UX_UI_Design_Systems/05_design_director_quality_audit.jpg",
        "previewUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/05_design_director_quality_audit.jpg",
        "fullUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/05_design_director_quality_audit.jpg"
      },
      {
        "id": "ux-6",
        "rank": 6,
        "title": "Responsive Cross-Platform Proportions",
        "angleDescription": "Fluid UI components maintaining identical proportion across web & mobile.",
        "photoId": "PEXELS-326502",
        "localPath": "/senior_image_catalog/08_UX_UI_Design_Systems/06_responsive_cross-platform_propor.jpg",
        "previewUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/06_responsive_cross-platform_propor.jpg",
        "fullUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/06_responsive_cross-platform_propor.jpg"
      },
      {
        "id": "ux-7",
        "rank": 7,
        "title": "Typography & Hierarchy Standard Spec",
        "angleDescription": "Crisp architectural typography hierarchy engineered for instant legibility.",
        "photoId": "PEXELS-196659",
        "localPath": "/senior_image_catalog/08_UX_UI_Design_Systems/07_typography_and_hierarchy_standar.jpg",
        "previewUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/07_typography_and_hierarchy_standar.jpg",
        "fullUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/07_typography_and_hierarchy_standar.jpg"
      },
      {
        "id": "ux-8",
        "rank": 8,
        "title": "Fluid Motion Gradient & Lighting",
        "angleDescription": "Modern subtle gradients and lighting calibrated for high user engagement.",
        "photoId": "PEXELS-1779488",
        "localPath": "/senior_image_catalog/08_UX_UI_Design_Systems/08_fluid_motion_gradient_and_lighti.jpg",
        "previewUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/08_fluid_motion_gradient_and_lighti.jpg",
        "fullUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/08_fluid_motion_gradient_and_lighti.jpg"
      },
      {
        "id": "ux-9",
        "rank": 9,
        "title": "60fps Micro-Interaction Animation",
        "angleDescription": "Micro-interaction animations calibrated for responsive haptic feedback.",
        "photoId": "PEXELS-1779489",
        "localPath": "/senior_image_catalog/08_UX_UI_Design_Systems/09_60fps_micro-interaction_animatio.jpg",
        "previewUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/09_60fps_micro-interaction_animatio.jpg",
        "fullUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/09_60fps_micro-interaction_animatio.jpg"
      },
      {
        "id": "ux-10",
        "rank": 10,
        "title": "WCAG Contrast & Accessibility Spec",
        "angleDescription": "Testing contrast ratios and screen-reader navigable component structures.",
        "photoId": "PEXELS-1779490",
        "localPath": "/senior_image_catalog/08_UX_UI_Design_Systems/10_wcag_contrast_and_accessibility_.jpg",
        "previewUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/10_wcag_contrast_and_accessibility_.jpg",
        "fullUrl": "/senior_image_catalog/08_UX_UI_Design_Systems/10_wcag_contrast_and_accessibility_.jpg"
      }
    ]
  },
  {
    "id": "synergy",
    "name": "Agile Synergy & Pod Collaboration (The Trifecta)",
    "shortName": "Agile Synergy",
    "focus": "Cross-Functional Pods, Architecture Reviews, Sprint Standups",
    "description": "High-energy engineering workstations, sprint retrospectives, pair programming, and executive architectural alignment.",
    "folder": "09_Agile_Synergy_and_Pods",
    "items": [
      {
        "id": "synergy-1",
        "rank": 1,
        "title": "Cross-Functional Pod Synergy Desk",
        "angleDescription": "Engineers, AI researchers, and UX architects collaborating at modern workstation.",
        "photoId": "PEXELS-3184306",
        "localPath": "/senior_image_catalog/09_Agile_Synergy_and_Pods/01_cross-functional_pod_synergy_des.jpg",
        "previewUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/01_cross-functional_pod_synergy_des.jpg",
        "fullUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/01_cross-functional_pod_synergy_des.jpg"
      },
      {
        "id": "synergy-2",
        "rank": 2,
        "title": "Agile Scrum Standup Studio Room",
        "angleDescription": "Dynamic sprint standup in bright contemporary tech office with transparent progress.",
        "photoId": "PEXELS-3184311",
        "localPath": "/senior_image_catalog/09_Agile_Synergy_and_Pods/02_agile_scrum_standup_studio_room.jpg",
        "previewUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/02_agile_scrum_standup_studio_room.jpg",
        "fullUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/02_agile_scrum_standup_studio_room.jpg"
      },
      {
        "id": "synergy-3",
        "rank": 3,
        "title": "Principal Architecture Scalability Review",
        "angleDescription": "Senior tech leadership evaluating systems scalability in glass boardroom.",
        "photoId": "PEXELS-3184325",
        "localPath": "/senior_image_catalog/09_Agile_Synergy_and_Pods/03_principal_architecture_scalabili.jpg",
        "previewUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/03_principal_architecture_scalabili.jpg",
        "fullUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/03_principal_architecture_scalabili.jpg"
      },
      {
        "id": "synergy-4",
        "rank": 4,
        "title": "Enterprise Leadership Milestone Delivery",
        "angleDescription": "Technical co-founders and client executives finalizing milestone delivery.",
        "photoId": "PEXELS-3184357",
        "localPath": "/senior_image_catalog/09_Agile_Synergy_and_Pods/04_enterprise_leadership_milestone_.jpg",
        "previewUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/04_enterprise_leadership_milestone_.jpg",
        "fullUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/04_enterprise_leadership_milestone_.jpg"
      },
      {
        "id": "synergy-5",
        "rank": 5,
        "title": "Bi-Weekly Backlog Refinement Sprint",
        "angleDescription": "Sprint planning focusing strictly on high-ROI commercial features.",
        "photoId": "PEXELS-3184361",
        "localPath": "/senior_image_catalog/09_Agile_Synergy_and_Pods/05_bi-weekly_backlog_refinement_spr.jpg",
        "previewUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/05_bi-weekly_backlog_refinement_spr.jpg",
        "fullUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/05_bi-weekly_backlog_refinement_spr.jpg"
      },
      {
        "id": "synergy-6",
        "rank": 6,
        "title": "Chief Technology Officer Direction",
        "angleDescription": "Chief Technology Officer leading architectural alignment with authority.",
        "photoId": "PEXELS-3184394",
        "localPath": "/senior_image_catalog/09_Agile_Synergy_and_Pods/06_chief_technology_officer_directi.jpg",
        "previewUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/06_chief_technology_officer_directi.jpg",
        "fullUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/06_chief_technology_officer_directi.jpg"
      },
      {
        "id": "synergy-7",
        "rank": 7,
        "title": "Continuous Improvement Retrospective",
        "angleDescription": "Continuous improvement pod identifying latency optimizations and code quality.",
        "photoId": "PEXELS-3184418",
        "localPath": "/senior_image_catalog/09_Agile_Synergy_and_Pods/07_continuous_improvement_retrospec.jpg",
        "previewUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/07_continuous_improvement_retrospec.jpg",
        "fullUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/07_continuous_improvement_retrospec.jpg"
      },
      {
        "id": "synergy-8",
        "rank": 8,
        "title": "Kanban Zero-Debt Flow Alignment",
        "angleDescription": "Physical and digital Kanban workflow tracking zero-debt feature increments.",
        "photoId": "PEXELS-3184423",
        "localPath": "/senior_image_catalog/09_Agile_Synergy_and_Pods/08_kanban_zero-debt_flow_alignment.jpg",
        "previewUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/08_kanban_zero-debt_flow_alignment.jpg",
        "fullUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/08_kanban_zero-debt_flow_alignment.jpg"
      },
      {
        "id": "synergy-9",
        "rank": 9,
        "title": "Pair Programming Dual Review Pod",
        "angleDescription": "Senior developers executing dual-review continuous integration.",
        "photoId": "PEXELS-3184432",
        "localPath": "/senior_image_catalog/09_Agile_Synergy_and_Pods/09_pair_programming_dual_review_pod.jpg",
        "previewUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/09_pair_programming_dual_review_pod.jpg",
        "fullUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/09_pair_programming_dual_review_pod.jpg"
      },
      {
        "id": "synergy-10",
        "rank": 10,
        "title": "Living Technology Creative Loft",
        "angleDescription": "High-energy engineering workspace building Living Technology products.",
        "photoId": "PEXELS-3184435",
        "localPath": "/senior_image_catalog/09_Agile_Synergy_and_Pods/10_living_technology_creative_loft.jpg",
        "previewUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/10_living_technology_creative_loft.jpg",
        "fullUrl": "/senior_image_catalog/09_Agile_Synergy_and_Pods/10_living_technology_creative_loft.jpg"
      }
    ]
  },
  {
    "id": "fintech",
    "name": "FinTech, Banking Rails & Global Payments",
    "shortName": "FinTech & Banking",
    "focus": "Wall Street Liquidity, Contactless Card Terminals, Ledger Compliance",
    "description": "High-frequency algorithmic trading desks, real-time ticker exchanges, institutional cryptographic defense, and audited financial ledgers.",
    "folder": "10_FinTech_and_Banking",
    "items": [
      {
        "id": "fintech-1",
        "rank": 1,
        "title": "Wall Street Algorithmic Trading Rig",
        "angleDescription": "High-frequency multi-screen financial analytics and liquidity depth telemetry.",
        "photoId": "PEXELS-6801874",
        "localPath": "/senior_image_catalog/10_FinTech_and_Banking/01_wall_street_algorithmic_trading_.jpg",
        "previewUrl": "/senior_image_catalog/10_FinTech_and_Banking/01_wall_street_algorithmic_trading_.jpg",
        "fullUrl": "/senior_image_catalog/10_FinTech_and_Banking/01_wall_street_algorithmic_trading_.jpg"
      },
      {
        "id": "fintech-2",
        "rank": 2,
        "title": "Real-Time Transactional Exchange Ticker",
        "angleDescription": "Real-time transactional ledger tracking billions in daily cross-border flow.",
        "photoId": "PEXELS-6801872",
        "localPath": "/senior_image_catalog/10_FinTech_and_Banking/02_real-time_transactional_exchange.jpg",
        "previewUrl": "/senior_image_catalog/10_FinTech_and_Banking/02_real-time_transactional_exchange.jpg",
        "fullUrl": "/senior_image_catalog/10_FinTech_and_Banking/02_real-time_transactional_exchange.jpg"
      },
      {
        "id": "fintech-3",
        "rank": 3,
        "title": "Global Banking Remittance Dashboard",
        "angleDescription": "Executive banking portal displaying instantaneous remittance settlement.",
        "photoId": "PEXELS-6801648",
        "localPath": "/senior_image_catalog/10_FinTech_and_Banking/03_global_banking_remittance_dashbo.jpg",
        "previewUrl": "/senior_image_catalog/10_FinTech_and_Banking/03_global_banking_remittance_dashbo.jpg",
        "fullUrl": "/senior_image_catalog/10_FinTech_and_Banking/03_global_banking_remittance_dashbo.jpg"
      },
      {
        "id": "fintech-4",
        "rank": 4,
        "title": "PCI-DSS Level 1 Contactless Terminal",
        "angleDescription": "Tokenized card terminal with sub-40ms authorization.",
        "photoId": "PEXELS-6801651",
        "localPath": "/senior_image_catalog/10_FinTech_and_Banking/04_pci-dss_level_1_contactless_term.jpg",
        "previewUrl": "/senior_image_catalog/10_FinTech_and_Banking/04_pci-dss_level_1_contactless_term.jpg",
        "fullUrl": "/senior_image_catalog/10_FinTech_and_Banking/04_pci-dss_level_1_contactless_term.jpg"
      },
      {
        "id": "fintech-5",
        "rank": 5,
        "title": "Bank-Grade AES-256 Cryptographic Core",
        "angleDescription": "End-to-end encryption securing institutional financial transactions.",
        "photoId": "PEXELS-6801653",
        "localPath": "/senior_image_catalog/10_FinTech_and_Banking/05_bank-grade_aes-256_cryptographic.svg",
        "previewUrl": "/senior_image_catalog/10_FinTech_and_Banking/05_bank-grade_aes-256_cryptographic.svg",
        "fullUrl": "/senior_image_catalog/10_FinTech_and_Banking/05_bank-grade_aes-256_cryptographic.svg"
      },
      {
        "id": "fintech-6",
        "rank": 6,
        "title": "Digital Mobile Wallet Orchestration",
        "angleDescription": "Consumer payment orchestration app with instantaneous zero-loss ledger sync.",
        "photoId": "PEXELS-6801655",
        "localPath": "/senior_image_catalog/10_FinTech_and_Banking/06_digital_mobile_wallet_orchestrat.svg",
        "previewUrl": "/senior_image_catalog/10_FinTech_and_Banking/06_digital_mobile_wallet_orchestrat.svg",
        "fullUrl": "/senior_image_catalog/10_FinTech_and_Banking/06_digital_mobile_wallet_orchestrat.svg"
      },
      {
        "id": "fintech-7",
        "rank": 7,
        "title": "Automated FX Liquidity Exchange",
        "angleDescription": "Automated foreign exchange rate matching across global currency corridors.",
        "photoId": "PEXELS-6801657",
        "localPath": "/senior_image_catalog/10_FinTech_and_Banking/07_automated_fx_liquidity_exchange.svg",
        "previewUrl": "/senior_image_catalog/10_FinTech_and_Banking/07_automated_fx_liquidity_exchange.svg",
        "fullUrl": "/senior_image_catalog/10_FinTech_and_Banking/07_automated_fx_liquidity_exchange.svg"
      },
      {
        "id": "fintech-8",
        "rank": 8,
        "title": "FinTech Regulatory & Audit Briefing",
        "angleDescription": "Senior financial architecture lead presenting compliance and audit metrics.",
        "photoId": "PEXELS-6801659",
        "localPath": "/senior_image_catalog/10_FinTech_and_Banking/08_fintech_regulatory_and_audit_bri.svg",
        "previewUrl": "/senior_image_catalog/10_FinTech_and_Banking/08_fintech_regulatory_and_audit_bri.svg",
        "fullUrl": "/senior_image_catalog/10_FinTech_and_Banking/08_fintech_regulatory_and_audit_bri.svg"
      },
      {
        "id": "fintech-9",
        "rank": 9,
        "title": "Cross-Border Anycast Remittance Mesh",
        "angleDescription": "Anycast edge infrastructure routing remittance across 120+ global nodes.",
        "photoId": "PEXELS-6801662",
        "localPath": "/senior_image_catalog/10_FinTech_and_Banking/09_cross-border_anycast_remittance_.svg",
        "previewUrl": "/senior_image_catalog/10_FinTech_and_Banking/09_cross-border_anycast_remittance_.svg",
        "fullUrl": "/senior_image_catalog/10_FinTech_and_Banking/09_cross-border_anycast_remittance_.svg"
      },
      {
        "id": "fintech-10",
        "rank": 10,
        "title": "Double-Spend Prevention Ledger",
        "angleDescription": "Event-sourcing ledger preventing double-spend anomalies in high-throughput banking.",
        "photoId": "PEXELS-6801664",
        "localPath": "/senior_image_catalog/10_FinTech_and_Banking/10_double-spend_prevention_ledger.svg",
        "previewUrl": "/senior_image_catalog/10_FinTech_and_Banking/10_double-spend_prevention_ledger.svg",
        "fullUrl": "/senior_image_catalog/10_FinTech_and_Banking/10_double-spend_prevention_ledger.svg"
      }
    ]
  },
  {
    "id": "cybersecurity",
    "name": "Cybersecurity, Zero-Trust & SOC Operations",
    "shortName": "Cybersecurity",
    "focus": "SOC War Rooms, Encrypted Hardware, Threat Intelligence & Firewall Audits",
    "description": "Security Operations Center telemetry walls, intrusion detection streams, encrypted biometric hardware, and zero-trust protocol audits.",
    "folder": "11_Cybersecurity_and_SOC",
    "items": [
      {
        "id": "cybersecurity-1",
        "rank": 1,
        "title": "Enterprise SOC Operations Center",
        "angleDescription": "High-tech dark security operations room monitoring global threat telemetry.",
        "photoId": "PEXELS-5380642",
        "localPath": "/senior_image_catalog/11_Cybersecurity_and_SOC/01_enterprise_soc_operations_center.jpg",
        "previewUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/01_enterprise_soc_operations_center.jpg",
        "fullUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/01_enterprise_soc_operations_center.jpg"
      },
      {
        "id": "cybersecurity-2",
        "rank": 2,
        "title": "Binary Zero-Trust Perimeter Defense",
        "angleDescription": "Binary cyber defense matrix representing zero-trust perimeter enforcement.",
        "photoId": "PEXELS-5473955",
        "localPath": "/senior_image_catalog/11_Cybersecurity_and_SOC/02_binary_zero-trust_perimeter_defe.jpg",
        "previewUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/02_binary_zero-trust_perimeter_defe.jpg",
        "fullUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/02_binary_zero-trust_perimeter_defe.jpg"
      },
      {
        "id": "cybersecurity-3",
        "rank": 3,
        "title": "Biometric Access Control Gateway",
        "angleDescription": "High-security multi-factor authentication for mission-critical infrastructure.",
        "photoId": "PEXELS-5380650",
        "localPath": "/senior_image_catalog/11_Cybersecurity_and_SOC/03_biometric_access_control_gateway.jpg",
        "previewUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/03_biometric_access_control_gateway.jpg",
        "fullUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/03_biometric_access_control_gateway.jpg"
      },
      {
        "id": "cybersecurity-4",
        "rank": 4,
        "title": "Automated Penetration Testing Rig",
        "angleDescription": "Security engineer executing red-team automated vulnerability exploit tests.",
        "photoId": "PEXELS-5380655",
        "localPath": "/senior_image_catalog/11_Cybersecurity_and_SOC/04_automated_penetration_testing_ri.jpg",
        "previewUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/04_automated_penetration_testing_ri.jpg",
        "fullUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/04_automated_penetration_testing_ri.jpg"
      },
      {
        "id": "cybersecurity-5",
        "rank": 5,
        "title": "Hardware Security Module (HSM)",
        "angleDescription": "Silicon cryptographic token processor securing private SSL key infrastructure.",
        "photoId": "PEXELS-5380662",
        "localPath": "/senior_image_catalog/11_Cybersecurity_and_SOC/05_hardware_security_module_hsm.jpg",
        "previewUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/05_hardware_security_module_hsm.jpg",
        "fullUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/05_hardware_security_module_hsm.jpg"
      },
      {
        "id": "cybersecurity-6",
        "rank": 6,
        "title": "Real-Time DDoS Alert Dashboard",
        "angleDescription": "Alert dashboard detecting and neutralizing DDoS packet floods.",
        "photoId": "PEXELS-5380665",
        "localPath": "/senior_image_catalog/11_Cybersecurity_and_SOC/06_real-time_ddos_alert_dashboard.jpg",
        "previewUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/06_real-time_ddos_alert_dashboard.jpg",
        "fullUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/06_real-time_ddos_alert_dashboard.jpg"
      },
      {
        "id": "cybersecurity-7",
        "rank": 7,
        "title": "Zero-Day Incident Triage Pod",
        "angleDescription": "Cyber defense analysts triaging multi-vector zero-day vulnerabilities.",
        "photoId": "PEXELS-5380668",
        "localPath": "/senior_image_catalog/11_Cybersecurity_and_SOC/07_zero-day_incident_triage_pod.jpg",
        "previewUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/07_zero-day_incident_triage_pod.jpg",
        "fullUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/07_zero-day_incident_triage_pod.jpg"
      },
      {
        "id": "cybersecurity-8",
        "rank": 8,
        "title": "Tamper-Resistant Server Vault Enclosure",
        "angleDescription": "Enclosure for enterprise secret keys and database hashes.",
        "photoId": "PEXELS-5380671",
        "localPath": "/senior_image_catalog/11_Cybersecurity_and_SOC/08_tamper-resistant_server_vault_en.jpg",
        "previewUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/08_tamper-resistant_server_vault_en.jpg",
        "fullUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/08_tamper-resistant_server_vault_en.jpg"
      },
      {
        "id": "cybersecurity-9",
        "rank": 9,
        "title": "Encrypted Executive Messaging Terminal",
        "angleDescription": "Secure end-to-end messaging terminal safeguarding correspondence.",
        "photoId": "PEXELS-5380674",
        "localPath": "/senior_image_catalog/11_Cybersecurity_and_SOC/09_encrypted_executive_messaging_te.jpg",
        "previewUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/09_encrypted_executive_messaging_te.jpg",
        "fullUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/09_encrypted_executive_messaging_te.jpg"
      },
      {
        "id": "cybersecurity-10",
        "rank": 10,
        "title": "SOC-2 Type II Compliance Sign-Off",
        "angleDescription": "Chief Information Security Officer conducting formal audit alignment.",
        "photoId": "PEXELS-5380677",
        "localPath": "/senior_image_catalog/11_Cybersecurity_and_SOC/10_soc-2_type_ii_compliance_sign-of.jpg",
        "previewUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/10_soc-2_type_ii_compliance_sign-of.jpg",
        "fullUrl": "/senior_image_catalog/11_Cybersecurity_and_SOC/10_soc-2_type_ii_compliance_sign-of.jpg"
      }
    ]
  },
  {
    "id": "devops",
    "name": "DevOps, CI/CD & Kubernetes Cloud Engineering",
    "shortName": "DevOps & SRE",
    "focus": "Automated Pipelines, Kubernetes Clusters, GitOps & Telemetry Alerts",
    "description": "Continuous deployment pipelines, auto-scaling Kubernetes nodes, Prometheus telemetry alert desks, and infrastructure-as-code.",
    "folder": "12_DevOps_and_Kubernetes",
    "items": [
      {
        "id": "devops-1",
        "rank": 1,
        "title": "Continuous Delivery Pipeline Monitor",
        "angleDescription": "Deployment dashboard showing zero-downtime container releases.",
        "photoId": "PEXELS-1181298",
        "localPath": "/senior_image_catalog/12_DevOps_and_Kubernetes/01_continuous_delivery_pipeline_mon.jpg",
        "previewUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/01_continuous_delivery_pipeline_mon.jpg",
        "fullUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/01_continuous_delivery_pipeline_mon.jpg"
      },
      {
        "id": "devops-2",
        "rank": 2,
        "title": "Multi-Node Kubernetes Swarm Core",
        "angleDescription": "Cluster visualization orchestrating microservice workloads at scale.",
        "photoId": "PEXELS-1181316",
        "localPath": "/senior_image_catalog/12_DevOps_and_Kubernetes/02_multi-node_kubernetes_swarm_core.jpg",
        "previewUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/02_multi-node_kubernetes_swarm_core.jpg",
        "fullUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/02_multi-node_kubernetes_swarm_core.jpg"
      },
      {
        "id": "devops-3",
        "rank": 3,
        "title": "Site Reliability Engineering Command",
        "angleDescription": "SRE engineer resolving high-concurrency traffic bottleneck in staging cluster.",
        "photoId": "PEXELS-1181359",
        "localPath": "/senior_image_catalog/12_DevOps_and_Kubernetes/03_site_reliability_engineering_com.jpg",
        "previewUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/03_site_reliability_engineering_com.jpg",
        "fullUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/03_site_reliability_engineering_com.jpg"
      },
      {
        "id": "devops-4",
        "rank": 4,
        "title": "Declarative Infrastructure as Code",
        "angleDescription": "Terraform and Ansible manifests provisioning cloud resources in seconds.",
        "photoId": "PEXELS-1181371",
        "localPath": "/senior_image_catalog/12_DevOps_and_Kubernetes/04_declarative_infrastructure_as_co.jpg",
        "previewUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/04_declarative_infrastructure_as_co.jpg",
        "fullUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/04_declarative_infrastructure_as_co.jpg"
      },
      {
        "id": "devops-5",
        "rank": 5,
        "title": "OpenTelemetry Distributed Span Tracer",
        "angleDescription": "Sub-second packet inspection tracing microservice spans.",
        "photoId": "PEXELS-1181377",
        "localPath": "/senior_image_catalog/12_DevOps_and_Kubernetes/05_opentelemetry_distributed_span_t.jpg",
        "previewUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/05_opentelemetry_distributed_span_t.jpg",
        "fullUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/05_opentelemetry_distributed_span_t.jpg"
      },
      {
        "id": "devops-6",
        "rank": 6,
        "title": "Chaos Engineering Self-Healing Pod",
        "angleDescription": "Simulated node outage testing self-healing failover without traffic loss.",
        "photoId": "PEXELS-1181406",
        "localPath": "/senior_image_catalog/12_DevOps_and_Kubernetes/06_chaos_engineering_self-healing_p.jpg",
        "previewUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/06_chaos_engineering_self-healing_p.jpg",
        "fullUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/06_chaos_engineering_self-healing_p.jpg"
      },
      {
        "id": "devops-7",
        "rank": 7,
        "title": "Live Production Cutover War Room",
        "angleDescription": "Cross-functional engineering war room managing live high-concurrency cutovers.",
        "photoId": "PEXELS-1181469",
        "localPath": "/senior_image_catalog/12_DevOps_and_Kubernetes/07_live_production_cutover_war_room.jpg",
        "previewUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/07_live_production_cutover_war_room.jpg",
        "fullUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/07_live_production_cutover_war_room.jpg"
      },
      {
        "id": "devops-8",
        "rank": 8,
        "title": "High-Speed Anycast Packet Switch",
        "angleDescription": "Hardware switches processing sub-5ms Anycast routing packets.",
        "photoId": "PEXELS-1181472",
        "localPath": "/senior_image_catalog/12_DevOps_and_Kubernetes/08_high-speed_anycast_packet_switch.jpg",
        "previewUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/08_high-speed_anycast_packet_switch.jpg",
        "fullUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/08_high-speed_anycast_packet_switch.jpg"
      },
      {
        "id": "devops-9",
        "rank": 9,
        "title": "Signed Alpine Docker Image Registry",
        "angleDescription": "Minimal Linux images compiled with zero CVEs and signed with Cosign.",
        "photoId": "PEXELS-1181673",
        "localPath": "/senior_image_catalog/12_DevOps_and_Kubernetes/09_signed_alpine_docker_image_regis.jpg",
        "previewUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/09_signed_alpine_docker_image_regis.jpg",
        "fullUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/09_signed_alpine_docker_image_regis.jpg"
      },
      {
        "id": "devops-10",
        "rank": 10,
        "title": "Elastic Auto-Scaling Compute Swarm",
        "angleDescription": "Dynamically allocating compute capacity to handle 10x traffic bursts.",
        "photoId": "PEXELS-1181677",
        "localPath": "/senior_image_catalog/12_DevOps_and_Kubernetes/10_elastic_auto-scaling_compute_swa.jpg",
        "previewUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/10_elastic_auto-scaling_compute_swa.jpg",
        "fullUrl": "/senior_image_catalog/12_DevOps_and_Kubernetes/10_elastic_auto-scaling_compute_swa.jpg"
      }
    ]
  },
  {
    "id": "iot",
    "name": "Industrial IoT, Embedded Systems & Smart Edge",
    "shortName": "IoT & Smart Edge",
    "focus": "Microcontroller Boards, Sensor Arrays, Edge Compute & Telemetry Nodes",
    "description": "Embedded Linux microcontrollers, industrial telemetry sensors, smart factory robotics, and ultra-low-power edge nodes.",
    "folder": "13_Industrial_IoT_and_Hardware",
    "items": [
      {
        "id": "iot-1",
        "rank": 1,
        "title": "Industrial Telemetry Sensor Gateway",
        "angleDescription": "Precision printed circuit board equipped with real-time telemetry sensors.",
        "photoId": "PEXELS-256381",
        "localPath": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/01_industrial_telemetry_sensor_gate.jpg",
        "previewUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/01_industrial_telemetry_sensor_gate.jpg",
        "fullUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/01_industrial_telemetry_sensor_gate.jpg"
      },
      {
        "id": "iot-2",
        "rank": 2,
        "title": "Synchronized Robotic Factory Floor",
        "angleDescription": "Assembly line robotics operating with millisecond deterministic timing.",
        "photoId": "PEXELS-3913021",
        "localPath": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/02_synchronized_robotic_factory_flo.jpg",
        "previewUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/02_synchronized_robotic_factory_flo.jpg",
        "fullUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/02_synchronized_robotic_factory_flo.jpg"
      },
      {
        "id": "iot-3",
        "rank": 3,
        "title": "ARM Cortex Microcontroller Board",
        "angleDescription": "Close-up of ARM Cortex microcontroller running real-time RTOS firmware.",
        "photoId": "PEXELS-3912992",
        "localPath": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/03_arm_cortex_microcontroller_board.jpg",
        "previewUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/03_arm_cortex_microcontroller_board.jpg",
        "fullUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/03_arm_cortex_microcontroller_board.jpg"
      },
      {
        "id": "iot-4",
        "rank": 4,
        "title": "Smart Edge Oscilloscope Testing Lab",
        "angleDescription": "Hardware engineer testing high-frequency oscilloscope signals in lab.",
        "photoId": "PEXELS-3912985",
        "localPath": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/04_smart_edge_oscilloscope_testing_.svg",
        "previewUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/04_smart_edge_oscilloscope_testing_.svg",
        "fullUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/04_smart_edge_oscilloscope_testing_.svg"
      },
      {
        "id": "iot-5",
        "rank": 5,
        "title": "Connected Smart Factory Automation",
        "angleDescription": "Manufacturing plant with connected PLC devices reporting to telemetry.",
        "photoId": "PEXELS-3912953",
        "localPath": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/05_connected_smart_factory_automati.jpg",
        "previewUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/05_connected_smart_factory_automati.jpg",
        "fullUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/05_connected_smart_factory_automati.jpg"
      },
      {
        "id": "iot-6",
        "rank": 6,
        "title": "Long-Range Low-Power Telemetry Node",
        "angleDescription": "Field sensor communicating environmental telemetry over 15km ranges.",
        "photoId": "PEXELS-3912948",
        "localPath": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/06_long-range_low-power_telemetry_n.jpg",
        "previewUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/06_long-range_low-power_telemetry_n.jpg",
        "fullUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/06_long-range_low-power_telemetry_n.jpg"
      },
      {
        "id": "iot-7",
        "rank": 7,
        "title": "Power Substation Smart Grid Monitor",
        "angleDescription": "High-voltage power substation monitoring real-time grid balance.",
        "photoId": "PEXELS-3912940",
        "localPath": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/07_power_substation_smart_grid_moni.jpg",
        "previewUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/07_power_substation_smart_grid_moni.jpg",
        "fullUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/07_power_substation_smart_grid_moni.jpg"
      },
      {
        "id": "iot-8",
        "rank": 8,
        "title": "Connected GPS Fleet Tracker Hardware",
        "angleDescription": "OBD-II telematics device streaming vehicular diagnostics over cellular.",
        "photoId": "PEXELS-3912935",
        "localPath": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/08_connected_gps_fleet_tracker_hard.svg",
        "previewUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/08_connected_gps_fleet_tracker_hard.svg",
        "fullUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/08_connected_gps_fleet_tracker_hard.svg"
      },
      {
        "id": "iot-9",
        "rank": 9,
        "title": "Ultra-Dense Silicon Wafer Foundry",
        "angleDescription": "Silicon wafer fabrication facility manufacturing ultra-dense microchips.",
        "photoId": "PEXELS-3912920",
        "localPath": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/09_ultra-dense_silicon_wafer_foundr.svg",
        "previewUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/09_ultra-dense_silicon_wafer_foundr.svg",
        "fullUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/09_ultra-dense_silicon_wafer_foundr.svg"
      },
      {
        "id": "iot-10",
        "rank": 10,
        "title": "Edge AI Neural Acceleration Node",
        "angleDescription": "On-device neural network processing vision streams locally.",
        "photoId": "PEXELS-3912915",
        "localPath": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/10_edge_ai_neural_acceleration_node.svg",
        "previewUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/10_edge_ai_neural_acceleration_node.svg",
        "fullUrl": "/senior_image_catalog/13_Industrial_IoT_and_Hardware/10_edge_ai_neural_acceleration_node.svg"
      }
    ]
  },
  {
    "id": "consulting",
    "name": "Executive IT Strategy & Boardroom Consulting",
    "shortName": "IT Consulting",
    "focus": "C-Suite Strategy, Digital Roadmap, Capital Allocation & Enterprise Mergers",
    "description": "Executive strategy briefings, glass conference rooms, digital transformation roadmaps, and stakeholder alignment.",
    "folder": "14_Executive_Consulting_and_Boardroom",
    "items": [
      {
        "id": "consulting-1",
        "rank": 1,
        "title": "Prestige Enterprise Corporate Headquarters",
        "angleDescription": "Prestige corporate headquarters representing institutional stability.",
        "photoId": "PEXELS-534216",
        "localPath": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/01_prestige_enterprise_corporate_he.jpg",
        "previewUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/01_prestige_enterprise_corporate_he.jpg",
        "fullUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/01_prestige_enterprise_corporate_he.jpg"
      },
      {
        "id": "consulting-2",
        "rank": 2,
        "title": "Executive Boardroom Capital Strategy",
        "angleDescription": "Managing partners and enterprise stakeholders evaluating cloud investments.",
        "photoId": "PEXELS-2422290",
        "localPath": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/02_executive_boardroom_capital_stra.jpg",
        "previewUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/02_executive_boardroom_capital_stra.jpg",
        "fullUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/02_executive_boardroom_capital_stra.jpg"
      },
      {
        "id": "consulting-3",
        "rank": 3,
        "title": "Legacy Mainframe Modernization Workshop",
        "angleDescription": "Strategic roadmap presentation mapping legacy mainframe modernization.",
        "photoId": "PEXELS-2422280",
        "localPath": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/03_legacy_mainframe_modernization_w.jpg",
        "previewUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/03_legacy_mainframe_modernization_w.jpg",
        "fullUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/03_legacy_mainframe_modernization_w.jpg"
      },
      {
        "id": "consulting-4",
        "rank": 4,
        "title": "Chief Technology Officer Consultation Desk",
        "angleDescription": "Principal enterprise architect advising corporate leadership on AI adoption.",
        "photoId": "PEXELS-2422294",
        "localPath": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/04_chief_technology_officer_consult.jpg",
        "previewUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/04_chief_technology_officer_consult.jpg",
        "fullUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/04_chief_technology_officer_consult.jpg"
      },
      {
        "id": "consulting-5",
        "rank": 5,
        "title": "Enterprise Vendor SLA Alignment",
        "angleDescription": "Glass boardroom review session finalizing international vendor SLAs.",
        "photoId": "PEXELS-3184328",
        "localPath": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/05_enterprise_vendor_sla_alignment.jpg",
        "previewUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/05_enterprise_vendor_sla_alignment.jpg",
        "fullUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/05_enterprise_vendor_sla_alignment.jpg"
      },
      {
        "id": "consulting-6",
        "rank": 6,
        "title": "Strategic Multi-Million Tech Partnership",
        "angleDescription": "Executive leadership concluding global multi-million tech partnership.",
        "photoId": "PEXELS-3184339",
        "localPath": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/06_strategic_multi-million_tech_par.jpg",
        "previewUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/06_strategic_multi-million_tech_par.jpg",
        "fullUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/06_strategic_multi-million_tech_par.jpg"
      },
      {
        "id": "consulting-7",
        "rank": 7,
        "title": "Institutional Investor ROI Briefing",
        "angleDescription": "Detailed ROI and EBITDA metric analysis projected for investors.",
        "photoId": "PEXELS-3184364",
        "localPath": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/07_institutional_investor_roi_brief.jpg",
        "previewUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/07_institutional_investor_roi_brief.jpg",
        "fullUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/07_institutional_investor_roi_brief.jpg"
      },
      {
        "id": "consulting-8",
        "rank": 8,
        "title": "Strategy Discovery & Economics Audit",
        "angleDescription": "Strategy consultants conducting deep customer discovery and unit audits.",
        "photoId": "PEXELS-3184396",
        "localPath": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/08_strategy_discovery_and_economics.jpg",
        "previewUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/08_strategy_discovery_and_economics.jpg",
        "fullUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/08_strategy_discovery_and_economics.jpg"
      },
      {
        "id": "consulting-9",
        "rank": 9,
        "title": "Engineering Excellence Coaching Pod",
        "angleDescription": "Executive coaching session fostering engineering excellence.",
        "photoId": "PEXELS-3184419",
        "localPath": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/09_engineering_excellence_coaching_.jpg",
        "previewUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/09_engineering_excellence_coaching_.jpg",
        "fullUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/09_engineering_excellence_coaching_.jpg"
      },
      {
        "id": "consulting-10",
        "rank": 10,
        "title": "Formal Master Services Agreement Sign-Off",
        "angleDescription": "Legal and technical leads reviewing mutual NDAs, MSAs and SLAs.",
        "photoId": "PEXELS-3184424",
        "localPath": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/10_formal_master_services_agreement.jpg",
        "previewUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/10_formal_master_services_agreement.jpg",
        "fullUrl": "/senior_image_catalog/14_Executive_Consulting_and_Boardroom/10_formal_master_services_agreement.jpg"
      }
    ]
  },
  {
    "id": "healthcare",
    "name": "Healthcare IT, Telehealth & Medical Telemetry",
    "shortName": "Healthcare IT",
    "focus": "Clinical Tablet UIs, HIPAA Diagnostic Telemetry, Surgical Robotics",
    "description": "HIPAA-compliant doctor diagnostic tablets, precision robotic surgical tools, real-time patient monitoring telemetry, and medical cloud records.",
    "folder": "15_Healthcare_IT_and_Medical",
    "items": [
      {
        "id": "healthcare-1",
        "rank": 1,
        "title": "Physician Clinical Diagnostic Tablet",
        "angleDescription": "Doctor reviewing high-resolution patient telemetry and records on tablet.",
        "photoId": "PEXELS-6169033",
        "localPath": "/senior_image_catalog/15_Healthcare_IT_and_Medical/01_physician_clinical_diagnostic_ta.jpg",
        "previewUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/01_physician_clinical_diagnostic_ta.jpg",
        "fullUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/01_physician_clinical_diagnostic_ta.jpg"
      },
      {
        "id": "healthcare-2",
        "rank": 2,
        "title": "Clinical Laboratory Automation Station",
        "angleDescription": "Robotic lab automation running automated assays with barcode sample verification.",
        "photoId": "PEXELS-6169056",
        "localPath": "/senior_image_catalog/15_Healthcare_IT_and_Medical/02_clinical_laboratory_automation_s.jpg",
        "previewUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/02_clinical_laboratory_automation_s.jpg",
        "fullUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/02_clinical_laboratory_automation_s.jpg"
      },
      {
        "id": "healthcare-3",
        "rank": 3,
        "title": "Precision Robotic Surgery Suite",
        "angleDescription": "High-accuracy automated surgical robotics assisting minimally invasive operations.",
        "photoId": "PEXELS-4021775",
        "localPath": "/senior_image_catalog/15_Healthcare_IT_and_Medical/03_precision_robotic_surgery_suite.jpg",
        "previewUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/03_precision_robotic_surgery_suite.jpg",
        "fullUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/03_precision_robotic_surgery_suite.jpg"
      },
      {
        "id": "healthcare-4",
        "rank": 4,
        "title": "Real-Time ICU Cardiac Telemetry",
        "angleDescription": "Low-latency cardiac telemetry monitor tracking patient vitals with precision.",
        "photoId": "PEXELS-4021779",
        "localPath": "/senior_image_catalog/15_Healthcare_IT_and_Medical/04_real-time_icu_cardiac_telemetry.jpg",
        "previewUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/04_real-time_icu_cardiac_telemetry.jpg",
        "fullUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/04_real-time_icu_cardiac_telemetry.jpg"
      },
      {
        "id": "healthcare-5",
        "rank": 5,
        "title": "Biomedical Molecular Sequence Lab",
        "angleDescription": "Biomedical data scientist analyzing molecular sequences on workstation.",
        "photoId": "PEXELS-4021782",
        "localPath": "/senior_image_catalog/15_Healthcare_IT_and_Medical/05_biomedical_molecular_sequence_la.jpg",
        "previewUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/05_biomedical_molecular_sequence_la.jpg",
        "fullUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/05_biomedical_molecular_sequence_la.jpg"
      },
      {
        "id": "healthcare-6",
        "rank": 6,
        "title": "Telemedicine Specialist Terminal",
        "angleDescription": "Secure video consultation terminal linking rural patients to specialists.",
        "photoId": "PEXELS-4021786",
        "localPath": "/senior_image_catalog/15_Healthcare_IT_and_Medical/06_telemedicine_specialist_terminal.jpg",
        "previewUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/06_telemedicine_specialist_terminal.jpg",
        "fullUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/06_telemedicine_specialist_terminal.jpg"
      },
      {
        "id": "healthcare-7",
        "rank": 7,
        "title": "HIPAA Encrypted Patient Record Vault",
        "angleDescription": "Encrypted patient records vault guaranteeing strict privacy and auditability.",
        "photoId": "PEXELS-4021790",
        "localPath": "/senior_image_catalog/15_Healthcare_IT_and_Medical/07_hipaa_encrypted_patient_record_v.svg",
        "previewUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/07_hipaa_encrypted_patient_record_v.svg",
        "fullUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/07_hipaa_encrypted_patient_record_v.svg"
      },
      {
        "id": "healthcare-8",
        "rank": 8,
        "title": "Smart Digital Health Diagnostic UI",
        "angleDescription": "Modern clinical diagnosis platform analyzing laboratory results and telemetry.",
        "photoId": "PEXELS-4021795",
        "localPath": "/senior_image_catalog/15_Healthcare_IT_and_Medical/08_smart_digital_health_diagnostic_.jpg",
        "previewUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/08_smart_digital_health_diagnostic_.jpg",
        "fullUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/08_smart_digital_health_diagnostic_.jpg"
      },
      {
        "id": "healthcare-9",
        "rank": 9,
        "title": "Diagnostic 3D Volumetric Scan Workstation",
        "angleDescription": "Radiologist reviewing 3D anatomical volumetric scan on calibrated display.",
        "photoId": "PEXELS-4021801",
        "localPath": "/senior_image_catalog/15_Healthcare_IT_and_Medical/09_diagnostic_3d_volumetric_scan_wo.jpg",
        "previewUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/09_diagnostic_3d_volumetric_scan_wo.jpg",
        "fullUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/09_diagnostic_3d_volumetric_scan_wo.jpg"
      },
      {
        "id": "healthcare-10",
        "rank": 10,
        "title": "Hospital Emergency Dispatch Control",
        "angleDescription": "Command center orchestrating ambulance routing and emergency intake.",
        "photoId": "PEXELS-4021808",
        "localPath": "/senior_image_catalog/15_Healthcare_IT_and_Medical/10_hospital_emergency_dispatch_cont.jpg",
        "previewUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/10_hospital_emergency_dispatch_cont.jpg",
        "fullUrl": "/senior_image_catalog/15_Healthcare_IT_and_Medical/10_hospital_emergency_dispatch_cont.jpg"
      }
    ]
  },
  {
    "id": "supplychain",
    "name": "Smart Logistics, Warehousing & Supply Chain",
    "shortName": "Supply Chain IT",
    "focus": "Automated Guided Vehicles, RFID Inventory, Global Tracking & Freight",
    "description": "High-bay automated warehouses with AGVs, handheld RFID scanners, real-time container ship tracking, and ERP supply chain hubs.",
    "folder": "16_Supply_Chain_and_Logistics",
    "items": [
      {
        "id": "supplychain-1",
        "rank": 1,
        "title": "Automated High-Bay Distribution Hub",
        "angleDescription": "Massive automated logistics fulfillment facility managing thousands of pallet bins.",
        "photoId": "PEXELS-4481260",
        "localPath": "/senior_image_catalog/16_Supply_Chain_and_Logistics/01_automated_high-bay_distribution_.jpg",
        "previewUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/01_automated_high-bay_distribution_.jpg",
        "fullUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/01_automated_high-bay_distribution_.jpg"
      },
      {
        "id": "supplychain-2",
        "rank": 2,
        "title": "Handheld RFID Stock Scanner",
        "angleDescription": "Warehouse associate scanning barcode with instantaneous ERP stock sync.",
        "photoId": "PEXELS-4481258",
        "localPath": "/senior_image_catalog/16_Supply_Chain_and_Logistics/02_handheld_rfid_stock_scanner.jpg",
        "previewUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/02_handheld_rfid_stock_scanner.jpg",
        "fullUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/02_handheld_rfid_stock_scanner.jpg"
      },
      {
        "id": "supplychain-3",
        "rank": 3,
        "title": "Intermodal Container Vessel Operations",
        "angleDescription": "Global container vessel operations moving billions in physical goods.",
        "photoId": "PEXELS-262353",
        "localPath": "/senior_image_catalog/16_Supply_Chain_and_Logistics/03_intermodal_container_vessel_oper.jpg",
        "previewUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/03_intermodal_container_vessel_oper.jpg",
        "fullUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/03_intermodal_container_vessel_oper.jpg"
      },
      {
        "id": "supplychain-4",
        "rank": 4,
        "title": "Autonomous Mobile Transport AGVs",
        "angleDescription": "Autonomous mobile transport robots navigating warehouse floors without collisions.",
        "photoId": "PEXELS-4481262",
        "localPath": "/senior_image_catalog/16_Supply_Chain_and_Logistics/04_autonomous_mobile_transport_agvs.jpg",
        "previewUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/04_autonomous_mobile_transport_agvs.jpg",
        "fullUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/04_autonomous_mobile_transport_agvs.jpg"
      },
      {
        "id": "supplychain-5",
        "rank": 5,
        "title": "Global Freight Tracking Telemetry Desk",
        "angleDescription": "Global dispatch desk tracking container delivery status across ocean, air, rail.",
        "photoId": "PEXELS-4481265",
        "localPath": "/senior_image_catalog/16_Supply_Chain_and_Logistics/05_global_freight_tracking_telemetr.jpg",
        "previewUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/05_global_freight_tracking_telemetr.jpg",
        "fullUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/05_global_freight_tracking_telemetr.jpg"
      },
      {
        "id": "supplychain-6",
        "rank": 6,
        "title": "High-Speed Conveyor Diverter Sorter",
        "angleDescription": "Conveyor diverter routing packages to delivery bays at 10 items/sec.",
        "photoId": "PEXELS-4481270",
        "localPath": "/senior_image_catalog/16_Supply_Chain_and_Logistics/06_high-speed_conveyor_diverter_sor.svg",
        "previewUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/06_high-speed_conveyor_diverter_sor.svg",
        "fullUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/06_high-speed_conveyor_diverter_sor.svg"
      },
      {
        "id": "supplychain-7",
        "rank": 7,
        "title": "Cold-Chain Temperature Monitored Transport",
        "angleDescription": "Temperature-monitored refrigerated transport for sensitive vaccines.",
        "photoId": "PEXELS-4481275",
        "localPath": "/senior_image_catalog/16_Supply_Chain_and_Logistics/07_cold-chain_temperature_monitored.jpg",
        "previewUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/07_cold-chain_temperature_monitored.jpg",
        "fullUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/07_cold-chain_temperature_monitored.jpg"
      },
      {
        "id": "supplychain-8",
        "rank": 8,
        "title": "Intercontinental Air Cargo Loading",
        "angleDescription": "High-capacity wide-body freighter loading priority enterprise hardware.",
        "photoId": "PEXELS-4481280",
        "localPath": "/senior_image_catalog/16_Supply_Chain_and_Logistics/08_intercontinental_air_cargo_loadi.jpg",
        "previewUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/08_intercontinental_air_cargo_loadi.jpg",
        "fullUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/08_intercontinental_air_cargo_loadi.jpg"
      },
      {
        "id": "supplychain-9",
        "rank": 9,
        "title": "AI Optimized Urban Delivery Route",
        "angleDescription": "Autonomous electric delivery van navigating urban delivery corridors.",
        "photoId": "PEXELS-4481285",
        "localPath": "/senior_image_catalog/16_Supply_Chain_and_Logistics/09_ai_optimized_urban_delivery_rout.jpg",
        "previewUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/09_ai_optimized_urban_delivery_rout.jpg",
        "fullUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/09_ai_optimized_urban_delivery_rout.jpg"
      },
      {
        "id": "supplychain-10",
        "rank": 10,
        "title": "Enterprise Supplier Scorecard Matrix",
        "angleDescription": "Comprehensive supplier scorecard evaluating supplier delivery fidelity.",
        "photoId": "PEXELS-4481290",
        "localPath": "/senior_image_catalog/16_Supply_Chain_and_Logistics/10_enterprise_supplier_scorecard_ma.jpg",
        "previewUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/10_enterprise_supplier_scorecard_ma.jpg",
        "fullUrl": "/senior_image_catalog/16_Supply_Chain_and_Logistics/10_enterprise_supplier_scorecard_ma.jpg"
      }
    ]
  },
  {
    "id": "immersive",
    "name": "3D WebGL, Immersive Media & Spatial Computing",
    "shortName": "3D & Immersive",
    "focus": "Interactive 3D CAD, WebGL Visualizers, Virtual Showrooms & AR/VR",
    "description": "Real-time 60fps 3D product visualizers in browser, spatial headsets, CAD industrial modeling, and interactive WebGL shaders.",
    "folder": "17_3D_WebGL_and_Virtual",
    "items": [
      {
        "id": "immersive-1",
        "rank": 1,
        "title": "Interactive 3D CAD Mechanical Assembly",
        "angleDescription": "Senior design engineer refining complex mechanical assemblies in 3D CAD software.",
        "photoId": "PEXELS-3861964",
        "localPath": "/senior_image_catalog/17_3D_WebGL_and_Virtual/01_interactive_3d_cad_mechanical_as.jpg",
        "previewUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/01_interactive_3d_cad_mechanical_as.jpg",
        "fullUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/01_interactive_3d_cad_mechanical_as.jpg"
      },
      {
        "id": "immersive-2",
        "rank": 2,
        "title": "Virtual Reality Full-Scale Digital Twin",
        "angleDescription": "Architect evaluating full-scale digital twin building model inside VR headset.",
        "photoId": "PEXELS-3861967",
        "localPath": "/senior_image_catalog/17_3D_WebGL_and_Virtual/02_virtual_reality_full-scale_digit.jpg",
        "previewUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/02_virtual_reality_full-scale_digit.jpg",
        "fullUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/02_virtual_reality_full-scale_digit.jpg"
      },
      {
        "id": "immersive-3",
        "rank": 3,
        "title": "Photorealistic Real-Time WebGL Visualizer",
        "angleDescription": "Photorealistic real-time ray-traced product model rendering in browser.",
        "photoId": "PEXELS-3861970",
        "localPath": "/senior_image_catalog/17_3D_WebGL_and_Virtual/03_photorealistic_real-time_webgl_v.jpg",
        "previewUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/03_photorealistic_real-time_webgl_v.jpg",
        "fullUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/03_photorealistic_real-time_webgl_v.jpg"
      },
      {
        "id": "immersive-4",
        "rank": 4,
        "title": "Augmented Reality Blueprint Overlay",
        "angleDescription": "Tablet overlaying real-time architectural blueprints directly onto physical room.",
        "photoId": "PEXELS-3861975",
        "localPath": "/senior_image_catalog/17_3D_WebGL_and_Virtual/04_augmented_reality_blueprint_over.jpg",
        "previewUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/04_augmented_reality_blueprint_over.jpg",
        "fullUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/04_augmented_reality_blueprint_over.jpg"
      },
      {
        "id": "immersive-5",
        "rank": 5,
        "title": "Millimeter Hand-Gesture Spatial Optical Rig",
        "angleDescription": "Next-generation optical headset tracking hand gestures with millimeter accuracy.",
        "photoId": "PEXELS-3861980",
        "localPath": "/senior_image_catalog/17_3D_WebGL_and_Virtual/05_millimeter_hand-gesture_spatial_.jpg",
        "previewUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/05_millimeter_hand-gesture_spatial_.jpg",
        "fullUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/05_millimeter_hand-gesture_spatial_.jpg"
      },
      {
        "id": "immersive-6",
        "rank": 6,
        "title": "Multi-GPU Ray-Tracing Hardware Cluster",
        "angleDescription": "Multi-GPU workstation calculating physical lighting bounces and caustics.",
        "photoId": "PEXELS-3861985",
        "localPath": "/senior_image_catalog/17_3D_WebGL_and_Virtual/06_multi-gpu_ray-tracing_hardware_c.jpg",
        "previewUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/06_multi-gpu_ray-tracing_hardware_c.jpg",
        "fullUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/06_multi-gpu_ray-tracing_hardware_c.jpg"
      },
      {
        "id": "immersive-7",
        "rank": 7,
        "title": "Touchscreen Interactive Configurator Table",
        "angleDescription": "Interactive touchscreen table allowing customers to configure custom yacht interiors.",
        "photoId": "PEXELS-3861990",
        "localPath": "/senior_image_catalog/17_3D_WebGL_and_Virtual/07_touchscreen_interactive_configur.jpg",
        "previewUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/07_touchscreen_interactive_configur.jpg",
        "fullUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/07_touchscreen_interactive_configur.jpg"
      },
      {
        "id": "immersive-8",
        "rank": 8,
        "title": "GLSL Procedural Particle Shader Logic",
        "angleDescription": "GLSL fragment shader code rendering procedural particle physics in real time.",
        "photoId": "PEXELS-3861995",
        "localPath": "/senior_image_catalog/17_3D_WebGL_and_Virtual/08_glsl_procedural_particle_shader_.jpg",
        "previewUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/08_glsl_procedural_particle_shader_.jpg",
        "fullUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/08_glsl_procedural_particle_shader_.jpg"
      },
      {
        "id": "immersive-9",
        "rank": 9,
        "title": "Multi-Camera Photogrammetry 3D Dome",
        "angleDescription": "Multi-camera photogrammetry dome reconstructing physical artifacts into 3D meshes.",
        "photoId": "PEXELS-3862000",
        "localPath": "/senior_image_catalog/17_3D_WebGL_and_Virtual/09_multi-camera_photogrammetry_3d_d.jpg",
        "previewUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/09_multi-camera_photogrammetry_3d_d.jpg",
        "fullUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/09_multi-camera_photogrammetry_3d_d.jpg"
      },
      {
        "id": "immersive-10",
        "rank": 10,
        "title": "Live 3D Factory Throughput Simulation",
        "angleDescription": "Live 3D telemetry visualization replicating real-world assembly line throughput.",
        "photoId": "PEXELS-3862005",
        "localPath": "/senior_image_catalog/17_3D_WebGL_and_Virtual/10_live_3d_factory_throughput_simul.jpg",
        "previewUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/10_live_3d_factory_throughput_simul.jpg",
        "fullUrl": "/senior_image_catalog/17_3D_WebGL_and_Virtual/10_live_3d_factory_throughput_simul.jpg"
      }
    ]
  },
  {
    "id": "qa",
    "name": "QA Automation, Performance & Chaos Engineering",
    "shortName": "QA & Testing",
    "focus": "Automated Test Matrix, Load Testing Bursts, Regression Test Desks",
    "description": "Headless browser test runners, automated API regression pipelines, peak load test surge simulators, and zero-defect QA certifications.",
    "folder": "18_QA_Testing_and_Automation",
    "items": [
      {
        "id": "qa-1",
        "rank": 1,
        "title": "Cross-Device Parallel Test Suite Rig",
        "angleDescription": "Cross-device testing rig running parallel Playwright regression suites.",
        "photoId": "PEXELS-1181297",
        "localPath": "/senior_image_catalog/18_QA_Testing_and_Automation/01_cross-device_parallel_test_suite.jpg",
        "previewUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/01_cross-device_parallel_test_suite.jpg",
        "fullUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/01_cross-device_parallel_test_suite.jpg"
      },
      {
        "id": "qa-2",
        "rank": 2,
        "title": "Distributed Concurrency Load Simulator",
        "angleDescription": "Simulating 500k concurrent users across 20 distributed JMeter worker nodes.",
        "photoId": "PEXELS-1181310",
        "localPath": "/senior_image_catalog/18_QA_Testing_and_Automation/02_distributed_concurrency_load_sim.jpg",
        "previewUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/02_distributed_concurrency_load_sim.jpg",
        "fullUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/02_distributed_concurrency_load_sim.jpg"
      },
      {
        "id": "qa-3",
        "rank": 3,
        "title": "Lead Quality Assurance Sign-Off Desk",
        "angleDescription": "Quality assurance lead validating WCAG accessibility and cross-browser fidelity.",
        "photoId": "PEXELS-1181358",
        "localPath": "/senior_image_catalog/18_QA_Testing_and_Automation/03_lead_quality_assurance_sign-off_.jpg",
        "previewUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/03_lead_quality_assurance_sign-off_.jpg",
        "fullUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/03_lead_quality_assurance_sign-off_.jpg"
      },
      {
        "id": "qa-4",
        "rank": 4,
        "title": "Physical Smartphone Farm Automated Testing",
        "angleDescription": "Rack of physical smartphones running continuous integration tests.",
        "photoId": "PEXELS-1181368",
        "localPath": "/senior_image_catalog/18_QA_Testing_and_Automation/04_physical_smartphone_farm_automat.jpg",
        "previewUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/04_physical_smartphone_farm_automat.jpg",
        "fullUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/04_physical_smartphone_farm_automat.jpg"
      },
      {
        "id": "qa-5",
        "rank": 5,
        "title": "Automated API Contract Verification",
        "angleDescription": "Postman automated contract verification guaranteeing backward compatibility.",
        "photoId": "PEXELS-1181375",
        "localPath": "/senior_image_catalog/18_QA_Testing_and_Automation/05_automated_api_contract_verificat.jpg",
        "previewUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/05_automated_api_contract_verificat.jpg",
        "fullUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/05_automated_api_contract_verificat.jpg"
      },
      {
        "id": "qa-6",
        "rank": 6,
        "title": "V8 CPU Flamegraph Garbage Collection",
        "angleDescription": "CPU flamegraph identifying microsecond garbage collection spikes in code.",
        "photoId": "PEXELS-1181395",
        "localPath": "/senior_image_catalog/18_QA_Testing_and_Automation/06_v8_cpu_flamegraph_garbage_collec.jpg",
        "previewUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/06_v8_cpu_flamegraph_garbage_collec.jpg",
        "fullUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/06_v8_cpu_flamegraph_garbage_collec.jpg"
      },
      {
        "id": "qa-7",
        "rank": 7,
        "title": "Production Edge-Case Defect Scrub Pod",
        "angleDescription": "Agile team resolving edge cases before enterprise production deployment cutoff.",
        "photoId": "PEXELS-1181404",
        "localPath": "/senior_image_catalog/18_QA_Testing_and_Automation/07_production_edge-case_defect_scru.jpg",
        "previewUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/07_production_edge-case_defect_scru.jpg",
        "fullUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/07_production_edge-case_defect_scru.jpg"
      },
      {
        "id": "qa-8",
        "rank": 8,
        "title": "Static Code Security Vulnerability Scan",
        "angleDescription": "Automated scan inspecting 2M lines of code for OWASP vulnerabilities.",
        "photoId": "PEXELS-1181468",
        "localPath": "/senior_image_catalog/18_QA_Testing_and_Automation/08_static_code_security_vulnerabili.jpg",
        "previewUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/08_static_code_security_vulnerabili.jpg",
        "fullUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/08_static_code_security_vulnerabili.jpg"
      },
      {
        "id": "qa-9",
        "rank": 9,
        "title": "Sub-Pixel Screenshot Regression Comparison",
        "angleDescription": "Automated Percy screenshot comparison flagging sub-pixel layout anomalies.",
        "photoId": "PEXELS-1181471",
        "localPath": "/senior_image_catalog/18_QA_Testing_and_Automation/09_sub-pixel_screenshot_regression_.jpg",
        "previewUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/09_sub-pixel_screenshot_regression_.jpg",
        "fullUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/09_sub-pixel_screenshot_regression_.jpg"
      },
      {
        "id": "qa-10",
        "rank": 10,
        "title": "Audited Zero-Defect Enterprise Sign-Off",
        "angleDescription": "Formal quality assurance sign-off delivering audited enterprise compliance.",
        "photoId": "PEXELS-1181672",
        "localPath": "/senior_image_catalog/18_QA_Testing_and_Automation/10_audited_zero-defect_enterprise_s.jpg",
        "previewUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/10_audited_zero-defect_enterprise_s.jpg",
        "fullUrl": "/senior_image_catalog/18_QA_Testing_and_Automation/10_audited_zero-defect_enterprise_s.jpg"
      }
    ]
  },
  {
    "id": "integration",
    "name": "Enterprise API Gateways & Middleware Integration",
    "shortName": "API & Middleware",
    "focus": "Kafka Event Streaming, GraphQL Federations, ERP Connectors & Webhooks",
    "description": "High-throughput Kafka event streaming clusters, federated GraphQL schemas, SAP/Salesforce ERP connectors, and sub-10ms API gateways.",
    "folder": "19_API_Gateways_and_Integration",
    "items": [
      {
        "id": "integration-1",
        "rank": 1,
        "title": "Kafka High-Throughput Event Broker",
        "angleDescription": "Kafka event broker network processing 250k messages per second without backlog.",
        "photoId": "PEXELS-1181355",
        "localPath": "/senior_image_catalog/19_API_Gateways_and_Integration/01_kafka_high-throughput_event_brok.jpg",
        "previewUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/01_kafka_high-throughput_event_brok.jpg",
        "fullUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/01_kafka_high-throughput_event_brok.jpg"
      },
      {
        "id": "integration-2",
        "rank": 2,
        "title": "Sub-10ms Envoy & Kong Gateway Proxy",
        "angleDescription": "Proxy cluster routing encrypted REST and gRPC calls across data centers.",
        "photoId": "PEXELS-1181357",
        "localPath": "/senior_image_catalog/19_API_Gateways_and_Integration/02_sub-10ms_envoy_and_kong_gateway_.jpg",
        "previewUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/02_sub-10ms_envoy_and_kong_gateway_.jpg",
        "fullUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/02_sub-10ms_envoy_and_kong_gateway_.jpg"
      },
      {
        "id": "integration-3",
        "rank": 3,
        "title": "Unified Federated GraphQL Schema Graph",
        "angleDescription": "Unified enterprise data graph combining 40 microservices into single endpoint.",
        "photoId": "PEXELS-1181360",
        "localPath": "/senior_image_catalog/19_API_Gateways_and_Integration/03_unified_federated_graphql_schema.jpg",
        "previewUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/03_unified_federated_graphql_schema.jpg",
        "fullUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/03_unified_federated_graphql_schema.jpg"
      },
      {
        "id": "integration-4",
        "rank": 4,
        "title": "Bi-Directional SAP & Salesforce Middleware",
        "angleDescription": "Bi-directional middleware keeping SAP, Salesforce, and custom database in sync.",
        "photoId": "PEXELS-1181362",
        "localPath": "/senior_image_catalog/19_API_Gateways_and_Integration/04_bi-directional_sap_and_salesforc.jpg",
        "previewUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/04_bi-directional_sap_and_salesforc.jpg",
        "fullUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/04_bi-directional_sap_and_salesforc.jpg"
      },
      {
        "id": "integration-5",
        "rank": 5,
        "title": "Dead-Letter Queue Webhook Recovery Router",
        "angleDescription": "Reliable message delivery with exponential backoff and recovery.",
        "photoId": "PEXELS-1181365",
        "localPath": "/senior_image_catalog/19_API_Gateways_and_Integration/05_dead-letter_queue_webhook_recove.jpg",
        "previewUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/05_dead-letter_queue_webhook_recove.jpg",
        "fullUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/05_dead-letter_queue_webhook_recove.jpg"
      },
      {
        "id": "integration-6",
        "rank": 6,
        "title": "Istio Service Mesh Telemetry Tracer",
        "angleDescription": "Istio service mesh telemetry visualizing real-time ingress latency and retry rates.",
        "photoId": "PEXELS-1181369",
        "localPath": "/senior_image_catalog/19_API_Gateways_and_Integration/06_istio_service_mesh_telemetry_tra.jpg",
        "previewUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/06_istio_service_mesh_telemetry_tra.jpg",
        "fullUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/06_istio_service_mesh_telemetry_tra.jpg"
      },
      {
        "id": "integration-7",
        "rank": 7,
        "title": "Federated Enterprise SAML / OAuth2 Login",
        "angleDescription": "SAML / OAuth2 federated single sign-on enabling seamless enterprise IAM login.",
        "photoId": "PEXELS-1181372",
        "localPath": "/senior_image_catalog/19_API_Gateways_and_Integration/07_federated_enterprise_saml__oaut.jpg",
        "previewUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/07_federated_enterprise_saml__oaut.jpg",
        "fullUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/07_federated_enterprise_saml__oaut.jpg"
      },
      {
        "id": "integration-8",
        "rank": 8,
        "title": "Core Fiber Optic Switch Interconnect",
        "angleDescription": "Fiber optic patch panel linking core switches with 100Gbps dual uplinks.",
        "photoId": "PEXELS-1181374",
        "localPath": "/senior_image_catalog/19_API_Gateways_and_Integration/08_core_fiber_optic_switch_intercon.svg",
        "previewUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/08_core_fiber_optic_switch_intercon.svg",
        "fullUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/08_core_fiber_optic_switch_intercon.svg"
      },
      {
        "id": "integration-9",
        "rank": 9,
        "title": "Enterprise Message Bus Whiteboard Session",
        "angleDescription": "Solutions architect whiteboarding enterprise message bus and data transformation.",
        "photoId": "PEXELS-1181378",
        "localPath": "/senior_image_catalog/19_API_Gateways_and_Integration/09_enterprise_message_bus_whiteboar.jpg",
        "previewUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/09_enterprise_message_bus_whiteboar.jpg",
        "fullUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/09_enterprise_message_bus_whiteboar.jpg"
      },
      {
        "id": "integration-10",
        "rank": 10,
        "title": "OpenAPI 3.1 Strict Schema Contract",
        "angleDescription": "OpenAPI 3.1 Swagger specification documenting strict input validation rules.",
        "photoId": "PEXELS-1181380",
        "localPath": "/senior_image_catalog/19_API_Gateways_and_Integration/10_openapi_3.1_strict_schema_contra.jpg",
        "previewUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/10_openapi_3.1_strict_schema_contra.jpg",
        "fullUrl": "/senior_image_catalog/19_API_Gateways_and_Integration/10_openapi_3.1_strict_schema_contra.jpg"
      }
    ]
  },
  {
    "id": "culture",
    "name": "Global Engineering Hubs & Workplace Culture",
    "shortName": "Global Hubs",
    "focus": "Tech Campus Architecture, Collaboration Lounges, Innovation Pods",
    "description": "Bright modern tech campuses, collaborative developer lofts, ergonomic workstations, and world-class engineering team environments.",
    "folder": "20_Global_IT_Workplace_Culture",
    "items": [
      {
        "id": "culture-1",
        "rank": 1,
        "title": "Silicon Valley Style Open Tech Campus",
        "angleDescription": "Open-concept technology campus featuring dynamic engineering pods and natural light.",
        "photoId": "PEXELS-1181397",
        "localPath": "/senior_image_catalog/20_Global_IT_Workplace_Culture/01_silicon_valley_style_open_tech_c.jpg",
        "previewUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/01_silicon_valley_style_open_tech_c.jpg",
        "fullUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/01_silicon_valley_style_open_tech_c.jpg"
      },
      {
        "id": "culture-2",
        "rank": 2,
        "title": "Cross-Functional Engineering Lounge",
        "angleDescription": "Cross-functional engineering team conducting sprint refinement in tech lounge.",
        "photoId": "PEXELS-1181400",
        "localPath": "/senior_image_catalog/20_Global_IT_Workplace_Culture/02_cross-functional_engineering_lou.jpg",
        "previewUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/02_cross-functional_engineering_lou.jpg",
        "fullUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/02_cross-functional_engineering_lou.jpg"
      },
      {
        "id": "culture-3",
        "rank": 3,
        "title": "Global Glass & Steel Engineering Tower",
        "angleDescription": "Sleek glass and steel corporate engineering headquarters representing global scale.",
        "photoId": "PEXELS-1181405",
        "localPath": "/senior_image_catalog/20_Global_IT_Workplace_Culture/03_global_glass_and_steel_engineeri.jpg",
        "previewUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/03_global_glass_and_steel_engineeri.jpg",
        "fullUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/03_global_glass_and_steel_engineeri.jpg"
      },
      {
        "id": "culture-4",
        "rank": 4,
        "title": "Ergonomic Sit-Stand Developer Workstation",
        "angleDescription": "Dual-monitor ergonomic workstations with sit-stand desks and mechanical keyboards.",
        "photoId": "PEXELS-1181409",
        "localPath": "/senior_image_catalog/20_Global_IT_Workplace_Culture/04_ergonomic_sit-stand_developer_wo.jpg",
        "previewUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/04_ergonomic_sit-stand_developer_wo.jpg",
        "fullUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/04_ergonomic_sit-stand_developer_wo.jpg"
      },
      {
        "id": "culture-5",
        "rank": 5,
        "title": "All-Hands Engineering Keynote Summit",
        "angleDescription": "Company all-hands engineering summit sharing roadmap vision and milestone wins.",
        "photoId": "PEXELS-1181412",
        "localPath": "/senior_image_catalog/20_Global_IT_Workplace_Culture/05_all-hands_engineering_keynote_su.jpg",
        "previewUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/05_all-hands_engineering_keynote_su.jpg",
        "fullUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/05_all-hands_engineering_keynote_su.jpg"
      },
      {
        "id": "culture-6",
        "rank": 6,
        "title": "Senior Developer Pair Programming Booth",
        "angleDescription": "Two senior developers collaborating side-by-side with shared high-resolution screen.",
        "photoId": "PEXELS-1181415",
        "localPath": "/senior_image_catalog/20_Global_IT_Workplace_Culture/06_senior_developer_pair_programmin.jpg",
        "previewUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/06_senior_developer_pair_programmin.jpg",
        "fullUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/06_senior_developer_pair_programmin.jpg"
      },
      {
        "id": "culture-7",
        "rank": 7,
        "title": "Glass-Walled Design & Architecture Studio",
        "angleDescription": "Glass-walled design and architecture thinking studio filled with brainstorm notes.",
        "photoId": "PEXELS-1181418",
        "localPath": "/senior_image_catalog/20_Global_IT_Workplace_Culture/07_glass-walled_design_and_architec.jpg",
        "previewUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/07_glass-walled_design_and_architec.jpg",
        "fullUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/07_glass-walled_design_and_architec.jpg"
      },
      {
        "id": "culture-8",
        "rank": 8,
        "title": "Skyline View Chief Architect Corner Office",
        "angleDescription": "Modern private corner office overlooking city skyline with active telemetry screens.",
        "photoId": "PEXELS-1181421",
        "localPath": "/senior_image_catalog/20_Global_IT_Workplace_Culture/08_skyline_view_chief_architect_cor.jpg",
        "previewUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/08_skyline_view_chief_architect_cor.jpg",
        "fullUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/08_skyline_view_chief_architect_cor.jpg"
      },
      {
        "id": "culture-9",
        "rank": 9,
        "title": "Zero-Downtime Release Cohort Celebration",
        "angleDescription": "Diverse engineering cohort celebrating successful zero-downtime enterprise release.",
        "photoId": "PEXELS-1181425",
        "localPath": "/senior_image_catalog/20_Global_IT_Workplace_Culture/09_zero-downtime_release_cohort_cel.jpg",
        "previewUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/09_zero-downtime_release_cohort_cel.jpg",
        "fullUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/09_zero-downtime_release_cohort_cel.jpg"
      },
      {
        "id": "culture-10",
        "rank": 10,
        "title": "Acoustic-Isolated Algorithmic Flow Booth",
        "angleDescription": "Acoustic-isolated individual work booth designed for intense algorithmic flow states.",
        "photoId": "PEXELS-1181430",
        "localPath": "/senior_image_catalog/20_Global_IT_Workplace_Culture/10_acoustic-isolated_algorithmic_fl.jpg",
        "previewUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/10_acoustic-isolated_algorithmic_fl.jpg",
        "fullUrl": "/senior_image_catalog/20_Global_IT_Workplace_Culture/10_acoustic-isolated_algorithmic_fl.jpg"
      }
    ]
  }
];
