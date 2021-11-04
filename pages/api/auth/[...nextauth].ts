import NextAuth from "next-auth";
import { NextApiRequest, NextApiResponse } from "next-auth/internals/utils";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: {
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
  },
};

export default (req: NextApiRequest, res: NextApiResponse<any>) =>
  NextAuth(req, res, options);
