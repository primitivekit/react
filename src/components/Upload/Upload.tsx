import React, { useState, useRef } from 'react';
import { UploadProps, UploadFile } from './Upload.types';
import './Upload.css';

export const Upload: React.FC<UploadProps> = ({
  accept,
  multiple = false,
  maxCount,
  maxSize,
  fileList: controlledFileList,
  defaultFileList = [],
  listType = 'text',
  showUploadList = true,
  disabled = false,
  children,
  className = '',
  style,
  cssVariables,
  beforeUpload,
  customRequest,
  onChange,
  onRemove,
}) => {
  const [uncontrolledFileList, setUncontrolledFileList] = useState<UploadFile[]>(defaultFileList);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isControlled = controlledFileList !== undefined;
  const fileList = isControlled ? controlledFileList : uncontrolledFileList;

  const updateFileList = (newFileList: UploadFile[]) => {
    if (!isControlled) {
      setUncontrolledFileList(newFileList);
    }
    onChange?.(newFileList);
  };

  const handleClick = () => {
    if (disabled) return;
    inputRef.current?.click();
  };

  const processFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const filesArray = Array.from(files);
    
    // Check max count
    if (maxCount && fileList.length + filesArray.length > maxCount) {
      return;
    }

    for (const file of filesArray) {
      // Check max size
      if (maxSize && file.size > maxSize) {
        continue;
      }

      // Before upload validation
      if (beforeUpload) {
        const result = await beforeUpload(file);
        if (!result) continue;
      }

      const uploadFile: UploadFile = {
        uid: `${Date.now()}-${Math.random()}`,
        name: file.name,
        status: 'uploading',
        percent: 0,
      };

      const newFileList = [...fileList, uploadFile];
      updateFileList(newFileList);

      // Custom upload or default
      if (customRequest) {
        customRequest({
          file,
          onProgress: (percent) => {
            const updatedList = newFileList.map(f =>
              f.uid === uploadFile.uid ? { ...f, percent } : f
            );
            updateFileList(updatedList);
          },
          onSuccess: (response) => {
            const updatedList = newFileList.map(f =>
              f.uid === uploadFile.uid ? { ...f, status: 'done' as const, response, percent: 100 } : f
            );
            updateFileList(updatedList);
          },
          onError: (error) => {
            const updatedList = newFileList.map(f =>
              f.uid === uploadFile.uid ? { ...f, status: 'error' as const, error } : f
            );
            updateFileList(updatedList);
          },
        });
      } else {
        // Simulate upload
        setTimeout(() => {
          const updatedList = newFileList.map(f =>
            f.uid === uploadFile.uid ? { ...f, status: 'done' as const, percent: 100 } : f
          );
          updateFileList(updatedList);
        }, 1000);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    processFiles(e.target.files);
    // Reset input value to allow uploading the same file again
    e.target.value = '';
  };

  const handleRemove = (file: UploadFile) => {
    const newFileList = fileList.filter(f => f.uid !== file.uid);
    updateFileList(newFileList);
    onRemove?.(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setDragOver(true);
    }
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (!disabled) {
      processFiles(e.dataTransfer.files);
    }
  };

  const classes = [
    'upload',
    `upload--${listType}`,
    disabled && 'upload--disabled',
    dragOver && 'upload--drag-over',
    className,
  ].filter(Boolean).join(' ');

  const getStatusIcon = (status?: UploadFile['status']) => {
    if (status === 'uploading') {
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="upload__list-icon upload__list-icon--uploading">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    }
    if (status === 'done') {
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="upload__list-icon upload__list-icon--done">
          <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    if (status === 'error') {
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="upload__list-icon upload__list-icon--error">
          <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="upload__list-icon">
        <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.3333 5.33333L8 2L4.66667 5.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  };

  return (
    <div
      className={classes}
      style={{ ...cssVariables, ...style } as React.CSSProperties}
    >
      <div
        className="upload__trigger"
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
      >
        {children || (
          <div className="upload__default">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M34 16L24 6L14 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M24 6V30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="upload__text">Click or drag file to upload</div>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          disabled={disabled}
          style={{ display: 'none' }}
        />
      </div>

      {showUploadList && fileList.length > 0 && (
        <div className="upload__list">
          {fileList.map((file) => (
            <div key={file.uid} className={`upload__list-item upload__list-item--${file.status}`}>
              {listType === 'picture-card' && file.thumbUrl && (
                <img src={file.thumbUrl} alt={file.name} className="upload__list-thumbnail" />
              )}
              <div className="upload__list-info">
                {getStatusIcon(file.status)}
                <span className="upload__list-name">{file.name}</span>
                <button
                  className="upload__list-action"
                  onClick={() => handleRemove(file)}
                  aria-label="Remove file"
                  type="button"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              {file.status === 'uploading' && file.percent !== undefined && (
                <div className="upload__progress">
                  <div className="upload__progress-bar" style={{ width: `${file.percent}%` }} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
