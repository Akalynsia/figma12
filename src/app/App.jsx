import React from "react";

const App = () => {
  return (
    <div className="relative w-screen h-screen bg-[rgba(30,119,204,0.1)] flex justify-center items-center">
      <div className="w-full max-w-[714px] h-auto md:h-[498px] bg-white rounded-xl flex flex-col items-center justify-center gap-8 p-4 md:p-0">
        <div className="w-full max-w-[650px] h-[350px] border-2 border-dashed border-[rgba(30,119,204,1)] rounded-xl flex flex-col justify-center items-center">
          <div className="w-[80px] h-[80px] md:w-[120px] md:h-[100px] mb-4">
            <img src="./upload.png" alt="upload" className="w-full h-full" />
          </div>
          <p className="text-[18px] md:text-[24px] font-[400] font-inter text-center">
            Browse files to upload
          </p>
        </div>
        <div className="w-full max-w-[650px] h-auto md:h-[52px] flex flex-col md:flex-row justify-between items-center bg-[rgba(233,240,254,1)] rounded-xl p-2 md:p-0">
          <div className="w-[24px] h-[24px] md:w-[22px] md:h-[28px] mt-2 md:mt-0 md:ml-6">
            <img src="./folder.png" alt="folder" className="w-full h-full" />
          </div>
          <div className="flex mt-2 md:mt-0 mr-0 md:mr-4">
            <p className="font-[400] text-[16px] md:text-[22px] font-inter">
              No selected File -{" "}
            </p>
            <div className="w-[16px] h-[16px] md:w-[22px] md:h-[22px] ml-2 md:ml-4 md:mt-1">
              <img
                src="./trashcan.png"
                alt="trashcan"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
