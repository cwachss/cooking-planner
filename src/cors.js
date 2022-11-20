// The headres whose field names can be used during a CORS request.
const allowHeaders = 'Content-Type,Authorization,Content-Length,X-Requested-With'

// This is be triggered locally when an OPTIONS request comes in
// from the browser. We send back the appropriate CORS headers.
// The OPTIONS "pre-flight" request is only made for "non-simple"
// requests as described by the CORS spec. This is basically any
// POST request for our needs.
const corsOptionsRequests = (req, res) => {
  res.header('Access-Control-Allow-Origin', req.header('Origin'))
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', allowHeaders)
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Max-Age', '3600')
  res.status(200).send()
}

// Simple CORS requests are triggered by GET's and POST's where
// the "Content-Type" header is not "application/json". Therefore,
// for basic GET requests we just need to attach the correct headers
// to allow the client's fetch() call to succeed.
const corsSimpleRequests = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.header('Origin'))
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', allowHeaders)
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Max-Age', '3600')
  next()
}

module.exports.corsOptionsRequests = corsOptionsRequests
module.exports.corsSimpleRequests = corsSimpleRequests
