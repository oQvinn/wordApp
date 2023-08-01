import { Box } from "@mui/material";

/*
Functional component that takes in the props of an image link originating from the /assets/ folder and an optional 
size modifier. Produces a rounded version of what user uploads initially during registration as their picture. 
*/

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
