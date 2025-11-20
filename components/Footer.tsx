export default function Footer() {
  return (
    <footer className="py-20 px-6 md:px-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-blue-500 rounded-full blur-[1px] opacity-80" />
            <span className="text-lg font-bold tracking-tighter font-mono">
              DEEPERSENSOR
            </span>
          </div>
          <p className="text-gray-500 text-sm max-w-xs">
            Advancing the state of the art in artificial intelligence.
          </p>
        </div>

        <div className="flex gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white">Research</h4>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Publications</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Code</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Datasets</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white">Company</h4>
            <a href="#" className="text-gray-500 hover:text-white text-sm">About</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Careers</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Blog</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Contact</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white">Social</h4>
            <a href="#" className="text-gray-500 hover:text-white text-sm">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">LinkedIn</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">GitHub</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>&copy; 2025 Deepersensor Labs. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
