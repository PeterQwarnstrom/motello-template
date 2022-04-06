// import * as dotenv from 'dotenv';
// dotenv.config();

import { useServer } from 'motello-server';

const databaseUrl = process.env.MONGODB_URL ?? '';
const databaseName = 'motello-template';

const serverData = useServer();

// To add game specific routes
// serverData.app.use(myroutes(serverData.io));

serverData.start(databaseUrl, databaseName).catch((err) => console.log('Server could not be started', err));
