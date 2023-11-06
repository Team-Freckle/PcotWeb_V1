import React, { useCallback, useState } from "react";
import axios from "axios";

export const API_URL = process.env.REACT_APP_API;

export const useNodeInfo = () => {
  const NodePsdInfoGet = async (OrgName: any, WokName: any, psdName: any, psdImg: any) => {
    try {
      const API = `${API_URL}/v2/cloud/info/psd/${OrgName}/${WokName}/${psdName}/${psdImg}`;
      const response = await axios.get(API, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const LayerPsdInfoGet = async (OrgName: any, WokName: any, layerName: any, psdLayer: any) => {
    try {
      const API = `${API_URL}/v2/cloud/info/layer/${OrgName}/${WokName}/${layerName}/${psdLayer}`;
      const response = await axios.get(API, {
        withCredentials: true,
      });
      return response.data;
    } catch {
      console.log("error");
    }
  };

  return { NodePsdInfoGet, LayerPsdInfoGet };
};
