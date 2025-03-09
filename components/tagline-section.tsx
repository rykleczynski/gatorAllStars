export default function TaglineSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary via-accent to-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-2">LEARN</h3>
            <p className="text-white/90 max-w-xs">Develop new skills and knowledge from industry professionals</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-2">PERFORM</h3>
            <p className="text-white/90 max-w-xs">Showcase your talents and build confidence through performance</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-2">SHINE</h3>
            <p className="text-white/90 max-w-xs">Stand out and let your unique abilities and personality shine</p>
          </div>
        </div>
      </div>
    </section>
  )
}

