import { cleanEnv } from 'envalid'; //sets up environmental
import { str, port } from 'envalid/dist/validators.js';

export default cleanEnv(process.env, {
  MONGODB_URL: str(),
  PORT: port(),
});
