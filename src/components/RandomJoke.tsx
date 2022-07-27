import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";
import { Results } from "./types/QueryResponse";

const RandomJoke = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [joke, setJoke] = useState<Results>();

    const click = async () => {
        const response = await fetch('https://icanhazdadjoke.com/', {
            method: 'GET',
            headers: { 'User-Agent': 'demo-stuff', 'content-type': 'application/json', 'Accept': 'application/json' }
        });
        const joke: Results = await response.json();
        setJoke(joke);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Button sx={{ marginTop: '10px' }} variant="contained" color="warning" onClick={click}>Get Random Joke</Button>
            {joke && (<Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Your random joke"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {joke.joke}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>)}
        </>);
};

export default RandomJoke;