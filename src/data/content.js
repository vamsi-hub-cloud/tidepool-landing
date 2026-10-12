import { Layers, Users, BellRing, BarChart3, Plug, ShieldCheck, FolderPlus, ListChecks, Rocket } from 'lucide-react'

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Pricing', href: '#pricing' },
]

export const features = [
  { icon: Layers, title: 'One shared board', text: 'Tasks, files and decisions live in one place, so nobody asks "where is that?" again.' },
  { icon: Users, title: 'Clear owners', text: 'Every task has one owner and one due date. Work stops falling between people.' },
  { icon: BellRing, title: 'Calm reminders', text: 'Get a nudge only when something you own is due or blocked.' },
  { icon: BarChart3, title: 'Progress at a glance', text: 'See what is on track and what is slipping without opening a single report.' },
  { icon: Plug, title: 'Works with your tools', text: 'Connect Slack, Google Calendar, GitHub and 40+ other apps in a few clicks.' },
  { icon: ShieldCheck, title: 'Private by default', text: 'Role-based access, SSO and daily backups keep your work safe.' },
]

export const steps = [
  { icon: FolderPlus, title: 'Create a project', text: 'Start from a template or import your tasks from a spreadsheet.' },
  { icon: ListChecks, title: 'Assign the work', text: 'Give each task an owner and a date. Invite your team by email.' },
  { icon: Rocket, title: 'Ship on schedule', text: 'Track progress on the board and close tasks as they finish.' },
]

export const testimonials = [
  { name: 'Aarav Mehta', role: 'Product Manager, Lumio', quote: 'We cut our weekly status meeting from an hour to ten minutes. Everyone already knows where things stand.' },
  { name: 'Sana Qureshi', role: 'Founder, Brightleaf Studio', quote: 'Setup took one afternoon. My designers and developers finally work from the same plan.' },
  { name: 'Daniel Ortiz', role: 'Engineering Lead, Kiln', quote: 'The GitHub link-up is the reason we switched. Pull requests close tasks for us.' },
]

export const plans = [
  { name: 'Starter', monthly: 0, yearly: 0, blurb: 'For individuals trying things out.', cta: 'Start free', features: ['Up to 3 projects', '5 team members', 'Basic board view', 'Community support'] },
  { name: 'Team', monthly: 12, yearly: 9, blurb: 'For teams that ship every week.', cta: 'Start 14-day trial', popular: true, features: ['Unlimited projects', 'Up to 50 members', 'Timeline and reports', 'All integrations', 'Priority support'] },
  { name: 'Business', monthly: 24, yearly: 19, blurb: 'For companies with security needs.', cta: 'Talk to sales', features: ['Everything in Team', 'SSO and audit log', 'Advanced permissions', 'Dedicated manager', '99.9% uptime SLA'] },
]
