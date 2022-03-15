---
title: Questions and Answers
---

<br>
#### Week 2: Divergence-time Estimation with Node calibrations

<br>
**Q: If you are not showing branch lengths but just a cladogram schematic of how taxa are related, and you’re rooting with an outgroup, is the FigTree “root” okay? (Context: FigTree adds an arbitrary root edge when you root an phylogram, but really the root could be anywhere along the branch leading to the outgroup.)**

The “FigTree rooting problem” is just about branch lengths (where the root is placed along the branch), so a cladogram shouldn’t be compromised. AS LONG AS your outgroup is monophyletic. In many cases the outgroup isn't truly a clade (it might include some samples from the clade sister to the ingroup, and then some samples from the clade sister to that, for example), in which case adding that "Curse of Figtree" root will result in an incorrect topology.


**Q: Do you have examples of uncorrelated clock models? Organisms? (Context: discussing the relative realism of autocorrelated and uncorrelated relaxed molecular clocks.)**

Uncorrelated models are really motivated by computational tractability. Some argue that if rates of change of the rate are high, then branch rates should be uncorrelated.

**Q: How do you pick the type of distribution you draw your rates from (for a relaxed molecular clock)?**

You can compare the fit of these models with model selection tools (in a Bayesian analysis this means a Bayes factor). See [Relaxed Clocks & Time Trees](https://revbayes.github.io/tutorials/clocks/) for an example.

**Q: Is node calibration applicable for fossils only datasets?**

If you only have fossils, they should be tips in your tree, which is more like total-evidence dating. Node calibration is how we add temporal information to a molecular phylogeny.

**Q: If you have a fossil that is used to date the family you study, but you are focusing on phylogenetics of a particular genus, can you still use the fossil? Do you just include appropriate outgroups in the tree to reflect the fossil?**

Yes, that is often called an external calibration. It is a common solution to the problem of no ingroup fossils.<br>

**Q (follow up): We need the sequences of these other groups, right?**

Yes.

**Q: How do you compare the effect of different calibration densities then? Or you shouldn’t compare them at all cause they are data? (Context: you can only compare models for the same data, and fossil calibrations are data.)**

You can compare the effect of using different calibrations (e.g., the effect on inferred divergence times), but you can’t compare the fit.
