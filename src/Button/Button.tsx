
export const Button:React.FC<{

    lable:string

}> = ({lable}) =>{

    return(
   
      <button className=" border-double border-4 border-blue-400 rounded-md w-28 bg-sky-500 hover:bg-sky-700 font-sans hover:font-serif ">lable</button>

    )
};

export const ButtonoutLine:React.FC<{

    lable:string

}> = ({lable}) =>{

    return(
   
      <button className="border-double border-4 border-blue-400 rounded-md w-28  hover:bg-sky-700 font-sans hover:font-serif ">Submit</button>

    )
};

export const ButtonText:React.FC<{
    lable:string
 }>=({lable})=>{

    return(

        <button className="border-double border-4  rounded-md w-28  hover:bg-sky-700 font-sans hover:font-serif ">Reset</button> 

    )
};

