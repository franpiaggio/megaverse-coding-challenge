import express from "express";

import { makeCrossPlanets, cleanMegaVerse, getBaseGrid, createMegaverseLogo } from "./actions";
import { GRID_SIZE, Megaverse, OFFSET_CROSS, generateCleanGrid, generateCross } from "./common";
import dotenv from "dotenv";
import { AxiosResponse } from "axios";

const app = express();
const PORT = 4000;
dotenv.config();

app.get("/create-cross-planets", (req, res) => {
  res.send("Creating planets");
  const polyPlanetCross: Megaverse = generateCross("x", GRID_SIZE, OFFSET_CROSS);
  makeCrossPlanets(polyPlanetCross, "x");
});

app.get("/create-logo", async (req, res) => {
  try {
    res.send("Creating logo");
    const gridRes: AxiosResponse = await getBaseGrid();
    createMegaverseLogo(gridRes.data.goal);
  } catch (e) {
    res.status(500).send("Something wen wrong!");
  }
});

app.get("/clean", (req, res) => {
  res.send("Deleting planets");
  const size = req.query.size;
  const cleanGrid = generateCleanGrid(size);
  cleanMegaVerse(cleanGrid);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
