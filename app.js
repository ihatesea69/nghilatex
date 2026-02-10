// OpenAI Prism Demo - Main Application Controller
// This is a demo application with hardcoded interactions and mock data

// Header Component
class Header {
    constructor() {
        this.projectName = 'paper_draft_v3';
        this.statusText = 'AI-assisted editing enabled';
        this.logoPath = 'assets/prism-logo.svg';
    }
    
    render() {
        const headerElement = document.getElementById('header');
        if (!headerElement) return;
        
        // Header is already in HTML, just update the content
        this.updateProjectName(this.projectName);
        this.updateStatus(this.statusText);
    }
    
    updateStatus(statusText) {
        const statusElement = document.getElementById('statusIndicator');
        if (statusElement) {
            statusElement.textContent = statusText;
        }
    }
    
    updateProjectName(name) {
        const nameElement = document.getElementById('projectName');
        if (nameElement) {
            nameElement.textContent = name;
        }
    }
}

// File Tree Component
class FileTree {
    constructor(fileStructure, onFileSelect) {
        this.fileStructure = fileStructure;
        this.onFileSelect = onFileSelect;
        this.activeFile = 'paper/main.tex';
        this.modifiedFiles = new Set();
    }
    
    render() {
        const container = document.getElementById('fileTreeContent');
        if (!container) return;
        
        container.innerHTML = this.renderFolder(this.fileStructure);
        this.attachEventListeners();
    }
    
    renderFolder(items) {
        let html = '';
        
        for (const item of items) {
            if (item.type === 'folder') {
                // Don't render folder header, just render children
                html += this.renderFolder(item.children);
            } else {
                const isActive = item.path === this.activeFile;
                const isModified = this.modifiedFiles.has(item.path);
                const iconColor = item.name.endsWith('.bib') ? '#10b981' : '#6366f1';
                
                html += `
                    <div class="file-item ${isActive ? 'active' : ''} ${isModified ? 'modified' : ''}" data-path="${item.path}">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="${iconColor}">
                            <rect x="2" y="2" width="10" height="10" rx="1"/>
                        </svg>
                        <span>${item.name}</span>
                    </div>
                `;
            }
        }
        
        return html;
    }
    
    attachEventListeners() {
        const fileItems = document.querySelectorAll('.file-item');
        fileItems.forEach(item => {
            item.addEventListener('click', () => {
                const filePath = item.getAttribute('data-path');
                this.selectFile(filePath);
            });
        });
    }
    
    selectFile(filePath) {
        this.activeFile = filePath;
        this.render();
        
        if (this.onFileSelect) {
            this.onFileSelect(filePath);
        }
    }
    
    markFileModified(filePath) {
        this.modifiedFiles.add(filePath);
        this.render();
    }
    
    clearModified(filePath) {
        this.modifiedFiles.delete(filePath);
        this.render();
    }
}

// Editor Component
class Editor {
    constructor() {
        this.currentContent = '';
        this.highlightedLines = [];
        this.currentDraft = 'v1';
        this.editorElement = null;
    }
    
    init() {
        this.editorElement = document.getElementById('editor');
        this.setupLineNumbers();
    }
    
    setupLineNumbers() {
        if (!this.editorElement) return;
        
        // Update line numbers on content change
        this.editorElement.addEventListener('input', () => {
            this.updateLineNumbers();
        });
        
        // Update line numbers on scroll
        this.editorElement.addEventListener('scroll', () => {
            const lineNumbers = document.getElementById('lineNumbers');
            if (lineNumbers) {
                lineNumbers.scrollTop = this.editorElement.scrollTop;
            }
        });
        
        // Initial line numbers
        this.updateLineNumbers();
    }
    
    updateLineNumbers() {
        const lineNumbers = document.getElementById('lineNumbers');
        if (!lineNumbers || !this.editorElement) return;
        
        const lines = this.editorElement.value.split('\n');
        const lineNumbersHtml = lines.map((_, index) => 
            `<div>${index + 1}</div>`
        ).join('');
        
        lineNumbers.innerHTML = lineNumbersHtml;
    }
    
    setContent(content, highlight = false) {
        if (!this.editorElement) return;
        
        if (highlight) {
            this.editorElement.classList.add('updating');
            setTimeout(() => {
                this.editorElement.value = content;
                this.currentContent = content;
                this.updateLineNumbers();
                this.editorElement.classList.remove('updating');
            }, 300);
        } else {
            this.editorElement.value = content;
            this.currentContent = content;
            this.updateLineNumbers();
        }
    }
    
    highlightLines(startLine, endLine) {
        // For this demo, we'll use a simple flash effect
        // In a real implementation, you might use a code editor library
        if (!this.editorElement) return;
        
        this.editorElement.classList.add('updating');
        setTimeout(() => {
            this.editorElement.classList.remove('updating');
        }, 500);
    }
    
    showRevisionBadge(version) {
        const badge = document.getElementById('revisionBadge');
        if (!badge) return;
        
        badge.textContent = `Revision created: Draft ${version}`;
        badge.style.display = 'block';
        
        // Hide after 3 seconds
        setTimeout(() => {
            badge.style.display = 'none';
        }, 3000);
    }
    
    clearHighlights() {
        this.highlightedLines = [];
        if (this.editorElement) {
            this.editorElement.classList.remove('updating');
        }
    }
}

// AI Assistant Component
class AIAssistant {
    constructor(actions, categories, onActionExecute) {
        this.actions = actions;
        this.categories = categories;
        this.onActionExecute = onActionExecute;
        this.isProcessing = false;
    }
    
    render() {
        const container = document.getElementById('aiContent');
        if (!container) return;
        
        let html = '';
        
        for (const [categoryKey, categoryData] of Object.entries(this.categories)) {
            html += `
                <div class="action-category">
                    <div class="category-title">${categoryData.title}</div>
                    <div class="action-buttons">
            `;
            
            for (const actionId of categoryData.actions) {
                const action = this.actions[actionId];
                if (action) {
                    html += `
                        <button class="action-btn" data-action-id="${actionId}" ${this.isProcessing ? 'disabled' : ''}>
                            ${action.label}
                        </button>
                    `;
                }
            }
            
            html += `
                    </div>
                </div>
            `;
        }
        
        container.innerHTML = html;
        this.attachEventListeners();
    }
    
    attachEventListeners() {
        const buttons = document.querySelectorAll('.action-btn');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const actionId = button.getAttribute('data-action-id');
                this.executeAction(actionId);
            });
        });
    }
    
    async executeAction(actionId) {
        if (this.isProcessing) return;
        
        const action = this.actions[actionId];
        if (!action) {
            console.error('Action not found:', actionId);
            return;
        }
        
        this.isProcessing = true;
        this.disableActions();
        
        // Show thinking indicator
        this.showThinking(action.thinkingMessage);
        
        // Wait for the specified duration
        await new Promise(resolve => setTimeout(resolve, action.duration));
        
        // Hide thinking indicator
        this.hideThinking();
        
        // Execute callback
        if (this.onActionExecute) {
            this.onActionExecute(actionId, action);
        }
        
        // Show result if needed
        if (action.resultType === 'suggestion' && action.suggestion) {
            this.showResult(action.suggestion);
        } else if (action.notification) {
            this.showNotification(action.notification);
        }
        
        this.isProcessing = false;
        this.enableActions();
    }
    
    showThinking(message) {
        const thinkingDiv = document.getElementById('aiThinking');
        const messageElement = document.getElementById('thinkingMessage');
        
        if (thinkingDiv && messageElement) {
            messageElement.textContent = message;
            thinkingDiv.style.display = 'block';
        }
    }
    
    hideThinking() {
        const thinkingDiv = document.getElementById('aiThinking');
        if (thinkingDiv) {
            thinkingDiv.style.display = 'none';
        }
    }
    
    showResult(result) {
        const resultDiv = document.getElementById('aiResult');
        if (!resultDiv) return;
        
        let html = `
            <h4>${result.title}</h4>
            <p style="white-space: pre-line; font-size: 0.875rem; line-height: 1.6; color: var(--text-secondary);">${result.content}</p>
        `;
        
        if (result.applyButton) {
            html += `<button class="action-btn" id="applyChangesBtn" style="margin-top: var(--space-md);">Apply changes</button>`;
        }
        
        resultDiv.innerHTML = html;
        resultDiv.style.display = 'block';
        
        // Attach event listener for apply button
        if (result.applyButton) {
            const applyBtn = document.getElementById('applyChangesBtn');
            if (applyBtn) {
                applyBtn.addEventListener('click', () => {
                    if (this.onActionExecute) {
                        this.onActionExecute('apply_restructure', { targetDraft: 'v3' });
                    }
                    resultDiv.style.display = 'none';
                });
            }
        }
        
        // Hide after 10 seconds
        setTimeout(() => {
            resultDiv.style.display = 'none';
        }, 10000);
    }
    
    showNotification(message) {
        // Simple notification - could be enhanced with a toast system
        console.log('Notification:', message);
    }
    
    disableActions() {
        const buttons = document.querySelectorAll('.action-btn');
        buttons.forEach(button => {
            button.disabled = true;
        });
    }
    
    enableActions() {
        const buttons = document.querySelectorAll('.action-btn');
        buttons.forEach(button => {
            button.disabled = false;
        });
        this.render(); // Re-render to update button states
    }
}

class PrismApp {
    constructor() {
        this.state = {
            currentFile: 'paper/main.tex',
            currentDraft: 'v1',
            activeAction: null,
            actionQueue: []
        };
        
        this.components = {
            header: null,
            fileTree: null,
            editor: null,
            aiAssistant: null,
            pdfPreview: null
        };
        
        // File structure
        this.fileStructure = [
            {
                path: 'paper',
                type: 'folder',
                children: [
                    { path: 'paper/main.tex', name: 'main.tex', type: 'file' },
                    { path: 'paper/introduction.tex', name: 'introduction.tex', type: 'file' },
                    { path: 'paper/methodology.tex', name: 'methodology.tex', type: 'file' },
                    { path: 'paper/results.tex', name: 'results.tex', type: 'file' },
                    { path: 'paper/references.bib', name: 'references.bib', type: 'file' }
                ]
            }
        ];
    }
    
    init() {
        // Initialize components
        this.components.header = new Header();
        this.components.fileTree = new FileTree(
            this.fileStructure,
            (filePath) => this.handleFileSelect(filePath)
        );
        this.components.editor = new Editor();
        this.components.editor.init();
        this.components.aiAssistant = new AIAssistant(
            window.AI_ACTIONS,
            window.ACTION_CATEGORIES,
            (actionId, action) => this.handleAIAction(actionId, action)
        );
        
        console.log('OpenAI Prism Demo initialized');
        console.log('Current state:', this.state);
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Render initial state
        this.renderInitialState();
    }
    
    setupEventListeners() {
        // Modal close button
        const modalClose = document.getElementById('modalClose');
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                document.getElementById('valueModal').style.display = 'none';
            });
        }
        
        // Close modal on outside click
        const modal = document.getElementById('valueModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
        
        // Chat input
        const chatInput = document.getElementById('chatInput');
        if (chatInput) {
            // Show suggested prompts on focus
            chatInput.addEventListener('focus', () => {
                const suggestedPrompts = document.getElementById('suggestedPrompts');
                if (suggestedPrompts) {
                    suggestedPrompts.style.display = 'flex';
                }
            });
            
            // Hide suggested prompts when typing
            chatInput.addEventListener('input', () => {
                if (chatInput.value.length > 0) {
                    const suggestedPrompts = document.getElementById('suggestedPrompts');
                    if (suggestedPrompts) {
                        suggestedPrompts.style.display = 'none';
                    }
                }
            });
            
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleChatInput(chatInput.value);
                    chatInput.value = '';
                }
            });
        }
        
        // Send button
        const sendBtn = document.getElementById('sendChatBtn');
        if (sendBtn) {
            sendBtn.addEventListener('click', () => {
                if (chatInput && chatInput.value.trim()) {
                    this.handleChatInput(chatInput.value);
                    chatInput.value = '';
                }
            });
        }
        
        // Suggested prompt chips
        const promptChips = document.querySelectorAll('.prompt-chip');
        promptChips.forEach(chip => {
            chip.addEventListener('click', () => {
                const prompt = chip.getAttribute('data-prompt');
                if (chatInput) {
                    chatInput.value = prompt;
                    chatInput.focus();
                    // Hide suggestions
                    const suggestedPrompts = document.getElementById('suggestedPrompts');
                    if (suggestedPrompts) {
                        suggestedPrompts.style.display = 'none';
                    }
                    // Auto-send
                    setTimeout(() => {
                        this.handleChatInput(prompt);
                        chatInput.value = '';
                    }, 300);
                }
            });
        });
        
        // Compile button
        const compileBtn = document.querySelector('.compile-btn');
        if (compileBtn) {
            compileBtn.addEventListener('click', () => {
                this.handleCompile();
            });
        }
        
        // Zoom button
        const zoomBtn = document.querySelector('.zoom-btn');
        if (zoomBtn) {
            zoomBtn.addEventListener('click', () => {
                this.handleZoom();
            });
        }
        
        // Tools button
        const toolsBtn = document.querySelector('.tools-btn');
        if (toolsBtn) {
            toolsBtn.addEventListener('click', () => {
                this.showToolsMenu();
            });
        }
        
        // Tab buttons
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                // Add active to clicked tab
                tab.classList.add('active');
                this.showToast(`📂 Switched to ${tab.textContent}`, 'info');
            });
        });
        
        // Floating action buttons
        const refreshBtn = document.getElementById('refreshBtn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => {
                this.handleRefresh();
            });
        }
        
        const undoBtn = document.getElementById('undoBtn');
        if (undoBtn) {
            undoBtn.addEventListener('click', () => {
                this.handleUndo();
            });
        }
        
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.handleNext();
            });
        }
    }
    
    handleCompile() {
        console.log('Compiling...');
        
        // Show compiling animation
        const compileBtn = document.querySelector('.compile-btn');
        if (compileBtn) {
            compileBtn.disabled = true;
            compileBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="spin">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" fill="none" stroke-width="2"/>
                </svg>
                <span>Compiling...</span>
            `;
        }
        
        // Simulate compilation
        setTimeout(() => {
            // Update preview to current draft
            const previewImage = document.getElementById('previewImage');
            if (previewImage && window.DRAFTS[this.state.currentDraft]) {
                previewImage.classList.add('updating');
                setTimeout(() => {
                    previewImage.src = window.DRAFTS[this.state.currentDraft].previewImage;
                    previewImage.classList.remove('updating');
                }, 300);
            }
            
            // Reset button
            if (compileBtn) {
                compileBtn.disabled = false;
                compileBtn.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 2v12M4 10l4 4 4-4"/>
                    </svg>
                    <span>Compile</span>
                `;
            }
            
            // Show success badge
            this.showToast('✓ Compilation successful!', 'success');
        }, 2000);
    }
    
    handleRefresh() {
        console.log('Refreshing...');
        // Reload current file
        if (this.components.editor && window.DRAFTS) {
            const content = window.DRAFTS[this.state.currentDraft].files[this.state.currentFile];
            this.components.editor.setContent(content || '// No content available', true);
        }
        this.showToast('↻ Content refreshed', 'info');
    }
    
    handleUndo() {
        console.log('Undo...');
        // Go back to previous draft version
        const versions = ['v1', 'v2', 'v3'];
        const currentIndex = versions.indexOf(this.state.currentDraft);
        if (currentIndex > 0) {
            this.updateDraftVersion(versions[currentIndex - 1]);
            this.showToast('← Reverted to previous version', 'info');
        } else {
            this.showToast('Already at first version', 'warning');
        }
    }
    
    handleNext() {
        console.log('Next...');
        // Go to next draft version
        const versions = ['v1', 'v2', 'v3'];
        const currentIndex = versions.indexOf(this.state.currentDraft);
        if (currentIndex < versions.length - 1) {
            this.updateDraftVersion(versions[currentIndex + 1]);
            this.showToast('→ Advanced to next version', 'info');
        } else {
            this.showToast('Already at latest version', 'warning');
        }
    }
    
    handleZoom() {
        console.log('Zoom toggled');
        const previewContent = document.querySelector('.preview-content');
        if (previewContent) {
            if (previewContent.style.zoom === '1.2') {
                previewContent.style.zoom = '1';
                this.showToast('🔍 Zoom: Fit to width', 'info');
            } else {
                previewContent.style.zoom = '1.2';
                this.showToast('🔍 Zoom: 120%', 'info');
            }
        }
    }
    
    showToolsMenu() {
        this.showToast('🔧 Tools: Compile, Download, Share, Settings', 'info');
        // In a real app, this would show a dropdown menu
    }
    
    showToast(message, type = 'info') {
        const badge = document.getElementById('revisionBadge');
        if (!badge) return;
        
        badge.textContent = message;
        badge.style.display = 'block';
        badge.style.background = type === 'success' ? '#10b981' : 
                                 type === 'warning' ? '#f59e0b' : 
                                 '#0066cc';
        
        setTimeout(() => {
            badge.style.display = 'none';
        }, 2000);
    }
    
    handleChatInput(message) {
        if (!message.trim()) return;
        
        console.log('Chat message:', message);
        
        const lowerMessage = message.toLowerCase();
        
        // Hide suggested prompts
        const suggestedPrompts = document.getElementById('suggestedPrompts');
        if (suggestedPrompts) {
            suggestedPrompts.style.display = 'none';
        }
        
        // Match different AI actions based on keywords
        if (lowerMessage.includes('improve') && lowerMessage.includes('tone')) {
            this.showToast('🤖 Improving academic tone...', 'info');
            if (this.components.aiAssistant) {
                this.components.aiAssistant.executeAction('improve_tone');
            }
        } else if (lowerMessage.includes('restructure') || lowerMessage.includes('reorganize')) {
            this.showToast('🤖 Analyzing document structure...', 'info');
            if (this.components.aiAssistant) {
                this.components.aiAssistant.executeAction('restructure_section');
            }
        } else if (lowerMessage.includes('format') && (lowerMessage.includes('citation') || lowerMessage.includes('reference'))) {
            this.showToast('🤖 Formatting citations...', 'info');
            if (this.components.aiAssistant) {
                this.components.aiAssistant.executeAction('manage_citations');
            }
        } else if (lowerMessage.includes('abstract')) {
            this.showToast('🤖 Generating abstract...', 'info');
            if (this.components.aiAssistant) {
                this.components.aiAssistant.executeAction('generate_abstract');
            }
        } else if (lowerMessage.includes('fix') && lowerMessage.includes('format')) {
            this.showToast('🤖 Checking LaTeX formatting...', 'info');
            if (this.components.aiAssistant) {
                this.components.aiAssistant.executeAction('fix_formatting');
            }
        } else if (lowerMessage.includes('refactor') || lowerMessage.includes('rewrite')) {
            this.showToast('🤖 Refactoring content...', 'info');
            if (this.components.aiAssistant) {
                this.components.aiAssistant.executeAction('refactor_paragraph');
            }
        } else if (lowerMessage.includes('conclusion')) {
            this.showToast('🤖 Suggesting conclusion...', 'info');
            if (this.components.aiAssistant) {
                this.components.aiAssistant.executeAction('suggest_conclusion');
            }
        } else if (lowerMessage.includes('equation')) {
            this.showToast('🤖 Checking equations...', 'info');
            if (this.components.aiAssistant) {
                this.components.aiAssistant.executeAction('check_equations');
            }
        } else if (lowerMessage.includes('clarity')) {
            this.showToast('🤖 Improving clarity...', 'info');
            if (this.components.aiAssistant) {
                this.components.aiAssistant.executeAction('rewrite_clarity');
            }
        } else {
            // Generic response
            this.showToast('💬 ' + message, 'info');
            setTimeout(() => {
                this.showToast('🤖 I can help with: improving tone, restructuring, formatting citations, generating abstracts, and more!', 'info');
            }, 1500);
        }
    }
    
    renderInitialState() {
        // Render header
        if (this.components.header) {
            this.components.header.render();
        }
        
        // Render file tree
        if (this.components.fileTree) {
            this.components.fileTree.render();
        }
        
        // Render AI assistant (hidden in new UI, but available via chat)
        if (this.components.aiAssistant) {
            // AI assistant is now integrated into chat
            console.log('AI Assistant ready');
        }
        
        // Load initial file content
        if (this.components.editor && window.DRAFTS) {
            const initialContent = window.DRAFTS[this.state.currentDraft].files[this.state.currentFile];
            this.components.editor.setContent(initialContent || '// No content available');
        }
        
        // Generate outline from content
        this.updateOutline();
        
        console.log('Initial state rendered');
    }
    
    updateOutline() {
        const outlineContent = document.getElementById('outlineContent');
        if (!outlineContent || !window.DRAFTS) return;
        
        const content = window.DRAFTS[this.state.currentDraft].files[this.state.currentFile];
        if (!content) return;
        
        // Extract sections from LaTeX content
        const sections = [];
        const lines = content.split('\n');
        
        lines.forEach((line, lineIndex) => {
            if (line.includes('\\section{')) {
                const match = line.match(/\\section\{([^}]+)\}/);
                if (match) sections.push({ level: 0, title: match[1], line: lineIndex });
            } else if (line.includes('\\subsection{')) {
                const match = line.match(/\\subsection\{([^}]+)\}/);
                if (match) sections.push({ level: 1, title: match[1], line: lineIndex });
            } else if (line.includes('\\subsubsection{')) {
                const match = line.match(/\\subsubsection\{([^}]+)\}/);
                if (match) sections.push({ level: 2, title: match[1], line: lineIndex });
            }
        });
        
        // Render outline with click handlers
        const outlineHtml = sections.map((section, index) => {
            const truncated = section.title.length > 20 
                ? section.title.substring(0, 17) + '...' 
                : section.title;
            return `<div class="outline-item indent-${section.level}" data-line="${section.line}" data-section="${index}">${truncated}</div>`;
        }).join('');
        
        outlineContent.innerHTML = outlineHtml || '<div class="outline-item">No sections found</div>';
        
        // Add click handlers to outline items
        const outlineItems = outlineContent.querySelectorAll('.outline-item[data-line]');
        outlineItems.forEach(item => {
            item.addEventListener('click', () => {
                const lineNumber = parseInt(item.getAttribute('data-line'));
                this.scrollToLine(lineNumber);
                this.showToast('📍 Jumped to section', 'info');
            });
        });
    }
    
    scrollToLine(lineNumber) {
        const editor = document.getElementById('editor');
        if (!editor) return;
        
        // Calculate approximate scroll position
        const lineHeight = 1.6 * 14; // line-height * font-size
        const scrollPosition = lineNumber * lineHeight;
        
        editor.scrollTop = scrollPosition;
        
        // Flash effect
        editor.classList.add('updating');
        setTimeout(() => {
            editor.classList.remove('updating');
        }, 500);
    }
    
    handleFileSelect(filePath) {
        // Update state
        this.state.currentFile = filePath;
        
        // Update current file name display
        const currentFileName = document.getElementById('currentFileName');
        if (currentFileName) {
            const fileName = filePath.split('/').pop();
            currentFileName.textContent = fileName;
        }
        
        // Update editor content
        if (this.components.editor && window.DRAFTS) {
            const content = window.DRAFTS[this.state.currentDraft].files[filePath];
            this.components.editor.setContent(content || '// No content available', true);
        }
        
        // Update outline
        this.updateOutline();
        
        console.log('File selected:', filePath);
    }
    
    handleAIAction(actionId, action) {
        console.log('AI action executed:', actionId, action);
        
        // Handle different action types
        if (action.targetDraft && action.targetDraft !== this.state.currentDraft) {
            // Update to new draft version
            this.updateDraftVersion(action.targetDraft);
        }
        
        // Show revision badge if notification exists
        if (action.notification && this.components.editor) {
            this.components.editor.showRevisionBadge(action.targetDraft || this.state.currentDraft);
        }
        
        // Mark files as modified if specified
        if (action.modifiedFiles && this.components.fileTree) {
            action.modifiedFiles.forEach(filePath => {
                this.components.fileTree.markFileModified(filePath);
            });
        }
        
        // Update outline after content changes
        this.updateOutline();
    }
    
    updateDraftVersion(newVersion) {
        console.log('Updating draft version from', this.state.currentDraft, 'to', newVersion);
        
        this.state.currentDraft = newVersion;
        
        // Update editor content
        if (this.components.editor && window.DRAFTS) {
            const content = window.DRAFTS[newVersion].files[this.state.currentFile];
            this.components.editor.setContent(content || '// No content available', true);
        }
        
        // Update PDF preview
        const previewImage = document.getElementById('previewImage');
        if (previewImage && window.DRAFTS[newVersion]) {
            const newPreview = window.DRAFTS[newVersion].previewImage;
            previewImage.classList.add('updating');
            setTimeout(() => {
                previewImage.src = newPreview;
                previewImage.classList.remove('updating');
            }, 300);
        }
        
        // Update header status
        if (this.components.header) {
            this.components.header.updateStatus(`Draft ${newVersion} - AI-assisted editing enabled`);
        }
        
        // Update outline
        this.updateOutline();
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.prismApp = new PrismApp();
    window.prismApp.init();
});
