import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import {
  CloudArrowDownIcon,
  ArrowPathIcon,
  TrashIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

export function GestionDocumentos() {
  // Aquí podrías agregar la lógica para manejar las acciones de cada botón
  const handleUpload = () => {
    console.log("Subir documento");
  };

  const handleUpdate = () => {
    console.log("Actualizar documento");
  };

  const handleDelete = () => {
    console.log("Eliminar documento");
  };

  const handleSend = () => {
    console.log("Enviar documento");
  };

  const actions = [
    { icon: CloudArrowDownIcon, text: "Subir Documento", action: handleUpload },
    { icon: ArrowPathIcon, text: "Actualizar Documento", action: handleUpdate },
    { icon: TrashIcon, text: "Eliminar Documento", action: handleDelete },
    { icon: PaperAirplaneIcon, text: "Enviar Documento", action: handleSend },
  ];

  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
        {actions.map(({ icon: Icon, text, action }) => (
        <Card key={text}>
            <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="m-0 p-4"
            >
            <Typography variant="h5" color="blue-gray">
            {text}
            </Typography>
        </CardHeader>
            <CardBody className="flex items-center justify-between p-4">
            <Icon strokeWidth={2} className="h-12 w-12 text-blue-gray" />
            <Button
                color="blue"
                buttonType="filled"
                size="md"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                onClick={action}
            >
            {text}
            </Button>
        </CardBody>
        </Card>
    ))}
    </div>
    ) ;
}

export default GestionDocumentos;