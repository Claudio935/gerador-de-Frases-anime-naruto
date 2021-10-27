export const getQuote =  async() =>{
    const quote = await fetch('https://animechan.vercel.app/api/quotes/anime?title=naruto')
    const json = await quote.json()
    return json
    }
    
    

        
