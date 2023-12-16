import { Grid, Typography } from "@mui/material";
import React from "react";

function Header() {
  return (
    <>
      <Grid
        container
        borderBottom={1}
        justifyContent="space-between"
        paddingX={6}
        paddingY={2}
      >
        <Grid item>
          <Typography variant="h5" fontFamily="InterBold">
            TinkerSpace Carnival
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" fontFamily="InterBold" display="flex">
            Tinker
            <Typography variant="h5" fontFamily="InterLight">
              Hub
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
