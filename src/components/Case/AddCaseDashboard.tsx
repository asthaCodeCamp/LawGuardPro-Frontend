import { Button } from "@mui/material";
import React, { useState } from "react";
import AddCaseModal from "../Modals/AddCaseModal";
import SuccessModal from "../Modals/SuccessModal";
// import { casesData } from "./CaseTable";
// interface MyCasesProps {
//   casesData: casesData[];
// }
const AddCaseDashboard : React.FC<any> = ({casesData}) => {
  console.log("case data from header", casesData);
  // const {openCase, closedCase,onAddCaseClick} = casesData;
  // console.log('opencase', openCase);
  
  const [addCaseOpen, setAddCaseOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleOpenAddCaseModal = () => {
    setAddCaseOpen(true);
  };

  const handleCloseAddCaseModal = () => {
    setAddCaseOpen(false);
  };

  const handleOpenSuccessModal = () => {
    setSuccessOpen(true);
  };

  const handleCloseSuccessModal = () => {
    setSuccessOpen(false);
  };


  

  return (
    <div className="w-full border-b pb-4">
      <div className="px-[32px] mb-4">
        <div className="flex justify-between items-center py-4 px-6">
          <div>
            <Button
              className="bg-[#6B0F99] hover:bg-[#6B0F99] text-[16px] font-[600] ml-4"
              variant="contained"
               onClick={handleOpenAddCaseModal}
            >
              + Add new case
            </Button>
          </div>
        </div>
      </div>
      <div className="px-[32px]">
        
      </div>
      {/* {showModal && <AddCaseModal />} */}
      <AddCaseModal
        open={addCaseOpen}
        handleClose={handleCloseAddCaseModal}
        handleOpenSuccessModal={handleOpenSuccessModal}
      />
      <SuccessModal
        open={successOpen}
        handleClose={handleCloseSuccessModal}
    
      />

    </div>
  );
};

export default AddCaseDashboard;
