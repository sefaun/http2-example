import http2 from 'http2'


const server = http2.createServer()

server.on('stream', (stream, requestHeaders) => {
  console.log(server.listening)
  stream.respond({
    ':status': 200,
    'content-type': 'text/plain'
  })

  stream.on("error", (err) => console.log(err, "stream -> error"))

  stream.write('hello ')
  stream.end('world')

  // Stopping the server
  // by using the close() method
  // server.close(() => {
  //   console.log("server closed")
  // })
})

server.on("sessionError", (err) => console.log(err, "sessionError"))

server.listen(5000, () => console.log("Server Running on Port 5000"))