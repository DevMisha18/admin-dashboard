import { useContext } from "react";
import { InputBase, Box, IconButton, useTheme } from "@mui/material";
import {
  ColorModeContext,
  tokens,
  ColorTokens,
  ColorModeContextValue,
} from "../../theme";
import { Theme } from "@mui/material/styles";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

export default function TopBar() {
  const theme: Theme = useTheme();
  const colors: ColorTokens = tokens(theme.palette.mode);
  const colorMode: ColorModeContextValue = useContext(ColorModeContext);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: colors.primary[400],
          borderRadius: "3px",
        }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          inputProps={{ placeholder: "Search" }}
        />
        <IconButton type="button">
          <SearchIcon />
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
