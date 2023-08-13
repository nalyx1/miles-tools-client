import SignInForm from "@/components/SignInForm";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div
        className="absolute top-0 w-full h-full"
        style={{
          backgroundImage: `url(/bg-milharal.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.3,
        }}
      />
      <SignInForm />
    </div>
  );
}
