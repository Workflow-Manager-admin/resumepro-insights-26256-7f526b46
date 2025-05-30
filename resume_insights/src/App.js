import React, { useState } from 'react';
import './App.css';

// PUBLIC_INTERFACE
/**
 * The main container for ResumePro Insights. Provides a light-themed 2-column layout
 * with top navigation (template selection and export), a resume editor (with stub real-time suggestions),
 * and an analytics dashboard (stub).
 */
function App() {
  // States for template selection and export (stubs)
  const [selectedTemplate, setSelectedTemplate] = useState('Modern');
  const [resumeText, setResumeText] = useState('');

  // Stub templates
  const templates = ['Modern', 'Classic', 'Creative'];

  // Color palette from requirements
  const palette = {
    primary: '#2D3A4A',
    secondary: '#F5F7FA',
    accent: '#4E9F3D',
  };

  // Stub real-time suggestion logic
  function getSuggestions(text) {
    if (!text) return ["Start typing your resume to see suggestions."];
    const tips = [];
    if (text.length < 100) {
      tips.push("Add more details to strengthen your profile.");
    }
    if (!/skills|experience|education/i.test(text)) {
      tips.push("Include sections like Skills, Experience, and Education.");
    }
    if (tips.length === 0) tips.push("Looking good! Keep refining.");
    return tips;
  }

  // Stub analytics (randomly generated for now)
  const analytics = {
    score: resumeText.length > 0 ? Math.min(100, resumeText.length / 4) : 0,
    strengths: ['Strong Action Verbs', 'Clear Formatting'],
    improvements: ['Expand Experience Section', 'Highlight Achievements'],
  };

  // Stub export handler
  const handleExport = (type) => {
    alert(`Exporting as ${type} (stub).`);
  };

  return (
    <div
      className="app"
      style={{
        minHeight: '100vh',
        background: palette.secondary,
        color: palette.primary,
      }}
    >
      {/* Top Navigation Bar */}
      <nav
        className="navbar"
        style={{
          background: palette.primary,
          color: palette.secondary,
          position: 'fixed',
          width: '100%',
          top: 0,
          left: 0,
          zIndex: 999,
          boxShadow: '0 2px 4px 0 rgba(0,0,0,0.03)'
        }}
      >
        <div className="container" style={{ maxWidth: 1200, width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo" style={{ color: palette.secondary, fontWeight: 700, fontSize: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                className="logo-symbol"
                style={{ color: palette.accent, fontSize: 26, fontWeight: 900 }}
                aria-label="ResumePro"
              >
                ⧫
              </span>
              ResumePro <span style={{ fontWeight: 400 }}>Insights</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {/* Template Selector */}
              <div>
                <label htmlFor="template-select" style={{ marginRight: 6 }}>Template:</label>
                <select
                  id="template-select"
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  style={{
                    padding: '4px 8px',
                    borderRadius: 4,
                    border: `1px solid ${palette.accent}`,
                    background: palette.secondary,
                    color: palette.primary,
                    fontWeight: 500,
                  }}
                  aria-label="Select template"
                >
                  {templates.map((tpl) => (
                    <option key={tpl} value={tpl}>{tpl}</option>
                  ))}
                </select>
              </div>
              {/* Export Options */}
              <div>
                <button
                  className="btn"
                  style={{ background: palette.accent, color: '#fff', marginRight: 8 }}
                  onClick={() => handleExport('PDF')}
                >
                  Export PDF
                </button>
                <button
                  className="btn"
                  style={{ background: palette.accent, color: '#fff' }}
                  onClick={() => handleExport('DOCX')}
                >
                  Export DOCX
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Two-column main content */}
      <main
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 0,
          marginTop: 84,
          minHeight: 'calc(100vh - 84px)',
          background: palette.secondary
        }}
      >
        {/* Left: Resume Editor + Suggestions */}
        <section
          style={{
            flex: 2,
            padding: '32px 32px 32px 6vw',
            borderRight: `1px solid #e0e4e9`,
            minWidth: 0,
            background: palette.secondary,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
          }}
        >
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16, color: palette.primary }}>
            Resume Editor
          </h2>
          <textarea
            value={resumeText}
            onChange={e => setResumeText(e.target.value)}
            placeholder="Type or paste your resume here..."
            style={{
              minHeight: 220,
              fontSize: 16,
              fontFamily: 'inherit',
              border: `1.5px solid ${palette.primary}`,
              borderRadius: 6,
              padding: '16px 12px',
              marginBottom: 16,
              color: palette.primary,
              background: '#fff',
              resize: 'vertical',
              outline: 'none',
              width: '100%',
              boxShadow: 'none',
            }}
          />

          <div>
            <h4 style={{ margin: '8px 0 2px 0', fontSize: 16, fontWeight: 600, color: palette.accent }}>
              Real-Time Suggestions
            </h4>
            <ul style={{
              listStyle: 'disc inside',
              margin: 0,
              paddingLeft: 18,
              color: '#4E9F3D',
            }}>
              {getSuggestions(resumeText).map((tip, i) => (
                <li key={i} style={{ fontSize: 15, margin: '2px 0', color: palette.accent }}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>
        {/* Right: Analytics Dashboard */}
        <section
          style={{
            flex: 1.25,
            padding: '32px 6vw 32px 32px',
            background: '#f5faf7',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            boxShadow: '-3px 0 18px 0 rgba(77,143,61,0.03)'
          }}
        >
          <h3 style={{
            fontSize: 22,
            color: palette.accent,
            fontWeight: 700,
            margin: '0 0 12px 0'
          }}>
            Analytics Dashboard
          </h3>
          <div style={{
            background: '#fff',
            borderRadius: 8,
            padding: '20px 18px',
            border: '1px solid #e2efe3',
            marginBottom: 18
          }}>
            <div style={{ fontWeight: 600, color: palette.primary }}>Resume Score</div>
            <div style={{ fontSize: 28, color: palette.accent, fontWeight: 700 }}>
              {analytics.score} / 100
            </div>
            <div style={{ fontSize: 12, color: '#2d3a4a99', marginTop: 2 }}>
              Based on word count and sections (stub)
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 600, color: palette.primary, marginBottom: 4 }}>Strengths</div>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {analytics.strengths.map((item, i) => (
                <li key={i} style={{ color: palette.accent, fontSize: 15 }}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ fontWeight: 600, color: palette.primary, marginBottom: 4 }}>Improvements</div>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {analytics.improvements.map((item, i) => (
                <li key={i} style={{ color: palette.primary, fontSize: 15 }}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      {/* Footer (optional) */}
      <footer style={{
        width: '100%',
        padding: '16px 0',
        background: 'transparent',
        textAlign: 'center',
        color: palette.primary,
        fontSize: 13,
        opacity: 0.6,
        borderTop: '1px solid #e0e4e9',
        marginTop: 'auto'
      }}>
        ResumePro Insights &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;