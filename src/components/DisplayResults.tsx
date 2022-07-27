import { Box, Card, CardContent, Typography } from "@mui/material";
import { LoadingStates } from "./types/LoadingStates";
import DotLoader from "react-spinners/ClipLoader";
import { QueryResponse, Results } from "./types/QueryResponse";
import { CSSProperties } from "react";

interface Props {
    queryResults: QueryResponse | undefined;
    loadingState: LoadingStates;
}

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};


const DisplayResults = (props: Props) => {
    const { queryResults, loadingState } = props;

    return (
        <>
            <Box sx={{ marginTop: '20px' }}>
                <DotLoader color={"#ffffff"} loading={loadingState === LoadingStates.Loading} cssOverride={override} size={150} />
                {queryResults?.results.map((res: Results) => {
                    return (<Card sx={{ width: '50%', margin: 'auto', marginTop: '5px' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: '14' }}>
                                {res.joke}
                            </Typography>
                        </CardContent>
                    </Card>);
                })}
            </Box>
        </>
    );
};

export default DisplayResults;
