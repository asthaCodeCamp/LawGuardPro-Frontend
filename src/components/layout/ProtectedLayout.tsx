import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Image from "next/image";
import userImage from "../../../public/assets/man.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useRouter } from "next/router";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    console.log("Open clicked");
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        // position="fixed"
        open={open}
        className="bg-white shadow-none border-b-[1px] "
      >
        <Toolbar className=" ">
          <IconButton
            color="inherit"
            edge="start"
            sx={{
              marginRight: 2,
              ...(open && { display: "none" }),
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            {/* menu icon  */}
            <svg
              width="50"
              height="50"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="5.71429" fill="#6B0F99" />
              <path
                d="M29.2462 18.75V20.5H31.2212C31.5722 20.5 31.9152 20.606 32.2052 20.803L33.9022 21.957C33.9432 21.985 33.9922 22 34.0422 22H38.1442C38.3431 22 38.5339 22.079 38.6745 22.2197C38.8152 22.3603 38.8942 22.5511 38.8942 22.75C38.8942 22.9489 38.8152 23.1397 38.6745 23.2803C38.5339 23.421 38.3431 23.5 38.1442 23.5H36.5662L39.9322 31.18C39.9997 31.3335 40.0138 31.5053 39.972 31.6678C39.9303 31.8302 39.8353 31.974 39.7022 32.076C39.6022 32.15 39.4992 32.219 39.3922 32.282C39.1385 32.4334 38.8746 32.5667 38.6022 32.681C37.6977 33.0593 36.7266 33.2527 35.7462 33.25C34.7662 33.2531 33.7954 33.06 32.8912 32.682C32.6187 32.5677 32.3547 32.434 32.1012 32.282C31.9951 32.2206 31.8926 32.1532 31.7942 32.08L31.7892 32.076C31.6561 31.974 31.5611 31.8302 31.5193 31.6678C31.4776 31.5053 31.4917 31.3335 31.5592 31.18L34.9272 23.5H34.0412C33.6902 23.5 33.3472 23.394 33.0572 23.197L31.3602 22.043C31.319 22.0148 31.2701 21.9998 31.2202 22H29.2462V36.5H33.7332C33.9321 36.5 34.1229 36.579 34.2635 36.7197C34.4042 36.8603 34.4832 37.0511 34.4832 37.25C34.4832 37.4489 34.4042 37.6397 34.2635 37.7803C34.1229 37.921 33.9321 38 33.7332 38H23.2592C23.0603 38 22.8695 37.921 22.7289 37.7803C22.5882 37.6397 22.5092 37.4489 22.5092 37.25C22.5092 37.0511 22.5882 36.8603 22.7289 36.7197C22.8695 36.579 23.0603 36.5 23.2592 36.5H27.7462V22H25.7712C25.7213 22 25.6725 22.015 25.6312 22.043L23.9352 23.197C23.6452 23.394 23.3022 23.5 22.9512 23.5H22.0652L25.4332 31.18C25.4984 31.3292 25.5133 31.4956 25.4755 31.654C25.4378 31.8124 25.3496 31.9542 25.2242 32.058C25.1442 32.123 25.0642 32.184 24.9142 32.281C24.6613 32.4448 24.3966 32.5895 24.1222 32.714C23.219 33.1243 22.2382 33.3357 21.2462 33.334C20.2542 33.3361 19.2733 33.1246 18.3702 32.714C18.0958 32.5895 17.8311 32.4448 17.5782 32.281C17.4713 32.213 17.3681 32.1392 17.2692 32.06C17.1448 31.955 17.0573 31.8129 17.0195 31.6545C16.9817 31.4962 16.9956 31.3299 17.0592 31.18L20.4262 23.5H18.8492C18.6503 23.5 18.4595 23.421 18.3189 23.2803C18.1782 23.1397 18.0992 22.9489 18.0992 22.75C18.0992 22.5511 18.1782 22.3603 18.3189 22.2197C18.4595 22.079 18.6503 22 18.8492 22H22.9512C23.0012 22 23.0502 21.985 23.0922 21.957L24.7872 20.803C25.0772 20.605 25.4212 20.5 25.7722 20.5H27.7462V18.75C27.7462 18.5511 27.8252 18.3603 27.9659 18.2197C28.1065 18.079 28.2973 18 28.4962 18C28.6951 18 28.8859 18.079 29.0265 18.2197C29.1672 18.3603 29.2462 18.5511 29.2462 18.75ZM18.6892 31.198C19.4762 31.617 20.3546 31.8351 21.2462 31.833C22.1378 31.8351 23.0162 31.617 23.8032 31.198L21.2462 25.368L18.6892 31.198ZM33.1992 31.174C33.2812 31.214 33.3732 31.257 33.4742 31.3C34.0042 31.523 34.7792 31.75 35.7462 31.75C36.6278 31.7525 37.4985 31.5556 38.2932 31.174L35.7462 25.367L33.1992 31.174Z"
                fill="white"
              />
            </svg>
          </IconButton>
          <Typography
            className=" w-full flex justify-between"
            variant="h6"
            noWrap
            component="div"
          >
            {/* breadcumb */}
            <Breadcrumbs className="flex items-center" aria-label="breadcrumb">
              <Link color="inherit" href="/">
                Home
              </Link>
              <Typography color="text.primary">Settings</Typography>
            </Breadcrumbs>
            {/* user  */}
            <div className="flex items-center">
              <div className="flex items-center">
                <Image
                  src={userImage}
                  alt="Picture of the author"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <Typography className="ml-2 text-black">Tomal Ahmed</Typography>
                <KeyboardArrowDownOutlinedIcon className="text-black" />
              </div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className=" flex justify-start">
          <svg
            width="172"
            height="85"
            viewBox="0 0 172 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M5.592 47.332H10.968V50.5H1.488V33.652H5.592V47.332ZM12.1095 43.78C12.1095 42.404 12.3655 41.196 12.8775 40.156C13.4055 39.116 14.1175 38.316 15.0135 37.756C15.9095 37.196 16.9095 36.916 18.0135 36.916C18.9575 36.916 19.7815 37.108 20.4855 37.492C21.2055 37.876 21.7575 38.38 22.1415 39.004V37.108H26.2455V50.5H22.1415V48.604C21.7415 49.228 21.1815 49.732 20.4615 50.116C19.7575 50.5 18.9335 50.692 17.9895 50.692C16.9015 50.692 15.9095 50.412 15.0135 49.852C14.1175 49.276 13.4055 48.468 12.8775 47.428C12.3655 46.372 12.1095 45.156 12.1095 43.78ZM22.1415 43.804C22.1415 42.78 21.8535 41.972 21.2775 41.38C20.7175 40.788 20.0295 40.492 19.2135 40.492C18.3975 40.492 17.7015 40.788 17.1255 41.38C16.5655 41.956 16.2855 42.756 16.2855 43.78C16.2855 44.804 16.5655 45.62 17.1255 46.228C17.7015 46.82 18.3975 47.116 19.2135 47.116C20.0295 47.116 20.7175 46.82 21.2775 46.228C21.8535 45.636 22.1415 44.828 22.1415 43.804ZM48.4386 37.108L44.8146 50.5H40.2786L38.1666 41.812L35.9826 50.5H31.4706L27.8226 37.108H31.9266L33.8226 46.684L36.0786 37.108H40.4226L42.7026 46.636L44.5746 37.108H48.4386ZM61.1876 38.98C60.8836 38.42 60.4436 37.996 59.8676 37.708C59.3076 37.404 58.6436 37.252 57.8756 37.252C56.5476 37.252 55.4836 37.692 54.6836 38.572C53.8836 39.436 53.4836 40.596 53.4836 42.052C53.4836 43.604 53.8996 44.82 54.7316 45.7C55.5796 46.564 56.7396 46.996 58.2116 46.996C59.2196 46.996 60.0676 46.74 60.7556 46.228C61.4596 45.716 61.9716 44.98 62.2916 44.02H57.0836V40.996H66.0116V44.812C65.7076 45.836 65.1876 46.788 64.4516 47.668C63.7316 48.548 62.8116 49.26 61.6916 49.804C60.5716 50.348 59.3076 50.62 57.8996 50.62C56.2356 50.62 54.7476 50.26 53.4356 49.54C52.1396 48.804 51.1236 47.788 50.3876 46.492C49.6676 45.196 49.3076 43.716 49.3076 42.052C49.3076 40.388 49.6676 38.908 50.3876 37.612C51.1236 36.3 52.1396 35.284 53.4356 34.564C54.7316 33.828 56.2116 33.46 57.8756 33.46C59.8916 33.46 61.5876 33.948 62.9636 34.924C64.3556 35.9 65.2756 37.252 65.7236 38.98H61.1876ZM81.5089 37.108V50.5H77.4049V48.676C76.9889 49.268 76.4209 49.748 75.7009 50.116C74.9969 50.468 74.2129 50.644 73.3489 50.644C72.3249 50.644 71.4209 50.42 70.6369 49.972C69.8529 49.508 69.2449 48.844 68.8129 47.98C68.3809 47.116 68.1649 46.1 68.1649 44.932V37.108H72.2449V44.38C72.2449 45.276 72.4769 45.972 72.9409 46.468C73.4049 46.964 74.0289 47.212 74.8129 47.212C75.6129 47.212 76.2449 46.964 76.7089 46.468C77.1729 45.972 77.4049 45.276 77.4049 44.38V37.108H81.5089ZM83.6408 43.78C83.6408 42.404 83.8968 41.196 84.4088 40.156C84.9368 39.116 85.6488 38.316 86.5448 37.756C87.4408 37.196 88.4408 36.916 89.5448 36.916C90.4888 36.916 91.3128 37.108 92.0168 37.492C92.7368 37.876 93.2888 38.38 93.6728 39.004V37.108H97.7768V50.5H93.6728V48.604C93.2728 49.228 92.7128 49.732 91.9928 50.116C91.2888 50.5 90.4648 50.692 89.5208 50.692C88.4328 50.692 87.4408 50.412 86.5448 49.852C85.6488 49.276 84.9368 48.468 84.4088 47.428C83.8968 46.372 83.6408 45.156 83.6408 43.78ZM93.6728 43.804C93.6728 42.78 93.3848 41.972 92.8088 41.38C92.2488 40.788 91.5608 40.492 90.7448 40.492C89.9288 40.492 89.2328 40.788 88.6568 41.38C88.0968 41.956 87.8168 42.756 87.8168 43.78C87.8168 44.804 88.0968 45.62 88.6568 46.228C89.2328 46.82 89.9288 47.116 90.7448 47.116C91.5608 47.116 92.2488 46.82 92.8088 46.228C93.3848 45.636 93.6728 44.828 93.6728 43.804ZM104.85 39.34C105.33 38.604 105.93 38.028 106.65 37.612C107.37 37.18 108.17 36.964 109.05 36.964V41.308H107.922C106.898 41.308 106.13 41.532 105.618 41.98C105.106 42.412 104.85 43.18 104.85 44.284V50.5H100.746V37.108H104.85V39.34ZM110.195 43.78C110.195 42.404 110.451 41.196 110.963 40.156C111.491 39.116 112.203 38.316 113.099 37.756C113.995 37.196 114.995 36.916 116.099 36.916C116.979 36.916 117.779 37.1 118.499 37.468C119.235 37.836 119.811 38.332 120.227 38.956V32.74H124.331V50.5H120.227V48.58C119.843 49.22 119.291 49.732 118.571 50.116C117.867 50.5 117.043 50.692 116.099 50.692C114.995 50.692 113.995 50.412 113.099 49.852C112.203 49.276 111.491 48.468 110.963 47.428C110.451 46.372 110.195 45.156 110.195 43.78ZM120.227 43.804C120.227 42.78 119.939 41.972 119.363 41.38C118.803 40.788 118.115 40.492 117.299 40.492C116.483 40.492 115.787 40.788 115.211 41.38C114.651 41.956 114.371 42.756 114.371 43.78C114.371 44.804 114.651 45.62 115.211 46.228C115.787 46.82 116.483 47.116 117.299 47.116C118.115 47.116 118.803 46.82 119.363 46.228C119.939 45.636 120.227 44.828 120.227 43.804ZM145.226 39.076C145.226 40.052 145.002 40.948 144.554 41.764C144.106 42.564 143.418 43.212 142.49 43.708C141.562 44.204 140.41 44.452 139.034 44.452H136.49V50.5H132.386V33.652H139.034C140.378 33.652 141.514 33.884 142.442 34.348C143.37 34.812 144.066 35.452 144.53 36.268C144.994 37.084 145.226 38.02 145.226 39.076ZM138.722 41.188C139.506 41.188 140.09 41.004 140.474 40.636C140.858 40.268 141.05 39.748 141.05 39.076C141.05 38.404 140.858 37.884 140.474 37.516C140.09 37.148 139.506 36.964 138.722 36.964H136.49V41.188H138.722ZM151.467 39.34C151.947 38.604 152.547 38.028 153.267 37.612C153.987 37.18 154.787 36.964 155.667 36.964V41.308H154.539C153.515 41.308 152.747 41.532 152.235 41.98C151.723 42.412 151.467 43.18 151.467 44.284V50.5H147.363V37.108H151.467V39.34ZM163.725 50.692C162.413 50.692 161.229 50.412 160.173 49.852C159.133 49.292 158.309 48.492 157.701 47.452C157.109 46.412 156.813 45.196 156.813 43.804C156.813 42.428 157.117 41.22 157.725 40.18C158.333 39.124 159.165 38.316 160.221 37.756C161.277 37.196 162.461 36.916 163.773 36.916C165.085 36.916 166.269 37.196 167.325 37.756C168.381 38.316 169.213 39.124 169.821 40.18C170.429 41.22 170.733 42.428 170.733 43.804C170.733 45.18 170.421 46.396 169.797 47.452C169.189 48.492 168.349 49.292 167.277 49.852C166.221 50.412 165.037 50.692 163.725 50.692ZM163.725 47.14C164.509 47.14 165.173 46.852 165.717 46.276C166.277 45.7 166.557 44.876 166.557 43.804C166.557 42.732 166.285 41.908 165.741 41.332C165.213 40.756 164.557 40.468 163.773 40.468C162.973 40.468 162.309 40.756 161.781 41.332C161.253 41.892 160.989 42.716 160.989 43.804C160.989 44.876 161.245 45.7 161.757 46.276C162.285 46.852 162.941 47.14 163.725 47.14Z"
              fill="#6B0F99"
            />{" "}
          </svg>
        </DrawerHeader>

        <List className="flex flex-col justify-between h-full">
          <Box>
            <Link href="/">
              <ListItem
                onClick={handleDrawerOpen}
                className="my-5"
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <HomeOutlinedIcon className="text-black" />
                  </ListItemIcon>
                  <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link href="/notification">
              <ListItem
                onClick={handleDrawerOpen}
                className=" my-5"
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <NotificationsOutlinedIcon className="text-black" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Notifications"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link href="/my-cases">
              <ListItem
                onClick={handleDrawerOpen}
                className="my-5"
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <BusinessCenterOutlinedIcon className="text-black" />
                  </ListItemIcon>
                  <ListItemText
                    primary="My Cases"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link href="/settings">
              <ListItem
                onClick={handleDrawerClose}
                className=" my-5"
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <SettingsOutlinedIcon className="text-black" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Settings"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </Box>

          <Box>
            <ListItem
              className=" my-5"
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.666626 12.0007C0.666626 12.3101 0.789543 12.6068 1.00833 12.8256C1.22713 13.0444 1.52387 13.1673 1.83329 13.1673H10.6883L8.00496 15.839C7.89561 15.9474 7.80882 16.0765 7.74959 16.2186C7.69036 16.3608 7.65986 16.5133 7.65986 16.6673C7.65986 16.8213 7.69036 16.9738 7.74959 17.116C7.80882 17.2582 7.89561 17.3872 8.00496 17.4956C8.11342 17.605 8.24245 17.6918 8.38462 17.751C8.52679 17.8103 8.67928 17.8407 8.83329 17.8407C8.98731 17.8407 9.1398 17.8103 9.28197 17.751C9.42414 17.6918 9.55317 17.605 9.66163 17.4956L14.3283 12.829C14.4345 12.718 14.5178 12.5872 14.5733 12.444C14.69 12.1599 14.69 11.8414 14.5733 11.5573C14.5178 11.4141 14.4345 11.2833 14.3283 11.1723L9.66163 6.50565C9.55285 6.39687 9.42371 6.31059 9.28158 6.25171C9.13946 6.19284 8.98713 6.16254 8.83329 6.16254C8.67946 6.16254 8.52713 6.19284 8.385 6.25171C8.24288 6.31059 8.11374 6.39687 8.00496 6.50565C7.89618 6.61443 7.80989 6.74357 7.75102 6.88569C7.69215 7.02782 7.66185 7.18015 7.66185 7.33398C7.66185 7.48782 7.69215 7.64015 7.75102 7.78228C7.80989 7.9244 7.89618 8.05354 8.00496 8.16232L10.6883 10.834H1.83329C1.52387 10.834 1.22713 10.9569 1.00833 11.1757C0.789543 11.3945 0.666626 11.6912 0.666626 12.0007ZM15.8333 0.333984H4.16663C3.23837 0.333984 2.34813 0.702733 1.69175 1.35911C1.03538 2.01549 0.666626 2.90573 0.666626 3.83398V7.33398C0.666626 7.6434 0.789543 7.94015 1.00833 8.15894C1.22713 8.37773 1.52387 8.50065 1.83329 8.50065C2.14271 8.50065 2.43946 8.37773 2.65825 8.15894C2.87704 7.94015 2.99996 7.6434 2.99996 7.33398V3.83398C2.99996 3.52456 3.12288 3.22782 3.34167 3.00903C3.56046 2.79023 3.85721 2.66732 4.16663 2.66732H15.8333C16.1427 2.66732 16.4395 2.79023 16.6583 3.00903C16.877 3.22782 17 3.52456 17 3.83398V20.1673C17 20.4767 16.877 20.7735 16.6583 20.9923C16.4395 21.2111 16.1427 21.334 15.8333 21.334H4.16663C3.85721 21.334 3.56046 21.2111 3.34167 20.9923C3.12288 20.7735 2.99996 20.4767 2.99996 20.1673V16.6673C2.99996 16.3579 2.87704 16.0612 2.65825 15.8424C2.43946 15.6236 2.14271 15.5007 1.83329 15.5007C1.52387 15.5007 1.22713 15.6236 1.00833 15.8424C0.789543 16.0612 0.666626 16.3579 0.666626 16.6673V20.1673C0.666626 21.0956 1.03538 21.9858 1.69175 22.6422C2.34813 23.2986 3.23837 23.6673 4.16663 23.6673H15.8333C16.7616 23.6673 17.6518 23.2986 18.3082 22.6422C18.9645 21.9858 19.3333 21.0956 19.3333 20.1673V3.83398C19.3333 2.90573 18.9645 2.01549 18.3082 1.35911C17.6518 0.702733 16.7616 0.333984 15.8333 0.333984Z"
                      fill="#DC2626"
                    />
                  </svg>
                </ListItemIcon>
                <ListItemText
                  className="text-red-500"
                  primary="Logout"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Box>
        </List>
      </Drawer>
      {children}
    </Box>
  );
}
