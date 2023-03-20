import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};
//cargador dinamico de rutas (const rutas, fue puesto por mi)
const rutas = readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    console.log(`se esta cargarndo la ruta .... ${cleanName}`);
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`./${cleanName}`, moduleRouter.router);
    })
  }
});

export { router };
