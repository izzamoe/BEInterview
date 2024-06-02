import express from 'express';
import bookRoutes from "./Routes/BookRoutes.js";
import memberRoutes from "./Routes/MemberRoutes.js";
import swagger from "./swagger.js";
const app = express();

app.use(express.json());
app.use('/api-docs', swagger.serve, swagger.setup);
app.use(bookRoutes);
app.use(memberRoutes);



export default app
