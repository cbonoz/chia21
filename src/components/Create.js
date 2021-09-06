import React, { useState, useEffect } from "react";

import { Input, Button, Steps, Layout } from "antd";
import { FileDropzone } from "./FileDropzone";
import { storeFiles } from "../util/stor";
import { getIpfsUrl } from "../util";

const { Header, Footer, Sider, Content } = Layout;

const { Step } = Steps;

const LAST_STEP = 3;
function Create({ isLoggedIn, address }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [files, setFiles] = useState([]);
  const [info, setInfo] = useState({
    title: "My Chia NFT",
    description: "Test",
    price: 0,
    address: "",
  }); // price in mojos
  const [result, setResult] = useState({});
  const [publishResult, setPublishResult] = useState();
  const [loading, setLoading] = useState(false);

  const updateInfo = (update) => {
    setInfo({ ...info, ...update });
  };

  const updateStep = async (offset) => {
    const nextStep = currentStep + offset;

    if (nextStep === LAST_STEP) {
      if (!files) {
        alert("Please specify at least one file");
        return;
      }

      setLoading(true);

      // https://docs.web3.storage/how-tos/store/#preparing-files-for-upload

      let cid;
      let streamId;
      try {
        const fileObjects = [
          ...files.map((x) => x),
          //   new File([blob], infoFileName),
        ];
        cid = await storeFiles(fileObjects);
      } catch (e) {
        console.error("error uploading files", e);
        alert("Error uploading files: " + e.toString());
        return;
      } finally {
        setLoading(false);
      }

      const data = {
        cid,
        streamId,
        ipfs: getIpfsUrl(cid),
      };
      console.log("upload", data);
      setResult(data);
    } else if (nextStep === 2) {
      if (!info.address || !info.title) {
        alert("Store name and payment address are required");
        return;
      }
    }

    setCurrentStep(nextStep);
  };

  const getBody = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <h2 className="sell-header">General information:</h2>
            <Input
              addonBefore={"Title: "}
              placeholder="Enter title:"
              value={info.title}
              onChange={(e) => updateInfo({ title: e.target.value })}
            />

            <Input
              addonBefore={"Description: "}
              placeholder="Enter description"
              value={info.description}
              onChange={(e) => updateInfo({ description: e.target.value })}
            />

            <Input
              addonBefore={"Price (mojos):"}
              placeholder="Enter price"
              type="number"
              value={info.price}
              onChange={(e) => updateInfo({ price: e.target.value })}
            />

            <Input
              addonBefore={"Address: "}
              placeholder="Enter payment address"
              value={info.address}
              onChange={(e) => updateInfo({ address: e.target.value })}
            />
          </div>
        );

      case 1:
        return (
          <div>
            <h2 className="sell-header">Enter NFT information:</h2>
            <FileDropzone
              info={info}
              files={files}
              setFiles={setFiles}
              updateInfo={updateInfo}
            />
            {files.length > 0 && (
              <p>
                {files.length} Item{files.length > 1 ? "s" : ""}
              </p>
            )}
          </div>
        );

      case 2: // done
        return (
          <div className="complete-section">
            <h2 className="sell-header">Complete!</h2>
            <h5>NFT creation complete</h5>
            {Object.keys(result).map((k) => {
              return (
                <li>
                  {k}: {JSON.stringify(result[k]).replaceAll('"', "")}
                </li>
              );
            })}
            <br />
            <h3>Listing information</h3>
            {Object.keys(info).map((k) => {
              return (
                <li key={k}>
                  {k}: {JSON.stringify(info[k]).replaceAll('"', "")}
                </li>
              );
            })}

            {result.url && (
              <a href={result.url} target="_blank">
                Click here to view page.
              </a>
            )}
          </div>
        );
    }
  };

  return (
    <div className="content">
      <h1>Create a new Chiaspace listing.</h1>
      <Header>
        <Steps current={currentStep}>
          <Step title="Information" description="What NFT are you creating?" />
          <Step title="Upload" description="Attach files." />
          <Step title="Done" description="View listed NFT." />
        </Steps>
      </Header>
      <Content>
        <div className="sell-area">{getBody()}</div>
      </Content>
      <Footer>
        {(currentStep !== 0 || (currentStep !== 1 && !isLoggedIn)) && (
          <Button
            disabled={loading}
            type="primary"
            onClick={() => updateStep(-1)}
          >
            Previous
          </Button>
        )}
        &nbsp;
        {currentStep < LAST_STEP && (
          <Button
            disabled={loading}
            loading={loading}
            type="primary"
            onClick={() => updateStep(1)}
          >
            {currentStep === LAST_STEP - 1 ? "Done" : "Next"}
          </Button>
        )}
      </Footer>
    </div>
  );
}

export default Create;
