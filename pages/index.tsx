import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Typography from "@mui/material/Typography";
import { Zoom, Stack, Button, Paper, Box } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

type ItemData = {
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

const renderItem = (itemData: ItemData) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const nextImage = () =>
    setImageIndex((imageIndex + 1) % itemData.images.length);

  return (
    <Stack className="mouseHover">
      <Zoom in={true}>
        <Paper
          elevation={3}
          sx={{
            "&:hover": {
              transform: "translateY(-1em) !important",
            },
          }}
        >
          <div
            style={{ position: "relative", width: "100%", height: "256px" }}
            onClick={() => nextImage()}
          >
            {renderImage(itemData.images[imageIndex])}
          </div>
          <Box padding={"1em"}>
            <Typography gutterBottom variant="h5" component="div">
              {itemData.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {itemData.description}
            </Typography>
            <Button href={itemData.link}>Goto</Button>
          </Box>
        </Paper>
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
} as ItemData;

const dbUnityBunny = {
  images: ["/images/db-unity-bunny-1.png"],
  title: "db-unity-bunny",
  description: `A Unity C# game project I started together with my girl friend featuring bunny's
  The goal of the game is yet to be decided`,
  link: "https://deltaboukensha.github.io/db-unity-bunny",
} as ItemData;

const dbDiary = {
  images: ["/images/db-diary-1.png", "/images/db-diary-2.png"],
  title: "db-diary",
  description: `A diary project for my personal everyday use.
  A mobile targeted web project.
  Uses TypeScript, Firebase, Nextjs, SPA, PWA`,
  link: "https://db-diary-ee778.web.app",
} as ItemData;

const dbReactD3Sorting = {
  images: ["/images/db-react-d3-sorting.png"],
  title: "db-react-d3-sorting",
  description: `Visualizes sorting algorithms using React and D3.
  Uses D3, React, TypeScript, Nextjs, MaterialUI`,
  link: "https://db-react-d3.web.app/sorting",
} as ItemData;

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
} as ItemData;

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
} as ItemData;

const index = () => (
  <>
    <Helmet>
      <title>db-demo</title>
      <meta name="title" content="Default Title" data-react-helmet="true" />
    </Helmet>
    <h1>Welcome to the demo page by Delta Boukensha </h1>
    <p>
      A page for all my demo projects. For more projects see
      <Button href="https://github.com/deltaboukensha">My GitHub</Button> page
    </p>
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={1}>
      {renderItem(dbDiary)}
      {renderItem(cxBookmarkHelper)}
      {renderItem(sokobanDelta)}
      {renderItem(dbWebGlRipples)}
      {renderItem(dbUnityBunny)}
      {renderItem(dbReactD3Sorting)}
    </Masonry>
  </>
);

export default index;
