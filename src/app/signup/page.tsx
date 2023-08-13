import SignUpForm from "@/components/SignUpForm";
export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(/bg-milharal.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.3,
        }}
      />
      <SignUpForm />
    </div>
  );
}