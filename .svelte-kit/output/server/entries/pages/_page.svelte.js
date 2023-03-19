import { c as create_ssr_component } from "../../chunks/index.js";
import "svelte-gestures";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let time = /* @__PURE__ */ (/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "America/Chicago" });
  time = time.split(",")[1];
  setInterval(
    () => {
      time = /* @__PURE__ */ (/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "America/Chicago" });
      time = time.split(",")[1];
    },
    1e3
  );
  return `

<div id="navBar" class="font-pixeloid w-full h-10 border-solid border-2 border-black bg-white rounded-t-lg"><div class="flex justify-center items-center h-full"><a href="/" class="ml-5">Evan</a>
    <div class="float-right w-full pl-5 gap-5 text-sm flex"><button class="relative"><span>about</span>
        <svg class="w-3 h-3 absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 6.293a1 1 0 0 1 1.414 0L10 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-4.293 4.293a1 1 0 0 1-1.414 0L10 12.586l-3.293-3.293a1 1 0 0 1 0-1.414z"></path></svg>
        <div class="${[
    "absolute top-full left-0 w-fit bg-white shadow-lg divide-y divide-gray-200 z-10",
    "invisible"
  ].join(" ").trim()}">
          <button class="block w-full px-4 py-2 hover:bg-gray-100">open</button>
          <button class="block w-full px-4 py-2 hover:bg-gray-100">copy to clipboard</button></div></button>

      <button class="relative"><span>projects</span>
        <svg class="w-3 h-3 absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 6.293a1 1 0 0 1 1.414 0L10 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-4.293 4.293a1 1 0 0 1-1.414 0L10 12.586l-3.293-3.293a1 1 0 0 1 0-1.414z"></path></svg>
        <div class="${[
    "absolute top-full left-0 w-fit bg-white shadow-lg divide-y divide-gray-200 z-10",
    "invisible"
  ].join(" ").trim()}"><a href="https://kazwire.com" target="_blank" rel="noreferrer" class="block px-4 py-2 hover:bg-gray-100">kazwire</a>
          <a href="https://elixirofficial.com" target="_blank" rel="noreferrer" class="block px-4 py-2 hover:bg-gray-100">elixir</a>
          <a href="https://github.com/whos-evan/twitch-spotify" target="_blank" rel="noreferrer" class="block px-4 py-2 hover:bg-gray-100">twitch-spotify</a>
          <a href="https://github.com/whos-evan/evans_cogs" target="_blank" rel="noreferrer" class="block px-4 py-2 hover:bg-gray-100">evans_cogs</a></div></button>

      <button class="relative"><span>contact</span>
        <svg class="w-3 h-3 absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 6.293a1 1 0 0 1 1.414 0L10 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-4.293 4.293a1 1 0 0 1-1.414 0L10 12.586l-3.293-3.293a1 1 0 0 1 0-1.414z"></path></svg>
        <div class="${[
    "absolute top-full left-0 w-fit bg-white shadow-lg divide-y divide-gray-200 z-10",
    "invisible"
  ].join(" ").trim()}"><button class="block w-full px-4 py-2 hover:bg-gray-100">open</button>
          <a class="block w-full px-4 py-2 hover:bg-gray-100" href="mailto:coming@soon.com">email me</a>
          <button class="block w-full px-4 py-2 hover:bg-gray-100">copy discord</button></div></button></div>

    ${``}</div></div>

<div id="content" class="font-pixeloid w-full flex flex-wrap items-start justify-start" style="background-color: #ffffff; opacity: 0.8; background-image: repeating-linear-gradient(45deg, #000000 25%, transparent 25%, transparent 75%, #000000 75%, #000000), repeating-linear-gradient(45deg, #000000 25%, #ffffff 25%, #ffffff 75%, #000000 75%, #000000); background-position: 0 0, 3px 3px; background-size: 6px 6px; height: calc(100vh - 40px);">
  <button class="m-5"><img src="images/drawing.png" alt="drawing" class="w-16 h-16 m-auto grayscale">
    <p class="bg-white text-center text-sm mt-2">drawing</p></button>
  <button class="m-5"><img src="images/mountain.png" alt="about me" class="w-16 h-16 m-auto grayscale">
    <p class="bg-white text-center text-sm mt-2">about me</p></button>
  <button class="m-5"><img src="images/contact.png" alt="contact me" class="w-16 h-16 m-auto grayscale">
    <p class="bg-white text-center text-sm mt-2">contact me</p></button>
  <button class="m-5"><img src="images/kazwire.png" alt="kazwire" class="w-16 h-16 m-auto grayscale bg-white">
    <p class="bg-white text-center text-sm mt-2">kazwire (project)</p></button>
  <button class="m-5"><img src="images/trollface.png" alt="kazwire" class="w-16 h-16 m-auto grayscale bg-white">
    <p class="bg-white text-center text-sm mt-2">trollface</p></button></div>`;
});
export {
  Page as default
};
