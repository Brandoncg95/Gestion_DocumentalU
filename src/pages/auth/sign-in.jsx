import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log('Form Data:',data);
    
  };

  return (
    <>
      <div className="absolute inset-0 z-0 h-full w-full bg-[#FAFAFA]" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Inicio de sesión
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input
                type="email"
                label="Email"
                size="lg"
                {...register("email", { required: "Email is required" })}
                error={errors.email?.message}
              />
              <Input
                type="password"
                label="Password"
                size="lg"
                {...register("password", { required: "Password is required" })}
                error={errors.password?.message}
              />
              <div className="-ml-2.5">
                <Checkbox label="Recuerdame" {...register("rememberMe")} />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button type="submit" variant="gradient" fullWidth>
                Ingresar
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
