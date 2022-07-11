import './index.css';
import axios from 'axios'
import  React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

 function App() {
  const [data,setData]= useState([])
 const [curentPage,setcurentPage]=useState(1)
 const [curentperPage]=useState(10)

 useEffect(()=>{
   const getData = async ()=>{
    const res = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=50&currency=EUR')
    
    setData(res.data.coins)
   }
    getData() 
  },[])

  const changData = (newData)=>{
     newData.map((item)=>{
          if(item.price >=10000){
            const value = item.price.toString().substr(0,8).split('');
            value.splice(2,0,',');
            item.price = value.join('');
          }

          if(item.marketCap>=100000000&&item.marketCap<=1000000000){
            const value = item.marketCap.toString().substr(0,4).split('');
             value.splice(3,0,'.')
            item.marketCap = value.join('')+'M'
          }

          if(item.marketCap>=1000000000&&item.marketCap<10000000000){
            const value = item.marketCap.toString().substr(0,2).split('');
             value.splice(1,0,'.')
            item.marketCap = value.join('')+'B'
          }

          if(item.marketCap>=10000000000&&item.marketCap<100000000000){
            const value = item.marketCap.toString().substr(0,3).split('');
             value.splice(2,0,'.')
            item.marketCap = value.join('')+'B'
          }
          if(item.marketCap>=100000000000&&item.marketCap<1000000000000){
            const value = item.marketCap.toString().substr(0,4).split('');
             value.splice(3,0,'.')
            item.marketCap = value.join('')+'B'
          }

          if(item.marketCap>=10000000&&item.marketCap<=100000000){
            const value = item.marketCap.toString().substr(0,3).split('');
             value.splice(2,0,'.')
            item.marketCap = value.join('')+'M'
          }

          if(item.volume>=10000000&&item.volume<=100000000){
            const value = item.volume.toString().substr(0,3).split('');
             value.splice(2,0,'.')
             item.volume = value.join('')+'M'
          }

          if(item.volume>=100000000&&item.volume<=1000000000){
            const value = item.volume.toString().substr(0,4).split('');
             value.splice(3,0,'.')
             item.volume = value.join('')+'M'
          }

          if(item.volume>=1000000000&&item.volume<=10000000000){
            const value = item.volume.toString().substr(0,2).split('');
             value.splice(1,0,'.')
             item.volume = value.join('')+'B'
          }

          if(item.volume>=10000000000&&item.volume<=100000000000){
            const value = item.volume.toString().substr(0,3).split('');
             value.splice(2,0,'.')
             item.volume = value.join('')+'B'
          }

          if(item.volume>=1000000000000&&item.volume<=10000000000000){
            const value = item.volume.toString().substr(0,2).split('');
             value.splice(1,0,'.')
             item.volume = value.join('')+'T'
          }
          if(item.volume>=10000000000000&&item.volume<=100000000000000){
            const value = item.volume.toString().substr(0,3).split('');
             value.splice(2,0,'.')
             item.volume = value.join('')+'T'
          }

          if(item.volume>=100000&&item.volume<=1000000){
            const value = item.volume.toString().substr(0,4).split('');
             value.splice(3,0,'.')
             item.volume = value.join('')+'K'
          }

          if(item.volume>=10000&&item.volume<=100000){
            const value = item.volume.toString().substr(0,3).split('');
             value.splice(2,0,'.')
             item.volume = value.join('')+'K'
          }

          if(item.volume>=1000&&item.volume<=10000){
            const value = item.volume.toString().substr(0,2).split('');
             value.splice(1,0,'.')
             item.volume = value.join('')+'K'
          }

          if(item.volume>=100&&item.volume<=1000){
            const value = item.volume.toString().substr(0,5).split('');
             
             item.volume = value.join('')
          }

          if(item.volume>=10&&item.volume<=100){
            const value = item.volume.toString().substr(0,4).split('');
             item.volume = value.join('')
          } 

          if(item.volume>0&&item.volume<=10){
            const value = item.volume.toString().substr(0,3).split('');
             item.volume = value.join('')
          } 

          if(item.volume>=1000000&&item.volume<10000000){
            const value = item.volume.toString().substr(0,2).split('');
             value.splice(1,0,'.')
             item.volume = value.join('')+'M'
          }
          
        if(item.price >=1000){
          const value = item.price.toString().substr(0,7).split('');
          value.splice(1,0,',');
          item.price = value.join('');
        }

        if(item.price >100&&item.price <1000){
          const value = item.price.toString().substr(0,6).split('');
          item.price = value.join('');
        }

        if(item.price >10&&item.price <100){
          const value = item.price.toString().substr(0,5).split('');
          item.price = value.join('');
        }

        if(item.price >1&&item.price <10){
          const value = item.price.toString().substr(0,4).split('');
          item.price = value.join('');
        }

        if(item.price <1){
          const value = item.price.toString().substr(0,8).split('');
          item.price = value.join('');
        }
        
        if(item.priceBtc === 1){
          item.priceBtc = '1.00000000'
        }else{
          item.priceBtc = item.priceBtc.toString().substr(0,8)
        }
      
   });
 
  }

    const lastCountryIndex = curentPage * curentperPage
    const firstCountryIndex = lastCountryIndex - curentperPage
    const newDat = data.slice(firstCountryIndex,lastCountryIndex)
  
  changData(data)

  return (
    <div className="App">
      
        <table>
          <thead>
          <tr>
              <td>#</td>
              <td className='name'>Name</td>
              <td className='Change'>Change(24h)</td>
              <td className='price'>Price</td>
              <td>Price in BTC</td>
              <td>Market Cap</td>
              <td>Volume 24h</td>
            
              </tr>
          </thead>
        <tbody>
         {newDat.map((item)=>{
          
           return(
            <tr key={item.rank}>
              <td className='rank'>{item.rank}</td>
              <td><img src={item.icon} alt="" /></td>
              <td className='itemName'>{item.name} <span className='ket'>.</span> <span className='symbol'>{item.symbol}</span></td>
              <td className={item.priceChange1d>0 ? 'priceChange1d':'priceChange'}>   {item.priceChange1d}{'%'}</td>
              <td className='itemPrice' >{'$'}{item.price}</td>
              <td className='priceBtc'>{item.priceBtc}</td>
              <td className='marketCap'>{'$'}{item.marketCap}</td>
              <td className='volume'>{'$'}{item.volume}</td>
             
            </tr>
           )
           
         })}
           
         
        </tbody>
      </table>
         <Pagination
         curentperPage={curentperPage}
         totaleCountry={data.length}
         setcurentPage={setcurentPage}
         />
         
    </div>
   
  );
}

export default App;
