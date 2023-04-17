import Image from 'next/image'
import { Inter, Play } from 'next/font/google'
import {Home as HomeIcon, Search,Library,ChevronLeft,ChevronRight, Play as PlayIcon, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react';


export default function Home() {
  return (
   
      <div className='h-screen flex flex-col'>
        <div className='flex flex-1'>
          <aside className='w-72 bg-zinc-950 p-6'>

            <div className='flex items-center gap-2'>
              <div className='h-3 w-3 bg-red-500 rounded-full'></div>
              <div className='h-3 w-3 bg-yellow-500 rounded-full'></div>
              <div className='h-3 w-3 bg-green-500 rounded-full'> 
              </div>
            </div>


            <nav className='space-y-5 mt-10 '>
              <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200' >
                <HomeIcon />
                Home  
              </a>
              <a href=""  className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                <Search />
                Search  
              </a>
              <a href=""  className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                <Library />
                Your Library
              </a>  
            </nav>

            <nav className='mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3 '>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist Do Joseph</a>
              <a href="" className='text-sm text-zinc-400  hover:text-zinc-100'>Playlist Do Raniel</a>
              <a href="" className='text-sm text-zinc-400  hover:text-zinc-100'>Academia on</a>
              <a href="" className='text-sm text-zinc-400  hover:text-zinc-100'>Corrida ao ar livre</a>
              <a href="" className='text-sm text-zinc-400  hover:text-zinc-100'>Viajando</a>
              <a href="" className='text-sm text-zinc-400  hover:text-zinc-100'>Sabado a noite</a>
              <a href="" className='text-sm text-zinc-400  hover:text-zinc-100'>Tim maia</a>
              <a href="" className='text-sm text-zinc-400  hover:text-zinc-100'>Cazuza</a>
              </nav>            
          </aside>
          <main className='flex-1 p-6'>
            <div className='flex items-center gap-4'>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft />
              </button>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronRight />
              </button>
            </div>
            <h1 className='font-semibold text-3xl mt-10 '>Good Afternoon</h1>
            <div className='grid grid-cols-3 gap-6 mt-4 '>
              <a href="" className='bg-white/5  group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'><Image width="100" height="100" src="/AlbumLK.jfif" alt={'capa de album'} /> <strong>Conexões EP</strong>
              <button className='h-10 w-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black/70 m-auto mr-8 invisible group-hover:visible'>
                <PlayIcon/>
              </button>
                </a>
              <a href="" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'><Image width="100" height="100"src="/AlbumLK.jfif" alt={'capa de album'} /> <strong>Conexões EP</strong>
              <button className='h-10 w-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black/70 m-auto mr-8 invisible group-hover:visible'>
                <PlayIcon/>
              </button>
              </a>
              <a href="" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'><Image width="100" height="100"src="/AlbumLK.jfif" alt={'capa de album'} /> <strong>Conexões EP</strong>
              <button className='h-10 w-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black/70 m-auto mr-8 invisible group-hover:visible'>
                <PlayIcon/>
              </button>
              </a>
              <a href="" className='bg-white/5  group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'><Image width="100" height="100"src="/AlbumLK.jfif" alt={'capa de album'} /> <strong>Conexões EP</strong>
              <button className='h-10 w-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black/70 m-auto mr-8 invisible group-hover:visible'>
                <PlayIcon/>
              </button>
              </a>
              <a href="" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'><Image width="100" height="100"src="/AlbumLK.jfif" alt={'capa de album'} /> <strong>Conexões EP</strong>
              <button className='h-10 w-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black/70 m-auto mr-8 invisible group-hover:visible'>
                <PlayIcon/>
              </button>
              </a>
              <a href="" className='bg-white/5  group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'><Image width="100" height="100"src="/AlbumLK.jfif" alt={'capa de album'} /><strong>Conexões EP</strong>
              <button className='h-10 w-10 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black/70 m-auto mr-8 invisible group-hover:visible'>
                <PlayIcon/>
              </button>
              </a>
            </div>
            <h2 className='font-semibold text-2xl mt-10 '>Made for Joseph Raniel</h2>

            <div className='  grid grid-cols-7 gap-4 mt-4 '>
            
              <a href='' className='bg-white/5 p-2 rounded-md flex flex-col gap-2  hover:bg-white/10'>
              <Image className='w-full' width="100"  height="100" src="/AlbumLK.jfif" alt={'capa de album'} />
              <strong className='font-semibold'>Mix Daily 1</strong>
              <span className='text-xs text-zinc-400'>Lakin,NosRed,Veigh and more.</span>
              </a>
              <a href='' className='bg-white/5 p-2 rounded-md flex flex-col gap-2  hover:bg-white/10'>
              <Image className='w-full' width="100"  height="100" src="/AlbumLK.jfif" alt={'capa de album'} />
              <strong className='font-semibold'>Mix Daily 1</strong>
              <span className='text-xs text-zinc-400'>Lakin,NosRed,Veigh and more.</span>
              </a>
              <a href='' className='bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image className='w-full' width="100"  height="100" src="/AlbumLK.jfif" alt={'capa de album'} />
              <strong className='font-semibold'>Mix Daily 1</strong>
              <span className='text-xs text-zinc-400'>Lakin,NosRed,Veigh and more.</span>
              </a>
              <a href='' className='bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image className='w-full' width="100"  height="100" src="/AlbumLK.jfif" alt={'capa de album'} />
              <strong className='font-semibold'>Mix Daily 1</strong>
              <span className='text-xs text-zinc-400'>Lakin,NosRed,Veigh and more.</span>
              </a>
              <a href='' className='bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image className='w-full' width="100"  height="100" src="/AlbumLK.jfif" alt={'capa de album'} />
              <strong className='font-semibold'>Mix Daily 1</strong>
              <span className='text-xs text-zinc-400'>Lakin,NosRed,Veigh and more.</span>
              </a>
            </div>

          </main>
        </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 px-3 py-2 flex items-center justify-between  sticky bottom-0.5'>
        <div className='flex items-center gap-3'>
        <Image className='' width="80"  height="80" src="/bluepen.webp" alt={'capa de album'} />
        <div className='flex flex-col gap-1 '>
          <strong className='font-normal'>Se Você Não Me Ama</strong>
          <span className='text-xs text-zinc-400'>Manoel Gomes</span>
        </div>
        </div>
        <div className='flex flex-col items-center gap-2 '>
          <div className='flex items-center gap-6 pl-8'>
            <Shuffle size={20} className='text-zinc-200'/>
            <SkipBack  size={20} className='text-zinc-200' />
            <button className='h-8 w-8 flex items-center justify-center pl-1 rounded-full bg-white text-black/70 '>
                <PlayIcon/>
              </button>
              <SkipForward size={20} className='text-zinc-200' />
              <Repeat size={20} className='text-zinc-200'/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-24 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>4:12</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
        <Mic2 size={20} />  
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className='flex items-center gap-2'>
          <Volume size={20} />
          <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
        </div>
        <Maximize2 size={20} />
        </div>
      </footer>
      </div>
  
 
  )
}
