import { DashboardHeader } from "./components/dashboard-header";
import { DashboardIcon } from "./components/dashboard-icon";
import { DashboardSidebar } from "./components/dashboard-sidebar";

const orders = [
  { id: "۱۲۸۴", name: "سارا محمدی", product: "دوره طراحی محصول", date: "امروز، ۱۰:۲۴", amount: "۱,۲۵۰,۰۰۰", status: "تکمیل شده" },
  { id: "۱۲۸۳", name: "علی رضایی", product: "اشتراک حرفه‌ای", date: "امروز، ۰۹:۱۸", amount: "۸۹۰,۰۰۰", status: "در انتظار" },
  { id: "۱۲۸۲", name: "نگار احمدی", product: "دوره طراحی محصول", date: "دیروز، ۱۸:۴۲", amount: "۱,۲۵۰,۰۰۰", status: "تکمیل شده" },
  { id: "۱۲۸۱", name: "آرمان کریمی", product: "قالب فروشگاهی", date: "دیروز، ۱۶:۰۵", amount: "۶۴۰,۰۰۰", status: "لغو شده" },
];

export default function Home() {
  return (
    <div className="dashboard-shell">
      <DashboardSidebar />

      <main className="dashboard-main">
        <DashboardHeader />

        <div className="page-content">
          <section className="welcome-row">
            <div>
              <p className="eyebrow">پنج‌شنبه، ۱۶ آبان ۱۴۰۵</p>
              <h1>روز بخیر، نیما <span>☀</span></h1>
              <p className="welcome-subtitle">اینجا خلاصه‌ای از وضعیت کسب‌وکارتان را می‌بینید.</p>
            </div>
            <button className="date-filter" type="button">
              <span className="calendar-icon">▦</span>
              ۳۰ روز گذشته
              <span className="filter-chevron">⌄</span>
            </button>
          </section>

          <section className="stats-grid" aria-label="آمار کلی">
            <article className="stat-card">
              <div className="stat-card-top">
                <span>فروش کل</span>
                <span className="stat-icon mint"><DashboardIcon name="chart" size={19} /></span>
              </div>
              <strong className="stat-value">۴۸,۶۵۰,۰۰۰ <small>تومان</small></strong>
              <div className="stat-footer"><span className="trend positive">↗ ۱۲.۸٪</span><span>نسبت به ماه قبل</span></div>
              <span className="stat-sparkline spark-green" aria-hidden="true">▁▂▁▃▂▄▃▅▄▆▅▇</span>
            </article>
            <article className="stat-card">
              <div className="stat-card-top">
                <span>سفارش‌های جدید</span>
                <span className="stat-icon blue"><DashboardIcon name="bag" size={19} /></span>
              </div>
              <strong className="stat-value">۲۴۸ <small>سفارش</small></strong>
              <div className="stat-footer"><span className="trend positive">↗ ۸.۲٪</span><span>نسبت به ماه قبل</span></div>
              <span className="stat-sparkline spark-blue" aria-hidden="true">▁▂▃▂▄▃▅▄▅▆▄▇</span>
            </article>
            <article className="stat-card">
              <div className="stat-card-top">
                <span>مشتری‌های جدید</span>
                <span className="stat-icon violet"><DashboardIcon name="users" size={19} /></span>
              </div>
              <strong className="stat-value">۱۸۶ <small>نفر</small></strong>
              <div className="stat-footer"><span className="trend positive">↗ ۴.۶٪</span><span>نسبت به ماه قبل</span></div>
              <span className="stat-sparkline spark-violet" aria-hidden="true">▁▃▂▂▄▃▅▃▄▆▅▇</span>
            </article>
            <article className="stat-card">
              <div className="stat-card-top">
                <span>میانگین ارزش سفارش</span>
                <span className="stat-icon orange"><span>◇</span></span>
              </div>
              <strong className="stat-value">۱,۸۹۰,۰۰۰ <small>تومان</small></strong>
              <div className="stat-footer"><span className="trend negative">↘ ۲.۱٪</span><span>نسبت به ماه قبل</span></div>
              <span className="stat-sparkline spark-orange" aria-hidden="true">▇▆▆▅▆▄▅▃▄▃▂▃</span>
            </article>
          </section>

          <section className="content-grid">
            <article className="panel revenue-panel">
              <div className="panel-heading">
                <div>
                  <h2>گزارش فروش</h2>
                  <p>مقایسه درآمد در بازه انتخاب‌شده</p>
                </div>
                <button className="select-button" type="button">این ماه <span>⌄</span></button>
              </div>
              <div className="chart-legend">
                <span><i className="legend-dot current" /> امسال</span>
                <span><i className="legend-dot previous" /> سال گذشته</span>
              </div>
              <div className="chart-wrap" role="img" aria-label="نمودار مقایسه فروش امسال و سال گذشته">
                <div className="chart-y-labels"><span>۵۰ م</span><span>۴۰ م</span><span>۳۰ م</span><span>۲۰ م</span><span>۱۰ م</span></div>
                <svg className="revenue-chart" viewBox="0 0 720 220" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="revenueFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#278b76" stopOpacity=".16" />
                      <stop offset="100%" stopColor="#278b76" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path className="chart-gridline" d="M0 15H720M0 60H720M0 105H720M0 150H720M0 195H720" />
                  <path d="M0 154 C35 142 47 142 65 149 S99 159 130 136 S170 122 195 133 S236 149 260 111 S298 97 325 116 S365 126 391 88 S425 74 455 93 S491 101 520 68 S556 78 585 61 S626 45 652 57 S690 38 720 22 V195 H0Z" fill="url(#revenueFill)" />
                  <path d="M0 154 C35 142 47 142 65 149 S99 159 130 136 S170 122 195 133 S236 149 260 111 S298 97 325 116 S365 126 391 88 S425 74 455 93 S491 101 520 68 S556 78 585 61 S626 45 652 57 S690 38 720 22" fill="none" stroke="#278b76" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                  <path d="M0 178 C35 165 47 172 65 168 S99 153 130 161 S170 148 195 158 S236 142 260 151 S298 139 325 148 S365 132 391 143 S425 126 455 137 S491 122 520 131 S556 118 585 127 S626 111 652 120 S690 102 720 110" fill="none" stroke="#c7d2d0" strokeWidth="2" strokeDasharray="5 6" vectorEffect="non-scaling-stroke" />
                </svg>
                <div className="chart-x-labels"><span>۱ مهر</span><span>۵ مهر</span><span>۱۰ مهر</span><span>۱۵ مهر</span><span>۲۰ مهر</span><span>۲۵ مهر</span><span>۳۰ مهر</span></div>
              </div>
            </article>

            <article className="panel source-panel">
              <div className="panel-heading">
                <div>
                  <h2>منابع فروش</h2>
                  <p>از کجا مشتری‌های شما می‌آیند؟</p>
                </div>
                <button className="more-button" type="button" aria-label="گزینه‌های بیشتر">···</button>
              </div>
              <div className="donut-wrap">
                <div className="donut-chart"><div className="donut-center"><strong>۲۴۸</strong><span>سفارش</span></div></div>
              </div>
              <div className="source-list">
                <div><span className="source-name"><i className="source-dot source-one" />اینستاگرام</span><strong>۴۶٪</strong></div>
                <div><span className="source-name"><i className="source-dot source-two" />جستجوی گوگل</span><strong>۳۲٪</strong></div>
                <div><span className="source-name"><i className="source-dot source-three" />مستقیم</span><strong>۲۲٪</strong></div>
              </div>
            </article>
          </section>

          <section className="panel orders-panel">
            <div className="panel-heading orders-heading">
              <div>
                <h2>آخرین سفارش‌ها</h2>
                <p>تازه‌ترین سفارش‌های ثبت‌شده در فروشگاه</p>
              </div>
              <a className="view-all" href="#">مشاهده همه <DashboardIcon name="arrow" size={15} /></a>
            </div>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr><th>شماره سفارش</th><th>مشتری</th><th>محصول</th><th>تاریخ</th><th>مبلغ</th><th>وضعیت</th></tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="order-id">#{order.id}</td>
                      <td>{order.name}</td>
                      <td>{order.product}</td>
                      <td className="muted-cell">{order.date}</td>
                      <td className="amount-cell">{order.amount} <small>تومان</small></td>
                      <td><span className={`status-badge ${order.status === "تکمیل شده" ? "status-complete" : order.status === "در انتظار" ? "status-pending" : "status-cancelled"}`}><i />{order.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <footer className="dashboard-footer"><span>© ۱۴۰۵ هموند</span><span>ساخته‌شده برای رشد کسب‌وکار شما <b>♥</b></span></footer>
        </div>
      </main>
    </div>
  );
}
