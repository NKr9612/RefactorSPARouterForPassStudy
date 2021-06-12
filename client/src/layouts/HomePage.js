import React, { Component }  from 'react';

const HomePage = () => {

    const listArticles = [
        {id:0, 
        name: 'Przełom: miony to cząstka, która łamie prawa fizyki. Właśnie to potwierdzono',
        date: '08.04.2021',
        description:'Naukowcy mają coraz więcej powodów by sądzić, że subatomowa cząsteczka zwana mionem łamie znane prawa rządzące otaczającym nas światem.'},
        {id:1, 
        name: '„Nieskazitelna” kometa Borisov. Nigdy nie zetknęła się z jakąkolwiek gwiazdą',
        date: '07.04.2021',
        description:'Międzygwiezdny intruz 2I / Borisov może być najbardziej nieskazitelną kometą, jaką kiedykolwiek zaobserwowano. Zbuntowana kometa prawdopodobnie nigdy wcześniej nie napotkała gwiazdy.'},
        {id:2, 
        name: 'Powrót do Mgławicy Welon',
        date: '02.04.2021',
        description:'Jedno z najbardziej popularnych zdjęć wykonanych przez NASA doczekało się nowej i ulepszonej wersji.'},
        {id:3, 
        name: 'Satelita NASA uchwycił tranzyt Księżyca. Na godzinę stracił wyraźny obraz',
        date: '29.03.2021',
        description:'Solar Dynamics Observatory – satelita służący do obserwacji Słońca – zarejestrował nietypowe zjawisko. Przez nieco ponad 50 minut jego obraz przesłaniał Księżyc, który znalazł się między SDO a centralną gwiazdą naszego układu. To największa fotobomba w historii – mówi NASA o zarejestrowanym przez satelitę tranzycie Księżyca.'},
        
    ]

     const smthLikeApi = listArticles.map(item =>(
         <li key={item.id}>
             <h2>{item.name}</h2>
             <span>{item.date}</span>
             <p>{item.description}</p>
         </li>
     ))

    return (
        <article id='articleCosmos'>
            <ul> {smthLikeApi} </ul>
        </article>
      );
}
 
export default HomePage;