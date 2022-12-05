import {Avatar, Grid, List, ListItem, Typography} from "@mui/material";
import latestNews from '../../../src/mockData/latestNews';
import popularNews from '../../../src/mockData/popularNews';
import tag from '../../../src/mockData/tag';
import banners from '../../../src/mockData/banner';
import "./body.css"
function Body() {
    return (
        <Grid container >
            <Grid item xs={12}>
                <Grid container sx={{ display: "flex" }}>
                    <Grid item xs sx={{ flex: 1 }} className="news-hot-top">
                        <img src="image/1.jpg" className="news-hot-one" />
                    </Grid>
                    <Grid item xs sx={{ flex: 2 }} id="news-hot__top-viewed">
                        <Grid container>
                            <Grid item xs>
                                <img src="image/2.jpg" className="news-hot-two" />
                            </Grid>
                            <Grid item xs>
                                <img src="image/3.jpg" className="news-hot-two" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>

            <Grid item xs={8}  sx={{ paddingTop: "10px" }}>
                <Typography variant="h6" sx={{ marginBottom: "5px"}}>Latest News</Typography>
                <List>
                    {
                        latestNews.map((item) => (
                            <ListItem sx={{ paddingLeft: 0, maxHeight: "157px", marginTop: "20px" }} key={item.id}>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <img src={`image/${item.image}.jpg`} className="latest-new-image" />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="p" sx={{ color: "white", backgroundColor: "black", fontSize: "11.5px", border: "1px solid black" }}>{item.category_name }</Typography>
                                        <br/>
                                        <Typography variant="p" className="latest-new" sx={{fontWeight: 700}}>{item.title}</Typography>
                                        <br/>
                                        <Typography variant="p" className="latest-new">{item.date}, by {item.author }</Typography>
                                        <br/>
                                        <Typography variant="p" className="latest-new">{item.content}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        ))}
                </List>
            </Grid>

            <Grid item xs  sx={{marginTop: "10px"}}>
                <Grid container sx={{ display: "flex", flexDirection: "column" }}>
                    <Grid item xs>
                        <Typography variant="h6">Popular News</Typography>
                        <List>
                            {
                                popularNews.map((item) => (
                                    <ListItem sx={{ padding: 0, height: "120px" }} key={item.id}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={4}>
                                                <img src={`image/${item.image}.jpg`}/>
                                            </Grid>
                                            <Grid item xs>
                                                <Typography variant="p" sx={{ color: "white", border: "1px solid black", backgroundColor: "black" }}>{item.category_name}</Typography>
                                                <br />
                                                <Typography variant="p" color="initial">{item.title}</Typography>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                ))}
                        </List>
                    </Grid>

                    <Grid item xs>
                        <Typography variant="h6">Tags</Typography>
                        <List>
                            {
                                tag.map((item, index) => (
                                    <ListItem key={index} >
                                        <Typography variant="p" sx={{color: "#7d7d7d"}}> &nbsp; {item.tag} (<strong style={{color: "black"}}>{item.posts }</strong> Posts)</Typography>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Grid>

                    <Grid item xs>
                        <List>
                            {
                                banners.map((item) => (
                                    <ListItem key={item.id}>
                                        <img src={`image/${item.image}`} style={{width: "256px"}} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default Body