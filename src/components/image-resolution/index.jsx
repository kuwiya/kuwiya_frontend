import React, { useState } from "react";

const ImageUploader = () => {
  const [originalImageUrl, setOriginalImageUrl] = useState("");
  const [resizedImageUrl, setResizedImageUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setOriginalImageUrl(event.target.result);
        improveResolution(event.target.result, 1920, 1080, setResizedImageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const improveResolution = (
    imageDataUrl,
    targetWidth,
    targetHeight,
    callback
  ) => {
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Calculate the aspect ratio
      const aspectRatio = img.width / img.height;

      // Calculate the new dimensions maintaining the aspect ratio
      let newWidth = targetWidth;
      let newHeight = targetHeight;
      if (targetWidth / targetHeight > aspectRatio) {
        newWidth = targetHeight * aspectRatio;
      } else {
        newHeight = targetWidth / aspectRatio;
      }

      // Set canvas dimensions
      canvas.width = newWidth;
      canvas.height = newHeight;

      // Draw the image on the canvas with better resolution
      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      // Convert canvas to data URL
      const newDataUrl = canvas.toDataURL("image/jpeg", 1.0);

      // Execute callback with the new data URL
      callback(newDataUrl);
    };
    img.src = imageDataUrl;
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {originalImageUrl && (
        <div>
          <h2>Original Image</h2>
          <img src={originalImageUrl} alt="Original" />
        </div>
      )}
      {resizedImageUrl && (
        <div>
          <h2>Resized Image</h2>
          <img src={resizedImageUrl} alt="Resized" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
