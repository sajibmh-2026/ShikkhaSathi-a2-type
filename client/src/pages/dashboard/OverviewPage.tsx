import WelcomeCard from '@/components/dashboard/overview/WelcomeCard'
import QuickActions from '@/components/dashboard/overview/QuickActions'
import StatCards from '@/components/dashboard/overview/StatCards'
import ActivityChart from '@/components/dashboard/overview/ActivityChart'
import AIUsageSummary from '@/components/dashboard/overview/AIUsageSummary'
import RecentActivities from '@/components/dashboard/overview/RecentActivities'
import UpcomingTasks from '@/components/dashboard/overview/UpcomingTasks'
import RecentLessonPlans from '@/components/dashboard/overview/RecentLessonPlans'

// ── Component ────────────────────────────────────────────────────────────────

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-5">
      {/* Row 1 — Welcome */}
      <WelcomeCard />

      {/* Row 2 — Quick Actions */}
      <section>
        <h2
          className="font-poppins font-semibold text-text mb-3"
          style={{ fontSize: 15 }}
        >
          Quick Actions
        </h2>
        <QuickActions />
      </section>

      {/* Row 3 — Statistics */}
      <section>
        <h2
          className="font-poppins font-semibold text-text mb-3"
          style={{ fontSize: 15 }}
        >
          Overview
        </h2>
        <StatCards />
      </section>

      {/* Row 4 — Chart + AI Usage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ActivityChart />
        </div>
        <div>
          <AIUsageSummary />
        </div>
      </div>

      {/* Row 5 — Activities + Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RecentActivities />
        <UpcomingTasks />
      </div>

      {/* Row 6 — Recent Lesson Plans */}
      <RecentLessonPlans />
    </div>
  )
}
