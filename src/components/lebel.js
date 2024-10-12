import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const IdealFor = () => {
  const [showIdealForCheckboxes, setShowIdealForCheckboxes] = useState(false);
  const [showOccasionContent, setShowOccasionContent] = useState(false);
  const [showFabricContent, setShowFabricContent] = useState(false);
  const [showSegmentContent, setShowSegmentContent] = useState(false);
  const [showSuitableForContent, setShowSuitableForContent] = useState(false);
  const [showRawMaterialsContent, setShowRawMaterialsContent] = useState(false);
  const [showPatternContent, setShowPatternContent] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const toggleIdealForCheckboxes = () => {
    setShowIdealForCheckboxes((prev) => !prev);
  };

  const toggleOccasionContent = () => {
    setShowOccasionContent((prev) => !prev);
  };

  const toggleFabricContent = () => {
    setShowFabricContent((prev) => !prev);
  };

  const toggleSegmentContent = () => {
    setShowSegmentContent((prev) => !prev);
  };

  const toggleSuitableForContent = () => {
    setShowSuitableForContent((prev) => !prev);
  };

  const toggleRawMaterialsContent = () => {
    setShowRawMaterialsContent((prev) => !prev);
  };

  const togglePatternContent = () => {
    setShowPatternContent((prev) => !prev);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedOptions((prev) => ({ ...prev, [name]: checked }));
  };

  const unselectAll = () => {
    setSelectedOptions({
      option1: false,
      option2: false,
      option3: false,
    });
  };

  return (
    <>
      {/* Ideal For Section */}
      <div style={{ margin: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={toggleIdealForCheckboxes}>
          <strong style={{ marginRight: 'auto' }}>IDEAL FOR</strong>
          {showIdealForCheckboxes ? (
            <FaChevronUp style={{ marginLeft: '5px' }} />
          ) : (
            <FaChevronDown style={{ marginLeft: '5px' }} />
          )}
        </div>
        <div style={{ marginTop: '5px', marginBottom: '10px' }}>
          <span>ALL</span>
        </div>
        {showIdealForCheckboxes && (
          <div style={{ padding: '10px 0' }}>
            <span 
              onClick={unselectAll} 
              style={{ cursor: 'pointer', textDecoration: 'underline', color: 'rgba(191, 200, 205, 1)', display: 'block', marginBottom: '10px' }}
            >
              UNSELECT ALL
            </span>
            <label>
              <input 
                type="checkbox" 
                name="option1" 
                checked={selectedOptions.option1} 
                onChange={handleCheckboxChange} 
              /> MEN
            </label><br />
            <label>
              <input 
                type="checkbox" 
                name="option2" 
                checked={selectedOptions.option2} 
                onChange={handleCheckboxChange} 
              /> WOMEN
            </label><br />
            <label>
              <input 
                type="checkbox" 
                name="option3" 
                checked={selectedOptions.option3} 
                onChange={handleCheckboxChange} 
              /> BABY & KIDS 
            </label><br />
          </div>
        )}
      </div>

      {/* Occasion Section */}
      <div style={{ margin: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={toggleOccasionContent}>
          <strong style={{ marginRight: 'auto' }}>OCCASION</strong>
          {showOccasionContent ? (
            <FaChevronUp style={{ marginLeft: '5px' }} />
          ) : (
            <FaChevronDown style={{ marginLeft: '5px' }} />
          )}
        </div>
        <div style={{ marginTop: '5px', marginBottom: '10px' }}>
          <span>ALL</span>
        </div>
        {showOccasionContent && (
          <div style={{ padding: '10px 0' }}>
            <p>No information available right now!</p>
          </div>
        )}
      </div>

      {/* Fabric Section */}
      <div style={{ margin: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={toggleFabricContent}>
          <strong style={{ marginRight: 'auto' }}>FABRIC</strong>
          {showFabricContent ? (
            <FaChevronUp style={{ marginLeft: '5px' }} />
          ) : (
            <FaChevronDown style={{ marginLeft: '5px' }} />
          )}
        </div>
        <div style={{ marginTop: '5px', marginBottom: '10px' }}>
          <span>ALL</span>
        </div>
        {showFabricContent && (
          <div style={{ padding: '10px 0' }}>
            <p>No information available right now!</p>
          </div>
        )}
      </div>

      {/* Segment Section */}
      <div style={{ margin: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={toggleSegmentContent}>
          <strong style={{ marginRight: 'auto' }}>SEGMENT</strong>
          {showSegmentContent ? (
            <FaChevronUp style={{ marginLeft: '5px' }} />
          ) : (
            <FaChevronDown style={{ marginLeft: '5px' }} />
          )}
        </div>
        <div style={{ marginTop: '5px', marginBottom: '10px' }}>
          <span>ALL</span>
        </div>
        {showSegmentContent && (
          <div style={{ padding: '10px 0' }}>
            <p>No information available right now!</p>
          </div>
        )}
      </div>

      {/* Suitable For Section */}
      <div style={{ margin: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={toggleSuitableForContent}>
          <strong style={{ marginRight: 'auto' }}>SUITABLE FOR</strong>
          {showSuitableForContent ? (
            <FaChevronUp style={{ marginLeft: '5px' }} />
          ) : (
            <FaChevronDown style={{ marginLeft: '5px' }} />
          )}
        </div>
        <div style={{ marginTop: '5px', marginBottom: '10px' }}>
          <span>ALL</span>
        </div>
        {showSuitableForContent && (
          <div style={{ padding: '10px 0' }}>
            <p>No information available right now!</p>
          </div>
        )}
      </div>

      {/* Raw Materials Section */}
      <div style={{ margin: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={toggleRawMaterialsContent}>
          <strong style={{ marginRight: 'auto' }}>RAW MATERIALS</strong>
          {showRawMaterialsContent ? (
            <FaChevronUp style={{ marginLeft: '5px' }} />
          ) : (
            <FaChevronDown style={{ marginLeft: '5px' }} />
          )}
        </div>
        <div style={{ marginTop: '5px', marginBottom: '10px' }}>
          <span>ALL</span>
        </div>
        {showRawMaterialsContent && (
          <div style={{ padding: '10px 0' }}>
            <p>No information available right now!</p>
          </div>
        )}
      </div>

      {/* Pattern Section */}
      <div style={{ margin: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={togglePatternContent}>
          <strong style={{ marginRight: 'auto' }}>PATTERN</strong>
          {showPatternContent ? (
            <FaChevronUp style={{ marginLeft: '5px' }} />
          ) : (
            <FaChevronDown style={{ marginLeft: '5px' }} />
          )}
        </div>
        <div style={{ marginTop: '5px', marginBottom: '10px' }}>
          <span>ALL</span>
        </div>
        {showPatternContent && (
          <div style={{ padding: '10px 0' }}>
            <p>No information available right now!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default IdealFor;
