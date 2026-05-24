export default function FloatingGlass({ children, className = '' }) {
  return (
    <div className={`glass rounded-3xl p-6 backdrop-blur-md ${className}`}>
      {children}
    </div>
  )
}
