let UserName = prompt('What\'s Your Name ?');

alert('welcome '+ UserName) ;

let loveFood = prompt("Do You Love Food ?",'yes OR no') 
if(loveFood === 'yes')
   alert('Awesome man')
else
    alert(' ok -_-')


let favFood = prompt('whats your favorite Food ?','Junkfood , Healthyfood' );

alert('Great choice '+ UserName)
{
}

let image = ''; 



{
     if(favFood === 'Junkfood'){
         image = image + '<img src="junk.jpg"/>';
      
     }else if(favFood === 'Healthyfood')
   
     {
         image = image + '<img src="helthy.jpg"/>';
   
     }
    }
    console.log(image);
 document.write(image); 
