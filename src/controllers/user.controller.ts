import { UserService } from "../services/user.service";
// Crea una instancia del servicio de usuario
const userService: UserService = new UserService();

export const userController = {
  addUser: (req: any, res: any) => {
    try {
      // Obtiene el nuevo usuario del cuerpo de la solicitud
      const newUser = req.body;

      // Llama al método del servicio para añadir el usuario y devuelve una promesa
      /*
       * @param {any} newUser - El nuevo usuario a añadir
       * @returns {Promise<any>} - Una promesa que se resuelve con el resultado de la operación
       */
      userService.addUser(newUser).then((result) => {
        // Envía una respuesta con el resultado de la operación
        res.json(result);
      });
    } catch (exception) {
      console.log(exception);
      res.sendStatus(500);
    }
  },

  getAllUsers: (_req: any, res: any) => {
    userService
      .getAllUsers()
      .then((result) => {
        res.json(result);
      })
      .catch((exception) => {
        console.log(exception);
        res.sendStatus(500);
      });
  },

  getUserById: (req: any, res: any) => {
    try {
      //el + es un tipado forzado, obliga a que sea un numero
      const userId = +req.params.id;
      userService.getUserById(userId).then((result) => {
        res.json(result);
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};
