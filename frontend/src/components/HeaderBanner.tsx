export default function HeaderBanner() {
  return (
    <header className="flex items-center justify-center h-64 md:h-96 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Welcome</h1>
        <p className="text-lg md:text-2xl">We are getting married!</p>
      </div>
    </header>
  )
}
