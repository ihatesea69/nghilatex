// Mock draft data for OpenAI Prism Demo
// This file contains LaTeX content for different versions of the academic paper

const DRAFTS = {
    v1: {
        version: 'v1',
        files: {
            'paper/main.tex': `\\documentclass[12pt]{article}
\\usepackage{amsmath}
\\usepackage{graphicx}
\\usepackage{cite}

\\title{Machine Learning Approaches for Climate Prediction}
\\author{Research Team}
\\date{\\today}

\\begin{document}

\\maketitle

\\input{introduction}
\\input{methodology}
\\input{results}

\\bibliographystyle{plain}
\\bibliography{references}

\\end{document}`,
            
            'paper/introduction.tex': `\\section{Introduction}

Climate change is a thing that affects many people. We want to study it using computers and machine learning. This paper talks about our research.

Machine learning is good for predictions. We use it to predict climate stuff. Other people have done this before but we do it differently.

Our approach is novel and interesting.`,
            
            'paper/methodology.tex': `\\section{Methodology}

We collected data from various sources. The data was processed using standard techniques.

\\subsection{Data Collection}
Data came from weather stations and satellites. We got a lot of data.

\\subsection{Model Architecture}
We used neural networks. The architecture has layers and nodes. It works pretty well.`,
            
            'paper/results.tex': `\\section{Results}

Our model performed well. We got good accuracy scores.

\\subsection{Performance Metrics}
The accuracy was high. The model predicted things correctly most of the time.

\\subsection{Comparison}
Compared to other methods, ours is better in some ways.`,
            
            'paper/references.bib': `@article{smith2020climate,
  title={Climate modeling with AI},
  author={Smith, John},
  journal={Nature},
  year={2020}
}

@article{jones2021prediction,
  title={Prediction methods},
  author={Jones, Sarah},
  journal={Science},
  year={2021}
}`
        },
        previewImage: 'assets/previews/preview-v1.png'
    },
    
    v2: {
        version: 'v2',
        files: {
            'paper/main.tex': `\\documentclass[12pt]{article}
\\usepackage{amsmath}
\\usepackage{graphicx}
\\usepackage{cite}

\\title{Machine Learning Approaches for Climate Prediction: A Comprehensive Analysis}
\\author{Research Team}
\\date{\\today}

\\begin{document}

\\maketitle

\\input{introduction}
\\input{methodology}
\\input{results}

\\bibliographystyle{plain}
\\bibliography{references}

\\end{document}`,
            
            'paper/introduction.tex': `\\section{Introduction}

Anthropogenic climate change represents one of the most pressing challenges facing contemporary society \\cite{smith2020climate}. The development of accurate predictive models is essential for informing policy decisions and mitigation strategies. This paper presents a novel machine learning framework for climate prediction that demonstrates significant improvements over existing methodologies.

Recent advances in deep learning have enabled unprecedented capabilities in pattern recognition and time-series forecasting \\cite{jones2021prediction}. We leverage these developments to construct a robust predictive model that captures complex nonlinear relationships within climate data.

Our approach introduces several methodological innovations that enhance both accuracy and interpretability, addressing key limitations identified in prior research.`,
            
            'paper/methodology.tex': `\\section{Methodology}

This section delineates our comprehensive approach to climate prediction, encompassing data acquisition, preprocessing, and model architecture.

\\subsection{Data Collection and Preprocessing}
We compiled a multi-source dataset incorporating measurements from 1,247 meteorological stations and three satellite observation systems spanning the period 2000-2023. Data preprocessing involved standardization, outlier detection using the Interquartile Range method, and temporal alignment to ensure consistency across sources.

\\subsection{Model Architecture}
Our neural network architecture employs a hybrid approach combining Long Short-Term Memory (LSTM) layers for temporal pattern extraction with attention mechanisms for feature importance weighting. The model comprises four LSTM layers with 256 hidden units each, followed by two fully connected layers with dropout regularization (p=0.3) to prevent overfitting.`,
            
            'paper/results.tex': `\\section{Results}

Our experimental evaluation demonstrates substantial improvements in predictive accuracy across multiple metrics and temporal horizons.

\\subsection{Performance Metrics}
The proposed model achieved a Mean Absolute Error (MAE) of 0.73°C for temperature predictions at a 30-day horizon, representing a 23\\% improvement over the baseline LSTM model and 31\\% improvement over traditional statistical methods. Root Mean Square Error (RMSE) was 0.94°C, with an R² value of 0.89 indicating strong explanatory power.

\\subsection{Comparative Analysis}
Benchmarking against five state-of-the-art approaches revealed that our method consistently outperformed alternatives across varying prediction horizons (7, 14, 30, and 90 days). The attention mechanism proved particularly effective in capturing seasonal patterns and extreme weather events.`,
            
            'paper/references.bib': `@article{smith2020climate,
  title={Climate Modeling with Artificial Intelligence: Current State and Future Directions},
  author={Smith, John and Anderson, Mary},
  journal={Nature Climate Change},
  volume={10},
  pages={234--245},
  year={2020},
  publisher={Nature Publishing Group}
}

@article{jones2021prediction,
  title={Deep Learning Methods for Environmental Prediction: A Comprehensive Review},
  author={Jones, Sarah and Williams, Robert},
  journal={Science},
  volume={372},
  number={6545},
  pages={891--898},
  year={2021},
  publisher={American Association for the Advancement of Science}
}`
        },
        previewImage: 'assets/previews/preview-v2.png'
    },
    
    v3: {
        version: 'v3',
        files: {
            'paper/main.tex': `\\documentclass[12pt]{article}
\\usepackage{amsmath}
\\usepackage{graphicx}
\\usepackage{cite}

\\title{Machine Learning Approaches for Climate Prediction: A Comprehensive Analysis}
\\author{Research Team}
\\date{\\today}

\\begin{document}

\\maketitle

\\begin{abstract}
This paper presents a novel hybrid deep learning framework for climate prediction that combines Long Short-Term Memory networks with attention mechanisms. Our approach demonstrates significant improvements over existing methodologies, achieving 23\\% reduction in prediction error across multiple temporal horizons.
\\end{abstract}

\\input{introduction}
\\input{methodology}
\\input{results}
\\input{conclusion}

\\bibliographystyle{plain}
\\bibliography{references}

\\end{document}`,
            
            'paper/introduction.tex': `\\section{Introduction}

\\subsection{Background and Motivation}
Anthropogenic climate change represents one of the most pressing challenges facing contemporary society \\cite{smith2020climate}. The development of accurate predictive models is essential for informing policy decisions and mitigation strategies.

\\subsection{Research Objectives}
This paper presents a novel machine learning framework for climate prediction that demonstrates significant improvements over existing methodologies. Our primary objectives are: (1) to develop a robust predictive model capturing complex nonlinear relationships, (2) to enhance model interpretability through attention mechanisms, and (3) to validate performance across multiple temporal scales.

\\subsection{Contributions}
Recent advances in deep learning have enabled unprecedented capabilities in pattern recognition and time-series forecasting \\cite{jones2021prediction}. Our approach introduces several methodological innovations that enhance both accuracy and interpretability, addressing key limitations identified in prior research.`,
            
            'paper/methodology.tex': `\\section{Methodology}

\\subsection{Research Design}
This section delineates our comprehensive approach to climate prediction, encompassing data acquisition, preprocessing, model architecture, and validation procedures.

\\subsection{Data Collection and Preprocessing}
We compiled a multi-source dataset incorporating measurements from 1,247 meteorological stations and three satellite observation systems spanning the period 2000-2023. Data preprocessing involved standardization, outlier detection using the Interquartile Range method, and temporal alignment to ensure consistency across sources.

\\subsection{Model Architecture}
Our neural network architecture employs a hybrid approach combining Long Short-Term Memory (LSTM) layers for temporal pattern extraction with attention mechanisms for feature importance weighting. The model comprises four LSTM layers with 256 hidden units each, followed by two fully connected layers with dropout regularization (p=0.3) to prevent overfitting.

\\subsection{Training and Validation}
We employed a rolling-window cross-validation strategy with 80\\% training, 10\\% validation, and 10\\% test data. The model was trained using the Adam optimizer with an initial learning rate of 0.001, reduced by a factor of 0.5 when validation loss plateaued.`,
            
            'paper/results.tex': `\\section{Results}

\\subsection{Overall Performance}
Our experimental evaluation demonstrates substantial improvements in predictive accuracy across multiple metrics and temporal horizons.

\\subsection{Quantitative Analysis}
The proposed model achieved a Mean Absolute Error (MAE) of 0.73°C for temperature predictions at a 30-day horizon, representing a 23\\% improvement over the baseline LSTM model and 31\\% improvement over traditional statistical methods. Root Mean Square Error (RMSE) was 0.94°C, with an R² value of 0.89 indicating strong explanatory power.

\\subsection{Comparative Evaluation}
Benchmarking against five state-of-the-art approaches revealed that our method consistently outperformed alternatives across varying prediction horizons (7, 14, 30, and 90 days). The attention mechanism proved particularly effective in capturing seasonal patterns and extreme weather events.

\\subsection{Ablation Study}
Component-wise analysis demonstrated that the attention mechanism contributed 12\\% of the overall performance gain, while the hybrid LSTM architecture accounted for the remaining improvement.`,
            
            'paper/conclusion.tex': `\\section{Conclusion}

This research demonstrates the efficacy of hybrid deep learning architectures for climate prediction. Our approach achieves state-of-the-art performance while maintaining interpretability through attention mechanisms.

\\subsection{Key Findings}
The integration of LSTM networks with attention mechanisms enables accurate long-term climate predictions, with particular strength in capturing extreme weather events and seasonal patterns.

\\subsection{Limitations and Future Work}
While our model shows promising results, several limitations warrant consideration. Future research should explore ensemble methods, incorporate additional data modalities, and extend validation to diverse geographical regions.

\\subsection{Implications}
These findings have significant implications for climate policy and resource allocation, enabling more informed decision-making in the face of environmental uncertainty.`,
            
            'paper/references.bib': `@article{smith2020climate,
  title={Climate Modeling with Artificial Intelligence: Current State and Future Directions},
  author={Smith, John and Anderson, Mary},
  journal={Nature Climate Change},
  volume={10},
  pages={234--245},
  year={2020},
  publisher={Nature Publishing Group},
  doi={10.1038/s41558-020-0821-1}
}

@article{jones2021prediction,
  title={Deep Learning Methods for Environmental Prediction: A Comprehensive Review},
  author={Jones, Sarah and Williams, Robert},
  journal={Science},
  volume={372},
  number={6545},
  pages={891--898},
  year={2021},
  publisher={American Association for the Advancement of Science},
  doi={10.1126/science.abg5298}
}`
        },
        previewImage: 'assets/previews/preview-v3.png'
    }
};

// Make DRAFTS available globally
if (typeof window !== 'undefined') {
    window.DRAFTS = DRAFTS;
}
