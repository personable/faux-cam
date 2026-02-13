import {
  Search,
  PlusCircle,
  Bell,
  Diamond,
  MapPin,
  Users,
  Image,
  User,
  UsersRound,
  FileText,
  ClipboardCheck,
  DollarSign,
  Map,
  Star,
  LayoutGrid,
  Puzzle,
  FolderOpen,
  Gift,
  ArrowLeftRight,
  MessageCircle,
  FlaskConical,
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  badge?: { text: string; variant: "beta" | "caution" };
}

function NavMenuItem({ icon, label, badge }: MenuItemProps) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-2 border-none bg-transparent text-sidebar-foreground cursor-pointer text-left text-sm transition-colors hover:bg-sidebar-accent rounded-none">
      <span className="w-5 h-5 text-sidebar-muted flex items-center justify-center">
        {icon}
      </span>
      <span className="flex-1">{label}</span>
      {badge && (
        <span
          className={`text-[11px] font-semibold px-1.5 py-0.5 rounded-sm flex items-center gap-1 ${
            badge.variant === "beta"
              ? "bg-badge-beta text-badge-beta-foreground"
              : "bg-badge-caution text-badge-caution-foreground"
          }`}
        >
          {badge.variant === "beta" && <FlaskConical size={10} />}
          {badge.text}
        </span>
      )}
    </button>
  );
}

function NavSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <div className="px-4 py-1.5 mb-1">
        <h2 className="text-xs font-bold text-sidebar-section-title uppercase tracking-wider">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}

export function Navigation() {
  return (
    <nav className="w-[250px] h-dvh bg-sidebar border-r border-sidebar-border flex flex-col shrink-0">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-sidebar-border">
        <img
          src="https://assets.c.companycam.com/vite/assets/CC-Logo-Mark-DqAcdOr2.png"
          alt="CompanyCam"
          className="w-8 h-8"
        />
        <div className="flex items-center gap-1">
          <button className="p-1.5 rounded-full text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
            <PlusCircle size={20} />
          </button>
          <div className="relative mr-1">
            <button className="p-1.5 rounded-full text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
              <Bell size={20} />
            </button>
            <span className="absolute -top-1 -right-1 bg-badge-notification text-badge-notification-foreground rounded-full w-[18px] h-[18px] flex items-center justify-center text-[11px] font-semibold">
              2
            </span>
          </div>
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="John Doe"
            className="w-7 h-7 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Search */}
      <div className="px-4 pt-3">
        <div className="relative">
          <Search size={16} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-sidebar-muted" />
          <Input
            placeholder="Search"
            className="pl-8 bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-muted h-9 text-sm focus-visible:ring-sidebar-ring"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto py-3">
        <NavSection title="CompanyCam">
          <NavMenuItem icon={<Diamond size={18} />} label="Leads" badge={{ text: "Beta", variant: "beta" }} />
          <NavMenuItem icon={<MapPin size={18} />} label="Projects" />
          <NavMenuItem icon={<Users size={18} />} label="Customers" badge={{ text: "Beta", variant: "beta" }} />
          <NavMenuItem icon={<Image size={18} />} label="Photos" />
          <NavMenuItem icon={<User size={18} />} label="Users" />
          <NavMenuItem icon={<UsersRound size={18} />} label="User Groups" />
          <NavMenuItem icon={<FileText size={18} />} label="Reports" />
          <NavMenuItem icon={<ClipboardCheck size={18} />} label="Checklists" />
          <NavMenuItem icon={<DollarSign size={18} />} label="Payments" badge={{ text: "NEW", variant: "caution" }} />
          <NavMenuItem icon={<Map size={18} />} label="Map" />
        </NavSection>

        <NavSection title="Marketing">
          <NavMenuItem icon={<Star size={18} />} label="Reviews" />
          <NavMenuItem icon={<LayoutGrid size={18} />} label="Portfolio" />
        </NavSection>

        <NavSection title="Resources">
          <NavMenuItem icon={<Puzzle size={18} />} label="Integrations" />
          <NavMenuItem icon={<FolderOpen size={18} />} label="Templates" />
        </NavSection>
      </div>

      {/* Footer */}
      <div className="border-t border-sidebar-border py-2">
        <NavMenuItem icon={<Gift size={18} />} label="Refer, get $$$" />
        <NavMenuItem icon={<ArrowLeftRight size={18} />} label="Switch to Org Admin" />
        <NavMenuItem icon={<MessageCircle size={18} />} label="Chat with Support" />
      </div>
    </nav>
  );
}
