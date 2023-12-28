import RegisterForm from "@/components/auth/register/RegisterForm";
import { Breadcrumbs } from "@/components/pagers/breadcrumbs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";
// import { getServerSession } from "next-auth/next";
// import { options } from "@/app/api/auth/[...nextauth]/options";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default async function RegisterPage() {
  // const session = await getServerSession(options);
  // console.log(session?.user);
  return (
    <>
      <div className="lg:p-8">
        <Breadcrumbs
          segments={[
            {
              title: "Inicio",
              href: "/",
            },
            {
              title: "Registro",
              href: "",
            },
          ]}
        />
        <Card className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Crear una cuenta</CardTitle>
            <CardDescription>
              Elija su método de inicio de sesión preferido
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              <Button>
                <FaGoogle className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button>
                <FaGoogle className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  O continuar con
                </span>
              </div>
            </div>
            <RegisterForm />
          </CardContent>
          <CardFooter>
            <p className="px-8 text-center text-sm text-muted-foreground">
              Al hacer clic en continuar, aceptas nuestros{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Términos de servicio
              </Link>{" "}
              y{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                política de privacidad
              </Link>
              .
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
