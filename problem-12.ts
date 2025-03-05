{
    interface Developer<T>{
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number 
        }
        smartWatch:T
    }
    const poorDeveloper: Developer<{
        brand:string;
        model:string,
        display:string
    }> = {

        name:'tanu',
        computer:{
            brand:'Asus',
            model:'df',
            releaseYear: 2026
        },
        smartWatch:{
            brand:'hh',
            model:"ff",
            display:'ff'
        }
    }
    const richDeveloper: Developer<{
        brand:string;
        model:string;
        heartTrack:boolean;
        sleepTrack: boolean
    }> = {

        name:'rich developer',
        computer:{
            brand:'hp',
            model:'df',
            releaseYear: 2028
        },
        smartWatch:{
            brand:'apple watch',
            model:"ff",
           heartTrack:true,
           sleepTrack:true
        }
    }
}