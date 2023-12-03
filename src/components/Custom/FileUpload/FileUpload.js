import React, { useCallback, useState } from 'react';
import DynamicButton from '../Button/Button';
import FileLine from '../../../assets/svgs/file-lines-regular.svg'
import './FileUpload.css';
import FileItem from '../FileItem/FileItem';

const FileUpload = ({ onFileUpload, label }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDrag = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      setUploadedFile(file);
      onFileUpload(file);
      event.dataTransfer.clearData();
    }
  }, [onFileUpload]);

  const handleChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setUploadedFile(file);
      onFileUpload(file);
    }
  };

  return (
    <>
      <div className="file-upload">
        <p className="file-upload-label">{label}</p>
        <div className='file-upload-container'>
          <div
            className={`file-uploader ${dragActive ? 'active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            >
            <div className="file-input-label">
              <input
                type="file"
                id="file"
                onChange={handleChange}
                />
              <img src={FileLine} className="file-icon" alt="file_icon" />
              <label htmlFor="file">
                Drag & Drop Here Or <span><strong>Browse</strong></span>
              </label>
            </div>
          </div>
          <DynamicButton 
            name="Upload Manifest"
            type="secondary-1"
            size="sm"
            handleClick={() => document.getElementById('file').click()}
          />
        </div>
      </div>
      {
        uploadedFile && (
        <div className="upload-file-list">
          {/* Maybe include list size restrictions restrictions. Single Upload in this case */}
          <FileItem fileName={uploadedFile.name} fileSize={uploadedFile.size} />
        </div>
        )
      }
    </>
  );
};

export default FileUpload;
