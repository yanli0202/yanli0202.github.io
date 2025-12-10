---
permalink: /
title: "Yan Li (李岩)"
excerpt: "MSc student in Machine Learning at MBZUAI, focusing on causal representation learning and domain adaptation."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

# About me

Hello! I am **Yan Li**, currently an M.Sc. student in **Machine Learning** at the **Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)**, advised by **Prof. Kun Zhang**. I mainly work with Guangyi Chen and Yunlong Deng in MBZUAI Causality Group.  

From **July 2025 to December 2025**, I am a **visiting student** in the **Department of Philosophy at Carnegie Mellon University (CMU)**, working with **Prof. Peter Spirtes and Kun Zhang** and collaborating with the **CMU CLeaR Group**.

Previously, I obtained my **B.Eng. in Computer Science and Technology** from **Tsinghua University** in June 2024, where I worked at the **Research Institute of Human–Computer Interaction and Media Integration** with **Assoc. Prof. Chun Yu**, mainly on HCI and context-aware systems. 

My current research focuses on the mathematical and causal foundations of machine learning, especially how to build robust, interpretable models.

**Research interests**

- Causal representation learning
- Domain adaptation, domain generalization, and OOD robustness  
- Multimodal model
 
---

# News
- *2025.12* Attend NeurIPS 2025 in San Diego. I poster two paper in poster session.
Welcome to talk with me!
- *2025.9* — Our work **“CausalVerse: Benchmarking Causal Representation Learning with Configurable High-Fidelity Simulations”** is accepted to **NeurIPS 2025** as a **spotlight**.
- *2025.9* — Our work **“Towards Self-Refinement of Vision-Language Models”** is accepted to **NeurIPS 2025** as a **poster**.
- *2025.4* — Our work **“A General Representation-Based Approach to Multi-Source Domain Adaptation”** is presented at **ICML 2025** as a **poster**.
- *2025.07–2025.12* — Visiting student at **Carnegie Mellon University**, Department of Philosophy.
- *2024.10* — Started **M.Sc. in Machine Learning** at **MBZUAI**, advised by **Prof. Kun Zhang**.
- *2024.06* — Graduated from **Tsinghua University** with a **B.Eng. in Computer Science and Technology**.
- *2023.06–2023.07* — Research intern at **Mian Bi Intelligent Technology Co., Ltd.**, working on pre-training data preparation for large language models.
- *2022* — Won **Third Prize** in the **40th Challenge Cup of Tsinghua University**.
- *2020* — Awarded **Second-Class Scholarship for Freshmen of Tsinghua University**.

---

# Publications

(*Equal contribution is indicated by `*` after author names.*)

- **Should Bias Always be Eliminated? A Principled Framework to Use Data Bias for OOD Generation.**  
  **Yan Li**, Yunlong Deng, Zijian Li, Zeyu Tang, Anpeng Wu, Kun Zhang, Guangyi Chen.  
  *Under review.*  

- **Selection, Reflection and Self-Refinement: Revisit Reasoning Tasks via a Causal Lens.**  
  Yunlong Deng, Boyang Sun, **Yan Li**, Zeyu Tang, Lingjing Kong, Kun Zhang, Guangyi Chen.  
  *Under review.*  

- **CausalVerse: Benchmarking Causal Representation Learning with Configurable High-Fidelity Simulations.**  
  Guangyi Chen*, Yunlong Deng*, Peiyuan Zhu*, **Yan Li***, Yifan Shen, Zijian Li, Kun Zhang.  
  *NeurIPS 2025 (spotlight).*  

- **Towards Self-Refinement of Vision-Language Models.**  
  Yunlong Deng, Guangyi Chen, Tianpei Gu, Lingjing Kong, **Yan Li**, Zeyu Tang, Kun Zhang.  
  *NeurIPS 2025 (poster).*  

- **A General Representation-Based Approach to Multi-Source Domain Adaptation.**  
  *Ignavier Ng**, **Yan Li***, Zijian Li, Yujia Zheng, Guangyi Chen, Kun Zhang.  
  *ICML 2025 (poster).*  

- **Efficient and High-Quality Rendering with 3D Gaussian Prototypes.**  
  Zhengqing Gao, Dongting Hu, Jia-Wang Bian, Huan Fu, **Yan Li**, Tongliang Liu, Mingming Gong, Kun Zhang.  

- **Revealing Personalized Positions in Indoor Spaces: A User-Centric Approach to Context-Aware Area Discovery.**  
  Zhaoheng Li, Chun Yu, **Yan Li**, Yuanchun Shi.  
  Work from my undergraduate stage on human–computer interaction and context-aware area discovery.

---

# Research experience

### CMU CLeaR Group & MBZUAI Causality Group  
**Advisors:** Prof. Kun Zhang, Prof. Peter Spirtes  

**Evaluating causal representation learning methods** — *Jul. 2025 – present*  
- Build on **CausalVerse** to systematically evaluate different causal representation learning (CRL) methods.  
- Observe that some methods achieve extremely high R² scores, and test principled properties such as minimality of interventions or changes.  
- Plan to provide a comprehensive benchmark of method performance (on both images and videos), and to derive new methods and principles from empirical observations. For example, we find that for an iMSDA-like method, under appropriate hyperparameters, **smaller variation dimension** can sometimes lead to better performance.

**Continuous learning with temporal data** — *Oct. 2025 – present*  
- Study continuous learning for time series representations, inspired by how humans gradually learn hierarchical latent variables.  
- Explore models that first learn high-level latent structure and then refine lower-level factors, aiming to better adapt and adjust modules over time.  
- Participate in project discussions, simulations, and follow-up experiments.

---

### Causality Group, MBZUAI  

**Causal representation learning benchmark (CausalVerse)** — *Feb. 2025 – Jun. 2025*  
- Developed a new benchmark for **causal representation learning** using high-fidelity simulated visual data that provides both realistic visual complexity and access to ground-truth causal generating processes.  
- Dataset includes ~200k images and ~3M video frames across 24 sub-scenes in four domains: static image generation, dynamic physical simulations, robotic manipulation, and traffic analysis, covering static/dynamic settings, simple/complex structures, and single/multi-agent interactions.  
- Responsible for static image generation of physical processes, implementing and testing image-related baselines, and contributing to paper writing.

**Framework to use data bias in domain adaptation** — *Jul. 2024 – May 2025*  
- Study domain adaptation beyond purely invariant representations, proposing a framework that **strategically leverages bias** to complement invariants and achieve more robust adaptation to new domains.  
- Use domain biases to re-weight experts trained on source domains, and show that invariants can also help identify beneficial bias information.  
- Responsible for algorithm design, theoretical analysis, implementation, and paper writing.

**Universal domain adaptation** — *Nov. 2024 – Jan. 2025*  
- Proposed a general framework that learns **compact latent representations** capturing task-relevant distribution shifts, addressing what should be learned and transferred in domain adaptation.  
- Developed a practical, non-parametric approach that can handle different types of distribution shifts in a unified setting.  
- Participated in theoretical discussions and development, and was responsible for experiments and writing.

**Self-refinement of vision–language models (VLMs)** — *Jul. 2024 – Nov. 2024*  
- Validated that VLMs possess inherent **self-refinement** capabilities, enabling them to generate high-quality supervised data without external labels and to learn autonomously.  
- Involved in theoretical analysis and paper writing.

---

### Research Institute of Human–Computer Interaction and Media Integration, Tsinghua University  

**Research advisor:** Assoc. Prof. Chun Yu — *Oct. 2021 – Oct. 2023*  

During my undergraduate years, I focused on **human–computer interaction (HCI)**, aiming to better connect humans and machines. After working on several HCI projects and completing coursework for a statistics minor (out of personal interest), I became more interested in the mathematical mechanisms of AI and shifted my focus toward machine learning and causality.

Representative work and projects:  
- **Design and Development of a Campus App – THUPat**  
  - Designed and developed a campus mobile application, which won the **Third Prize** in the **40th Challenge Cup of Tsinghua University**.  
- **User-Centric Approach to Context-Aware Area Discovery**  
  - Participated in designing user experiments, validating the proposed method, and paper writing, leading to the publication **“Revealing Personalized Positions in Indoor Spaces: A User-Centric Approach to Context-Aware Area Discovery.”**

---

### Industry experience

**Mian Bi Intelligent Technology Co., Ltd.** — *Jun. 2023 – Jul. 2023*  
**Supervisor:** Jie Cai, Algorithm Engineer  

- Participated in **data preparation for pre-training large language models**, including data cleaning algorithms and large-scale batch cleaning.  
- Joined discussions on classical text LLMs, data pipelines, and preliminary design.

---

# Educations

- **Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)** — *Oct. 2024 – Jun. 2026*  
  M.Sc. in **Machine Learning**  
  **Supervisor:** Prof. Kun Zhang  

- **Carnegie Mellon University (CMU), Department of Philosophy** — *Jul. 2025 – Dec. 2025*  
  Visiting student  
  **Visiting tutor:** Prof. Peter Spirtes and Prof. Kun Zhang

- **Tsinghua University** — *Sept. 2020 – Jun. 2024*  
  B.Eng. in **Computer Science and Technology**

---

# Honors and Awards

- **MBZUAI Conference Travel Scholarship**, 2025  
- **Tsinghua University Academic Progress Scholarship**, 2023  
- **Social Practice Excellence Scholarship of Tsinghua University**, 2022  
- **Third Prize**, 40th Challenge Cup of Tsinghua University, 2022  
- **Second-Class Scholarship for Freshmen**, Tsinghua University, 2020  

---

# Service

- **Reviewer**, ICLR

---

# Contact

- **Email:** lyan012010 (at) gmail (dot) com