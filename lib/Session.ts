import { getServerSession } from 'next-auth/next';
import { NextAuthOptions, User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import Googleprovider from 'next-auth/providers/google';
import jsonwebtoken from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';

export const authOptions: NextAuthOptions = {
	providers: [
		Googleprovider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
	// jwt: {
	// 	encode: ({ secret, token }) => {},
	// 	decode: async ({ secret, token }) => {},
	// },
	theme: {
		colorScheme: 'light',
		logo: '/logo.png',
	},
	callbacks: {
		async session({ session }) {
			return session;
		},
		async signIn({ user }: { user: AdapterUser | User }) {
			try {
				//get user from db if exists

				//if they dont, create it

				//return user
				return true;
			} catch (error: any) {
				console.log(error);
				return false;
			}
		},
	},
};
