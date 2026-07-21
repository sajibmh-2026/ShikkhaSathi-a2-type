export default function DashboardPlaceholder() {
  return (
    <div className="flex items-center justify-center" style={{ minHeight: '60vh' }}>
      <div className="text-center">
        <div style={{ fontSize: 48, marginBottom: 16 }}>🚧</div>
        <h2
          className="font-poppins font-bold text-text mb-2"
          style={{ fontSize: 22 }}
        >
          Coming Soon
        </h2>
        <p className="text-text-mid" style={{ fontSize: 15 }}>
          This page is under construction.
        </p>
      </div>
    </div>
  )
}
