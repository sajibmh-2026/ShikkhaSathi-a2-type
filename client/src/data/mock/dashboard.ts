// ── Dashboard Mock Data ──────────────────────────────────────────────────────

export interface StatCard {
  label: string
  value: string
  change: string
  changeType: 'up' | 'down' | 'neutral'
  icon: string
  color: string
  bgColor: string
}

export interface Activity {
  id: string
  type: 'lesson' | 'worksheet' | 'exam' | 'report'
  title: string
  description: string
  timestamp: string
  icon: string
  color: string
}

export interface Task {
  id: string
  title: string
  subject: string
  dueDate: string
  priority: 'high' | 'medium' | 'low'
  completed: boolean
}

export interface LessonPlan {
  id: string
  title: string
  subject: string
  classLevel: string
  date: string
  status: 'completed' | 'draft' | 'scheduled'
  duration: string
}

export interface ChartData {
  label: string
  lessons: number
  worksheets: number
  exams: number
}

export interface AIUsage {
  tokensUsed: number
  tokensLimit: number
  requestsToday: number
  requestsLimit: number
  plan: string
  renewalDate: string
}

// ── Welcome ──────────────────────────────────────────────────────────────────

export const welcomeData = {
  teacherName: 'Sabrina',
  greeting: getGreeting(),
  motivationalQuote:
    '"The best teachers teach from the heart, not from the book." — Unknown',
  todayDate: new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
}

function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good Morning'
  if (hour < 17) return 'Good Afternoon'
  return 'Good Evening'
}

// ── Quick Actions ────────────────────────────────────────────────────────────

export const quickActions = [
  {
    label: 'Create Lesson Plan',
    description: 'Generate AI-powered lesson plans',
    icon: 'BookOpen',
    color: '#3AAFE8',
    bgColor: '#EEF9FF',
    path: '/dashboard/planner',
  },
  {
    label: 'Generate Worksheet',
    description: 'Create custom worksheets',
    icon: 'FileText',
    color: '#48C07A',
    bgColor: '#E8F8EF',
    path: '/dashboard/worksheets',
  },
  {
    label: 'Create Exam',
    description: 'Build exams with AI',
    icon: 'ClipboardCheck',
    color: '#FFD044',
    bgColor: '#FFF8E0',
    path: '/dashboard/exams',
  },
  {
    label: 'Generate Report',
    description: 'Parent progress reports',
    icon: 'BarChart3',
    color: '#FF8B5A',
    bgColor: '#FFF0E6',
    path: '/dashboard/reports',
  },
]

// ── Statistics ───────────────────────────────────────────────────────────────

export const statistics: StatCard[] = [
  {
    label: 'Total Lessons',
    value: '24',
    change: '+12%',
    changeType: 'up',
    icon: 'BookOpen',
    color: '#3AAFE8',
    bgColor: '#EEF9FF',
  },
  {
    label: 'Worksheets',
    value: '18',
    change: '+8%',
    changeType: 'up',
    icon: 'FileText',
    color: '#48C07A',
    bgColor: '#E8F8EF',
  },
  {
    label: 'Exams Created',
    value: '7',
    change: '+3%',
    changeType: 'up',
    icon: 'ClipboardCheck',
    color: '#FFD044',
    bgColor: '#FFF8E0',
  },
  {
    label: 'Reports Sent',
    value: '12',
    change: '0%',
    changeType: 'neutral',
    icon: 'BarChart3',
    color: '#FF8B5A',
    bgColor: '#FFF0E6',
  },
]

// ── Recent Activities ────────────────────────────────────────────────────────

export const recentActivities: Activity[] = [
  {
    id: '1',
    type: 'lesson',
    title: 'Created Lesson Plan',
    description: 'Mathematics — Class 5, Chapter 8: Fractions',
    timestamp: '2 hours ago',
    icon: 'BookOpen',
    color: '#3AAFE8',
  },
  {
    id: '2',
    type: 'worksheet',
    title: 'Generated Worksheet',
    description: 'English Grammar — Class 4, Tenses Practice',
    timestamp: '4 hours ago',
    icon: 'FileText',
    color: '#48C07A',
  },
  {
    id: '3',
    type: 'exam',
    title: 'Created Weekly Exam',
    description: 'Science — Class 5, Week 12 Assessment',
    timestamp: 'Yesterday',
    icon: 'ClipboardCheck',
    color: '#FFD044',
  },
  {
    id: '4',
    type: 'report',
    title: 'Sent Parent Report',
    description: 'Monthly progress report for Class 3',
    timestamp: 'Yesterday',
    icon: 'BarChart3',
    color: '#FF8B5A',
  },
  {
    id: '5',
    type: 'lesson',
    title: 'Updated Lesson Plan',
    description: 'Bangla — Class 4, ব্যাকরণ: সন্ধি',
    timestamp: '2 days ago',
    icon: 'BookOpen',
    color: '#3AAFE8',
  },
  {
    id: '6',
    type: 'worksheet',
    title: 'Generated Worksheet',
    description: 'Mathematics — Class 5, Geometry Shapes',
    timestamp: '3 days ago',
    icon: 'FileText',
    color: '#48C07A',
  },
]

// ── AI Usage ─────────────────────────────────────────────────────────────────

export const aiUsage: AIUsage = {
  tokensUsed: 34500,
  tokensLimit: 50000,
  requestsToday: 12,
  requestsLimit: 50,
  plan: 'Free',
  renewalDate: 'Aug 1, 2026',
}

// ── Chart Data (Weekly Activity) ─────────────────────────────────────────────

export const weeklyActivity: ChartData[] = [
  { label: 'Sat', lessons: 3, worksheets: 2, exams: 1 },
  { label: 'Sun', lessons: 1, worksheets: 3, exams: 0 },
  { label: 'Mon', lessons: 4, worksheets: 1, exams: 2 },
  { label: 'Tue', lessons: 2, worksheets: 4, exams: 1 },
  { label: 'Wed', lessons: 5, worksheets: 2, exams: 1 },
  { label: 'Thu', lessons: 3, worksheets: 3, exams: 2 },
  { label: 'Fri', lessons: 2, worksheets: 1, exams: 0 },
]

// ── Upcoming Tasks ───────────────────────────────────────────────────────────

export const upcomingTasks: Task[] = [
  {
    id: '1',
    title: 'Prepare Class 5 Math Quiz',
    subject: 'Mathematics',
    dueDate: 'Today, 2:00 PM',
    priority: 'high',
    completed: false,
  },
  {
    id: '2',
    title: 'Review English Worksheet',
    subject: 'English',
    dueDate: 'Today, 4:00 PM',
    priority: 'high',
    completed: false,
  },
  {
    id: '3',
    title: 'Create Science Lab Report Template',
    subject: 'Science',
    dueDate: 'Tomorrow',
    priority: 'medium',
    completed: false,
  },
  {
    id: '4',
    title: 'Send Parent Progress Reports',
    subject: 'General',
    dueDate: 'Jul 24, 2026',
    priority: 'medium',
    completed: false,
  },
  {
    id: '5',
    title: 'Update Bangla Lesson Plan',
    subject: 'Bangla',
    dueDate: 'Jul 25, 2026',
    priority: 'low',
    completed: true,
  },
]

// ── Recent Lesson Plans ──────────────────────────────────────────────────────

export const recentLessonPlans: LessonPlan[] = [
  {
    id: '1',
    title: 'Introduction to Fractions',
    subject: 'Mathematics',
    classLevel: 'Class 5',
    date: 'Jul 20, 2026',
    status: 'completed',
    duration: '45 min',
  },
  {
    id: '2',
    title: 'English Tenses — Past & Present',
    subject: 'English',
    classLevel: 'Class 4',
    date: 'Jul 19, 2026',
    status: 'completed',
    duration: '40 min',
  },
  {
    id: '3',
    title: 'Plant Cell Structure',
    subject: 'Science',
    classLevel: 'Class 5',
    date: 'Jul 22, 2026',
    status: 'scheduled',
    duration: '50 min',
  },
  {
    id: '4',
    title: 'ব্যাকরণ: সন্ধি ও সমাস',
    subject: 'Bangla',
    classLevel: 'Class 4',
    date: 'Jul 18, 2026',
    status: 'completed',
    duration: '35 min',
  },
  {
    id: '5',
    title: 'Geometry — Angles & Shapes',
    subject: 'Mathematics',
    classLevel: 'Class 5',
    date: 'Jul 23, 2026',
    status: 'draft',
    duration: '45 min',
  },
]
