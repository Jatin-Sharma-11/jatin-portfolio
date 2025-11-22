import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const personalInfo = {
    name: "Jatin Sharma",
    title: "MS(R) CSE Candidate | Data Scientist Engineer Intern",
    email: "jatinsaroch11@gmail.com",
    phone: "+91-7876325027",
    location: "Indore, India",
    about: "I am a Master of Science (Research) candidate in Computer Science and Engineering at IIT Indore, with a strong foundation in Data Science and Machine Learning. My experience spans from developing predictive models for structural health monitoring to building scalable cloud solutions. I am passionate about leveraging AI/ML to solve real-world problems.",
    social: [
        {
            name: "GitHub",
            icon: Github,
            url: "https://github.com/jatin-sharma-11",
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://linkedin.com/in/jatin-sharma-87ab75204", // Corrected from resume text
        },
        {
            name: "Email",
            icon: Mail,
            url: "mailto:jatinsaroch11@gmail.com",
        },
        {
            name: "Resume",
            icon: FileText,
            url: "/resume.pdf",
        },
    ],
};

export const education = [
    {
        institution: "Indian Institute of Technology, Indore",
        degree: "MS (Research) in Computer Science and Engineering",
        year: "2024 – 2026",
        grade: "CGPA: 9.92/10",
        logo: "/iiti-logo.png",
    },
    {
        institution: "University Institute of Technology, HPU, Shimla",
        degree: "B.Tech. in Computer Science and Engineering",
        year: "2020 – 2024",
        grade: "CGPA: 9.04/10",
        logo: "/hpu-logo.png",
    },
];

export const experience = [
    {
        company: "Encardio Rite",
        role: "Data Scientist Engineer Intern",
        period: "Sep 2025 – Current",
        type: "Hybrid",
        description: [
            "Engaged in exploratory data analysis (EDA), feature engineering, and statistical assessment for large-scale time series datasets.",
            "Developed, validated, and deployed predictive models for failure prediction and anomaly detection using classical and deep learning approaches.",
            "Implemented end-to-end automated ML workflows utilizing MLOps principles with MLflow.",
            "Built real-time model inference APIs and dashboards using FastAPI.",
        ],
        logo: "/encardio-logo.png",
    },
    {
        company: "Google Cloud Facilitator Program",
        role: "Trainee",
        period: "Apr 2021 – Sep 2021",
        type: "Remote",
        description: [
            "Completed intensive curriculum covering core GCP services (Compute Engine, Cloud Storage, BigQuery, AI/ML).",
            "Built scalable, secure cloud solutions involving machine learning workflows and data engineering.",
            "Successfully finished the '30 Days of Google Cloud' challenge.",
        ],
        logo: "/google-cloud-logo.png",
    },
];

export const projects = [
    {
        title: "Machine Learning Short Projects",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        period: "Ongoing",
        description: "A comprehensive collection of various machine learning projects, experiments, and implementations ranging from classical algorithms to deep learning applications.",
        link: "https://github.com/Jatin-Sharma-11/Machine-Learning-Short-Projects",
    },
    {
        title: "LMCache",
        tech: ["Python", "LLMs", "Caching", "Optimization"],
        period: "2024",
        description: "An efficient caching system designed for Large Language Models to improve inference speed and reduce computational costs.",
        link: "https://github.com/Jatin-Sharma-11/LMCache",
    },
    {
        title: "Chatify",
        tech: ["React.js", "Firebase", "Chakra UI"],
        period: "Oct 2023 – Feb 2024",
        description: "Built a full-stack real-time chat application with user authentication and message persistence using Firebase.",
        link: "https://github.com/Jatin-Sharma-11/Chatify",
    },
    {
        title: "Sentiment Analysis",
        tech: ["Python", "BERT", "RoBERTa", "TensorFlow"],
        period: "Sep 2024 – Dec 2024",
        description: "Multimodal sentiment classification system integrating textual and visual signals. Fine-tuned BERT and RoBERTa for ABSA and market sentiment.",
        link: "https://github.com/Jatin-Sharma-11/SentimentAnalysis",
    },
    {
        title: "Object Detection YOLO",
        tech: ["Python", "YOLOv5", "OpenCV", "Computer Vision"],
        period: "Jan 2025 – Feb 2025",
        description: "Real-time object detection and removal system using YOLOv5 with inpainting-based object removal and dynamic control features.",
        link: "https://github.com/Jatin-Sharma-11/Object-Dectection-yolo",
    },
    {
        title: "File Compressor V2",
        tech: ["C++", "Python", "LZW", "Huffman Coding"],
        period: "Dec 2023 – Apr 2024",
        description: "Hybrid file compression system combining LZW and Huffman Coding. Implemented core logic in C++ for high performance.",
        link: "https://github.com/Jatin-Sharma-11/file_compressor_v2",
    },
];

export const skills = {
    Programming: ["C/C++", "Python", "Java", "JavaScript", "SQL"],
    "Machine Learning": ["PyTorch", "TensorFlow", "RAG", "LangChain", "Generative AI", "Graph ML"],
    "Data Science": ["Time-Series Analysis", "Vector Databases", "Data Visualization", "MLflow"],
    "Web Development": ["Next.js", "React", "Firebase", "FastAPI", "Tailwind CSS"],
    "Core CS": ["Algorithms", "Data Structures", "DBMS", "Operating Systems", "Networks"],
};
