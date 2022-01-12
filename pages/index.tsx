import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Zoom, Stack, Button, Fab } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type CardData = {
  images: string[];
  title: string;
  description: string;
  link: string;
};

const renderImage = (src) => {
  return (
    <img
      src={src}
      style={{ width: "100%", height: "100%", objectFit: "scale-down" }}
    ></img>
  );
};

const renderCard = (cardData: CardData) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const nextImage = () =>
    setImageIndex((imageIndex + 1) % cardData.images.length);

  return (
    <Stack>
      <Zoom in={true}>
        <Card variant="outlined">
          <div style={{ position: "relative", width: "100%", height: "256px" }} onClick={() => nextImage()}>
            {renderImage(cardData.images[imageIndex])}
            {/* {cardData.images.length > 1 && (
              <Fab
                size="small"
                color="secondary"
                style={{ position: "absolute", top: "50%", right: "5px" }}
                onClick={() => nextImage()}
              >
                <NavigateNextIcon></NavigateNextIcon>
              </Fab>
            )} */}
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardData.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardData.description}
            </Typography>
            <Button href={cardData.link}>Goto</Button>
          </CardContent>
        </Card>
      </Zoom>
    </Stack>
  );
};

const dbWebGlRipples = {
  images: ["/images/db-webgl-ripples-1.png", "/images/db-webgl-ripples-2.png"],
  title: "db-webgl-ripples",
  description: `A webgl demo of water ripple effects with webgl-shaders.
  Uses webgl, glsl, vertex-shaders, fragment-shaders, framebuffers`,
  link: "https://deltaboukensha.github.io/db-webgl-ripples",
} as CardData;

const dbUnityBunny = {
  images: ["/images/db-unity-bunny-1.png"],
  title: "db-unity-bunny",
  description: `A Unity C# game project I started together with my girl friend featuring bunny's
  The goal of the game is yet to be decided`,
  link: "https://deltaboukensha.github.io/db-unity-bunny",
} as CardData;

const dbDiary = {
  images: ["/images/db-diary-1.png", "/images/db-diary-2.png"],
  title: "db-diary",
  description: `A diary project for my personal everyday use.
  A mobile targeted web project.
  Uses TypeScript, Firebase, Nextjs, SPA, PWA`,
  link: "https://db-diary-ee778.web.app",
} as CardData;

const dbReactD3Sorting = {
  images: ["/images/db-react-d3-sorting.png"],
  title: "db-react-d3-sorting",
  description: `Visualizes sorting algorithms using React and D3.
  Uses D3, React, TypeScript, Nextjs, MaterialUI`,
  link: "https://db-react-d3.web.app/sorting",
} as CardData;

const cxBookmarkHelper = {
  images: [
    "/images/cx-bookmark-helper-1.jpg",
    "/images/cx-bookmark-helper-2.jpg",
    "/images/cx-bookmark-helper-3.jpg",
  ],
  title: "cx-bookmark-helper",
  description: `A bookmark helping chrome extension for my personal everyday use.
  Uses ChromeExtension API, JavaScript`,
  link: "https://chrome.google.com/webstore/detail/cx-bookmark-helper/bhfhaohjmlicimihnipmfjpdmjcehdmg?hl=en",
} as CardData;

const sokobanDelta = {
  images: ["/images/sokoban-delta-1.webp"],
  title: "sokoban-delta",
  description: `
Sokoban is a classic puzzle game where the player push boxes onto goals to solve the puzzle.
During engineering school I took a class in AI-programming.
This game was one of the puzzles where we created agents that utilized many different AI algorithms; DFS, BFS, A-Star, Reverse-search.
Programmed as a hybrid web application.
Uses JavaScript, Java, Android
`,
  link: "https://play.google.com/store/apps/details?id=com.delta.sokoban",
} as CardData;

const index = () => (
  <>
    <Helmet>
      <title>Delta Boukensha - GitHub</title>
    </Helmet>
    <h1>Welcome to Delta Boukensha's GitHub Page</h1>
    <p>
      A portfolio of some of my projects. For more projects see{" "}
      <Button href="https://github.com/deltaboukensha">My GitHub</Button> page
    </p>
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={0}>
      {renderCard(dbDiary)}
      {renderCard(cxBookmarkHelper)}
      {renderCard(sokobanDelta)}
      {renderCard(dbWebGlRipples)}
      {renderCard(dbUnityBunny)}
      {renderCard(dbReactD3Sorting)}
    </Masonry>
  </>
);

export default index;
