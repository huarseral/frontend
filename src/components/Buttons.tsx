interface MButtonProps{
    text:string,
    color:string,
}

const MButton=({text="OK",color="bg-red-400"}:MButtonProps)=>{

    return <button className={`
        w-25 h-10 rounded rounded-[5px]
         text-white font-bold ${color}
        `}>
            {text}
    </button>

}

export default MButton