  EXPRESS                          NESTJS (default: Express under the hood)

  Client                                Client
    |                                       |
    v                                       v
  Express App                           Nest Application (wraps Express)
    |                                       |
    v                                       v
  Middleware (app.use)                  Middleware (app.use / @Injectable NestMiddleware)
    |                                       |
    v                                       v
  Route Matching                        Guards          <-- NEW: authorization check
    |                                       |
    v                                       v
  Route Handler                         Interceptors    <-- NEW: wrap request/response
    |                                       |
    v                                       v
  (your code: validate,                 Pipes           <-- NEW: validate & transform input
   query DB, respond)                       |
                                            v
                                        Controller       <-- routes to method (thin, no logic)
                                            |
                                            v
                                        Service          <-- business logic lives here
                                            |
                                            v
                                        Repository/Model <-- DB access
                                            |
                                            v
                                        Response
                                            |
                                            v
                                        Interceptors (post-processing, e.g. transform response)
                                            |
                                            v
                                        Exception Filters  <-- catches errors anywhere in the chain
                                            |
                                            v
                                        Client