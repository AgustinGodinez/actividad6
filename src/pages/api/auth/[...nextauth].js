import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"
import SequelizeAdapter from "@next-auth/sequelize-adapter"
import EmailProvider from "next-auth/providers/email"

/**
 * See all Next Auth configurations options at:
 * https://next-auth.js.org/configuration
 */
export const authOptions = {
    theme: {
        colorScheme: 'auto',
        brandColor: 'fe6763',
        logo: 'http://drive.google.com/uc?export=view&id=1Mb-F-QmAn7QJED9iVAFHMeI5cOq-z-HA',
        buttonText: 'fe6763',
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        // Use JWT to manage sessions since we aren't using a Database
        jwt: true,
        maxAge: 60 * 15, // 15 min
    },
    jwt: {},
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Correo electronico', type: "email", placeholder: 'example@domio.com'},
                password: { label: 'Password', type: 'password'}
            },
            async authorize(credentials, req) {
                // Enviamos la solicitud  a nuestra API para validar las credenciales
                const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/changarrito`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { 'Content-Type': 'application/json'}
                })
                const user = await res.json()
                console.log(`User Response ${JSON.stringify(user)}`);
                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        }),
        EmailProvider({
            server: {
              host: process.env.EMAIL_SERVER_HOST,
              port: process.env.EMAIL_SERVER_PORT,
              auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD
              }
            },
            from: process.env.EMAIL_FROM
        }),
    ],
    adapter: SequelizeAdapter(sequelize),
    callbacks: {
        async session ({session, token, user }){
            console.log(`Session ${JSON.stringify(user)}`)
            return session
        }
    }
}

export default NextAuth(authOptions)