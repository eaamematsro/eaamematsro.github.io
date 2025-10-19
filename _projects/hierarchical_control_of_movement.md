---
layout: project
title: Hierarchical Motor Control
slug: hierarchical-motor-control
img: assets/img/motor_hier.jpg   # optional: replace or remove
category: research
directions: [comp_neuro, neuro]
subdirs: [neural_dynamics, motor_neuro]
status: active
featured: true
summary: How does the brain organize and learn multi-level control of movement across regions and timescales?
problem: |
  Flexible movement requires control at multiple levels of abstraction: from high-level planning to low-level feedback. 
  The brain appears to achieve this through a distributed hierarchy, with different areas operating on distinct timescales and representational granularities. 
  However, we still lack a mechanistic understanding of how this hierarchy is formed, represented, and updated through learning.
approach: |
  I study hierarchical control as a property of neural systems, focusing on how different brain regions contribute to separate levels of control and how these levels interact and adapt over time. 
  By analyzing large-scale population recordings during complex motor tasks, I aim to uncover the neural mechanisms that allow hierarchical organization to emerge and to identify how learning signals and credit assignment are distributed across this hierarchy.
highlights:
  - Mapping how different brain regions correspond to distinct levels of the motor hierarchy.
  - Identifying representational transformations between hierarchical levels.
  - Examining how inter-area communication coordinates planning, execution, and feedback.
  - Understanding how the brain assigns credit across levels when movement errors occur.
artifacts:
  code:
  data:
  demo:
people_to_follow:
  - name: Mark Churchland
    url: https://scholar.google.com/citations?user=AtknMf0AAAAJ&hl=en&oi=ao
  - name: Adam Hantman
    url: https://www.med.unc.edu/neuroscience/hantmanlab/
  - name: Adrian Haith
    url: https://scholar.google.com/citations?user=e56SRCQAAAAJ&hl=en&oi=ao
  - name: Aaron Batista
    url: https://scholar.google.com/citations?user=kKE_lJUAAAAJ&hl=en&oi=ao
  - name: Amy Orsborn
    url: https://scholar.google.com/citations?user=8r_4fMkAAAAJ&hl=en&oi=ao
  - name: Laureline Logiaco
    url: https://scholar.google.com/citations?user=NFQh44IAAAAJ&hl=en&oi=ao
---

### Questions I’m exploring

#### 1. Mapping the hierarchy across brain regions
- Which brain areas correspond to distinct control levels (e.g., premotor → planning, M1 → execution, cerebellum → feedback)?  
- Are these levels organized along a gradient of **temporal abstraction** or **representational detail**?  
- How do cortical, subcortical, and spinal circuits interact to coordinate action?  
- Does learning reshape this division of labor, or is the hierarchy anatomically fixed but functionally flexible?

#### 2. Representational format and transformation
- What is the **format** of neural representations across control levels?  
  Are higher-level areas encoding intentions or policies while lower areas encode feedback dynamics?  
- Are low-level manifolds **nested** within high-level population spaces?  
- How are representations transformed between regions?  
- How does context or experience reconfigure these mappings during learning?

#### 3. Coordination and communication
- How do regions operating at different control levels **communicate and synchronize** during movement?  
- Are there distinct pathways for **top-down commands** versus **bottom-up feedback**?  
- What neural signatures mark **switching or delegation** between hierarchical levels?  
- Do transient dynamics or oscillations mediate inter-area coordination?

#### 4. Learning and adaptation
- How does hierarchical organization **emerge through learning**?  
- What changes in neural activity accompany the **formation or refinement** of control hierarchies?  
- How do different regions **co-adapt** when task dynamics change?  
- What principles govern **stability vs. plasticity** when learning spans multiple control levels?

#### 5. Credit assignment across the hierarchy
- When a motor error occurs, **how does the brain decide where to assign blame**—to the plan, sequence, or execution?  
- Are there **multiple parallel error signals** across levels, or a single global signal interpreted locally?  
- How do feedback and learning signals propagate through cortical–subcortical–cerebellar loops?  
- How is stability maintained when credit assignment must span different timescales and levels of control?

---

### Results / status
I’m currently developing analyses to identify **hierarchical relationships in neural population dynamics**, and testing whether learning reshapes how different regions contribute to planning and feedback.  
Future work will quantify **cross-area communication** and **error propagation** during adaptive control.

---

### Highlights
- **Neural hierarchies:** uncovering how distinct brain regions implement layered control of movement.  
- **Learning and adaptation:** understanding how hierarchical structure forms and changes with experience.  
- **Credit assignment:** revealing how error signals and learning rules are distributed across the hierarchy.

---

### Related publications
See all publications tagged with this project:  
[**View related publications →**]({{ '/publications/?project=hierarchical-motor-control' | relative_url }})