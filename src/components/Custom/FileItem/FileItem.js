import React from 'react';
import './FileItem.css';
import FileIcon from '../../../assets/svgs/file-image-regular.svg';
import ProgressBar from '../ProgressBar/ProgressBar';

const FileItem = ({ fileName, fileSize }) => {
  const maxFileSize = 5 * 1024 * 1024; // 5mb
  const fileSizeMB = ((fileSize / 1024) / 1024).toFixed(2);

  return (
    <div className="file-item">
      <img src={FileIcon} className="file-icon" alt="file_icon" />
      <div className="file-item-content">
        <div className="file-info">
          <span className="file-name">{fileName}</span>
          <span className="file-size"><strong>{fileSizeMB}MB</strong></span>
        </div>
        <ProgressBar progress={(fileSize / maxFileSize) * 100} />
      </div>
    </div>
  );
};

export default FileItem;
