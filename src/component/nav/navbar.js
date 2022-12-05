import {Grid} from "@mui/material";
import {Link} from "react-router-dom";
import "./nav.css"

function Navbar() {
    return (
        <div>
            <Grid container className='nav' >
                <Grid xs={3}>
                    <Link>オフショア開発</Link>
                </Grid>
                <Grid xs={3}>
                    <Link>NALブログ</Link>
                </Grid>
                <Grid xs={3}>
                    <Link>ベトナム情報</Link>
                </Grid>
                <Grid xs={3}>
                    <Link>お問い合わせ</Link>
                </Grid>
            </Grid>
            <hr color="black" size="3" align="center" />
        </div>

    )
}

export default Navbar