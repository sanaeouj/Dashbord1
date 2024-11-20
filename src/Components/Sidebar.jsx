import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useNavigate, useLocation } from "react-router-dom";
import { grey } from "@mui/material/colors"; // Ajout de `grey` pour les couleurs

// Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// Avatar Image
import avatarImage from "../assets/avatar.png";

const drawerWidth = 240;
const drawerShrinkedWidth = 60;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: drawerShrinkedWidth,
  [theme.breakpoints.up("sm")]: {
    width: drawerShrinkedWidth,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = () => setOpen((prev) => !prev);

  const listSections = [
    {
      title: "Main",
      items: [
        { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/dashboard" },
        { text: "Manage Team", icon: <PeopleOutlineOutlinedIcon />, path: "/Teams" },
        { text: "Contacts Information", icon: <ContactsOutlinedIcon />, path: "/Contacts" },
        { text: "Invoices Balances", icon: <ReceiptOutlinedIcon />, path: "/Invoices" },
      ],
    },
    {
      title: "Tools",
      items: [
        { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
        { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
        { text: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
      ],
    },
    {
      title: "Charts",
      items: [
        { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
        { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
        { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
        { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
      ],
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={toggleDrawer}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Box sx={{ textAlign: "center", my: 2 }}>
          <Avatar
            sx={{
              mx: "auto",
              width: open ? 88 : 44,
              height: open ? 88 : 44,
              transition: "all 0.25s",
            }}
            alt="Admin Avatar"
            src={avatarImage}
          />
          <Typography
            sx={{
              fontSize: open ? 25 : 0,
              opacity: open ? 1 : 0,
              transition: "all 0.25s",
            }}
            align="center"
          >
            Sanae
          </Typography>
          <Typography
            sx={{
              fontSize: open ? 18 : 0,
              opacity: open ? 1 : 0,
              transition: "all 0.25s",
              color: theme.palette.info.main,
            }}
            align="center"
          >
            Admin
          </Typography>
        </Box>
        <Divider />
        {listSections.map((section, index) => (
          <Box key={`section-${index}`}>
            <List>
              {section.items.map((item) => (
                <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    onClick={() => {
                      navigate(item.path);
                    }}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      bgcolor:
                        location.pathname === item.path
                          ? theme.palette.mode === "dark"
                            ? grey[800]
                            : grey[300]
                          : null,
                      "&:hover": {
                        bgcolor:
                          location.pathname === item.path
                            ? theme.palette.mode === "dark"
                              ? grey[700]
                              : grey[400]
                            : grey[200],
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        "& svg": {
                          fontSize: "1.8rem", // Taille fixe
                        },
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            {index < listSections.length - 1 && <Divider />}
          </Box>
        ))}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
