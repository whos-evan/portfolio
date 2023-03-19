export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["beep.mp3","favicon.png","fonts/PixeloidSans.ttf","images/contact.png","images/drawing.png","images/kazwire.png","images/mountain.png","images/trollface.png"]),
	mimeTypes: {".mp3":"audio/mpeg",".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.56f5abc3.js","imports":["_app/immutable/entry/start.56f5abc3.js","_app/immutable/chunks/index.2b0b9a6b.js","_app/immutable/chunks/singletons.54ec18a1.js","_app/immutable/chunks/index.dac2e1ac.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.00aea9a7.js","imports":["_app/immutable/entry/app.00aea9a7.js","_app/immutable/chunks/index.2b0b9a6b.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/drawing",
				pattern: /^\/drawing\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
