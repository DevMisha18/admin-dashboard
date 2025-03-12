import { FC } from "react";
import { Header } from "../../components/Header";
import { Box, Typography, useTheme, Theme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { tokens, ColorTokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { Stack } from "@mui/material";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const Team: FC = () => {
  const theme: Theme = useTheme();
  const colors: ColorTokens = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box display="flex" alignItems="center" height="100%">
            <Box
              display="flex"
              justifyContent="center"
              width="60%"
              m="0 auto"
              p={1}
              sx={{
                backgroundColor:
                  access === "admin"
                    ? colors.greenAccent[600]
                    : access === "manager"
                    ? colors.greenAccent[700]
                    : colors.greenAccent[700],
              }}
              borderRadius={1}
            >
              {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
              {access === "manager" && <SecurityOutlinedIcon />}
              {access === "user" && <LockOpenOutlinedIcon />}
              <Box display="flex" justifyContent="center" width="60%">
                <Typography color={colors.grey[100]} sx={{ ml: 1 }}>
                  {access}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m={2}>
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <DataGrid rows={mockDataTeam} columns={columns} />
    </Box>
  );
};

export default Team;
