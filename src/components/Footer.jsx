const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-400 py-6 px-8 mt-auto">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center gap-4 flex-wrap text-sm">
        <p className="text-sm text-slate-400">
          &copy; 2025 CryptoTracker. Built with Next.js, Express.js, Node.js & MongoDB.
        </p>
        <div>
          <p>Data provided by CoinGecko API</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
