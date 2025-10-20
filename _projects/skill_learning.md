---
layout: project
title: Skill Learning
slug: skill-learning
description: a project with a background image
img: assets/img/robot_skill_learning.jpg
importance: 1
category: research
published: true
directions: [rl, comp_neuro, stats]
subdirs: [hrl, irl]
featured: true
summary: How can agents infer and reuse latent skills through interaction with their environment?
problem: In natural behavior—and in most reinforcement learning settings—there are no explicit labels defining what a “skill” is. An agent must infer the existence, boundaries, and usefulness of skills directly from experience.
approach: |
  I frame skill discovery as a **probabilistic inference problem**. 
  Rather than treating skills as predefined sub-policies, I view them as latent variables that explain patterns in the agent’s interactions with its environment. 
  This connects reinforcement learning, neuroscience, and statistical inference: learning skills becomes the process of inferring latent structure that makes control and learning efficient.
highlights:
  - Inferring latent skill structure from unlabelled experience.
  - Investigating how curricula and inductive biases shape skill libraries.
  - Studying how agents arbitrate between adapting existing skills and creating new ones.
artifacts:
  code:
  data:
  demo:
status: active # or: completed
timeframe:
people_to_follow:
  - name: Sergey Levine
    url: https://scholar.google.com/citations?hl=en&user=8R35rCwAAAAJ
  - name: Benjamin Eysenbach
    url: https://scholar.google.com/citations?user=DRnOvU8AAAAJ&hl=en&oi=ao
  - name: Lea Duncker
    url: https://scholar.google.com/citations?user=8qFtz34AAAAJ&hl=en
  - name: Haozhe Shan
    url: https://scholar.google.com/citations?user=6CF1B8oAAAAJ&hl=en&oi=ao
  - name: Minni Sun
    url: https://scholar.google.com/citations?user=vEigzSYAAAAJ&hl=en&oi=ao
---
### Questions I’m exploring

#### 1. Inferring a good basis of skills
- What defines a *useful* skill space for an agent acting in a complex world?  
- How can an agent infer skill representations that capture the right temporal or causal regularities?  
- Which features of the environment—or of the agent’s own dynamics—determine what makes a good “basis”?  
- How do the inductive biases of architectures or objectives (e.g., sparsity, modularity) influence what kinds of skills emerge?  
- Are there neural analogues of these inductive biases in biological motor systems?

#### 2. Sequencing and exploration
- Once a library of skills exists, how can an agent efficiently explore combinations and sequences of them?  
- How does hierarchical structure improve credit assignment and long-horizon exploration?  
- Can exploration itself be viewed as an inference problem—inferring which sequences are most likely to yield new information or reward?  
- How might compositional skill reuse relate to the way brains flexibly combine submovements or cognitive routines?

#### 3. Curricula and structure learning
- How do different task distributions or curricula influence which skills are discovered?  
- Can we formalize curriculum design as shaping a prior or posterior over latent skill structure?  
- Do staged or curriculum-based training regimes lead to qualitatively different skill representations than flat, single-task learning?  
- How might developmental learning trajectories in animals reflect an analogous form of curriculum shaping?

#### 4. Adaptation vs. de novo learning
- When entering a new context, how does an agent arbitrate between adapting an existing skill and creating a new one?  
- How can this decision be expressed as Bayesian reuse—updating beliefs about the usefulness or scope of existing skills?  
- What computational principles govern when to refine a skill versus when to expand the library?  
- Are there parallels to neural mechanisms of plasticity and consolidation during motor learning?

---

### Results / status
I’m developing theoretical and empirical frameworks for:
- Inferring skill boundaries using probabilistic latent-variable models.  
- Designing curricula that encourage compositional skill reuse.  
- Comparing algorithmic and neural signatures of inferred skill representations.