import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { LoadingStates } from "./types/LoadingStates";
import { QueryResponse } from "./types/QueryResponse";

interface Props {
    setQueryResults: (queryResults: QueryResponse | undefined) => void;
    setLoadingState: (state: LoadingStates) => void;
}

const Search = (props: Props) => {
    const { setQueryResults, setLoadingState } = props;
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
    }

    const search = async () => {
        setLoadingState(LoadingStates.Loading);
        const response = await fetch('https://icanhazdadjoke.com/search?' + new URLSearchParams({term: searchTerm}), {
            method: 'GET',
            headers: {'User-Agent': 'demo-stuff', 'content-type': 'application/json', 'Accept': 'application/json'},
        });
        const results: QueryResponse = await response.json();
        setLoadingState(LoadingStates.Finished);
        setQueryResults(results);

    }

    const clear = () => {
        setQueryResults(undefined);
    }

    return (
        <Box sx={{ textAlign: 'center', marginTop: '10px' }}>
            <Box>
                <TextField label="Search dad jokes" color="primary" focused onChange={handleChange} />
            </Box>
            <Box sx={{ marginTop: '5px' }}>
                <Button variant="contained" color="primary" onClick={search}>Search</Button>
                <Button sx={{marginLeft: '5px'}} variant="contained" color="error" onClick={clear}>Clear</Button>
            </Box>
        </Box>
    );
};

export default Search;
