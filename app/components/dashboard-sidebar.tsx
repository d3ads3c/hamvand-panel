import Link from "next/link";
import { DashboardIcon, type DashboardIconName } from "./dashboard-icon";

const navItems: {
  icon: DashboardIconName;
  label: string;
  count?: string;
  active?: boolean;
}[] = [
  { icon: "grid", label: "نمای کلی", active: true },
  { icon: "bag", label: "سفارش‌ها", count: "۱۲" },
  { icon: "users", label: "مشتری‌ها" },
  { icon: "chart", label: "گزارش‌ها" },
];

export function DashboardSidebar() {
  return (
    <aside className="sidebar">
      <Link className="brand" href="/" aria-label="هموند، صفحه اصلی">
        <span className="brand-mark">ه</span>
        <span>هموند<span className="brand-dot">.</span></span>
      </Link>

      <span className="nav-caption">منو</span>
      <nav className="sidebar-nav" aria-label="منوی اصلی">
        {navItems.map((item) => (
          <a
            className={`nav-item${item.active ? " active" : ""}`}
            href={item.active ? "/" : "#"}
            key={item.label}
          >
            <DashboardIcon name={item.icon} size={19} />
            <span>{item.label}</span>
            {item.count && <span className="nav-count">{item.count}</span>}
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <a className="nav-item" href="#">
          <DashboardIcon name="settings" size={19} />
          <span>تنظیمات</span>
        </a>
        <div className="help-card">
          <span className="help-icon">؟</span>
          <strong>به راهنمایی نیاز دارید؟</strong>
          <span>ما همیشه کنار شما هستیم.</span>
          <a href="#">ارتباط با پشتیبانی <span>←</span></a>
        </div>
        <Link className="user-profile" href="/login">
          <span className="profile-avatar">ن</span>
          <span className="profile-copy">
            <strong>نیما احمدی</strong>
            <span>مدیر حساب</span>
          </span>
          <span className="profile-menu">···</span>
        </Link>
      </div>
    </aside>
  );
}
