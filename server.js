// // // // server.js (or your server entry point)
// // // const express = require('express');
// // // const { createProxyMiddleware } = require('http-proxy-middleware');

// // // const app = express();
// // // const PORT = 5000;
// // // var test = ''
// // // // Set up the proxy middleware to forward requests to an API server
// // // var data = createProxyMiddleware({
// // //     target: 'https://shoppingroz.affdn.ir/', // The backend API you want to proxy requests to
// // //     changeOrigin: true,  // This is useful when the target server uses a different origin
// // //     pathRewrite: {
// // //       '^/api': '', // Remove '/api' prefix before forwarding the request
// // //     },
// // //     onProxyRes: async (proxyRes, req, res) => {
// // //       const chunks = [];
// // //       console.log('kkkk');

// // //       // Collect data chunks from the proxy response
// // //       proxyRes.on('data', (chunk) => {

// // //         console.log('dasasdas');

// // //           chunks.push(chunk)
// // //           console.log(chunk);

// // //       });

// // //       proxyRes.on('end', () => {
// // //         console.log('dasdas');

// // //       //   const body = Buffer.concat(chunks).toString('utf-8');

// // //         // Modify the HTML content
// // //       //   const modifiedBody = modifyHtml(body);

// // //         // Send modified content to the client
// // //       //   res.writeHead(proxyRes.statusCode, proxyRes.headers);
// // //       //   res.end(modifiedBody);
// // //       });
// // //     },
// // //     on:async()=>{
// // //          console.log('dasd');

// // //     }
// // //   })
// // // app.use('/', data);

// // // console.log(test);

// // // // Start the server
// // // app.listen(PORT, () => {
// // //   console.log(`Server is running on http://localhost:${PORT}`);
// // // });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // const http = require('http');

// // const proxy = http.createServer((req, res) => {
// //   const options = {
// //     hostname: 'https://shoppingroz.affdn.ir/', // Target server
// //     // port: 80,
// //     path: req.url,
// //     method: req.method,
// //     headers: req.headers,
// //   };

// //   const proxyReq = http.request(options, (proxyRes) => {
// //     res.writeHead(proxyRes.statusCode, proxyRes.headers);
// //     proxyRes.pipe(res, { end: true });
// //   });

// //   req.pipe(proxyReq, { end: true });
// // });

// // proxy.listen(3000, () => {
// //   console.log('Proxy server running on http://localhost:3000');
// // });

// const http = require('http');
// const httpProxy = require('http-proxy');

// const proxy = httpProxy.createProxyServer();

// http.createServer((req, res) => {
//   proxy.web(req, res, { target: 'shoppingroz.affdn.ir/' });
// }).listen(3000, () => {
//   console.log('Proxy server running on http://localhost:3000');
// });

// const express = require('express');
// const proxy = require('express-http-proxy');

// const app = express();

// app.use('/', proxy('shoppingroz.affdn.ir/',(res)=>{
//   console.log(res);

// }));

// app.listen(3000, () => {
//   console.log('Proxy server running on http://localhost:3000');
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const http = require('http');
// const httpProxy = require('http-proxy');

// // Create a proxy server
// const proxy = httpProxy.createProxyServer();

// // Start an HTTP server and forward requests to another server
// const server = http.createServer((req, res) => {
//   proxy.web(req, res, { target: 'https://shoppingroz.affdn.ir:443' });
// });

// server.listen(3000, () => {
//   console.log('Proxy server is running on http://localhost:3000');
// });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // server.js (or your server entry point)
// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();
// const PORT = 5000;
// var test = ''
// // Set up the proxy middleware to forward requests to an API server
// function prx(params) {
//   console.log('ghhh');
  
// }
// var data = createProxyMiddleware({
//     target: 'https://shoppingroz.affdn.ir/', // The backend API you want to proxy requests to
//     changeOrigin: true,  // This is useful when the target server uses a different origin
//     pathRewrite: {
//       '^/api': '', // Remove '/api' prefix before forwarding the request
//     },
//     onProxyRes: prx

//     // async (proxyRes, req, res) => {
//     //   const chunks = [];
//     //   console.log('kkkk');

//     //   // Collect data chunks from the proxy response
//     //   proxyRes.on('data', (chunk) => {

//     //     console.log('dasasdas');

//     //       chunks.push(chunk)
//     //       console.log(chunk);

//     //   });

//     //   proxyRes.on('end', () => {
//     //     console.log('dasdas');

//     //   //   const body = Buffer.concat(chunks).toString('utf-8');

//     //     // Modify the HTML content
//     //   //   const modifiedBody = modifyHtml(body);

//     //     // Send modified content to the client
//     //   //   res.writeHead(proxyRes.statusCode, proxyRes.headers);
//     //   //   res.end(modifiedBody);
//     //   });
//     // },
//     // on:async()=>{
//     //      console.log('dasd');

//     // }
//   })
// // app.use('/', data);
// app.use(
//   "/",
//   createProxyMiddleware({
//     target: "https://shoppingroz.affdn.ir/", // Target website to proxy
//     changeOrigin: true,
//     pathRewrite: {
//       "^/api": "", // Remove '/api' prefix before forwarding the request
//     },
//     // selfHandleResponse: true, // Ensures proxy doesn't send the response automatically
//     onProxyRes: (proxyRes, req, res) => {
//       console.log('gh');
      
//     }, // Hook to modify the response
//   })
// );
// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
//////////////////////////////////////////////////////////////////////////////////////////
// var httpProxy = require('http-proxy');
// // Error example
// //
// // Http Proxy Server with bad target
// //
// var proxy = httpProxy.createServer({
//   target: "https://shoppingroz.affdn.ir/"
// });

// proxy.listen(8005);

// //
// // Listen for the `error` event on `proxy`.
// proxy.on('error', function (err, req, res) {
//   res.writeHead(500, {
//     'Content-Type': 'text/plain'
//   });

//   res.end('Something went wrong. And we are reporting a custom error message.');
// });

// //
// // Listen for the `proxyRes` event on `proxy`.
// //
// proxy.on('proxyRes', function (proxyRes, req, res) {
//   console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
// });

// //
// // Listen for the `open` event on `proxy`.
// //
// proxy.on('open', function (proxySocket) {
//   // listen for messages coming FROM the target here
//   proxySocket.on('data', hybiParseAndLogMessage);
// });

// //
// // Listen for the `close` event on `proxy`.
// //
// proxy.on('close', function (res, socket, head) {
//   // view disconnected websocket connections
//   console.log('Client disconnected');
// });
////////////////////////////////////////////////////////////////////////////////////////
// const http = require('http');
// const httpProxy = require('http-proxy');

// // Create a proxy server
// const proxy = httpProxy.createProxyServer();

// // Define the targets for each site
// const targets = {
//   'localhost:8080': 'https://shoppingroz.affdn.ir/', // Backend for Site 1
//   'site2.localhost': 'http://localhost:3002', // Backend for Site 2
// };

// // Create an HTTP server to handle requests
// const server = http.createServer((req, res) => {
//   const host = req.headers.host;
// console.log(host);

//   if (targets[host]) {
//     // Proxy the request to the corresponding target
//     proxy.web(req, res, { target: 'https://shoppingroz.affdn.ir/' });
//   } else {
//     // Handle unknown hostnames
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('No matching site configured for this hostname.');
//   }
// });

// // Start the server
// server.listen(8080, () => {
//   console.log('Reverse proxy running on http://localhost:8080');
//   console.log('Site 1: http://site1.localhost (proxy to http://localhost:3001)');
//   console.log('Site 2: http://site2.localhost (proxy to http://localhost:3002)');
// });

////////////////////////////////////////////////////////////////////////////////////////

// const express = require("express");
// const { createProxyMiddleware } = require("http-proxy-middleware");
// const { createProxyServer } = require("http-proxy");
// const { Transform } = require("stream");

// const app = express();

// // Middleware to modify response content
// const modifyResponse = (proxyRes, req, res) => {
//   const originalWrite = res.write;
//   const originalEnd = res.end;

//   const chunks = [];

//   // Intercept and collect response data
//   res.write = (chunk) => {
//     chunks.push(chunk);
//   };

//   res.end = (chunk) => {
//     if (chunk) chunks.push(chunk);

//     const body = Buffer.concat(chunks).toString("utf8");

//     // Modify the content (e.g., add a script tag)
//     const modifiedBody = body.replace(
//       "</body>",
//       '<scrip>alert("Content modified by proxy!");</script></body>'
//     );

//     // Send the modified content
//     res.setHeader("Content-Length", Buffer.byteLength(modifiedBody));
//     originalWrite.call(res, modifiedBody);
//     originalEnd.call(res);
//   };
// };

// // Proxy middleware
// app.use(
//   "/",
//   createProxyMiddleware({
//     target: "https://shoppingroz.affdn.ir/", // Target website to proxy
//     changeOrigin: true,
//     pathRewrite: {
//       "^/api": "", // Remove '/api' prefix before forwarding the request
//     },
//     // selfHandleResponse: true, // Ensures proxy doesn't send the response automatically
//     // onProxyRes: modifyResponse, // Hook to modify the response
//   })
// );

// app.listen(3000, () => {
//   console.log("Proxy server running at http://localhost:3000");
// });
//////////////////////////////////////////////////////////////////////////////////////

// const express = require('express');
// const proxy = require('express-http-proxy');

// const app = express();

// // Proxy routes for different hostnames
// app.use('/',proxy('https://shoppingroz.affdn.ir/',{
//   filter: function(req, res) {
 
    
//     return true;
//  },
//  userResHeaderDecorator(headers, userReq, userRes, proxyReq, proxyRes) {
//   // recieves an Object of headers, returns an Object of headers.
//   // console.log(proxyRes);
  
//   let responseBody = '';
//   proxyRes.on('data', (chunk) => {
//     responseBody += chunk.toString(); // Collect data chunks
//   });

//   proxyRes.on('end', () => {
//     console.log('Response body:', responseBody); // Log or process the full response body
//   });
//   return headers;
// }
// }));
// app.listen(8080, () => {
//   console.log('Proxy server running on http://localhost:8080');
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const { parseFromString } = require('dom-parser');
const express = require('express');
const proxy = require('express-http-proxy');
const fs = require('node:fs');
const app = express();

app.use(
  '/',
  proxy('https://shoppingroz.affdn.ir/', {
    filter: function (req, res) {
      // Allow all requests to be proxied
      return true;
    },

    // Modify the response body (HTML) here
    userResDecorator: async (proxyRes, proxyResData, userReq, userRes) => {
      const originalBody = proxyResData.toString('utf8'); // Convert buffer to string (HTML)
      const dom = parseFromString(originalBody);
     console.log('Original Response Body:', originalBody,{ flag: 'a+' }); // Log the original HTML
     fs.writeFileSync('./text.txt',originalBody);
      // Modify the HTML content
      const modifiedBody = originalBody.replace(
        '</body>',
        `<style>
.flex.items-center.justify-between.py-4.bg-white{
    /*background-color: red;*/
    
}
    .before\:bg-primary\/\[16\%\]:before{
      /*background:red*/
    }
     .mx-auto.p-4.w-full.max-w-[600px].lg:max-w-[1120px].py-0{
         max-width: 100%;
     }
     .relative.block.aspect-square::before{
     /*background:red*/
     }
     body>.bg-neutrals-100>*{
    max-width: 100%;
}
body>.bg-neutrals-100>:nth-child(1)>form{
display:none
}
    body>.bg-neutrals-100>:nth-child(3)>div{
   grid-template-columns: repeat(12, minmax(0, 1fr));
 
    
    }
   footer>:nth-child(2){
   display:none
   }
   footer>.flex.items-center.justify-between.gap-7{
   display:none
   }
        </style>
        <script>[...document.querySelectorAll('.py-0')].forEach((d)=>{
d.className = 'mx-auto p-4 w-full py-0'
});
setTimeout(() => {
 // document.querySelector('body>.bg-neutrals-100').innerHTML += '<div class="flex items-center justify-between gap-7 p-2 border-dashed border-2 border-[#6D71F8] bg-white mb-5"><div class="flex flex-col items-center text-center gap-2 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke-width="1"><path d="M22.5 4.5V18C22.5 19.65 21.15 21 19.5 21H3V9C3 5.685 5.685 3 9 3H21C21.825 3 22.5 3.675 22.5 4.5Z" fill="#6D71F8"></path><path opacity="0.4" d="M33 21V25.5C33 27.99 30.99 30 28.5 30H27C27 28.35 25.65 27 24 27C22.35 27 21 28.35 21 30H15C15 28.35 13.65 27 12 27C10.35 27 9 28.35 9 30H7.5C5.01 30 3 27.99 3 25.5V21H19.5C21.15 21 22.5 19.65 22.5 18V7.5H25.26C26.34 7.5 27.33 8.08501 27.87 9.01501L30.435 13.5H28.5C27.675 13.5 27 14.175 27 15V19.5C27 20.325 27.675 21 28.5 21H33Z" fill="#6D71F8"></path><path opacity="0.8" d="M12 33C13.6569 33 15 31.6569 15 30C15 28.3431 13.6569 27 12 27C10.3431 27 9 28.3431 9 30C9 31.6569 10.3431 33 12 33Z" fill="#6D71F8"></path><path opacity="0.8" d="M24 33C25.6569 33 27 31.6569 27 30C27 28.3431 25.6569 27 24 27C22.3431 27 21 28.3431 21 30C21 31.6569 22.3431 33 24 33Z" fill="#6D71F8"></path><path d="M33 18.795V21H28.5C27.675 21 27 20.325 27 19.5V15C27 14.175 27.675 13.5 28.5 13.5H30.435L32.61 17.31C32.865 17.76 33 18.27 33 18.795Z" fill="#6D71F8"></path></svg><span>ارسال سریع و ارزان کالا</span></div><div class="flex flex-col items-center text-center gap-2 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 37 36" fill="none" stroke-width="1"><path opacity="0.8" d="M19.5166 3.78013L19.4716 3.88513L15.1216 13.9801H10.8466C9.82655 13.9801 8.86655 14.1751 7.96655 14.5651L10.5916 8.29513L10.6516 8.16013L10.7416 7.92013C10.7866 7.81513 10.8166 7.72513 10.8616 7.65013C12.8266 3.10513 15.0466 2.07013 19.5166 3.78013Z" fill="#6D71F8"></path><path d="M27.6016 14.28C26.9266 14.085 26.2216 13.98 25.4866 13.98H15.1216L19.4716 3.88503L19.5166 3.78003C19.7266 3.85503 19.9516 3.96003 20.1766 4.03503L23.4916 5.43003C25.3366 6.19503 26.6266 6.99003 27.4216 7.95003C27.5566 8.13003 27.6766 8.29503 27.7966 8.49003C27.9316 8.70003 28.0366 8.91003 28.0966 9.13503C28.1566 9.27003 28.2016 9.39003 28.2316 9.52503C28.6216 10.8 28.3816 12.345 27.6016 14.28Z" fill="#6D71F8"></path><path opacity="0.4" d="M32.8066 21.3001V24.2251C32.8066 24.5251 32.7916 24.8251 32.7766 25.1101C32.4916 30.3601 29.5666 33.0001 24.0166 33.0001H12.3166C11.9416 33.0001 11.5966 32.9701 11.2516 32.9251C6.48161 32.6101 3.93161 30.0601 3.60161 25.2901C3.55661 24.9301 3.52661 24.5851 3.52661 24.2251V21.3001C3.52661 18.2851 5.35661 15.6901 7.96661 14.5651C8.86661 14.1751 9.82661 13.9801 10.8466 13.9801H25.4866C26.2216 13.9801 26.9266 14.0851 27.6016 14.2801C30.6016 15.1951 32.8066 17.9851 32.8066 21.3001Z" fill="#6D71F8"></path><path opacity="0.2" d="M10.5916 8.29504L7.96661 14.565C5.35661 15.69 3.52661 18.285 3.52661 21.3V16.905C3.52661 12.645 6.55661 9.09004 10.5916 8.29504Z" fill="#6D71F8"></path><path opacity="0.2" d="M32.8067 16.9051V21.3001C32.8067 17.9851 30.6017 15.1951 27.6017 14.2801C28.3817 12.3451 28.6217 10.8001 28.2317 9.52513C28.2017 9.39013 28.1567 9.27013 28.0967 9.13513C30.9017 10.5901 32.8067 13.5451 32.8067 16.9051Z" fill="#6D71F8"></path></svg><span>امکان پرداخت حضوری در محل</span></div><div class="flex flex-col items-center text-center gap-2 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 37 36" fill="none" stroke-width="1"><path opacity="0.4" d="M31.8942 10.785L18.3342 18.63L4.77417 10.785C5.37417 9.675 6.24417 8.7 7.21917 8.16L15.2292 3.72C16.9392 2.76 19.7292 2.76 21.4392 3.72L29.4492 8.16C30.4242 8.7 31.2942 9.675 31.8942 10.785Z" fill="#6D71F8"></path><path opacity="0.2" d="M18.3343 18.6299V32.9999C17.2093 32.9999 16.0843 32.7599 15.2293 32.2799L7.21931 27.8399C5.40431 26.8349 3.91931 24.3149 3.91931 22.2449V13.7549C3.91931 12.7949 4.24931 11.7449 4.77431 10.7849L18.3343 18.6299Z" fill="#6D71F8"></path><path d="M32.7492 13.7549V22.2449C32.7492 24.3149 31.2642 26.8349 29.4492 27.8399L21.4392 32.2799C20.5842 32.7599 19.4592 32.9999 18.3342 32.9999V18.6299L31.8942 10.7849C32.4192 11.7449 32.7492 12.7949 32.7492 13.7549Z" fill="#6D71F8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.03589 19.5C10.1509 19.5 12.0259 20.4599 13.2559 21.9749C14.2159 23.1299 14.7859 24.63 14.7859 26.25C14.7859 27.51 14.4259 28.71 13.8109 29.73C13.4509 30.33 13.0009 30.87 12.4759 31.32C11.2909 32.37 9.74589 33 8.03589 33C6.43089 33 4.94591 32.43 3.79091 31.47H3.77589C3.17589 30.99 2.66588 30.405 2.26088 29.73C1.64588 28.71 1.28589 27.51 1.28589 26.25C1.28589 24.12 2.26089 22.215 3.82089 20.985C4.97589 20.055 6.44589 19.5 8.03589 19.5Z" fill="#6D71F8"></path><path d="M8.29381 30.1011H5.97721C5.56245 30.1011 5.21851 29.7572 5.21851 29.3424C5.21851 28.9276 5.56245 28.5837 5.97721 28.5837H8.29381C8.72881 28.5837 9.08287 28.2297 9.08287 27.7947H10.6003C10.6003 29.0693 9.56845 30.1011 8.29381 30.1011Z" fill="#C5C6FC"></path><path d="M8.29381 25.4917H5.97721C5.56245 25.4917 5.21851 25.8357 5.21851 26.2504C5.21851 26.6652 5.56245 27.0092 5.97721 27.0092H8.29381C8.72881 27.0092 9.08287 27.3632 9.08287 27.7982H10.6003C10.6003 26.5236 9.56845 25.4917 8.29381 25.4917Z" fill="#C5C6FC"></path><path d="M8.29381 27.0092H5.97721C5.56245 27.0092 5.21851 26.6652 5.21851 26.2504C5.21851 25.8357 5.56245 25.4917 5.97721 25.4917H8.29381C8.72881 25.4917 9.08287 25.1368 9.08287 24.7018H10.6003C10.6003 25.9764 9.56845 27.0092 8.29381 27.0092Z" fill="#C5C6FC"></path><path d="M8.29381 22.3989H5.97721C5.56245 22.3989 5.21851 22.7428 5.21851 23.1576C5.21851 23.5723 5.56245 23.9163 5.97721 23.9163H8.29381C8.72881 23.9163 9.08287 24.2703 9.08287 24.7053H10.6003C10.6003 23.4307 9.56845 22.3989 8.29381 22.3989Z" fill="#C5C6FC"></path></svg><span>۳ روز ضمانت بازگشت کالا</span></div><div class="flex flex-col items-center text-center gap-2 text-xs"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 37 36" fill="none" stroke-width="1"><path opacity="0.4" d="M28.205 25.245L28.79 29.985C28.94 31.23 27.605 32.1 26.54 31.455L20.255 27.72C19.565 27.72 18.89 27.675 18.23 27.585C19.34 26.28 20 24.63 20 22.845C20 18.585 16.31 15.135 11.75 15.135C10.01 15.135 8.40502 15.63 7.07002 16.5C7.02502 16.125 7.01001 15.75 7.01001 15.36C7.01001 8.53499 12.935 3 20.255 3C27.575 3 33.5 8.53499 33.5 15.36C33.5 19.41 31.415 22.995 28.205 25.245Z" fill="#6D71F8"></path><path d="M20 22.8451C20 24.6301 19.34 26.2801 18.23 27.5851C16.745 29.3851 14.39 30.5401 11.75 30.5401L7.835 32.8651C7.175 33.2701 6.335 32.7151 6.425 31.9501L6.8 28.9951C4.79 27.6001 3.5 25.3651 3.5 22.8451C3.5 20.2051 4.91001 17.8801 7.07001 16.5001C8.40501 15.6301 10.01 15.1351 11.75 15.1351C16.31 15.1351 20 18.5851 20 22.8451Z" fill="#6D71F8"></path></svg><span>خدمات پس از فروش کالا</span></div></div>';
document.querySelector('footer').innerHTML += '<div class="flex items-center p-5"><a href="/"><img width="49px" src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Instagram_Logo_png.png"/></a> <a href="/"><img width="30px" src="https://th.bing.com/th/id/OIP.6CKiFZf8rhfoY4qBAwyQbgHaHa?rs=1&pid=ImgDetMain"/></a></div>';
document.querySelector('.flex.items-center.justify-between.py-4.bg-white>:nth-child(1)').nextElementSibling.outerHTML = '<form action="/products" method="get" class="relative h-full w-1/2 flex flex-col justify-between"><div class="relative flex flex-col gap-2"><input name="title" type="text" placeholder="کالای موردنظر خود را جستجو کنید" class="px-4 py-2 peer text-right border border-neutrals-200 rounded-lg text-base font-medium text-black placeholder:text-neutrals-300 bg-white outline-none focus:border-[0.5px] focus:border-primary disabled:text-neutrals-200 disabled:placeholder:text-neutrals-200 !rounded-[20px] placeholder:text-xs placeholder:text-neutrals-300 placeholder:font-medium border-none shadow-errorBox" value=""><div class="absolute left-3 top-2"><button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="1"><path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 22L20 20" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div></div></form>'
}, 10000);

document.querySelector('.grid.grid-cols-2.gap-4').className = 'grid grid-cols-5 gap-4';
document.querySelector('body>.bg-neutrals-100>div').className = 'mx-auto p-4 w-full';
        </script>
       
        </body>`
      );

      return modifiedBody; // Return the modified HTML
    },

    // Optionally modify headers
    userResHeaderDecorator(headers, userReq, userRes, proxyReq, proxyRes) {
      // Example: Add a custom header
      headers['X-Proxy-Modified'] = 'true';
      return headers;
    },
  })
);

// Start the proxy server
app.listen(8080, () => {
  console.log('Proxy server running on http://localhost:8080');
});
