import React from "react";
import { Link } from 'react-router-dom';
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  UserPlusIcon,
  TableCellsIcon,
  FolderIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

export function Home() {
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {/* Enlace a la página de perfil */}
        <Link to="/profile" className="text-center">
          <div className="p-4 border rounded-lg shadow hover:bg-gray-100">
            <UserCircleIcon className="w-6 h-6 mx-auto text-blue-500" />
            <Typography variant="h5" className="mt-2">
              Perfil
            </Typography>
          </div>
        </Link>

        {/* Enlace a la gestión de usuarios */}
        <Link to="/sign-up" className="text-center">
          <div className="p-4 border rounded-lg shadow hover:bg-gray-100">
            <UserPlusIcon className="w-6 h-6 mx-auto text-blue-500" />
            <Typography variant="h5" className="mt-2">
              Gestión de Usuarios
            </Typography>
          </div>
        </Link>

        {/* Enlace a la página de informes */}
        <Link to="/tables" className="text-center">
          <div className="p-4 border rounded-lg shadow hover:bg-gray-100">
            <TableCellsIcon className="w-6 h-6 mx-auto text-blue-500" />
            <Typography variant="h5" className="mt-2">
              Informes
            </Typography>
          </div>
        </Link>

        {/* Enlace a la gestión de documentos */}
        {/* Asegúrate de agregar el enlace cuando la página esté lista */}
        <div className="text-center">
          <div className="p-4 border rounded-lg shadow hover:bg-gray-100">
            <FolderIcon className="w-6 h-6 mx-auto text-blue-500" />
            <Typography variant="h5" className="mt-2">
              Gestión de Documentos
            </Typography>
          </div>
        </div>
      </div>

      {/* Sección de novedades de documentos */}
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-4">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Novedades de Documentos
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <CheckIcon strokeWidth={3} className="h-4 w-4 text-blue-500" />
              <strong>Últimas actualizaciones</strong> del último mes
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            {null} Se esta desarrollando
          </CardBody>
        </Card>
      </div>
      {/* Sección de novedades de usuarios */}
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-4">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Novedades de Usuarios
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <CheckIcon strokeWidth={3} className="h-4 w-4 text-blue-500" />
              <strong>Últimas actualizaciones</strong> del último mes
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            {null} Se esta desarrollando
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;
