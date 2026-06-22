import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectDB } from "./app/lib/db";
import { User } from "./app/models/User";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user }) {
      try {
        await connectDB();

        const existingUser = await User.findOne({
          email: user.email,
        });

        if (!existingUser) {
          await User.create({
            email: user.email,
            name: user.name,
          });
        }

        return true;
      } catch (error) {
        console.error("SignIn error:", error);
        return false;
      }
    },

    async jwt({ token }) {
      await connectDB();

      const dbUser = await User.findOne({
        email: token.email,
      });

      if (dbUser) {
        token.id = dbUser._id.toString();
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }

      return session;
    },
  },
});
