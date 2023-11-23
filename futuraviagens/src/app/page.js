"use client"
import Card from '@/components/cards'
import Titulo from '@/components/title'
import Painel from '@/components/painel'
import "./animation.css"
import { useState } from 'react'

export default function Home() {


  const [Viagens,setViagens] = useState([]) 


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg'
    }
  };
  
  fetch('https://api.themoviedb.org/3/trending/movie/week?language=pt-BR', options)
    .then(response => response.json())
    .then(response => setViagens(response.results))
    .catch(err => console.error(err));


  return (
    <main className="flex min-h-screen flex-col">
      <nav className="flex gap-4 justify-between bg-slate-900 w-full p-3">
        <h1 className='flex items-center gap-2 text-5xl text-amber-400 font-bold uppercase'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
          Futura Viagens
        </h1>
        <a href="/sobre">Sobre</a>
      </nav>

      <Titulo> viagem braba</Titulo>
      <section className='flex flex-wrap gap-4 p-4'>
        {Viagens && Viagens.map(viagem => <Card viagem={viagem} /> ) }  
        <Card titulo='Top 3' />
        <Card titulo='Dinheiro Facil' />
        <Card titulo='help me i help you' />
        <Card titulo='dçlgkdfçlk' />
      </section>

      <Titulo> viagem mas</Titulo>
      <Titulo> viagem d</Titulo>
      <Titulo> viagem braba</Titulo>

    </main>
  )
}