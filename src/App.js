import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import { BsFillCircleFill, BsThermometerHigh } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdClose, MdAdd, MdHeight } from "react-icons/md";
import { IconWaveSawTool } from "@tabler/icons";
import CInput from "./components/CInput";
import svgURL from "./logo.svg";
import { useGetAllDevice } from "./query";
import { GrMapLocation } from "react-icons/gr";

function App() {
  const [devices, setDevices] = React.useState([]);

  const { data } = useGetAllDevice();

  React.useEffect(() => {
    if (!data) return;
    if (!data.data.success) return;
    setDevices(data.data.data);
  }, [data]);

  return (
    <Stack direction={"column"} alignItems={"center"} p={1}>
      <Box mt={3} />
      <img src={svgURL} alt="MeaWaCo" height={"100px"} />
      <Typography
        variant={"h5"}
        sx={{
          "& span": {
            color: "primary.main",
          },
        }}
      >
        Impress<span>Web</span>
      </Typography>
      <Typography variant={"button"} sx={{ fontSize: "0.7rem" }}>
        Measure States &amp; Registor
      </Typography>
      <Box mt={3} />
      <Grid
        container
        spacing={1}
        alignItem={"center"}
        justifyContent={"center"}
        sx={{
          maxWidth: "1080px",
        }}
      >
        {devices?.map((dev, i) => (
          <Device dev={dev} key={i} />
        ))}
        {/* <Grid item xs={6} sm={4} md={3} lg={2}>
          <Paper
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
            component={Button}
            // onClick={handleDialog}
            fullWidth
          >
            <IconButton
              sx={{
                fontSize: "3.5rem",
                color: "ternary.main",
              }}
            >
              <MdAdd />
            </IconButton>
            <Typography variant={"caption"} color={"primary.main"}>
              Create New Device
            </Typography>
          </Paper>
        </Grid> */}
      </Grid>
    </Stack>
  );
}

const Device = ({ dev, ...others }) => {
  const [dialog, setDialog] = React.useState(false);
  const handleDialog = () => {
    setDialog(!dialog);
  };
  return (
    <Grid item xs={12} md={6}>
      <Paper
        sx={{
          p: 1,
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
        fullWidth
      >
        <Button
          variant={"outlined"}
          sx={{
            mb: 2,
          }}
          fullWidth
          color={"ternary"}
        >
          {dev.name}
        </Button>
        <span onClick={handleDialog}>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <IconButton
              size={"small"}
              color={"primary"}
              sx={{
                fontSize: "1.5rem",
              }}
            >
              <IconWaveSawTool />
            </IconButton>
            <Typography
              color={"ternary.main"}
              sx={{
                fontSize: "1.5rem",
              }}
            >
              Registor :
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
              }}
            >
              {dev.lastState?.registor || "-"}
            </Typography>
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "1.5rem",
              }}
            >
              K
            </Typography>
            <IconButton
              color={
                !dev.lastState &&
                !dev.lastState.registor &&
                dev.lastState.registor !== 0
                  ? "default"
                  : dev.lastState.registor >= 1 && dev.lastState.registor <= 11
                  ? "success"
                  : "error"
              }
            >
              <BsFillCircleFill />
            </IconButton>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={1}
            color={"secondary.main"}
          >
            <IconButton
              size={"small"}
              color={"primary"}
              sx={{
                fontSize: "1.5rem",
              }}
            >
              <BsThermometerHigh />
            </IconButton>
            <Typography
              color={"ternary.main"}
              sx={{
                fontSize: "1.5rem",
              }}
            >
              Temparature :
            </Typography>
            <Typography
              color={"ternary.main"}
              sx={{
                fontSize: "1.5rem",
              }}
            >
              {dev.lastState.temp || "-"} &deg; C
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={1}
            color={"secondary.main"}
          >
            <IconButton
              size={"small"}
              color={"secondary"}
              sx={{
                fontSize: "1.5rem",
              }}
            >
              <MdHeight />
            </IconButton>
            <Typography
              color={"ternary.main"}
              sx={{
                fontSize: "1.5rem",
              }}
            >
              Altitude :
            </Typography>
            <Typography
              color={"ternary.main"}
              sx={{
                fontSize: "1.5rem",
              }}
            >
              {dev.lastState.alt || "-"} m
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={1}
            color={"secondary.main"}
          >
            <IconButton
              size={"small"}
              color={"secondary"}
              sx={{
                fontSize: "1.5rem",
              }}
            >
              <AiOutlineClockCircle />
            </IconButton>
            <Typography
              color={"ternary.main"}
              sx={{
                fontSize: "1.5rem",
              }}
            >
              {moment(dev.lastState.createdAt).calendar()}
            </Typography>
          </Stack>
        </span>
        <Button
          variant={"contained"}
          sx={{
            mt: 2,
          }}
          fullWidth
          color={"ternary"}
          startIcon={<GrMapLocation />}
          component={"a"}
          target={"_blank"}
          href={`http://maps.google.com/maps?q=loc:${dev.lastState.lat},${dev.lastState.lng}`}
        >
          View Location
        </Button>
      </Paper>
      <Dialog
        open={dialog}
        onClose={handleDialog}
        PaperProps={{
          sx: {
            width: "95vw",
          },
        }}
      >
        <DialogTitle
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography>{dev.name}</Typography>
          <IconButton color={"primary"} onClick={handleDialog}>
            <MdClose />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Stack
            direction={"row"}
            alignItems={"flex-end"}
            justifyContent={"center"}
            spacing={1}
          >
            <Typography variant={"h2"}>
              {dev.lastState?.registor || "-"}
            </Typography>
            <Typography
              variant={"subtitle1"}
              sx={{
                pb: 1,
                color: "primary.main",
              }}
            >
              K
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={1}
            color={"secondary.main"}
            justifyContent={"center"}
          >
            <IconButton size={"small"} color={"primary"}>
              <BsThermometerHigh />
            </IconButton>
            <Typography color={"ternary.main"}>
              {dev.lastState.temp || "-"} &deg; C
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={1}
            color={"secondary.main"}
            justifyContent={"center"}
          >
            <IconButton size={"small"} color={"secondary"}>
              <AiOutlineClockCircle />
            </IconButton>
            <Typography color={"ternary.main"}>
              {moment(dev.lastState.createdAt).calendar()}
            </Typography>
          </Stack>
          <Typography variant={"overline"} color={"primary.main"}>
            Device ID
          </Typography>
          <CInput value={dev._id} readOnly />
          <Typography variant={"overline"} color={"primary.main"}>
            Device Name
          </Typography>
          <CInput value={dev.name} readOnly />

          <Typography variant={"overline"} color={"primary.main"}>
            User Phone Number
          </Typography>
          <CInput value={dev.userPhone} readOnly />

          <Typography variant={"overline"} color={"primary.main"}>
            Device Phone Number
          </Typography>
          <CInput value={dev.devicePhone} readOnly />
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default App;
