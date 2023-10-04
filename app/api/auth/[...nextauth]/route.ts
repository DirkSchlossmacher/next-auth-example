import NextAuth from "next-auth/next"
import AzureADProvider from "next-auth/providers/azure-ad"
import { config } from "auth"

const handler = NextAuth(config)
export { handler as GET, handler as POST }

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)
