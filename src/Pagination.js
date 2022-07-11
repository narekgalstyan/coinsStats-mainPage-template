import  React, {useState} from 'react';
function Pagination({curentperPage,totaleCountry,setcurentPage}){
    const [changStyle,setCHangStyle]=useState(1)
    const page = []

    for (let i =0;i<=Math.ceil(totaleCountry/curentperPage);i++){
        page.push(i+1)
    }

 const pagnat = (pagNumer,index) =>{
    setCHangStyle(index)
    setcurentPage(pagNumer)
  }
  console.log()
  
const t = index=>{
    if(changStyle===index){
        return 'pagnumb2'
    }
    return 'pagnumb'
}
   
    return(
        <div>
            <ul className='pagname' >{
                page.map((num,i)=>{
                   const index = i+1
                    return(
                        <li key={i} className={t(index)} onClick={()=>{pagnat(num,index)}} >
                            {num}
                        </li>
                    )})}
                    </ul>
          </div>
    )}

export default Pagination