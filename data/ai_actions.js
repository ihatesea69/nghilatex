// Mock AI action definitions for OpenAI Prism Demo
// This file contains all AI action configurations with thinking messages and behaviors

const AI_ACTIONS = {
    // Writing Category
    improve_tone: {
        id: 'improve_tone',
        category: 'writing',
        label: 'Improve academic tone',
        thinkingMessage: 'Analyzing document context and enhancing academic tone...',
        duration: 1500,
        resultType: 'content_update',
        targetDraft: 'v2',
        targetFile: 'paper/introduction.tex',
        highlightLines: [1, 8],
        notification: 'Revision created: Draft v2'
    },
    
    refactor_paragraph: {
        id: 'refactor_paragraph',
        category: 'writing',
        label: 'Refactor paragraph',
        thinkingMessage: 'Restructuring paragraph for improved clarity and flow...',
        duration: 1400,
        resultType: 'content_update',
        targetDraft: 'v2',
        targetFile: null,
        highlightLines: [3, 6],
        notification: 'Paragraph refactored successfully'
    },
    
    rewrite_clarity: {
        id: 'rewrite_clarity',
        category: 'writing',
        label: 'Rewrite for clarity',
        thinkingMessage: 'Enhancing clarity and readability...',
        duration: 1600,
        resultType: 'content_update',
        targetDraft: 'v2',
        targetFile: null,
        highlightLines: [1, 5],
        notification: 'Content rewritten for improved clarity'
    },
    
    // Structure Category
    restructure_section: {
        id: 'restructure_section',
        category: 'structure',
        label: 'Restructure section',
        thinkingMessage: 'Evaluating document structure and logical flow...',
        duration: 1800,
        resultType: 'suggestion',
        targetDraft: 'v3',
        targetFile: null,
        highlightLines: [],
        notification: 'Structure optimization complete',
        suggestion: {
            title: 'Suggested Structure Improvements',
            content: `Based on analysis of your document, I recommend the following restructuring:

1. Introduction
   - Add Background and Motivation subsection
   - Add Research Objectives subsection
   - Add Contributions subsection

2. Methodology
   - Add Research Design subsection
   - Reorganize existing content under clear subsections
   - Add Training and Validation subsection

3. Results
   - Add Overall Performance subsection
   - Separate Quantitative Analysis
   - Add Ablation Study subsection

4. Add Conclusion section
   - Key Findings
   - Limitations and Future Work
   - Implications

This structure will improve logical flow and reader comprehension.`,
            applyButton: true
        }
    },
    
    generate_abstract: {
        id: 'generate_abstract',
        category: 'structure',
        label: 'Generate abstract',
        thinkingMessage: 'Synthesizing key points and generating abstract...',
        duration: 1700,
        resultType: 'content_update',
        targetDraft: 'v3',
        targetFile: 'paper/main.tex',
        highlightLines: [10, 13],
        notification: 'Abstract generated and added to document'
    },
    
    suggest_conclusion: {
        id: 'suggest_conclusion',
        category: 'structure',
        label: 'Suggest conclusion',
        thinkingMessage: 'Analyzing findings and drafting conclusion...',
        duration: 1600,
        resultType: 'content_update',
        targetDraft: 'v3',
        targetFile: 'paper/conclusion.tex',
        highlightLines: [],
        notification: 'Conclusion section created'
    },
    
    // Technical Category
    fix_formatting: {
        id: 'fix_formatting',
        category: 'technical',
        label: 'Fix LaTeX formatting',
        thinkingMessage: 'Checking LaTeX syntax and formatting conventions...',
        duration: 1300,
        resultType: 'notification',
        targetDraft: null,
        targetFile: null,
        highlightLines: [],
        notification: 'LaTeX formatting verified - no issues found'
    },
    
    check_equations: {
        id: 'check_equations',
        category: 'technical',
        label: 'Check equations',
        thinkingMessage: 'Validating mathematical notation and equation formatting...',
        duration: 1400,
        resultType: 'notification',
        targetDraft: null,
        targetFile: null,
        highlightLines: [],
        notification: 'All equations properly formatted and numbered'
    },
    
    manage_citations: {
        id: 'manage_citations',
        category: 'technical',
        label: 'Manage citations',
        thinkingMessage: 'Formatting citations and bibliography to APA standard...',
        duration: 1500,
        resultType: 'content_update',
        targetDraft: 'v2',
        targetFile: 'paper/references.bib',
        highlightLines: [],
        notification: 'Citations formatted to APA standard',
        modifiedFiles: ['paper/references.bib']
    }
};

// Action categories for UI rendering
const ACTION_CATEGORIES = {
    writing: {
        title: 'Writing',
        actions: ['improve_tone', 'refactor_paragraph', 'rewrite_clarity']
    },
    structure: {
        title: 'Structure',
        actions: ['restructure_section', 'generate_abstract', 'suggest_conclusion']
    },
    technical: {
        title: 'Technical',
        actions: ['fix_formatting', 'check_equations', 'manage_citations']
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.AI_ACTIONS = AI_ACTIONS;
    window.ACTION_CATEGORIES = ACTION_CATEGORIES;
}
