import Link from "next/link";
import { DashboardIcon } from "./dashboard-icon";

export function DashboardHeader() {
  return (
    <header className="topbar">
      <div className="breadcrumbs">
        <span>فضای کاری</span>
        <span className="breadcrumb-separator">/</span>
        <strong>نمای کلی</strong>
      </div>
      <div className="topbar-actions">
        <label className="search-box">
          <DashboardIcon name="search" size={18} />
          <input aria-label="جستجو" placeholder="جستجو کنید..." />
          <kbd>⌘ K</kbd>
        </label>
        <button className="icon-button notification-button" aria-label="اعلان‌ها">
          <DashboardIcon name="bell" size={19} />
          <span />
        </button>
        <Link className="topbar-user" href="/login" aria-label="صفحه ورود">
          <span className="profile-avatar">ن</span>
          <span className="topbar-user-name">نیما احمدی</span>
        </Link>
      </div>
    </header>
  );
}
