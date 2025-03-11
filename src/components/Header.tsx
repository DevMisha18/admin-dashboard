import { FC } from "react";
import { Typography, Box, useTheme, Theme } from "@mui/material";
import { tokens, ColorTokens } from "../theme";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  const theme: Theme = useTheme();
  const colors: ColorTokens = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};
