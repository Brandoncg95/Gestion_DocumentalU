import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";

export function Profile() {
  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://www.adea.com.co/content-web-adea/media/2021/09/gestion-documental-banners.jpg)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center gap-6">
            <Avatar
              src="/img/bruce-mars.jpeg"
              alt="bruce-mars"
              size="xl"
              className="rounded-lg shadow-lg shadow-blue-gray-500/40"
            />
            <div>
              <Typography variant="h5" color="blue-gray" className="mb-1">
                Brandon Cataño
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-blue-gray-600"
              >
                Administrador
              </Typography>
            </div>
          </div>
          <ProfileInfoCard
            title="Información del perfil"
            description="Estamos trabajando para actualizar esta parte"
            details={{
              "Nombre": "Brandon Cataño Garcia",
              Telefono: "3187032636",
              email: "brandonelrey@hotmail.com",
              location: "Colombia",
              social: (
                <div className="flex items-center gap-4">
                  <i className="fa-brands fa-facebook text-blue-700" />
                  <i className="fa-brands fa-twitter text-blue-400" />
                  <i className="fa-brands fa-instagram text-purple-500" />
                </div>
              ),
            }}
            action={
              <Tooltip content="Edit Profile">
                <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
              </Tooltip>
            }
          />
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;