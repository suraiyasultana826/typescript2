{
    const age: number = 15;
    if(age >= 18){
        console.log('adult'); 
    }else {
        console.log('not adult');
    }
    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log({isAdult});

    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({result1}, {result2});
    
    type User = {
        name: string;
        city: string;
        road : string;
        presentAddress : string;
        PermanentAddress?: string
    }
    const user : User = {
        name: 'tanu',
        city:'dhaka',
        road:"Mirput",
        presentAddress:'Mirpur'
    }

    const PermanentAddress = user.PermanentAddress ?? 'noPermanentAddress';
    console.log({PermanentAddress});
}