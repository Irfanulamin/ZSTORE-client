"use client";

import { useState } from "react";
import {
  Bell,
  ChevronDown,
  ClipboardList,
  Edit,
  FileText,
  Home,
  LayoutDashboard,
  Menu,
  Plus,
  Settings,
  Trash2,
  User,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ProtectedLayer from "@/util/ProtectedLayout";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useGetInfoByEmailQuery } from "@/redux/feature/loginApi";
import { logOut } from "@/redux/feature/authSlice";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const email = useAppSelector((state) => state.auth.email);
  const { data } = useGetInfoByEmailQuery(email);
  const dispatch = useAppDispatch();

  const Sidebar = () => (
    <div className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center space-x-2">
          <LayoutDashboard className="h-6 w-6" />
          <span className="font-bold">Dashboard</span>
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-2 p-4">
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-full justify-start space-x-2 px-3 py-2">
                <FileText className="h-4 w-4" />
                <span>CRUD</span>
                <ChevronDown className="ml-auto h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="w-56">
              <DropdownMenuItem>
                <Link href="/dashboard/crud/create-product">
                  <Plus className="mr-2 h-4 w-4 inline-block" />
                  <span>Create</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dashboard/crud/read">
                  <FileText className="mr-2 h-4 w-4 inline-block" />
                  <span>Read</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dashboard/crud/update-product">
                  <Edit className="mr-2 h-4 w-4 inline-block" />
                  <span>Update</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dashboard/crud/delete-product">
                  <Trash2 className="mr-2 h-4 w-4 inline-block" />
                  <span>Delete</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/dashboard/orders"
            className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
          >
            <ClipboardList className="h-4 w-4" />
            <span>Orders</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-full justify-start space-x-2 px-3 py-2">
                <Users className="h-4 w-4" />
                <span>Super Admin</span>
                <ChevronDown className="ml-auto h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="w-56">
              <DropdownMenuSub>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Manage Roles</span>
                </DropdownMenuItem>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                <span>User List</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </ScrollArea>
      <div className="border-t p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-full justify-start">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={data?.user.photo}
                  alt={data?.user.name}
                  className="object-cover w-8 h-8"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="ml-2">{data?.user.name}</span>
              <ChevronDown className="ml-auto h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <span className="font-semibold text-blue-700">
                {data?.user?.email}
              </span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>{data?.user?.type}</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/dashboard/profile">
                <Settings className="mr-2 h-4 w-4 inline-block" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => dispatch(logOut())}>
              <span className="text-red-500">Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );

  return (
    <ProtectedLayer>
      <div className="flex h-screen bg-background">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetContent side="left" className="w-64 p-0 lg:hidden">
            <Sidebar />
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px]">
            <button
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <div className="flex-1" />
            <button>
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </button>
          </header>
          <main className="flex-1 overflow-y-auto p-4">{children}</main>
        </div>
      </div>
    </ProtectedLayer>
  );
};

export default DashboardLayout;
