import { Box } from "@mui/material";
import { styled } from "@mui/system";

/* 
Spaces elements contained within <FlexBetween> tags with the listed properties. Creates an invisible box
around the contained elements, separating them from other elements in the same if other elements are contained
in the same <div> tags.
*/

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
