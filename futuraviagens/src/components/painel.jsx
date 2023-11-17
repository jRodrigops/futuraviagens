import Botao from "./button"


export default function Painel(){
    return(

        <div className="mt-36 justify-center items-center flex w-1/2 h-96 bg-slate-900 flex-wrap rounded-3xl" >

            <img className="w-60 h-full rounded-3xl mr-14 " src="https://m.media-amazon.com/images/I/91Aa9ZIAaoL.jpg" alt="" />

            <div className=" flex flex-col text-center gap-5">
            <h1>Melhor Jogo Zelda</h1>
            <span className="w-60 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet placeat, recusandae deleniti quidem, illum quod ea consectetur, nihil odio nam fugit accusamus libero iusto enim aliquid quisquam inventore ex!</span>
            <Botao texto={"Saiba Mais"} />
            </div>


        </div>

    )
}