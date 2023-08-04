import { Box, Button } from "@mui/material"
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import { useDispatch, useSelector } from "react-redux";
import { setGame } from "state";

const PlayButton = () => {
    const dispatch = useDispatch()
    const currentMode = useSelector((state) => state.game);

    const handleClick = () => {
        dispatch(setGame(true))
    }   
    return( 
        <Box textAlign='center'>
            <Button onClick={handleClick} variant="outlined" disabled={currentMode}><SportsEsportsOutlinedIcon fontSize="large"/></Button>
        </Box> 
    );
}
export default PlayButton;