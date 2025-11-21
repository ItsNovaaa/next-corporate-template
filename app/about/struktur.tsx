"use client";

import { cn } from "@/lib/utils";

// 1. Tipe Data & Card Component (Sama seperti sebelumnya)
interface TeamMember {
  name: string;
  role: string;
  level: "ceo" | "manager" | "staff";
}

function TeamCard({ member }: { member: TeamMember }) {
  const roleColor = 
    member.level === "ceo" ? "text-teal-600" : 
    member.level === "manager" ? "text-blue-600" : "text-gray-500";
    
  const cardStyle = 
    member.level === "ceo" ? "border-teal-200 shadow-md bg-teal-50/30" : 
    member.level === "manager" ? "border-blue-200 shadow-sm bg-blue-50/30" : "border border-slate-100 ";

  return (
    <div className={cn(
      "p-4 rounded-xl border w-48 text-center z-10 relative transition-all hover:-translate-y-1",
      cardStyle
    )}>
      <h3 className="font-bold text-slate-900 text-lg">{member.name}</h3>
      <p className={cn("text-sm font-medium mt-1", roleColor)}>
        {member.role}
      </p>
    </div>
  );
}

// 2. Konektor Lurus Vertikal (Untuk Level 1 ke 2)
function VerticalLine() {
  return <div className="h-10 w-px bg-slate-300"></div>;
}

// 3. Konektor Bercabang (Untuk Level 2 ke 3)
// Menghubungkan 1 Manager ke 2 Staff di bawahnya
function BranchConnector() {
  return (
    <div className="flex flex-col items-center w-full max-w-[400px]">
      {/* Garis Vertikal dari Atas */}
      <div className="h-8 w-px bg-slate-300"></div>
      
      {/* Garis Horizontal + Kaki */}
      <div className="relative w-full h-8">
        {/* Garis Mendatar (Menghubungkan kiri dan kanan) */}
        <div className="absolute top-0 left-[25%] right-[25%] h-px bg-slate-300"></div>
        
        {/* Kaki Kiri */}
        <div className="absolute top-0 left-[25%] h-full w-px bg-slate-300"></div>
        
        {/* Kaki Kanan */}
        <div className="absolute top-0 right-[25%] h-full w-px bg-slate-300"></div>
      </div>
    </div>
  );
}

export default function OrganizationChartSimple() {
  return (
    <section className="py-20 px-4 bg-white flex flex-col items-center">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-3">Tim Teknis</h2>
        <p className="text-gray-500 mt-2">Struktur Divisi Teknologi</p>
      </div>

      {/* --- STRUKTUR DIAGRAM --- */}
      <div className="flex flex-col items-center">
        
        {/* === LEVEL 1: HEAD / CEO === */}
        <TeamCard member={{ name: "Jane Doe", role: "Head of Department", level: "ceo" }} />
        
        {/* Garis Lurus */}
        <VerticalLine />

        {/* === LEVEL 2: MANAGER === */}
        <TeamCard member={{ name: "John Smith", role: "Technical Lead", level: "manager" }} />

        {/* Garis Bercabang */}
        <div className="w-[400px]"> {/* Lebar container menentukan lebar cabang staff */}
           <BranchConnector />
        </div>

        {/* === LEVEL 3: STAFF === */}
        <div className="flex justify-between w-[400px]">
          {/* Staff Kiri */}
          <div className="flex bg-gray-100/20 flex-col items-center border rounded-xl">
             <TeamCard member={{ name: "Alex Brown", role: "Frontend Dev", level: "staff" }} />
          </div>

          {/* Staff Kanan */}
          <div className="flex bg-gray-100/20 flex-col items-center border rounded-xl">
             <TeamCard member={{ name: "Sarah Lee", role: "Backend Dev", level: "staff" }} />
          </div>

        </div>

      </div>
    </section>
  );
}