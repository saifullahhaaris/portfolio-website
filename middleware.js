// This component is a Next.js's simple password-protected portfolio page.




// import { NextResponse } from 'next/server'

// export function middleware(request) {
//   const basicAuth = request.headers.get('authorization')

//   if (basicAuth) {
//     const authValue = basicAuth.split(' ')[1]
//     const [user, pwd] = atob(authValue).split(':')

//     if (user === 'Username' && pwd === 'Password') {
//       return NextResponse.next()
//     }
//   }

//   return new Response('Auth required', {
//     status: 401,
//     headers: {
//       'WWW-Authenticate': 'Basic realm="Secure Area"',
//     },
//   })
// }
