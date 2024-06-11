import app from "./app";
import { PORT } from "./config/dotenv";

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});