import Footer from './component/footer/footer'
import './App.css';
import Header from "./component/header/header";
import Navbar from "./component/nav/navbar";
import Body from "./component/body/body";
import {Grid} from "@mui/material";

function App() {
  return (
    <div>
        <Grid container spacing={2}>
            <Grid xs>
            </Grid>
            <Grid xs={10}>
                <Header />
                <Navbar/>
                <Body/>
                <Footer />
            </Grid>
            <Grid xs>
            </Grid>
        </Grid>


    </div>
  );
}

export default App;
