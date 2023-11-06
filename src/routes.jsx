import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  FolderIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications, GestionDocumentos} from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
        showInSidenav: true,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Perfil",
        path: "/profile",
        element: <Profile />,
        showInSidenav: true,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Informes",
        path: "/tables",
        element: <Tables />,
        showInSidenav: true,
        
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Notificaciones",
        path: "/notifications",
        element: <Notifications />,
        showInSidenav: true,
      },
      {
        icon: <FolderIcon {...icon} />,
        name: "Gestion Documental",
        path: "/gestion_documentos",
        element: <GestionDocumentos/>,
        showInSidenav: true,
      },
    ],
  },
  {
    title: "Gestion de usuarios",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
        showInSidenav: false,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Gestion de usuarios",
        path: "/sign-up",
        element: <SignUp />,
        showInSidenav: true,
      },
    ],
  },
];

export default routes;
