import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className="flex gap-4 justify-between bg-slate-900 w-full p-3">
        <h1 className='flex items-center gap-2 text-5xl text-amber-400 font-bold uppercase'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
          Futura Viagens
        </h1>
        <a href="/sobre">Sobre</a>
      </nav>
    </main>
  )
}
