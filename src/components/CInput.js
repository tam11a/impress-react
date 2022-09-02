import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
const CInput = styled(InputBase)(({ theme }) => ({
  border: "2px solid " + theme.palette.background.default + "aa",
  // minHeight: "48px",
  padding: 1.5,
  paddingLeft: 5,
  paddingRight: 5,
  borderRadius: "2px",
  alignItems: "center",
  display: "flex",
  color: theme.palette.background.contrastText
  // boxShadow: "0px 4px 4px rgba(130, 107, 193, 0.25)",
}));
export default CInput;