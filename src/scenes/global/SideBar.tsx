import { useState, FC, JSX } from "react";
import { Sidebar as ReactProSideBar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, Theme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens, ColorTokens } from "../../theme";

import userImg from "/src/assets/user.jpg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

console.warn(
  `not all the pages from SelectedPage will be added, remove all unnecessary`
);
type urlPath =
  | "/"
  | "/"
  | "/team"
  | "/contacts"
  | "/invoices"
  | "/form"
  | "/bar"
  | "/pie"
  | "/line"
  | "/faq"
  | "/calendar"
  | "/geography";

interface MenuButtonProps {
  title: string;
  to: urlPath;
  icon: JSX.Element;
  selected: string;
  setSelected: (state: string) => void;
}

const MenuButton: FC<MenuButtonProps> = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}) => (
  <MenuItem
    icon={icon}
    active={title === selected}
    component={<Link to={to} />}
    onClick={() => setSelected(title)}
  >
    {title}
  </MenuItem>
);

export default function Sidebar() {
  const theme: Theme = useTheme();
  const colors: ColorTokens = tokens(theme.palette.mode);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Dashboard");

  return (
    <ReactProSideBar
      collapsed={collapsed}
      backgroundColor="transparent"
      rootStyles={{
        borderRight: collapsed ? "1px solid grey" : "none",
      }}
    >
      <Menu
        menuItemStyles={{
          button: ({ active }) => ({
            color: active ? "#6870fa" : colors.grey[100],
            "&:hover": {
              color: "#6870fa",
              backgroundColor: "transparent",
            },
          }),
        }}
      >
        {/* LOGO AND MENU ICON */}
        <MenuItem
          onClick={() => setCollapsed(!collapsed)}
          icon={collapsed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100],
          }}
        >
          {!collapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant="h3" color={colors.grey[100]}>
                ADMINIS
              </Typography>
              <IconButton onClick={() => setCollapsed(!collapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>
        {/* Profile picture & name */}
        {!collapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={userImg}
                style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "top 0 right -23px ",
                }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h3"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                John Smith
              </Typography>
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                marginTop={1}
              >
                VP Fancy Admin
              </Typography>
            </Box>
          </Box>
        )}

        {/* Menu options */}
        <MenuButton
          title="Dashboard"
          to="/"
          icon={<HomeOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          Data
        </Typography>
        <MenuButton
          title="Manage Team"
          to="/team"
          icon={<PeopleOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <MenuButton
          title="Contacts Information"
          to="/contacts"
          icon={<ContactsOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <MenuButton
          title="Invoices Balances"
          to="/invoices"
          icon={<ReceiptOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />

        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          Pages
        </Typography>
        <MenuButton
          title="Profile Form"
          to="/form"
          icon={<PersonOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <MenuButton
          title="Calendar"
          to="/calendar"
          icon={<CalendarTodayOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <MenuButton
          title="FAQ Page"
          to="/faq"
          icon={<HelpOutlineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />

        <Typography
          variant="h6"
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          Charts
        </Typography>
        <MenuButton
          title="Bar Chart"
          to="/bar"
          icon={<BarChartOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <MenuButton
          title="Pie Chart"
          to="/pie"
          icon={<PieChartOutlineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <MenuButton
          title="Line Chart"
          to="/line"
          icon={<TimelineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
        <MenuButton
          title="Geography Chart"
          to="/geography"
          icon={<MapOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
        />
      </Menu>
    </ReactProSideBar>
  );
}
