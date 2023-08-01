import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";

/*
HomePage component. Currently setup mainly for fullscreen setups, mobile screen sizing needs adjustment. 
*/

const HomePage = () => {

  //Defines that a non-mobile screen is >= 1000px 
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  //Grabs the id and picturePath from the application state, "user" is the collection of information of who's presently logged in.
  const { _id, picturePath } = useSelector((state) => state.user);

  /*
  Returns a <Box> containing all the elements visible on the HomePage. All new widgets can be added following the format of
  <Box><Widget><Box> for separating them from the other widgets, or <Box><Widget><Widget>...etc<Box> for multiple widgets in the
  same section. Use the flexBasis modifier to adjust how much horizontal space the widget occupies.
  */

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          {/*Add widgets here */}
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%"></Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
