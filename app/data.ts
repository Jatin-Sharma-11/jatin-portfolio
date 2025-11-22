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

export const techIcons: Record<string, string> = {
    "Python": "https://skillicons.dev/icons?i=python",
    "Scikit-learn": "https://skillicons.dev/icons?i=sklearn",
    "Pandas": "https://skillicons.dev/icons?i=pandas",
    "Matplotlib": "https://skillicons.dev/icons?i=matlab", // Fallback or similar
    "LLMs": "https://skillicons.dev/icons?i=pytorch", // Generic AI
    "Caching": "https://skillicons.dev/icons?i=redis",
    "Optimization": "https://skillicons.dev/icons?i=c",
    "React.js": "https://skillicons.dev/icons?i=react",
    "Firebase": "https://skillicons.dev/icons?i=firebase",
    "Chakra UI": "https://skillicons.dev/icons?i=css", // Fallback
    "BERT": "https://skillicons.dev/icons?i=pytorch",
    "RoBERTa": "https://skillicons.dev/icons?i=pytorch",
    "TensorFlow": "https://skillicons.dev/icons?i=tensorflow",
    "YOLOv5": "https://skillicons.dev/icons?i=opencv",
    "OpenCV": "https://skillicons.dev/icons?i=opencv",
    "Computer Vision": "https://skillicons.dev/icons?i=opencv",
    "C++": "https://skillicons.dev/icons?i=cpp",
    "LZW": "https://skillicons.dev/icons?i=c",
    "Huffman Coding": "https://skillicons.dev/icons?i=c",
    "Next.js": "https://skillicons.dev/icons?i=nextjs",
    "Tailwind CSS": "https://skillicons.dev/icons?i=tailwind",
    "TypeScript": "https://skillicons.dev/icons?i=ts",
    "JavaScript": "https://skillicons.dev/icons?i=js",
    "HTML": "https://skillicons.dev/icons?i=html",
    "CSS": "https://skillicons.dev/icons?i=css",
    "Git": "https://skillicons.dev/icons?i=git",
    "GitHub": "https://skillicons.dev/icons?i=github",
    "Linux": "https://skillicons.dev/icons?i=linux",
    "Docker": "https://skillicons.dev/icons?i=docker",
    "AWS": "https://skillicons.dev/icons?i=aws",
    "GCP": "https://skillicons.dev/icons?i=gcp",
    "Azure": "https://skillicons.dev/icons?i=azure",
    "MongoDB": "https://skillicons.dev/icons?i=mongodb",
    "PostgreSQL": "https://skillicons.dev/icons?i=postgres",
    "Node.js": "https://skillicons.dev/icons?i=nodejs",
    "Express": "https://skillicons.dev/icons?i=express",
    "FastAPI": "https://skillicons.dev/icons?i=fastapi",
    "Flask": "https://skillicons.dev/icons?i=flask",
};

export const projects = [
    {
        title: "Machine Learning Short Projects",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        period: "Ongoing",
        description: "A comprehensive collection of various machine learning projects, experiments, and implementations ranging from classical algorithms to deep learning applications.",
        link: "https://github.com/Jatin-Sharma-11/Machine-Learning-Short-Projects",
        category: "Machine Learning"
    },
    {
        title: "LMCache",
        tech: ["Python", "LLMs", "Caching", "Optimization"],
        period: "2024",
        description: "An efficient caching system designed for Large Language Models to improve inference speed and reduce computational costs.",
        link: "https://github.com/Jatin-Sharma-11/LMCache",
        category: "AI/ML"
    },
    {
        title: "Chatify",
        tech: ["React.js", "Firebase", "Chakra UI"],
        period: "Oct 2023 – Feb 2024",
        description: "Built a full-stack real-time chat application with user authentication and message persistence using Firebase.",
        link: "https://github.com/Jatin-Sharma-11/Chatify",
        category: "Web Dev"
    },
    {
        title: "Sentiment Analysis",
        tech: ["Python", "BERT", "RoBERTa", "TensorFlow"],
        period: "Sep 2024 – Dec 2024",
        description: "Multimodal sentiment classification system integrating textual and visual signals. Fine-tuned BERT and RoBERTa for ABSA and market sentiment.",
        link: "https://github.com/Jatin-Sharma-11/SentimentAnalysis",
        category: "AI/ML"
    },
    {
        title: "Object Detection YOLO",
        tech: ["Python", "YOLOv5", "OpenCV", "Computer Vision"],
        period: "Jan 2025 – Feb 2025",
        description: "Real-time object detection and removal system using YOLOv5 with inpainting-based object removal and dynamic control features.",
        link: "https://github.com/Jatin-Sharma-11/Object-Dectection-yolo",
        category: "Computer Vision"
    },
    {
        title: "File Compressor V2",
        tech: ["C++", "Python", "LZW", "Huffman Coding"],
        period: "Dec 2023 – Apr 2024",
        description: "Hybrid file compression system combining LZW and Huffman Coding. Implemented core logic in C++ for high performance.",
        link: "https://github.com/Jatin-Sharma-11/file_compressor_v2",
        category: "Systems"
    },
    {
        title: "Movie Recommendation System",
        tech: ["Python", "Pandas", "Scikit-learn"],
        period: "2023",
        description: "Content-based movie recommendation system using cosine similarity and collaborative filtering techniques.",
        link: "https://github.com/Jatin-Sharma-11/Movie-Recommendation-System",
        category: "Machine Learning"
    },
    {
        title: "Face Recognition",
        tech: ["Python", "OpenCV", "Deep Learning"],
        period: "2023",
        description: "Facial recognition system capable of identifying individuals in real-time video streams.",
        link: "https://github.com/Jatin-Sharma-11/Face_Recognition",
        category: "Computer Vision"
    },
    {
        title: "Intro to GNNs",
        tech: ["Python", "PyTorch Geometric", "GNN"],
        period: "2024",
        description: "Coursework and implementations of Graph Neural Networks, exploring various architectures and applications.",
        link: "https://github.com/Jatin-Sharma-11/intro-to-gnns-course",
        category: "AI/ML"
    },
    {
        title: "Mem0",
        tech: ["Python", "Memory Management", "Systems"],
        period: "2024",
        description: "Experimental memory management system implementation.",
        link: "https://github.com/Jatin-Sharma-11/mem0",
        category: "Systems"
    },
    {
        title: "Blogger11",
        tech: ["Next.js", "React", "Tailwind CSS"],
        period: "2024",
        description: "A modern blogging platform built with Next.js, featuring markdown support and a clean UI.",
        link: "https://github.com/Jatin-Sharma-11/blogger11",
        category: "Web Dev"
    },
    {
        title: "MCP Servers",
        tech: ["TypeScript", "Node.js", "Protocol"],
        period: "2024",
        description: "Implementation of Model Context Protocol servers for enhancing AI agent capabilities.",
        link: "https://github.com/Jatin-Sharma-11/mcpservers",
        category: "AI/ML"
    },
    {
        title: "ML Blogs",
        tech: ["Markdown", "Jupyter", "Technical Writing"],
        period: "Ongoing",
        description: "A collection of technical blogs and tutorials explaining complex Machine Learning concepts.",
        link: "https://github.com/Jatin-Sharma-11/mlblogs",
        category: "Content"
    },
    {
        title: "Vichaar",
        tech: ["React", "Node.js", "Express"],
        period: "2023",
        description: "A social platform for sharing thoughts and ideas, fostering community interaction.",
        link: "https://github.com/Jatin-Sharma-11/vichaar",
        category: "Web Dev"
    },
    {
        title: "AI Chatbot",
        tech: ["Python", "NLP", "Transformers"],
        period: "2023",
        description: "Intelligent chatbot capable of understanding context and engaging in natural conversations.",
        link: "https://github.com/Jatin-Sharma-11/aichatbot",
        category: "AI/ML"
    },
    {
        title: "Superlink",
        tech: ["TypeScript", "React", "Utilities"],
        period: "2024",
        description: "A utility tool for managing and organizing important links and resources efficiently.",
        link: "https://github.com/Jatin-Sharma-11/superlink",
        category: "Web Dev"
    },
    {
        title: "DeepML",
        tech: ["Python", "Deep Learning", "Neural Networks"],
        period: "2024",
        description: "Deep dive implementations of advanced deep learning architectures and papers.",
        link: "https://github.com/Jatin-Sharma-11/DeepML",
        category: "AI/ML"
    },
    {
        title: "LeetCode Solutions",
        tech: ["C++", "Python", "Algorithms", "Data Structures"],
        period: "Ongoing",
        description: "Collection of optimized solutions for LeetCode problems, focusing on algorithmic efficiency.",
        link: "https://github.com/Jatin-Sharma-11/LeetCode",
        category: "DSA"
    },
    {
        title: "LLM Text Detection",
        tech: ["Python", "NLP", "Transformers", "Research"],
        period: "2024",
        description: "Research project on metric models for detecting text generated by Large Language Models.",
        link: "https://github.com/Jatin-Sharma-11/Metric-Models-for-Detection-of-LLM-Texts",
        category: "Research"
    },
    {
        title: "STPGNN",
        tech: ["Python", "GNN", "Spatio-Temporal"],
        period: "2024",
        description: "Spatio-Temporal Graph Neural Network implementation for time-series forecasting on graph data.",
        link: "https://github.com/Jatin-Sharma-11/STPGNN",
        category: "Research"
    }
];

export const skills = {
    Programming: ["C/C++", "Python", "Java", "JavaScript", "SQL"],
    "Machine Learning": ["PyTorch", "TensorFlow", "RAG", "LangChain", "Generative AI", "Graph ML"],
    "Data Science": ["Time-Series Analysis", "Vector Databases", "Data Visualization", "MLflow"],
    "Web Development": ["Next.js", "React", "Firebase", "FastAPI", "Tailwind CSS"],
    "Core CS": ["Algorithms", "Data Structures", "DBMS", "Operating Systems", "Networks"],
};
