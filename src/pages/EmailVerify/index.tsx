import React, { useState } from "react";
import OtpInput from "react-otp-input";

import * as S from "./style";

export const EmailVerify = () => {
  const [{ otp, numInputs, separator, minLength, maxLength, placeholder, inputType }, setConfig] =
    useState({
      otp: "",
      numInputs: 6,
      separator: "-",
      minLength: 0,
      maxLength: 40,
      placeholder: "",
      inputType: "text" as const,
    });

  const handleOTPChange = (otp: string) => {
    setConfig((prevConfig) => ({ ...prevConfig, otp }));
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setConfig((prevConfig) => ({ ...prevConfig, [name]: value }));
  };

  const handleNumInputsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let numInputs = event.target.valueAsNumber;

    if (numInputs < minLength || numInputs > maxLength) {
      numInputs = 4;

      console.error(`Please enter a value between ${minLength} and ${maxLength}`);
    }

    setConfig((prevConfig) => ({ ...prevConfig, numInputs }));
  };

  const clearOtp = () => {
    setConfig((prevConfig) => ({ ...prevConfig, otp: "" }));
  };

  const handleSubmit = () => {
    alert(otp);
  };

  return (
    // <div>
    //   <OtpInput
    //     inputStyle="inputStyle"
    //     numInputs={numInputs}
    //     onChange={handleOTPChange}
    //     renderSeparator={<span>{separator}</span>}
    //     value={otp}
    //     placeholder={placeholder}
    //     inputType={inputType}
    //     renderInput={(props) => <input {...props} />}
    //     shouldAutoFocus
    //   />
    //   <button onClick={handleSubmit}>헤헤 확인</button>
    // </div>
    <div className="container">
      <div className="view">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="margin-top--small">
              <OtpInput
                inputStyle="inputStyle"
                numInputs={numInputs}
                onChange={handleOTPChange}
                renderSeparator={<span>{separator}</span>}
                value={otp}
                placeholder={placeholder}
                inputType={inputType}
                renderInput={(props) => <input {...props} />}
                shouldAutoFocus
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
