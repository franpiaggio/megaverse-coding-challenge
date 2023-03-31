import axios, { AxiosResponse } from "axios";
import { Payload } from "./common";

const addId = (body: Payload) => ({ candidateId: process.env.CANDIDATE_ID, ...body });
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const makeDelayedRequest = async (request: Function, url: string, payload: any) => {
  await delay(Math.random() * 500 + 500);
  await request(url, payload);
};

export async function get<T>(url: string): Promise<AxiosResponse<T>> {
  try {
    const response = await axios.get<T>(url);
    return response;
  } catch (error: any) {
    console.error(`Error making GET request to ${url}`);
    throw error;
  }
}

export async function clean<T>(url: string, payload: any): Promise<AxiosResponse<T>> {
  try {
    const body = addId(payload);
    const response = await axios.delete<T>(url, {
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
    });
    return response;
  } catch (error: any) {
    console.error(`Error making DELETE request to ${url}`);
    throw error;
  }
}

export async function post<T>(url: string, payload: any): Promise<AxiosResponse<T>> {
  try {
    const body = addId(payload);
    const response = await axios.post<T>(url, body);
    return response;
  } catch (error: any) {
    console.error(`Error making POST request to ${url}`);
    throw error;
  }
}
