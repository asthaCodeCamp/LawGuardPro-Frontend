import * as React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MessageSidebarComponent from "../MessageSidebarComponent";

interface CaseInfoHeaderProps {
  caseNumber: string;
  lastUpdated: string;
}

const CaseInfoHeader: React.FC<{ caseNumber: string; lastUpdated: string }> = ({
  caseNumber,
  lastUpdated,
}) => {
  const [state, setState] = React.useState({
    right: false,
  });

  console.log(caseNumber, "caseNumber");

  const toggleDrawer =
    (anchor: "right", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: "right") => (
    <Box
      sx={{ width: 360 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <MessageSidebarComponent />
    </Box>
  );

  var updateDate = lastUpdated?.slice(0, 10);
  var day = updateDate?.slice(8, 10);
  var month = updateDate?.slice(5, 7);
  var year = updateDate?.slice(0, 4);
  var formattedDate = day + "/" + month + "/" + year;

  if (caseNumber) {
    console.log("case number == = = ", caseNumber);
  }

  return (
    <>
      <div className="m-[32px] flex justify-between gap-[500px] ">
        <div>
          <div className="flex">
            <h1 className="text-[24px] font-[600] mr-[24px]">
              Share Transfer & Share Issuance
            </h1>
            <div className="mt-1">
              <p className="text-[12px] font-[600] text-[#16A34A] border-[#16A34A] bg-[#F0FDF4] border-[0.8px] text-center px-2 py-1 rounded-2xl">
                WORKING
              </p>
            </div>
          </div>
          <div className="mt-[8px] flex">
            <p className="border-r-2 text-[16px] font-[400] pr-[16px]">
              CASE NO: #{caseNumber}
            </p>
            <p className="ml-[16px] text-[16px] font-[400]">
              LAST UPDATED: <span className="font-[600]">{formattedDate}</span>
            </p>
          </div>
        </div>
        <button onClick={toggleDrawer("right", true)}>
          <div className="bg-[#FDF4FF] text-[#6B0F99] w-[30px] h-[30px] text-center">
            <InfoOutlinedIcon className="mt-1" />
          </div>
        </button>
      </div>
      <div className="">
        <Drawer
          className=""
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false)}
          sx={{ zIndex: 1301 }}
        >
          {list("right")}
        </Drawer>
      </div>
    </>
  );
};

export default CaseInfoHeader;
