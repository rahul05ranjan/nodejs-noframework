//Node Js core modules
const http 	= 	require('http');
const url 	=	require('url');
const port = 3000;

//Creating server
const server = http.createServer((req, res)	=>	{
	let parsedUrl 	=	 url.parse(req.url, true);
	let path 		= 	 parsedUrl.pathname;
	let method		=	 req.method.toLowerCase();
	let queryString = 	 parsedUrl.query;
	let headers		=	 req.headers;
	console.log(`Path: ${path} Method ${method} Query string`, headers);
});

server.listen(port, ()	=>	{
	console.log(`Server listening on port ${port}`);
});