import { AxiosResponse } from "axios";
import { API_URL, Megaverse } from "./common";
import { clean, makeDelayedRequest, post, get } from "./requests";

export async function getBaseGrid(): Promise<AxiosResponse> {
  const url = `${API_URL}/map/${process.env.CANDIDATE_ID}/goal`;
  return get(url);
}

export async function makeCrossPlanets(megaverse: Megaverse, char: string) {
  for (let row = 0; row < megaverse.length; row++) {
    for (let col = 0; col < megaverse[row].length; col++) {
      if (megaverse[row][col] === "x") {
        const payload = { row: String(row), column: String(col) };
        await makeDelayedRequest(post, `${API_URL}/polyanets`, payload);
        console.log("Edited", payload);
      }
    }
  }
}

export async function cleanMegaVerse(megaverse: Megaverse) {
  for (let row = 0; row < megaverse.length; row++) {
    for (let col = 0; col < megaverse[row].length; col++) {
      const payload = { row: String(row), column: String(col) };
      await makeDelayedRequest(clean, `${API_URL}/polyanets`, payload);
      console.log("Cleaned", payload);
    }
  }
}

function getItemData(item: string) {
  let data = {};
  if (item.includes("COMETH")) {
    data = {
      url: "comeths",
      data: { direction: item.split("_")[0].toLocaleLowerCase() },
    };
  }

  if (item.includes("SOLOON")) {
    data = {
      url: "soloons",
      data: { color: item.split("_")[0].toLocaleLowerCase() },
    };
  }

  if (item.includes("POLYANET")) {
    data = {
      url: "polyanets",
    };
  }
  return data;
}

export async function createMegaverseLogo(megaverse: Megaverse) {
  for (let row = 0; row < megaverse.length; row++) {
    for (let col = 0; col < megaverse[row].length; col++) {
      const itemData: any = getItemData(megaverse[row][col]);
      const payload: any = { ...itemData.data, row: String(row), column: String(col) };
      if (itemData.url) {
        await makeDelayedRequest(post, `${API_URL}/${itemData.url}`, payload);
        console.log(payload);
      } else {
        console.log("space");
      }
    }
  }
  console.log("FINISH");
}
