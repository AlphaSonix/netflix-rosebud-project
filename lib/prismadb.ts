import { PrismaClient } from "@prisma/client";

//because of nextjs hot relodaing (where code is rewritten on every code change) to prevent instances from being created every time
// it is declared as a global variable which is outside the scope of hot reloading
// to correct prismadb error, create global.d.ts file also
const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === 'production') global.prismadb = client;

export default client; 