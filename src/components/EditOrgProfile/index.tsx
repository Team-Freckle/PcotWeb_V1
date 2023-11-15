import React, { useState } from "react";
import axios from "axios";
export const API_URL = process.env.REACT_APP_API;

const EditOrgProfile = (organization: string) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("organization", organization);

      try {
        const response = await axios.put(
          `${API_URL}/v2/cloud/organization/edit/profile`,
          formData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
        console.log("PUT 요청 성공:", response.data);
      } catch (error) {
        console.error("PUT 요청 실패:", error);
      }
    } else {
      setMessage("파일을 선택해주세요.");
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>이미지 업로드</button>
      <p>{message}</p>
    </div>
  );
};

export default EditOrgProfile;
