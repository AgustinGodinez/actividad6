import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"

/**
 * See all Next Auth configurations options at:
 * https://next-auth.js.org/configuration
 */
export const authOptions = {
    theme: {
        colorScheme: 'auto',
        brandColor: '#fe6763',
        logo: 'http://drive.google.com/uc?export=view&id=1Mb-F-QmAn7QJED9iVAFHMeI5cOq-z-HA',
        buttonText: '#fe6763',
    },
    debug: true,
    secret: process.env.AUTH_SECRET,
    session: {
        // Use JWT to manage sessions since we aren't using a Database
        jwt: true,
        maxAge: 60 * 15, // 15 min
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Correo electronico', type: "email", placeholder: 'example@domio.com'},
                password: { label: 'Password', type: 'password'}
            },
            async authorize(credentials, req) {
                // Enviamos la solicitud  a nuestra API para validar las credenciales
                const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/changarrito`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                if (!response.ok && response.status === 401){
                    throw new Error("Usuario y/o password invalidos, favor de validar")
                }
                if (!response.ok && response.status === 404){
                    throw new Error("Usuario no registrado, favor de crear una cuenta")
                } 
                return (await response.json()) ?? null;
            }
        })
    ],
    pages: {
        signIn: '/login',
        error: '/login'  
    },
    callbacks: {
        async jwt({ token, user}){
            return {...token, ...user}
        },
        async session ({session, token, user }){
            session.token = token
            session.user = user
            return session
        }
    }
}

export default NextAuth(authOptions)