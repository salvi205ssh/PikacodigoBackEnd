import { UserService } from "../services/user.service";
// Crea una instancia del servicio de usuario
const userService: UserService = new UserService();

export const userController = {
  addUser: (req: any, res: any) => {
    try {
      // Obtiene el nuevo usuario del cuerpo de la solicitud
      const newUser = req.body;
      console.log(req.body);
      console.log("En el controller: " + newUser);

      // Llama al método del servicio para añadir el usuario y devuelve una promesa
      /*
       * @param {any} newUser - El nuevo usuario a añadir
       * @returns {Promise<any>} - Una promesa que se resuelve con el resultado de la operación
       */
      userService.addUser(newUser).then((result) => {
        console.log("addUser desde controller");

        // Envía una respuesta con el resultado de la operación
        res.json(result);
      });
    } catch (exception) {
      console.log("Error addUser desde controller");

      console.log(exception);
      res.sendStatus(500);
    }
  },

  getAllUsers: (_req: any, res: any) => {
    userService
      .getAllUsers()
      .then((result) => {
        console.log("getAllUsers desde controller");
        res.json(result);
      })
      .catch((exception) => {
        console.log("Error getAllUsers desde controller");

        console.log(exception);
        res.sendStatus(500);
      });
  },

  getUserById: (req: any, res: any) => {
    try {
      //el + es un tipado forzado, obliga a que sea un numero
      const userId = req.params.id;
      console.log("userId en controller " + userId);
      userService.getUserById(userId).then((result) => {
        console.log("getUserById desde controller");

        res.json(result);
      });
    } catch (error) {
      console.log("Error getUserById desde controller");

      console.log(error);
      res.sendStatus(500);
    }
  },

  getUserByLogin: (req: any, res: any) => {
    try {
      //el + es un tipado forzado, obliga a que sea un numero
      const email = req.params.email;
      const password = req.params.password;
      userService.getLogin(email, password).then((result) => {
        res.json(result);
      });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },

  updateUser: (req: any, res: any) => {
    try {
      // Obtiene el nuevo usuario del cuerpo de la solicitud
      const newUser = req.body;

      console.log("updateUser Body: " + req.body);
      console.log("updateUser en el controller: " + newUser);

      userService.updateUser(newUser).then((result) => {
        console.log("updateUser desde controller");

        // Envía una respuesta con el resultado de la operación
        res.json(result);
      });
    } catch (exception) {
      console.log("Error updateUser desde controller");

      console.log(exception);
      res.sendStatus(500);
    }
  },
};
