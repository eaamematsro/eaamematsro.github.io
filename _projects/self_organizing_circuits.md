---
layout: project
title: Self-Organizing Circuits
slug: self-organizing-circuits
img: assets/img/self_org.jpg   # optional: replace or remove
category: research
directions: [comp_neuro, stats]
subdirs: [neural_dynamics]
status: active
featured: true
summary: How and why do neural circuits self-organize into structured motifs despite massive heterogeneity?
problem: |
  Modern recordings emphasize **heterogeneity and mixed selectivity**, revealing that neurons rarely do just one thing. 
  Yet within the same brain area, we also find **remarkable pockets of similarity**: neurons that share morphological, functional, or spiking properties, and circuits that repeat stereotyped motifs. 
  Standard artificial networks, even when trained on rich tasks, rarely reproduce this kind of structured similarity. 
  What mechanisms cause neural circuits to self-organize, and what computational purpose—if any—does this serve?
approach: |
  I study the **emergence of structure within heterogeneity**: how neuron-level properties, plasticity rules, and wiring constraints produce partially redundant motifs and repeating organizational patterns. 
  I focus on identifying the **conditions that lead to self-organized similarity**, and whether such structure provides **computational benefits** such as robustness, stability, or improved learning. 
  Spiking properties (bursting vs. tonic, low- vs. high-threshold, adaptation) serve as one important window into this problem: what does evolution gain by tuning intrinsic neuron types, and how do they interact to form stable circuits?
highlights:
  - Understanding why similarity emerges within heterogeneous neural populations.
  - Investigating how intrinsic spiking properties and wiring rules shape circuit organization.
  - Identifying when structured motifs improve robustness, efficiency, or learning.
  - Exploring optimal diversity, how heterogeneous a circuit should be to remain flexible yet stable.
artifacts:
  code:
  data:
  demo:
people_to_follow:
  - name: Eve Marder
    url: https://scholar.google.com/citations?hl=en&user=WUWmiBcAAAAJ
  - name: Ila Fiete
    url: https://scholar.google.com/citations?hl=en&user=uE-CihIAAAAJ
  - name: Sophie Deneve
    url: https://scholar.google.com/citations?hl=en&user=PCzuQX8AAAAJ
---
### Questions I’m exploring

#### 1. When and why does similarity emerge?
- Under what developmental or learning conditions do populations split into **partially redundant subpopulations** instead of remaining idiosyncratic?  
- Do **architectural constraints** (spatial locality, wiring costs), **learning rules** (Hebbian + homeostatic plasticity), or **task structure** (recurrent reuse of computations) drive this emergence?  
- How stable are these motifs across different behavioral contexts or learning stages?

#### 2. What aspects of neurons can self-organize?
- **Spiking dynamics:** bursting vs. tonic, adapting vs. non-adapting, low- vs. high-threshold excitability.  
- **Connectivity:** preferential wiring among similar types, or complementary motifs across types.  
- **Computation:** recurrent microcircuits that implement shared transformations or feedback loops.  
- Are these similarities inherited, learned, or a combination of both?

#### 3. What are the computational consequences?
- Do repeated motifs or shared intrinsic properties improve **robustness, energy efficiency, or sample efficiency**?  
- Does partial redundancy aid **stability–plasticity trade-offs**, **credit assignment**, or **manifold organization**?  
- Can structured diversity facilitate **multi-timescale coordination** in larger networks?

#### 4. How should different neuron types connect?
- What wiring rules between neurons of different intrinsic properties yield **stable yet flexible** dynamics?  
- Are there preferred **type-to-type motifs** (e.g., bursters driving tonics, adapting inhibitory loops) that support compositional computations?  
- Can these motifs be predicted from optimizing controllability, dynamic range, or energy cost?

#### 5. How diverse is optimal?
- How much heterogeneity is computationally beneficial?  
- Is there a **minimal palette** of neuron types that balances efficiency and adaptability?  
- Does evolution tune circuits toward specific regions of the diversity space to optimize computation and robustness?

---

### Results / status
I’m developing models of recurrent spiking and rate-based networks to test how different **intrinsic parameter distributions** and **connectivity constraints** influence circuit-level organization.  
