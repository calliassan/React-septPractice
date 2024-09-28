import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import { VideoCard } from "./videocard";
import { ThemeProvider } from "@emotion/react";
import { Grid2 as Grid } from "@mui/material";

function App() {
  console.log(data);
  const { videos } = data;
  return (
    <div className="App">
      <Grid container spacing={2}>
        {videos.map((item) => (
          <VideoCard cardData={item} key={item.id} />
        ))}
      </Grid>
    </div>
  );
}

export default App;
