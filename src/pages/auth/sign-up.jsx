import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";

export function SignUp() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <div className="absolute inset-0 z-0 h-full w-full bg-[#FAFAFA]" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-1/2 left-1/2 w-full max-w-[24rem] -translate-y-1/2 -translate-x-1/2 mt-20">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Registro
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-8">

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input label="Nombre" size="lg" className="mb-4" {...register("nombre", { required: "El nombre es requerido" })} />
              {errors.nombre && <p className="text-red-400">{errors.nombre.message}</p>}
              
              <Input type="email" label="Correo Electrónico" size="lg" className="mb-4" {...register("email", { required: "El correo electrónico es requerido" })} />
              {errors.email && <p className="text-red-400">{errors.email.message}</p>}
              
              <Input type="tel" label="Teléfono" size="lg" className="mb-4" {...register("phone", { required: "El teléfono es requerido" })} />
              {errors.phone && <p className="text-red-400">{errors.phone.message}</p>}

              <Controller
                control={control}
                name="role"
                rules={{ required: "El rol es requerido" }}
                render={({ field }) => (
                  <Select {...field} label="Rol" size="lg" className="mb-4">
                    <Option value="">Selecciona un rol</Option>
                    <Option value="admin">Administrador</Option>
                    <Option value="user">Usuario</Option>
                  </Select>
                )}
              />
              {errors.role && <p className="text-red-400">{errors.role.message}</p>}

              <Input type="text" label="Departamento" size="lg" className="mb-4" {...register("department", { required: "El departamento es requerido" })} />
              {errors.department && <p className="text-red-400">{errors.department.message}</p>}
                
              <Input type="password" label="Contraseña" size="lg" className="mb-4" {...register("password", { required: "La contraseña es requerida" })} />
              {errors.password && <p className="text-red-400">{errors.password.message}</p>}  
              
              <CardFooter className="pt-6">
                <Button type="submit" variant="gradient" fullWidth>
                  Registrar
                </Button>
              </CardFooter>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
