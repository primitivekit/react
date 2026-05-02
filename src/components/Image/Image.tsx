import React, { useState, useEffect } from 'react';
import { ImageProps } from './Image.types';
import './Image.css';

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  fit = 'cover',
  placeholder,
  fallback,
  preview = false,
  previewSrc,
  loading = 'lazy',
  className = '',
  style,
  cssVariables,
  onLoad,
  onError,
  ...props
}) => {
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    setImageStatus('loading');
    const img = new window.Image();
    img.src = src;
    
    img.onload = () => {
      setImageStatus('loaded');
      onLoad?.();
    };
    
    img.onerror = () => {
      setImageStatus('error');
      onError?.();
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoad, onError]);

  const classes = [
    'image',
    preview && 'image--preview',
    imageStatus === 'loading' && 'image--loading',
    className,
  ].filter(Boolean).join(' ');

  const imageStyle = {
    width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    height: height ? (typeof height === 'number' ? `${height}px` : height) : undefined,
    objectFit: fit,
  };

  const handleImageClick = () => {
    if (preview && imageStatus === 'loaded') {
      setShowPreview(true);
    }
  };

  const handleClosePreview = () => {
    setShowPreview(false);
  };

  const handlePreviewClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClosePreview();
    }
  };

  const defaultFallback = (
    <div className="image__fallback">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 8H8C6.89543 8 6 8.89543 6 10V38C6 39.1046 6.89543 40 8 40H40C41.1046 40 42 39.1046 42 38V10C42 8.89543 41.1046 8 40 8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 21C18.6569 21 20 19.6569 20 18C20 16.3431 18.6569 15 17 15C15.3431 15 14 16.3431 14 18C14 19.6569 15.3431 21 17 21Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42 30L32 20L8 40"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  return (
    <>
      <div
        className={classes}
        style={{ ...cssVariables, ...style } as React.CSSProperties}
        onClick={handleImageClick}
        role={preview ? 'button' : undefined}
        tabIndex={preview ? 0 : undefined}
        onKeyDown={preview ? (e) => e.key === 'Enter' && handleImageClick() : undefined}
      >
        {imageStatus === 'loading' && (
          <div className="image__placeholder">
            {placeholder || <div className="image__placeholder-default" />}
          </div>
        )}
        
        {imageStatus === 'loaded' && (
          <>
            <img
              src={src}
              alt={alt}
              loading={loading}
              style={imageStyle}
              className="image__img"
              {...props}
            />
            {preview && (
              <div className="image__preview-overlay">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="image__preview-icon"
                >
                  <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </>
        )}
        
        {imageStatus === 'error' && (
          fallback !== undefined ? fallback : defaultFallback
        )}
      </div>

      {showPreview && (
        <div
          className="image__preview-modal"
          onClick={handlePreviewClick}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            className="image__preview-close"
            onClick={handleClosePreview}
            aria-label="Close preview"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <img
            src={previewSrc || src}
            alt={alt}
            className="image__preview-img"
          />
        </div>
      )}
    </>
  );
};
