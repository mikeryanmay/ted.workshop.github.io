---
title: Bibliography
---

_A list of papers that we think are important for understanding divergence-time estimation, sometimes accompanied by our witty commentary. If there's a paper that you've found super helpful, let us know and we'll add it. If it is one of your own papers, all the better!!_
<br>

#### Bayesian phylogenetic inference, general principles  
<ul>

	<li> {% include citation.html
		authors = "Baum, David A., and Stacey DeWitt Smith"
		title   = "Tree thinking: An introduction to Phylogenetic Biology"
		year    = "2013"
		issue   = "Book"
		pages   = "Oxford University Press"
	%} </li>
    <p style="color:orange"> Superb entry-level textbook introducing the principles of model-based phylogenetic inference. </p>

	<li> {% include citation.html
		authors = "Holder, Mark and Paul O. Lewis"
		title   = "Phylogeny estimation: traditional and Bayesian approaches"
		journal = "Nature reviews genetics"
		doi     = "https://doi.org/10.1038/nrg1044"
		volume  = "4"
		issue   =  ""
		pages   = "275-284"
		year    = "2003"
	%} </li>

    <p style="color:orange"> These guys know a lot about Bayesian phylogenetics. </p>
</ul>


#### Divergence-time estimation: Non-identifiability/model sensitivity

<ul>

	<li> {% include citation.html
		authors = "Dos Reis, Mario and Ziheng Yang"
		title   = "The unbearable uncertainty of Bayesian divergence time estimation"
		journal = "Journal of Systematics and Evolution"
		doi     = "https://doi.org/10.1111/j.1759-6831.2012.00236.x"
		volume  = "51"
		issue   = "1"
		pages   = "30-43"
		year    = "2013"
	%} </li>

    <p style="color:orange"> Clear discussion of the basic non-identifiability inherent in divergence-time estimation, and how this feature means that DTE differs in a fundamental way from typical applications of Bayesian inference (the data can never overwhelm the prior.) </p>

	<li> {% include citation.html
		authors = "Condamine, Fabien L., Nathalie S. Nagalingum, Charles R. Marshall, and Hélène Morlon"
		title   = "Origin and diversification of living cycads: a cautionary tale on the impact of the branching process prior in Bayesian molecular dating"
		journal = "BMC evolutionary biology"
		doi     = "https://bmcecolevol.biomedcentral.com/articles/10.1186/s12862-015-0347-8"
		volume  = "15"
		issue   = "1"
		pages   = "1-18"
		year    = "2015"
	%} </li>

    <p style="color:orange"> Excellent empirical example of the strong influence of the tree model on divergence-time estimates. </p>

    <li> {% include citation.html
		authors = "Rothfels, Carl J. and Eric Schuettpelz"
		title   = "Accelerated rate of molecular evolution for vittarioid ferns is strong and not driven by selection"
		journal = "Systematic Biology"
		doi     = "https://doi.org/10.1093/sysbio/syt058"
		volume  = "63"
		issue   = "1"
		pages   = "31-54"
		year    = "2014"
	%} </li>

    <p style="color:orange"> Including this paper here because it provides (figure 11) a clear example of the strong influence of the clock model on divergence-time estimates. </p>

<li> {% include citation.html
		authors = "Sauquet, Hervé, Santiago Ramírez-Barahona, and Susana Magallón"
		title   = "The age of flowering plants is unknown"
		journal = "BioArXv"
		doi     = "10.32942/osf.io/n4v6b"
		issue   = "preprint"
		year    = "2022"
	%} </li>

    <p style="color:orange"> The title says it all? This paper discusses the impact of non-identifiability on a focal problem---the crown age of the angiosperms---and points out that the estimates of that age are effectively determined by the priors used in the analysis. They also make the excellent point that so-called "molecular age estimates" are not molecular at all---effectively all the temporal data comes from the fossils (and the models), not from the molecular data. </p>

</ul>


#### Divergence-time estimation: Relaxed clocks

<ul>
	<li> {% include citation.html
		authors = "Drummond, Alexei J. and  Marc A. Suchard"
		title   = "Bayesian random local clocks, or one rate to rule them all"
		journal = "BMC biology"
		doi     = "https://bmcbiol.biomedcentral.com/articles/10.1186/1741-7007-8-114"
		volume  = "8"
		issue   = "1"
		pages   = "1-12"
		year    = "2010"
	%} </li>

    <p style="color:orange"> One of the few practical implementations of autocorrelated relaxed clocks. </p>

	<li> {% include citation.html
		authors = "Drummond, Alexei J., Simon Y. W. Ho, Matthew J. Phillips, and Andrew Rambaut"
		title   = "Relaxed phylogenetics and dating with confidence"
		journal = "PLoS biology"
		doi     = "https://doi.org/10.1371/journal.pbio.0040088"
		volume  = "4"
		issue   = "4"
		pages   = "e88"
		year    = "2006"
	%} </li>

    <p style="color:orange"> Among the better article titles. </p>


</ul>


#### Divergence-time estimation, node dating

<ul>
	<li> {% include citation.html
		authors = "Graur, Dan and William Martin"
		title   = "Reading the entrails of chickens: molecular timescales of evolution and the illusion of precision"
		journal = "TRENDS in Genetics"
		doi     = "https://doi.org/10.1016/j.tig.2003.12.003"
		volume  = "20"
		issue   = "2"
		pages   = "80-86"
		year    = "2004"
	%} </li>

    <p style="color:orange"> The "Spandrels" of divergence-time estimation. Not exactly the most friendly paper, and it terrified a generation of practitioners, but it is also full of good points (particularly that we can't ignore the uncertainty associated with our estimates).</p>

	<li> {% include citation.html
		authors = "Marshall, Charles R."
		title   = "A simple method for bracketing absolute divergence times on molecular phylogenies using multiple fossil calibration points"
		journal = "The American Naturalist"
		doi     = "https://doi.org/10.1086/587523"
		volume  = "171"
		issue   = "6"
		pages   = "726-742"
		year    = "2008"
	%} </li>

    <p style="color:orange"> A method for getting more informed calibration densities by better including the information provided by the fossil record. </p>

	<li> {% include citation.html
		authors = "Marshall, Charles R."
		title   = "Using the fossil record to evaluate timetree timescales"
		journal = "Frontiers in Genetics"
		doi     = "https://doi.org/10.3389/fgene.2019.01049"
		volume  = "10"
		issue   = "1"
		pages   = "1049"
		year    = "2019"
	%} </li>

    <p style="color:orange"> Lots of discussion of calibration densities for node dating, among other descriptions of the application of the fossil record to evaluating (and thus, indirectly, to inferring) divergence-time estimates. </p>

	<li> {% include citation.html
		authors = "May, Michael R., Dori L. Contreras, Michael A. Sundue, Nathalie S. Nagalingum, Cindy V. Looy,  and Carl J. Rothfels"
		title   = "Inferring the Total-Evidence Timescale of Marattialean Fern Evolution in the Face of Model Sensitivity"
		journal = "Systematic Biology"
		doi     = "https://doi.org/10.1093/sysbio/syab020"
		volume  = "70"
		issue   = "6"
		pages   = "1232--1255"
		year    = "2021"
	%} </li>

    <p style="color:orange"> We'll shameless plug this paper multiple times in this list because we really are very proud of it, and because it is foundational to our developing the perspectives underlying this workshop. In the contex of node dating, we show how that method---which requires a user to associate a fossil with a node a priori---would have been severely misleading in the case of divergence-time estimates in Marattiales. </p>

	<li> {% include citation.html
		authors = "Rothfels, Carl J., Anne K. Johnson, Peter H. Hovenkamp, David L. Swofford, Harry C. Roskam, Christopher R. Fraser-Jenkins, Michael D. Windham, and Kathleen M. Pryer"
		title   = "Natural hybridization between genera that diverged from each other approximately 60 million years ago"
		journal = "The American Naturalist"
		doi     = "https://doi.org/10.1086/679662"
		volume  = "185"
		issue   = "3"
		pages   = "433-442"
		year    = "2015"
	%} </li>

    <p style="color:orange"> This paper proposes a "sequential empirical Bayes" approach to secondary calibrations in node-dating analyses. Basically, you can use the full posterior distribution of a node age from a previous analyses as the prior in a focal analysis. Which, we argue, is dramatically superior to, for example, applying some sort of uniform prior. </p>

	<li> {% include citation.html
		authors = "Parham, James F., Philip C.J. Donoghue, Christopher J. Bell, Tyler D. Calway, Jason J. Head,  Patricia A. Holroyd, Jun G. Inoue, Randall B. Irmis, Walter G. Joyce, and Daniel T. Ksepka, José S. L. Patané,  Nathan D. Smith,  James E. Tarver,  Marcel van Tuinen, Ziheng Yang,  Kenneth D. Angielczyk,  Jenny M. Greenwood,  Christy A. Hipsley, Louis Jacobs,  Peter J. Makovicky,  Johannes Müller,  Krister T. Smith,  Jessica M. Theodor, Rachel C. M. Warnock, and Michael J. Benton"
		title   = "Best practices for justifying fossil calibrations"
		journal = "Systematic Biology"
		doi     = "https://doi.org/10.1093/sysbio/syr107"
		volume  = "61"
		issue   = "2"
		pages   = "346-359"
		year    = "2012"
	%} </li>

 <p style="color:orange"> A guide to best practices on the inclusion of fossil data in divergence-time estimation (from a pre-FBD/total-evidence framework -- i.e., focused on node dating), from a group of phylogenetics-focused paleobiologists. </p>

</ul>


#### Divergence-time estimation: Total-evidence dating and the fossilized birth-death process

<ul>

    <li> {% include citation.html
        authors	= "Pyron, R A"
        title	= "Divergence time estimation using fossils as terminal taxa
                and the origins of Lissamphibia"
        journal	= "Systematic Biology"
        doi		= "http://sysbio.oxfordjournals.org/cgi/doi/10.1093/sysbio/syr047"
        volume	= "60"
        number	= "4"
        pages	= "466--481"
        year	= "2011"
	%} </li>

 <p style="color:orange"> The first total-evidence dating paper. </p>

	<li> {% include citation.html
		authors = "Heath, Tracy A., John P. Huelsenbeck, and Tanja Stadler"
		title   = "The fossilized birth--death process for coherent calibration of divergence-time estimates"
		journal = "Proceedings of the National Academy of Sciences"
		doi     = "https://doi.org/10.1073/pnas.1319091111"
		volume  = "111"
		issue   = "29"
		pages   = "E2957-E2966"
		year    = "2014"
	%} </li>

     <p style="color:orange"> Welcome to the FBD! It took me (Carl) a long time to appreciate the importance of this paper; it's a lot more than simply allowing for the inference of sampled ancestors. Hopefully this workshop has made some of these impacts more apparent. Regardless, if you have any questions, ask us! </p>

	<li> {% include citation.html
		authors = "Gavryushkina, Alexandra, Tracy A. Heath, Daniel T. Ksepka, Tanja Stadler, David Welch, and Alexei J. Drummond"
		title   = "Bayesian total-evidence dating reveals the recent crown radiation of penguins"
		journal = "Systematic biology"
		doi     = "https://doi.org/10.1093/sysbio/syw060"
		volume  = "66"
		issue   = "1"
		pages   = "57-73"
		year    = "2017"
	%} </li>


	<li> {% include citation.html
		authors = "Zhang, Chi, Tanja Stadler, Seraina Klopfstein, Tracy A. Heath, and  Fredrik Ronquist"
		title   = "Total-evidence dating under the fossilized birth--death process"
		journal = "Systematic biology"
		doi     = "https://doi.org/10.1093/sysbio/syv080"
		volume  = "65"
		issue   = "2"
		pages   = "228-249"
		year    = "2016"
	%} </li>

</ul>



#### The Fossil Record

<ul>

	<li> {% include citation.html
		authors = "Quental, Tiago B. and Charles R. Marshall"
		title   = "Diversity dynamics: molecular phylogenies need the fossil record"
		journal = "Trends in ecology & evolution"
		doi     = "https://doi.org/10.1016/j.tree.2010.05.002"
		volume  = "25"
		issue   = "8"
		pages   = "434-441"
		year    = "2010"
	%} </li>


	<li> {% include citation.html
		authors = "Quental, Tiago B. and Charles R. Marshall"
		title   = "Extinction during evolutionary radiations: reconciling the fossil record with molecular phylogenies"
		journal = "Evolution: International Journal of Organic Evolution"
		doi     = "https://doi.org/10.1111/j.1558-5646.2009.00794.x"
		volume  = "63"
		issue   = "12"
		pages   = "3158-3167"
		year    = "2009"
	%} </li>


	<li> {% include citation.html
		authors = "Marshall, Charles R."
		title   = "Using the fossil record to evaluate timetree timescales"
		journal = "Frontiers in Genetics"
		doi     = "https://doi.org/10.3389/fgene.2019.01049"
		volume  = "10"
		issue   = "1"
		pages   = "1049"
		year    = "2019"
	%} </li>

 <p style="color:orange"> Includes a broad description of the application of the fossil record to evaluating (and thus, indirectly, to inferring) divergence-time estimates, with lots of useful stuff on FADS and LADS and other underlying issues that motivate FBD and total-evidence dating approaches (versus node-dating). </p>


	<li> {% include citation.html
		authors = "Marshall, Charles R."
		title   = "Confidence intervals on stratigraphic ranges with nonrandom distributions of fossil horizons"
		journal = "Paleobiology"
		doi     = "https://doi.org/10.1017/S0094837300016766"
		volume  = "23"
		issue   = "2"
		pages   = "165-173"
		year    = "1997"
	%} </li>


	<li> {% include citation.html
		authors = "Marshall, Charles R."
		title   = "Confidence intervals on stratigraphic ranges: partial relaxation of the assumption of randomly distributed fossil horizons"
		journal = "Paleobiology"
		doi     = "https://doi.org/10.1017/S0094837300012938"
		volume  = "20"
		issue   = "4"
		pages   = "459-469"
		year    = "1994"
	%} </li>


	<li> {% include citation.html
		authors = "Marshall, Charles R."
		title   = "Confidence intervals on stratigraphic ranges"
		journal = "Paleobiology"
		doi     = "https://doi.org/10.1017/S0094837300009672"
		volume  = "16"
		issue   = "1"
		pages   = "1-10"
		year    = "1990"
	%} </li>


	<li> {% include citation.html
		authors = "Parham, James F., Philip C.J. Donoghue, Christopher J. Bell, Tyler D. Calway, Jason J. Head,  Patricia A. Holroyd, Jun G. Inoue, Randall B. Irmis, Walter G. Joyce, and Daniel T. Ksepka, José S. L. Patané,  Nathan D. Smith,  James E. Tarver,  Marcel van Tuinen, Ziheng Yang,  Kenneth D. Angielczyk,  Jenny M. Greenwood,  Christy A. Hipsley, Louis Jacobs,  Peter J. Makovicky,  Johannes Müller,  Krister T. Smith,  Jessica M. Theodor, Rachel C. M. Warnock, and Michael J. Benton"
		title   = "Best practices for justifying fossil calibrations"
		journal = "Systematic Biology"
		doi     = "https://doi.org/10.1093/sysbio/syr107"
		volume  = "61"
		issue   = "2"
		pages   = "346-359"
		year    = "2012"
	%} </li>

 <p style="color:orange"> A guide to best practices on the inclusion of fossil data in divergence-time estimation (from a pre-FBD/total-evidence framework -- i.e., focused on node dating), from a group of phylogenetics-focused paleobiologists. </p>

	<li> {% include citation.html
		authors = "Wang, Steve C. and Charles R. Marshall"
		title   = "Estimating times of extinction in the fossil record"
		journal = "Biology letters"
		doi     = "https://doi.org/10.1098/rsbl.2015.0989"
		volume  = "12"
		issue   = "4"
		pages   = "20150989"
		year    = "2016"
	%} </li>


</ul>


#### Morphological Data

<ul>
	<li> {% include citation.html
		authors = "Brazeau, Martin D."
		title   = "Problematic character coding methods in morphology and their effects"
		journal = "Biological Journal of the Linnean Society"
		doi     = "https://doi.org/10.1111/j.1095-8312.2011.01755.x"
		volume  = "104"
		issue   = "3"
		pages   = "489-498"
		year    = "2011"
	%} </li>

	<li> {% include citation.html
		authors = "Brazeau, Martin D., Thomas Guillerme, and Martin R. Smith"
		title   = "An algorithm for morphological phylogenetic analysis with inapplicable data"
		journal = "Systematic biology"
		doi     = "https://doi.org/10.1086/587523"
		volume  = "68"
		issue   = "4"
		pages   = "619-631"
		year    = "2019"
	%} </li>

	<li> {% include citation.html
		authors = "Forey, Peter L. and Ian J. Kitching"
		title   = "Experiments in coding multistate"
		journal = "Homology and Systematics: Coding Characters for Phylogenetic Analysis"
		doi     = "https://books.google.com/books?hl=en&lr=&id=I0RZDwAAQBAJ&oi=fnd&pg=PA54&dq=Experiments+in+coding+multistate+characters&ots=nxDGYmIcpS&sig=WK_rGXs4688pyTVzsqLKQNIKw2w#v=onepage&q=Experiments%20in%20coding%20multistate%20characters&f=false"
		issue   = "Book chapter"
		pages   = "54"
		year    = "2014"
	%} </li>

		<li> {% include citation.html
		authors = "Hawkins, Julie A."
		title   = "A survey of primary homology assessment: different botanists perceive and define characters in different ways"
		journal = "Homology and systemcatics: coding characters for phylogenetic analysis"
		issue   = "Book chapter"
		pages   = "217"
		year    = "2002"
	%} </li>

		<li> {% include citation.html
		authors = "Hawkins, Julie A., Colin E. Hughes, and Robert W. Scotland"
		title   = "Primary homology assessment, characters and character states"
		journal = "Cladistics"
		doi     = "https://doi.org/10.1111/j.1096-0031.1997.tb00320.x"
		volume  = "13"
		issue   = "3"
		pages   = "275-283"
		year    = "1997"
	%} </li>


		<li> {% include citation.html
		authors = "Maddison, Wayne P."
		title   = "Missing data versus missing characters in phylogenetic analysis"
		journal = "Systematic Biology"
		doi     = "https://doi.org/10.2307/2992490"
		volume  = "42"
		issue   = "4"
		pages   = "576-581"
		year    = "1993"
	%} </li>

		<li> {% include citation.html
		authors = "Simões, Tiago R., Michael W. Caldwell, Alessandro Palci, and Randall L. Nydam"
		title   = "Giant taxon-character matrices: quality of character constructions remains critical regardless of size"
		journal = "Cladistics"
		doi     = "https://doi.org/10.1111/cla.12163"
		volume  = "33"
		issue   = "2"
		pages   = "198-219"
		year    = "2017"
	%} </li>

		<li> {% include citation.html
		authors = "Strong, Ellen E. and Diana Lipscomb"
		title   = "Character coding and inapplicable data"
		journal = "Cladistics"
		doi     = "https://doi.org/10.1111/j.1096-0031.1999.tb00272.x"
		volume  = "15"
		issue   = "4"
		pages   = "363-371"
		year    = "1999"
	%} </li>


	<li> {% include citation.html
		authors = "Tarasov, Sergei"
		title   = "Integration of anatomy ontologies and evo-devo using structured Markov models suggests a new framework for modeling discrete phenotypic traits"
		journal = "Systematic biology"
		doi     = "https://doi.org/10.1093/sysbio/syz005"
		volume  = "68"
		issue   = "5"
		pages   = "698-716"
		year    = "2019"
	%} </li>


	<li> {% include citation.html
		authors = "Wright, April M., Graeme T. Lloyd, and David M. Hillis"
		title   = "Modeling character change heterogeneity in phylogenetic analyses of morphology through the use of priors"
		journal = "Systematic Biology"
		doi     = "https://doi.org/10.1093/sysbio/syv122"
		volume  = "65"
		issue   = "54"
		pages   = "602-611"
		year    = "2016"
	%} </li>

</ul>


#### Assessing results: Tree visualization 

<ul>
	<li> {% include citation.html
		authors = "Hillis, David M., Tracy A. Heath, and Katherine St. John"
		title   = "Analysis and visualization of tree space"
		journal = "Systematic Biology"
		doi     = "https://doi.org/10.1080/10635150590946961"
		volume  = "54"
		issue   = "3"
		pages   = "471-482"
		year    = "2005"
	%} </li>

 <p style="color:orange"> A foundational paper discussing ways to visualize treespace (and thus to tell if, for example, your different models are yielding different inferences). Promotes mult-dimensional scaling (MDS), those images that Mike showed with each tree represented by a colored dot arrayed in two-dimensional space. </p>

	<li> {% include citation.html
		authors = "Huang, Wen, Guifang Zhou, Melissa Marchand, Jeremy R. Ash, David Morris, Paul Van Dooren, Jeremy M. Brown, Kyle A. Gallivan, and Jim C. Wilgenbusch"
		title   = "TreeScaper: visualizing and extracting phylogenetic signal from sets of trees"
		journal = "Molecular Biology and Evolution"
		doi     = "https://doi.org/10.1093/molbev/msw196"
		volume  = "33"
		issue   = "12"
		pages   = "3314-3316"
		year    = "2016"
	%} </li>


	<li> {% include citation.html
		authors = "Tribble, Carrie M., William A. Freyman, Michael J. Landis, Jun Ying Lim, Joellë Barido-Sottani, Bjorn Tore Kopperud, Sebastian Hӧhna, and Michael R. May"
		title   = "RevGadgets: an R Package for visualizing Bayesian phylogenetic analyses from RevBayes"
		journal = "Methods in Ecology and Evolution"
		doi     = "https://doi.org/10.1111/2041-210X.13750"
		volume  = "13"
		issue   = "2"
		pages   = "314-323"
		year    = "2022"
	%} </li>

<p style="color:orange"> RevGadgets! An R package designed for the convenient visualization of RevBayes output. Use this to make your gorgeous figures. </p>

	<li> {% include citation.html
		authors = "Robinson, David F. and Leslie R. Foulds"
		title   = "Comparison of phylogenetic trees"
		journal = "Mathematical biosciences"
		doi     = "https://doi.org/10.1016/0025-5564(81)90043-2"
		volume  = "53"
		issue   = "1-2"
		pages   = "131-147"
		year    = "1981"
	%} </li>

<p style="color:orange"> Introduces what we know call the "Robinson-Foulds distance" between phylogenetic trees. </p>

	<li> {% include citation.html
		authors = "Kuhner, Mary K. and Joseph Felsenstein"
		title   = "A simulation comparison of phylogeny algorithms under equal and unequal evolutionary rates."
		journal = "Molecular biology and evolution"
		doi     = "https://doi.org/10.1093/oxfordjournals.molbev.a040126"
		volume  = "11"
		issue   = "3"
		pages   = "459-468"
		year    = "1994"
	%} </li>

<p style="color:orange"> Introduces what we know call the "Kuhner-Felsenstein distance" between phylogenetic trees. </p>


#### Assessing results: Model comparison and model adequacy 

	<li> {% include citation.html
		authors = "Kass, Robert E. and Adrian E. Raftery"
		title   = "Bayes factors"
		journal = "Journal of the american statistical association"
		doi     = "https://doi.org/10.1080/01621459.1995.10476572"
		volume  = "90"
		issue   = "430"
		pages   = "773-795"
		year    = "1995"
	%} </li>

<p style="color:orange"> Provides a reference for the interpretation of Bayes factors. How big should the Bayes factor be before you feel that it is important? </p>

	<li> {% include citation.html
		authors = "Lartillot, Nicolas and Hervé Philippe"
		title   = "Computing Bayes factors using thermodynamic integration"
		journal = "Systematic biology"
		doi     = "https://doi.org/10.1080/10635150500433722"
		volume  = "55"
		issue   = "2"
		pages   = "195-207"
		year    = "2006"
	%} </li>

<p style="color:orange"> Introduces to phylogenetics the path-sampling estimator for computing Bayes factors. </p>

	<li> {% include citation.html
		authors = "Xie, Wangang, Paul O. Lewis, Yu Fan, Lynn Kuo, and Chen, Ming-Hui"
		title   = "Improving marginal likelihood estimation for Bayesian phylogenetic model selection"
		journal = "Systematic biology"
		doi     = "https://doi.org/10.1093/sysbio/syq085"
		volume  = "60"
		issue   = "2"
		pages   = "150-160"
		year    = "2011"
	%} </li>

<p style="color:orange"> Introduces to phylogenetics the stepping-stone estimator for computing Bayes factors. </p>

	<li> {% include citation.html
		authors = "May, Michael R and Carl J. Rothfels"
		title   = "Mistreating birth-death models as priors in phylogenetic analysis compromises our ability to compare models"
		journal = "bioRxiv"
		doi     = "https://doi.org/10.1101/2021.07.12.452074"
		volume  = ""
		issue   = ""
		pages   = ""
		year    = "2021"
	%} </li>

<p style="color:orange"> This paper describes a strange and long-overlooked "glitch" in how we generally do Bayesian inference on tree models, a glitch that results in Bayes factors for tree models, as typically computed, being unreliable. And discusses ways to address this issue. </p>

	<li> {% include citation.html
		authors = "Bollback, Jonathan P"
		title   = "Posterior mapping and posterior predictive distributions"
		journal = "Statistical methods in molecular evolution"
		doi     = "https://link.springer.com/content/pdf/10.1007/0-387-27733-1_16.pdf"
		volume  = "54"
		issue   = "Book chapter"
		pages   = "439-462"
		year    = "2015"
	%} </li>


	<li> {% include citation.html
		authors = "Brown, Jeremy M."
		title   = "Detection of implausible phylogenetic inferences using posterior predictive assessment of model fit"
		journal = "Systematic biology"
		doi     = "https://doi.org/10.1093/sysbio/syu002"
		volume  = "63"
		issue   = "3"
		pages   = "334-348"
		year    = "2014"
	%} </li>


	<li> {% include citation.html
		authors = "Höhna, Sebastian, Lyndon M. Coghill, Genevieve G. Mount, Robert C. Thomson, and Jeremy M. Brown"
		title   = "P3: Phylogenetic posterior prediction in RevBayes"
		journal = "Molecular biology and evolution"
		doi     = "https://doi.org/10.1093/molbev/msy057"
		volume  = "35"
		issue   = "4"
		pages   = "1028-1034"
		year    = "2018"
	%} </li>

</ul>
