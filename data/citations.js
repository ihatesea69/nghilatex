// Mock citation and bibliography data for OpenAI Prism Demo

const CITATIONS = {
    // BibTeX entries
    bibtex: {
        smith2020climate: `@article{smith2020climate,
  title={Climate Modeling with Artificial Intelligence: Current State and Future Directions},
  author={Smith, John and Anderson, Mary},
  journal={Nature Climate Change},
  volume={10},
  pages={234--245},
  year={2020},
  publisher={Nature Publishing Group},
  doi={10.1038/s41558-020-0821-1}
}`,
        jones2021prediction: `@article{jones2021prediction,
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
    
    // Formatted references
    formatted: {
        apa: {
            smith2020climate: 'Smith, J., & Anderson, M. (2020). Climate Modeling with Artificial Intelligence: Current State and Future Directions. Nature Climate Change, 10, 234-245. https://doi.org/10.1038/s41558-020-0821-1',
            jones2021prediction: 'Jones, S., & Williams, R. (2021). Deep Learning Methods for Environmental Prediction: A Comprehensive Review. Science, 372(6545), 891-898. https://doi.org/10.1126/science.abg5298'
        },
        ieee: {
            smith2020climate: 'J. Smith and M. Anderson, "Climate Modeling with Artificial Intelligence: Current State and Future Directions," Nature Climate Change, vol. 10, pp. 234-245, 2020.',
            jones2021prediction: 'S. Jones and R. Williams, "Deep Learning Methods for Environmental Prediction: A Comprehensive Review," Science, vol. 372, no. 6545, pp. 891-898, 2021.'
        }
    },
    
    // Citation commands used in LaTeX
    commands: {
        inline: '\\cite{smith2020climate}',
        multiple: '\\cite{smith2020climate,jones2021prediction}',
        parenthetical: '\\citep{smith2020climate}',
        textual: '\\citet{jones2021prediction}'
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.CITATIONS = CITATIONS;
}
