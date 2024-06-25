import React, { useState, useEffect } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
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
import { useRouter } from "next/router";
import svgs from "@/components/svg/svg";
import { getSession, useSession } from "next-auth/react";
import useUserData from '../../services/PersonalDetails/useUserData';

import { signOut } from "next-auth/react";
import useUserNameStore from "@/utilites/store";

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
  const router = useRouter();
  const name = useUserNameStore((state)=>state.name);
  // console.log(session);
  const { userData, fetchedUserData, setUserData, updateUser } = useUserData();
  useEffect(() => {
    if (fetchedUserData) {
      const { firstName, lastName, email, phoneNumber } = fetchedUserData;
      setUserData({ firstName, lastName, email, phoneNumber });
    }
  }, [fetchedUserData, setUserData]);
  // const userName = session?.user?.firstName
  //   ? `${session.user.firstName} ${session.user.lastName}`
  //   : `${session?.user?.name}`;

  const [open, setOpen] = React.useState(
    router.pathname == "/settings" ||
      router.pathname == "/settings/personal-info" ||
      router.pathname == "/settings/security" ||
      router.pathname == "/settings/address" ||
      router.pathname == "/settings/support"
      ? false
      : true
  );

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar open={open} className="bg-white shadow-none border-b-[1px] ">
        <Toolbar>
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
            {svgs?.menuIcon}
          </IconButton>
          <Typography
            className="w-full flex justify-between"
            variant="h6"
            noWrap
            component="div"
          >
            <Breadcrumbs className="flex items-center" aria-label="breadcrumb">
              <Link color="inherit" href="/">
                Home
              </Link>
              {router?.pathname
                .split("/")
                ?.slice(1)
                .map((path) =>
                  path !== "" ? (
                    <Typography
                      key={router?.pathname.indexOf(path)}
                      color="text.primary"
                    >
                      {path}
                    </Typography>
                  ) : null
                )}
            </Breadcrumbs>
            <div className="flex items-center">
              <div className="flex items-center">
                <Image
                  src={userImage}
                  alt="Picture of the author"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <Typography className="ml-2 text-black">{name} </Typography>
              </div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className="flex justify-start">
          {svgs?.lawgaurdproLogo}
        </DrawerHeader>

        <List className="flex flex-col justify-between h-full">
          <Box>
            <Link href="/">
              <ListItem
                className={
                  router.pathname === "/"
                    ? "text-violet-900 bg-purple-300"
                    : "text-black"
                }
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
                    <HomeOutlinedIcon
                      className={
                        router.pathname === "/"
                          ? "text-violet-900"
                          : "text-black"
                      }
                    />
                  </ListItemIcon>
                  <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link href="/notification">
              <ListItem
                className={
                  router.pathname === "/notification"
                    ? "text-violet-900 bg-purple-300 my-5"
                    : "text-black my-5"
                }
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
                    <NotificationsOutlinedIcon
                      className={
                        router.pathname === "/notification"
                          ? "text-violet-900"
                          : "text-black"
                      }
                    />
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
                className={
                  router.pathname === "/my-cases"
                    ? "text-violet-900 bg-purple-300 my-5"
                    : "text-black my-5"
                }
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
                    <BusinessCenterOutlinedIcon
                      className={
                        router.pathname === "/my-cases"
                          ? "text-violet-900"
                          : "text-black"
                      }
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="My Cases"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link href="/settings/personal-info">
              <ListItem
                className="my-5"
                disablePadding
                sx={{
                  display: "block",
                }}
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
                    <SettingsOutlinedIcon
                      className={
                        router.pathname === "/settings/personal-info"
                          ? "text-violet-900 "
                          : "text-black"
                      }
                    />
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
            <Link href="">
              <ListItem
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
                  onClick={() => signOut()}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {svgs?.logoutIcon}
                  </ListItemIcon>
                  <ListItemText
                    className="text-red-500"
                    primary="Logout"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </Box>
        </List>
      </Drawer>
      {/* <Box component="main" >
        <DrawerHeader />
        {children}
      </Box> */}
      {children}
    </Box>
  );
}
