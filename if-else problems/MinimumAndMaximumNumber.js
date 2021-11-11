let min = 1000;
let max = 99;
for (i=0;i<5;i++)
{
    let num = Math.floor(Math.random()*(999-100+1)+100);
    console.log(num); 
   
    if(min>num)
    {
        min = num;
    }
    if(max<num)
    {
        max = num;
    }
}
console.log("Minimum number  is : "+min);
console.log("Maximum number  is : "+max);