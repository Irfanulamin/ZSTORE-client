import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";

const ProtectedLayer = ({ children }: { children: any }) => {
  // const email = useAppSelector(userCurrentEmail);
  console.log(email);
  const router = useRouter();

  if (!email) {
    return router.push("/login");
  }

  return children;
};

export default ProtectedLayer;
