import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ورود به هموند",
  description: "ورود به پنل مدیریت هموند",
};

export default function LoginPage() {
  return (
    <main className="login-page">
      <div className="login-layout">
        <section className="login-form-side">
          <Link className="brand login-brand" href="/" aria-label="هموند، صفحه اصلی">
            <span className="brand-mark">ه</span>
            <span>هموند<span className="brand-dot">.</span></span>
          </Link>

          <div>
            <h1 className="login-heading">خوش برگشتی 👋</h1>
            <p className="login-subheading">
              برای ادامه، اطلاعات حساب کاربری‌ات را وارد کن.
            </p>

            <div className="login-fields">
              <label>
                ایمیل یا شماره موبایل
                <input
                  type="text"
                  name="username"
                  autoComplete="username"
                  placeholder="مثلاً nima@example.com"
                />
              </label>
              <label>
                رمز عبور
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="رمز عبورت را وارد کن"
                />
              </label>
            </div>

            <div className="login-options">
              <label className="remember-option">
                <input type="checkbox" />
                مرا به خاطر بسپار
              </label>
              <a className="forgot-link" href="#">
                رمز عبور را فراموش کردی؟
              </a>
            </div>

            <Link className="login-submit" href="/">
              ورود به حساب کاربری
            </Link>
            <p className="login-note">
              این صفحه یک قالب نمایشی است؛ برای ورود واقعی باید به سامانه احراز هویت متصل شود.
            </p>
          </div>
        </section>

        <aside className="login-visual">
          <div className="visual-top">
            <span className="visual-tag">فضای رشد کسب‌وکار شما</span>
          </div>
          <div className="visual-content">
            <h2>همه چیز برای رشد، یک‌جا.</h2>
            <p>
              فروشگاهت را ساده‌تر مدیریت کن، تصویر روشن‌تری از عملکردت داشته باش
              و با خیال راحت روی قدم بعدی تمرکز کن.
            </p>
            <div className="visual-ornament" aria-hidden="true">
              <svg viewBox="0 0 360 110" preserveAspectRatio="none">
                <path
                  d="M0 83 C30 77 41 83 63 67 S98 78 120 59 S151 66 178 46 S211 60 234 36 S266 48 288 26 S325 34 360 8"
                  fill="none"
                  stroke="rgb(255 255 255 / 73%)"
                  strokeWidth="2"
                />
                <path
                  d="M0 83 C30 77 41 83 63 67 S98 78 120 59 S151 66 178 46 S211 60 234 36 S266 48 288 26 S325 34 360 8 V110 H0Z"
                  fill="url(#loginChartFill)"
                />
                <defs>
                  <linearGradient id="loginChartFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="white" stopOpacity=".16" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="visual-bottom">
            <span>© ۱۴۰۵ هموند</span>
            <Link href="/">بازگشت به داشبورد</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
