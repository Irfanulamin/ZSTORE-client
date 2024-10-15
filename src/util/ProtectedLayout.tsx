"use client";
import { useGetInfoByEmailQuery } from "@/redux/feature/loginApi";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";

const ProtectedLayer = ({ children }: { children: any }) => {
  const email = useAppSelector((state) => state.auth.email);
  const { data, isLoading, error } = useGetInfoByEmailQuery(email);

  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error loading user info</div>;
  }

  if (!data || !data.user) {
    return <div>No user data available</div>;
  }

  if (data.user.type === "Moderator" || data.user.type === "Super Admin") {
    return children;
  }

  return router.push("/login");
};

export default ProtectedLayer;
