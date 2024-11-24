"use client";

import { useState } from "react";
import {
  Book,
  Calendar,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dashboard } from "../Students/screens/Dashboard";
import { Qualifications } from "./screens/Qualifications";
import { Reports } from "./screens/Reports";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex min-h-screen bg-slate-900">
      {/* Sidebar */}
      <aside className="hidden w-64 bg-slate-800 text-slate-300 border-r md:block fixed top-16 bottom-16">
        <nav className="p-4 space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("overview")}
          >
            <LayoutDashboard className="w-4 h-4 mr-2" />
            Vista General
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("courses")}
          >
            <Book className="w-4 h-4 mr-2" />
            Materias
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("assignments")}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Tareas
          </Button>
           <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("newsletters")}
          >
            <FileText className="w-4 h-4 mr-2" />
            Informes
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setActiveTab("messages")}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Mensajes
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 top-16 ml-32">
        <main className="p-6 ml-36 mt-16 ">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-slate-400">
              <TabsTrigger className="text-slate-200" value="overview">Vista General</TabsTrigger>
              <TabsTrigger className="text-slate-200" value="courses">Materias</TabsTrigger>
              <TabsTrigger className="text-slate-200" value="newsletters">Inoformes</TabsTrigger>
              <TabsTrigger className="text-slate-200" value="messages">Mensajes</TabsTrigger>
            </TabsList>
          {
            activeTab === "overview" && <Dashboard />
          }
          {
            activeTab === "courses"  && <Qualifications />
          }
          {
            activeTab === "newsletters"  && <Reports />
          }
          {
            activeTab === "messages"  && <Qualifications />
          }
          </Tabs>
        </main>
      </div>
    </div>
  );
}

