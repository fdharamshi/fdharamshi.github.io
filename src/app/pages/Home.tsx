import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import logo from "../../static/favicon.png";
import cmu from "../../static/cmu.png"
import { useLocation } from "react-router-dom";
import { links } from "./links";
import './Home.css'
import Divider from "@mui/material/Divider";
import MDContainer from "../components/MDContainer";
import GitHubCalendar, {createCalendarTheme} from "react-github-calendar";

interface Props {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home({ setSelectedIndex }: Props) {
  const { pathname } = useLocation();
  useEffect(() => {
    setSelectedIndex(-1);
  }, [setSelectedIndex]);

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME!;
  }, [pathname]);

  return (
      <>
        <div id="main-container">
          <img src={cmu} alt={"Header"} id="cmu-header"/>
          <img src={logo} id="my-logo" alt={"Logo"}/>
        </div>
        <div id="title-container">
          <Typography variant="h3">Femin Dharamshi</Typography>
          <Typography variant="h6">SDE @ MarketAxess</Typography>
          <Stack direction="row" spacing={0.4}>
            {links.map((link) => (
                <Tooltip key={link.index} title={link.title} arrow>
                  <Link
                      target="_blank"
                      href={link.href}
                      underline="none"
                      color="inherit"
                  >
                    <IconButton color="inherit">{link.icon}</IconButton>
                  </Link>
                </Tooltip>
            ))}
          </Stack>
            <Divider style={{marginTop: "20px"}}/>
            <Typography style={{marginTop: "20px", marginBottom: "20px"}} variant="h6">Software Developer specializing in Mobile Application Development. Experienced with all stages of the development cycle for full-fledged mobile apps. Well-versed in numerous programming languages including Java, Swift, Python and JavaScript/TypeScript. Strong background in backend and frontend development. Mitigated the gap between end users and developers, co-designed and built scalable solutions.</Typography>
            <GitHubCalendar username="fdharamshi" theme={createCalendarTheme("green", "#2D333B")}/>
        </div>
      </>
  );

  // return (
  //   <Grid
  //     container
  //     spacing={0}
  //     direction="column"
  //     alignItems="center"
  //     justifyContent="center"
  //     sx={{ minHeight: `calc(100vh - 20px - 33px)` }}
  //   >
  //     <Grid item xs={3}>
  //       <Stack direction={{ xs: "column", sm: "row-reverse" }} spacing={2}>
  //         <Box display="flex" sx={{ justifyContent: "center" }}>
  //           <img src={logo} width="140px" height="140px" alt="logo" />
  //         </Box>
  //         <Box>
  //           <Grid
  //             display="flex"
  //             justifyContent={{ xs: "center", sm: "flex-start" }}
  //           >
  //             <Typography variant="h3">Femin Dharamshi</Typography>
  //           </Grid>
  //           <Grid
  //             display="flex"
  //             justifyContent={{ xs: "center", sm: "flex-start" }}
  //           >
  //             <Typography variant="subtitle1" gutterBottom>
  //               Always difficult, always beautiful
  //               {/* Better an{' '}
  //               <Box fontWeight="fontWeightMedium" display="inline">
  //                 oops
  //               </Box>{' '}
  //               than a{' '}
  //               <Box fontWeight="fontWeightMedium" display="inline">
  //                 what if
  //               </Box> */}
  //             </Typography>
  //           </Grid>
  //           <Grid
  //             display="flex"
  //             justifyContent={{ xs: "center", sm: "flex-start" }}
  //           >
  //             <Stack direction="row" spacing={0.4}>
  //               {links.map((link) => (
  //                 <Tooltip key={link.index} title={link.title} arrow>
  //                   <Link
  //                     target="_blank"
  //                     href={link.href}
  //                     underline="none"
  //                     color="inherit"
  //                   >
  //                     <IconButton color="inherit">{link.icon}</IconButton>
  //                   </Link>
  //                 </Tooltip>
  //               ))}
  //             </Stack>
  //           </Grid>
  //         </Box>
  //       </Stack>
  //     </Grid>
  //   </Grid>
  // );
}
