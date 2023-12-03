import React, { useState } from 'react';
import './UploadModal.css';
import DynamicButton from '../Custom/Button/Button';
import Dropdown from '../Custom/Select/Select';
import ToggleSwitch from '../Custom/ToggleSwitch/ToggleSwitch';
import FileDrop from '../Custom/FileUpload/FileUpload';
import RadioButtonGroup from '../Custom/RadioButtonGroup/RadioButtonGroup';
import ClockIcon from '../../assets/svgs/clock-regular.svg';

// Dynamic Variables
const options = [
  {label: 'Option 1', value: 'import_name_1'},
  {label: 'Option 2', value: 'import_name_2'},
  {label: 'Option 3', value: 'import_name_3'},
];
const radioOptions = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];
const radioOptions2 = [
  { label: 'Single', value: 'single' },
  { label: 'Multiple', value: 'multiple' },
];
const testSites = [
  {label: 'Client 1', value: 'client_1'},
  {label: 'Client 2', value: 'client_2'},
  {label: 'Client 3', value: 'client_3'},
];

const UploadModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMulitpleClients, setHasMultipleClients] = useState(false);
  const [selectedTestSites, setSelectedTestSites] = useState([]);
  const [file, setFile] = useState(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleFileUpload = (file) => setFile(file);
  const handleRadioChange = (value) => console.log(value);
  const onContinue = () => alert(JSON.stringify({file, selectedTestSites}));

  return (
    <>
      <DynamicButton 
        name="Upload Document"
        type="primary-1"
        size="default"
        handleClick={openModal}
      />

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Document Upload</h2>
              <hr />
            </div>
            <div className="modal-body">
              <div className="modal-body-section-1">
                <Dropdown 
                  placeholder="Select Import Name:"
                  options={options}
                  onChange={(value) => console.log(value)}
                />
                <hr align="left" />
                <FileDrop 
                  label="Select a manifest that you'd like to import"
                  onFileUpload={handleFileUpload}
                />
                <hr align="left" />
                  <span className="modal-label"><strong>Elapse Data Checking:</strong></span>
                  <p className="modal-label-green">No Elapsed Dates!</p>
                <hr align="left" />
                  <ToggleSwitch label="Tolerance Window:" />
              </div>
              <div className="modal-body-section-2">
                <RadioButtonGroup
                  label="Split schedule using social distancing?"
                  options={radioOptions}
                  name="social-distancing"
                  onChange={handleRadioChange}
                />
                <hr />
                  <span className="modal-label"><strong>Location Checking:</strong></span>
                  <p className="modal-label-green">All Available!</p>
                <hr align="left" />
                <RadioButtonGroup
                  label="Client:"
                  options={radioOptions2}
                  name="client"
                  onChange={(val) => setHasMultipleClients(val)}
                />
                <div className="modal-selection">
                  {hasMulitpleClients === 'multiple' ?
                    testSites.map((site, i) => {
                      return (
                        <div className="client-selection" key={i}>
                          <span>Testing Center {i+1}</span>
                          <Dropdown 
                            placeholder="Select Client:"
                            options={testSites}
                            onChange={(value) => setSelectedTestSites([value, ...setSelectedTestSites])}
                          />
                          <img src={ClockIcon} className="clock-icon" alt="clock_icon" />
                        </div>
                      );
                    }) 
                    :
                    (
                      <div className="client-selection">
                        <span>Testing Center</span>
                        <Dropdown 
                          placeholder="Select Client:"
                          options={testSites}
                          onChange={(value) => setSelectedTestSites([value])}
                        />
                        <img src={ClockIcon} className="clock-icon" alt="clock_icon" />
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
            <div className="modal-footer">
              {
                file && (
                  <p>Data in the import file is correct. Please press Continue to import.</p>
                )
              }
              <div className="buttons">
                <DynamicButton 
                  name="Continue Import"
                  type="secondary-1"
                  size="default"
                  handleClick={onContinue}
                />
                <DynamicButton 
                  name="Cancel"
                  type="primary-2"
                  size="default"
                  handleClick={closeModal}
                />
              </div>
            </div>
            <button className="modal-close-button" onClick={closeModal}>
                &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadModal;