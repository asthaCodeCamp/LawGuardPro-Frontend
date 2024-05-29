import * as React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MessageSidebarComponent from "../MessageSidebarComponent";

const CaseinfoHeader = () => {
  const [state, setState] = React.useState({
    right: false,
  });

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
              CASE NO: #012546
            </p>
            <p className="ml-[16px] text-[16px] font-[400]">
              LAST UPDATED: <span className="font-[600]">20/10/2023</span>
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

export default CaseinfoHeader;
