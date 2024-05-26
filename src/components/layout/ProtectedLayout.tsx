import * as React from "react";
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
  // const theme = useTheme();
  const [open, setOpen] = React.useState(
    router.pathname == "/settings" ? false : true
  );

  // console.log(router.pathname.split("/")?.slice(1));
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
              width="37"
              height="37"
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
              </div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className="flex justify-start">{svgs?.logo}</DrawerHeader>

        <List className="flex flex-col justify-between h-full ">
          <Box>
            <Link href="/">
              <ListItem
                className={
                  router.pathname === "/" ? "text-violet-900" : "text-black"
                }
                // className="my-5"
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
