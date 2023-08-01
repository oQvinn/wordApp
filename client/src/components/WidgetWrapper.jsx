import { Box } from "@mui/material";
import { styled } from "@mui/system";

/*
Component wrapper that wraps widgets in their own colored box that matches the size of the content being contained within
the <WidgetWrapper> tags. Use whenever you create a new widget by adding the <WidgetWrapper> tags as the first set of tags
within the functional component return statement. See the UserWidget layout for an example.
*/

const WidgetWrapper = styled(Box)(({ theme }) => ({
  padding: "1.5rem 1.5rem 0.75rem 1.5rem",
  backgroundColor: theme.palette.background.alt,
  borderRadius: "0.75rem",
}));

export default WidgetWrapper;
