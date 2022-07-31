import Feed from "./component/Feed";
import Rightbar from "./component/Rightbar";
import Sidebr from "./component/Sidebr";
import{Box, createTheme, Stack} from "@mui/material"
import Navbar from "./component/Navbar";
import Add from "./component/Add";
import { ThemeProvider } from "@emotion/react";
import { useState } from 'react';

function App() {
  const[mode, setMode] = useState("light");

  const darkTheme= createTheme({
    palette:{
      mode:mode,
    }
  })
    return (
    <>
    <ThemeProvider theme={darkTheme}>
    <Box>
      <Navbar/>
       <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebr setMode={setMode} mode={mode}/>
          <Feed/>
          <Rightbar/>

       </Stack>
       <Add/>
    </Box>
    </ThemeProvider>
  
    
    </>
  );
}

export default App;
