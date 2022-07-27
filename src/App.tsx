import { Box, Typography } from "@mui/material";
import { useState } from "react";
import DisplayResults from "./components/DisplayResults";
import RandomJoke from "./components/RandomJoke";
import Search from "./components/Search";
import { LoadingStates } from "./components/types/LoadingStates";
import { QueryResponse } from "./components/types/QueryResponse";

function App() {
  const [loadingState, setLoadingState] = useState<LoadingStates>(LoadingStates.Finished);
  const [queryResults, setQueryResults] = useState<QueryResponse>();

  return (
    <>
      <Box sx={{textAlign: 'center'}}>
        <Typography variant="h3" component="div">Get your dad jokes here.</Typography>
        <Search setQueryResults={setQueryResults} setLoadingState={setLoadingState} />
        <RandomJoke />
        <DisplayResults queryResults={queryResults} loadingState={loadingState} />
      </Box>
    </>
  );
}

export default App;
