import { Typography, Box, Button } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import PlayButton from "components/PlayButton";
import { useDispatch, useSelector } from "react-redux";
import { setGame } from "state";

const { default: WidgetWrapper } = require("components/WidgetWrapper");

const GameWidget = () => {
    const dispatch = useDispatch();
    const currentMode = useSelector((state) => state.game)

    const handleSubmit = () => {
        dispatch(setGame(false))
    }

    return(
        <WidgetWrapper height="100%">
            <FlexBetween>
                <Box width="100%">
                    <Typography color="primary">
                        <center><h2>Ready to Play? Press that button!</h2></center>
                    </Typography>
                </Box>
            </FlexBetween>
            
            <PlayButton></PlayButton>

            {currentMode ? 
            
                <div>
                    <center><h4>The Game</h4></center>
                    <Box textAlign="center">
                        <Button onClick={handleSubmit} variant="outlined">Submit</Button>
                    </Box>
                </div> 
            
            : null}
            
            
        </WidgetWrapper>
    );
}

export default GameWidget; 