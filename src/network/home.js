import {require} from "network/require.js"
export function getHomeMultiData(){
  return require({
    url: "/home/multidata",
    // method: "GET"
  })
}
export function getHomeGoods() {
  setTimeout(100);
  return "null"
}