import {Grid, Typography} from "@mui/material";
import "./footer.css"

function Footer() {
    return (
        <div className='footer'>
            <hr color="black" align="center" width="800" />
            <Grid container >
                <Grid xs>
                </Grid>
                <Grid xs={4}>
                    <img src="/image/logo-NAL.jpg"/>
                </Grid>
                <Grid xs>
                </Grid>
                <Grid xs={4}>
                    <Typography variant="h1" sx={{fontSize: "13px"}}>
                        NAL MEDIA ベトナムオフショア開発にまつわる情報を提供します
                    </Typography>
                    <Typography variant="h1" sx={{fontSize: "13px"}}>
                        このサイトは、ベトナムにおけるオフショア開発の状況、ベトナムと日本の協力関係、およびテクノロジーに関する最新のニュースを更新し、NALの人々とお客様のストーリーを投稿しております。
                    </Typography>
                    <Typography variant="h1" sx={{fontSize: "13px"}}>
                        住所：3F, 84 Duy Tân, Cầu Giấy, Hà Nội, Việt Nam
                    </Typography>
                    <Typography variant="h1" sx={{fontSize: "13px"}}>
                        電話番号：(+84)243-787-8654
                    </Typography>
                    <Typography variant="h1" sx={{fontSize: "13px"}}>
                        メールアドレス：info@nal.vn
                    </Typography>
                </Grid>
                <Grid xs>
                </Grid>
            </Grid>
            <hr color="black" width="1400"/>

        </div>
    )
}

export default Footer