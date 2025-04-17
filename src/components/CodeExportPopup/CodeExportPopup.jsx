import React, { useState } from 'react';
import { SiReact, SiHtml5 } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import './CodeExportPopup.css';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';

const CodeExportPopup = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('html');
  const [includeAssetsHTML, setIncludeAssetsHTML] = useState(true);
  const [includeCustomCodeHTML, setIncludeCustomCodeHTML] = useState(true);
  const [includeAssets, setIncludeAssets] = useState(true);
  const [includeCustomCode, setIncludeCustomCode] = useState(true);
  const [useAppDir, setUseAppDir] = useState(true);
  
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <div className="popup-title">
            <h2>Code Export</h2>
            <p>Manage how you download your website's code.</p>
          </div>
          <button className="close-button" onClick={onClose}>
            <IoClose size={20} color="grey" />
          </button>
        </div>
        
        <div className="popup-content">
          <div className="tabs-container">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'html' ? 'active' : ''}`}
              onClick={() => setActiveTab('html')}
            >
              HTML & CSS
            </button>
            <button 
              className={`tab ${activeTab === 'nextjs' ? 'active' : ''}`}
              onClick={() => setActiveTab('nextjs')}
            >
              Next JS
            </button>
            </div>
            
            <div className="tab-content">
              {activeTab === 'html' ? (
                <div className="html-content">
                  <div className="export-option">
                    <div className="icon">
                      <SiHtml5 size={20} color="white" />
                    </div>
                    <div className="export-details">
                      <span>Export as HTML & CSS</span>
                      </div>
                  </div>
                      <div className="export-badge">Zipped</div>
                  
                  <div className="checkboxes">
                    <Checkbox 
                      label="Include assets (images, styles, fonts, etc.)" 
                      checked={includeAssetsHTML}
                      onChange={() => setIncludeAssetsHTML(!includeAssetsHTML)}
                    />
                    <Checkbox 
                      label="Include custom code" 
                      checked={includeCustomCodeHTML}
                      onChange={() => setIncludeCustomCodeHTML(!includeCustomCodeHTML)}
                    />
                  </div>
                </div>
              ) : (
                <div className="nextjs-content">
                  <div className="export-option">
                    
                    <div className="icon">
                      <SiReact size={20} color="white" />
                    </div>
                    <div className="export-details">
                      <span>Export as Next.JS Project</span>
                    </div>
                  </div>
                      <div className="export-badge">Zipped</div>
                      <div className="checkboxes">
                        <Checkbox 
                          label="Use 'app' directory (Next.JS v13+)" 
                          checked={useAppDir}
                          onChange={() => setUseAppDir(!useAppDir)}
                        />
                        <Checkbox 
                          label="Include assets locally (images, styles, fonts, etc.)" 
                          checked={includeAssets}
                          onChange={() => setIncludeAssets(!includeAssets)}
                        />
                        <Checkbox 
                          label="Include custom code" 
                          checked={includeCustomCode}
                          onChange={() => setIncludeCustomCode(!includeCustomCode)}
                        />
                      </div>
                </div>
              )}
            </div>
          </div>
          <div className="action-buttons">
            {activeTab === 'html' ? (
              <div className="action-button">
                <Button text="Download HTML CSS Project" />
              </div>
            ) : (
              <div className="action-button">
                <Button text="Download Next JS Project"  />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeExportPopup;