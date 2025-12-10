---
permalink: /
title: "Yan Li (李岩)"
excerpt: "MSc in Machine Learning at MBZUAI · causal representation learning · domain adaptation · multimodal models"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

## About

Hello! I am **Yan Li (李岩)**, an M.Sc. student in Machine Learning at the
[Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)](https://mbzuai.ac.ae/),
advised by [Kun Zhang](https://mbzuai.ac.ae/study/faculty/kun-zhang/).  
I mainly work with [Guangyi Chen](https://chengy12.github.io/) and Yunlong Deng in the MBZUAI Causality Group.

From **July 2025 to December 2025**, I will be a visiting student in the Department of Philosophy at
[Carnegie Mellon University (CMU)](https://www.cmu.edu/), working with
[Peter Spirtes](https://www.cmu.edu/dietrich/philosophy/people/faculty/spirtes.html) and [Kun Zhang](https://www.cmu.edu/dietrich/philosophy/people/faculty/zhang.html),
and collaborating with the [CMU CLeaR Group](https://www.cmu.edu/dietrich/causality/).

Previously, I obtained a B.Eng. in Computer Science and Technology from
[Tsinghua University](https://www.tsinghua.edu.cn/en/) in June 2024, where I worked at the
Research Institute of Human–Computer Interaction and Media Integration with Chun Yu, mainly on HCI
and context-aware systems.

Broadly, I am interested in the mathematical and causal foundations of machine learning, and in
building robust and interpretable models.

### Research interests

- Causal representation learning  
- Domain adaptation, domain generalization, and out-of-distribution robustness  
- Multimodal and vision–language models  

---

## News

- *2025.12* — I will attend **NeurIPS 2025** in San Diego and present two posters.  
  Feel free to talk to me at the poster sessions.
- *2025.09* — “CausalVerse: Benchmarking Causal Representation Learning with Configurable High-Fidelity Simulations” accepted to **NeurIPS 2025** (spotlight).
- *2025.09* — “Towards Self-Refinement of Vision-Language Models with Triangular Consistency” accepted to **NeurIPS 2025** (poster).
- *2025.04* — “A General Representation-Based Approach to Multi-Source Domain Adaptation” presented at **ICML 2025** (poster).
- *2025.07–2025.12* — Visiting student at **Carnegie Mellon University**, Department of Philosophy.
- *2024.10* — Started the **M.Sc. in Machine Learning** at **MBZUAI**, advised by Kun Zhang.
- *2024.06* — Graduated from **Tsinghua University** (B.Eng. in Computer Science and Technology).
- *2023.06–2023.07* — Research intern at **Mian Bi Intelligent Technology Co., Ltd.**, working on pre-training data preparation for large language models.
- *2022* — Third Prize, 40th Challenge Cup of Tsinghua University.
- *2020* — Second-Class Scholarship for Freshmen, Tsinghua University.

---

## Publications

*Equal contribution is indicated by `*` after author names.  
<!-- For each paper you can later replace the “Poster: _to be uploaded_” line with a real link, e.g. `/files/posters/icml2025_msda.pdf`.* -->

- [Should Bias Always be Eliminated? A Principled Framework to Use Data Bias for OOD Generation](https://arxiv.org/abs/2507.17001)  
Yan Li, Yunlong Deng, Zijian Li, Anpeng Wu, Zeyu Tang, Kun Zhang, Guangyi Chen.  


- [Selection, Reflection and Self-Refinement: Revisit Reasoning Tasks via a Causal Lens](https://arxiv.org/abs/2510.08222)  
  Yunlong Deng, Boyang Sun, Yan Li, Zeyu Tang, Lingjing Kong, Kun Zhang, Guangyi Chen.  


- [CausalVerse: Benchmarking Causal Representation Learning with Configurable High-Fidelity Simulations](https://arxiv.org/abs/2510.14049)  
  Guangyi Chen\*, Yunlong Deng\*, Peiyuan Zhu\*, Yan Li\*, Yifan Shen, Zijian Li, Kun Zhang.  
  _NeurIPS 2025 db, spotlight._  
  [Welcome to vist our project Page!](https://causal-verse.github.io/)


- [Towards Self-Refinement of Vision-Language Models with Triangular Consistency](https://arxiv.org/abs/2510.10487)  
  Yunlong Deng, Guangyi Chen, Tianpei Gu, Lingjing Kong, Yan Li, Zeyu Tang, Kun Zhang.  
  _NeurIPS 2025, poster._  
 
- [A General Representation-Based Approach to Multi-Source Domain Adaptation](https://proceedings.mlr.press/v267/ng25a.html)  
  Ignavier Ng\*, Yan Li\*, Zijian Li, Yujia Zheng, Guangyi Chen, Kun Zhang.  
  _ICML 2025, poster._  


- [ProtoGS: Efficient and High-Quality Rendering with 3D Gaussian Prototypes](https://arxiv.org/abs/2503.17486)  
  Zhengqing Gao, Dongting Hu, Jia-Wang Bian, Huan Fu, Yan Li, Tongliang Liu, Mingming Gong, Kun Zhang.

- Revealing Personalized Positions in Indoor Spaces: A User-Centric Approach to Context-Aware Area Discovery  
  Zhaoheng Li, Chun Yu, Yan Li, Yuanchun Shi.  
  Work from my undergraduate stage on human–computer interaction and context-aware area discovery.

---

## Research experience

### CMU CLeaR Group & MBZUAI Causality Group  
**Advisors:** Kun Zhang, Peter Spirtes  

**Evaluating causal representation learning methods** · *Jul. 2025 – present*  
- Build on CausalVerse to systematically evaluate different causal representation learning (CRL) methods.  
- Study when methods achieve extremely high R² scores and test principles such as minimal interventions or minimal changes.  
- Aim to provide a comprehensive benchmark of method performance on images and videos, and to derive new methods and principles from empirical observations (e.g., for iMSDA-like methods, smaller variation dimension can work better under suitable hyperparameters).

**Continuous learning with temporal data** · *Oct. 2025 – present*  
- Study continual learning for time-series representations inspired by how humans learn hierarchical latent variables.  
- Explore models that first learn high-level latent structure and then refine lower-level factors, enabling better adaptation of model components over time.  
- Participate in project discussions, simulations, and experiments.

---

### Causality Group, MBZUAI  

**Causal representation learning benchmark (CausalVerse)** · *Feb. 2025 – Jun. 2025*  
- Developed a benchmark for causal representation learning using high-fidelity simulated visual data with ground-truth causal processes.  
- Dataset includes around 200k images and 3M video frames across 24 sub-scenes in four domains: static image generation, physical simulations, robotic manipulation, and traffic analysis.  
- Responsible for static image generation of physical processes, implementing and testing image-related baselines, and contributing to writing.

**Framework to use data bias in domain adaptation** · *Jul. 2024 – May 2025*  
- Proposed a framework that leverages data bias to complement invariant representations in domain adaptation.  
- Used domain biases to re-weight experts trained on source domains and showed that invariant representations can help identify beneficial biases.  
- Responsible for algorithm design, theoretical analysis, implementation, and paper writing.

**Universal domain adaptation** · *Nov. 2024 – Jan. 2025*  
- Worked on a general domain adaptation framework that learns compact latent representations capturing task-relevant distribution shifts.  
- Developed a non-parametric approach that handles different types of distribution shifts in a unified setting.  
- Participated in theory development, experiments, and writing.

**Self-refinement of vision–language models** · *Jul. 2024 – Nov. 2024*  
- Studied the self-refinement capabilities of vision–language models (VLMs) and how they can generate high-quality supervised data without external labels.  
- Contributed to the theoretical analysis and writing.

---

### Research Institute of Human–Computer Interaction and Media Integration, Tsinghua University  

**Advisor:** Chun Yu · *Oct. 2021 – Oct. 2023*  

During my undergraduate years, I worked on human–computer interaction (HCI), aiming to better connect humans and machines. After several projects and completing coursework for a statistics minor, I became more interested in the mathematical mechanisms of AI and shifted my focus toward machine learning and causality.

Representative work and projects:

- THUPat campus app  
  - Designed and developed a campus mobile application, which won **Third Prize** in the 40th Challenge Cup of Tsinghua University.

- User-centric context-aware area discovery  
  - Participated in designing user experiments, validating the method, and writing the paper “Revealing Personalized Positions in Indoor Spaces: A User-Centric Approach to Context-Aware Area Discovery.”

---

## Industry experience

**Mian Bi Intelligent Technology Co., Ltd.** · *Jun. 2023 – Jul. 2023*  
Supervisor: Jie Cai, Algorithm Engineer  

- Worked on data preparation for pre-training large language models, including data-cleaning algorithms and large-scale batch cleaning.  
- Participated in discussions on classical text LLMs, data pipelines, and preliminary design.

---

## Education

- **M.Sc. in Machine Learning**, Mohamed bin Zayed University of Artificial Intelligence (MBZUAI) · *Oct. 2024 – Jun. 2026*  
  Supervisor: Kun Zhang  

- **Visiting student**, Department of Philosophy, Carnegie Mellon University (CMU) · *Jul. 2025 – Dec. 2025*  
  Visiting tutors: Peter Spirtes, Kun Zhang  

- **B.Eng. in Computer Science and Technology**, Tsinghua University · *Sept. 2020 – Jun. 2024*

---

## Honors and awards

- MBZUAI Conference Travel Scholarship, 2025  
- Tsinghua University Academic Progress Scholarship, 2023  
- Social Practice Excellence Scholarship of Tsinghua University, 2022  
- Third Prize, 40th Challenge Cup of Tsinghua University, 2022  
- Second-Class Scholarship for Freshmen, Tsinghua University, 2020  

---

## Service

- Reviewer, ICLR  

---

## Contact

- Email: lyan012010 (at) gmail (dot) com

   
 
 
