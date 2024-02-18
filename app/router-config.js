import { AccountController } from "./controllers/AccountController.js";
import { ImageController } from "./controllers/ImageController.js";
import { QuoteController } from "./controllers/QuoteController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [ImageController, QuoteController],
    view: ''

  },

  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




