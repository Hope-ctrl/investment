const Button = ({tag, style, onclick})=>{
    return(
        <div>
            <button className={`w-[120px] h-[40px]  ${style} `} onClick={onclick}>{tag}</button>
        </div>
    )
}

export default Button;