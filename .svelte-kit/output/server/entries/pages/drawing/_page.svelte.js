import { c as create_ssr_component, d as add_attribute, f as add_styles, h as createEventDispatcher, i as each, e as escape, v as validate_component } from "../../../chunks/index.js";
const Canvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = 300 } = $$props;
  let { height = 300 } = $$props;
  let { color = "#333" } = $$props;
  let { background: background2 = "#fff" } = $$props;
  let canvas;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.background === void 0 && $$bindings.background && background2 !== void 0)
    $$bindings.background(background2);
  return `

<canvas${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_styles({ background: background2 })}${add_attribute("this", canvas, 0)}></canvas>`;
});
const Palette_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-124n6by.svelte-124n6by{--size:1.75rem;padding:0.25rem;display:flex;align-items:center;gap:0 1rem}section.svelte-124n6by>div.svelte-124n6by{flex-grow:1}section.svelte-124n6by>svg.svelte-124n6by{flex-shrink:0}div.svelte-124n6by.svelte-124n6by{display:flex;gap:0 0.5rem;align-items:center;overflow-x:auto}div.svelte-124n6by.svelte-124n6by::-webkit-scrollbar{height:0.25rem}div.svelte-124n6by.svelte-124n6by::-webkit-scrollbar-track{background:hsl(0, 0%, 100%)}div.svelte-124n6by.svelte-124n6by::-webkit-scrollbar-thumb{background:currentColor}div.svelte-124n6by button.svelte-124n6by{flex-shrink:0}button.svelte-124n6by.svelte-124n6by,section.svelte-124n6by>svg.svelte-124n6by{width:var(--size);height:var(--size)}button.svelte-124n6by.svelte-124n6by{cursor:pointer;border-radius:50%;margin:0}section.svelte-124n6by>svg.svelte-124n6by{display:block}",
  map: null
};
const Palette = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { colors = ["#d58141", "#d7c44c", "#4fa9cc", "#3f8d27"] } = $$props;
  let { paletteColor } = $$props;
  let { background: background2 = "#fff" } = $$props;
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.paletteColor === void 0 && $$bindings.paletteColor && paletteColor !== void 0)
    $$bindings.paletteColor(paletteColor);
  if ($$props.background === void 0 && $$bindings.background && background2 !== void 0)
    $$bindings.background(background2);
  $$result.css.add(css$1);
  return `<section class="svelte-124n6by"><div class="svelte-124n6by">${each(colors, (color) => {
    return `<button class="svelte-124n6by"${add_styles({ "background": color })}><span class="visually-hidden">Select the color ${escape(color)}</span>
		</button>`;
  })}</div>
	
	<button class="svelte-124n6by"${add_styles({ background: background2 })}><span class="visually-hidden">Select the background color to clear the canvas
		</span></button>
	
	<svg viewBox="-50 -50 100 100" class="svelte-124n6by"${add_styles({ "color": paletteColor })}><g fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round"><path d="M -38 12 a 38 38 0 0 0 76 0 q 0 -28 -38 -62 -38 34 -38 62"></path></g></svg>	
</section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{margin:0;padding:0;min-height:100vh;display:flex;justify-content:center;align-items:center;background:#e5e5e5}.visually-hidden:not(:focus):not(:active){clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;width:1px;overflow:hidden;position:absolute;white-space:nowrap}main.svelte-z90tdv{max-width:300px;display:flex;flex-direction:column;gap:0.5rem 0}main.svelte-z90tdv canvas{align-self:center}",
  map: null
};
const background = "#fff";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const colors = ["#b2b2b2", "#656565", "#181818", "#000000"];
  let color = colors[0];
  const paletteColor = color;
  $$result.css.add(css);
  return `


<main class="svelte-z90tdv">${validate_component(Canvas, "Canvas").$$render($$result, { color, background }, {}, {})}
	${validate_component(Palette, "Palette").$$render($$result, { paletteColor, colors, background }, {}, {})}
</main>`;
});
export {
  Page as default
};
