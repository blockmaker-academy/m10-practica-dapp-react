export default function Header() {
  return (
    <header className="flex px-8 py-4 border-b justify-between items-center bg-white">
      {/* Logo para mobile */}
      <img src="/blockmaker-small-logo.png" className="sm:hidden" alt="blockmaker-logo" width={45} />
      {/* Logo para desktop */}
      <img src="/blockmaker-full-logo.png" className="hidden sm:flex" alt="blockmaker-logo" width={250} />
      <button className="bg-gray-200 rounded-md">Conectar Wallet</button>
    </header>
  )
}
