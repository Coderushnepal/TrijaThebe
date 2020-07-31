    
        console.log("Answer 1:")        
        console.log("........................................................................") 
        function  asterisks(n)
        {
            let string = "* ";          
            for (var j = n; j >= 1; j--)
              {             
                  console.log(string.repeat(j));
              }             
        }
        asterisks(5)








        console.log("Answer 2:")        
        console.log("........................................................................") 
        function censor(string)
          {
            var res = string.split(" ");
                var result = "";
                for (var i = 0; i < res.length; i++)
                {
                    var str1 = res[i];
                    var n = str1.length;
                    if (n > 4)
                    {
                        str1 = str1.replace(str1,"*".repeat(n));                
                    }
                    result = result.concat(str1) + " ";
                }
            console.log(result);
        }

    censor("Tworrr plus three is fivegggg");








    console.log("Answer 3:")        
    console.log("........................................................................") 
    function toArray(obj)
       {         
         let output = Object.entries(obj);
         console.log(output);
       }

       toArray({})
       toArray({ a: 1, b: 2 })
       toArray({ shrimp: '15', tots: '12'})











    console.log("Answer 4:")        
    console.log("........................................................................") 
    
    function filterString(string) {
            const items = string;
            const copy = [];
            items.forEach(function(item) {
                var set3 = new Set(item)
                //copy.push(set3);
                
                    if (set3.size === 1)
                    {
                        copy.push(item);
                    }
                
                               
            });
               
        console.log(copy); 
        }
               filterString([ '88', '3311', '44'])










    console.log("Answer 5:")        
    console.log("........................................................................") 
        function keysAndValues( obj ) {
                let obj1 = Object.keys(obj);
                let obj2 = Object.values(obj);            
                console.log(obj1);
                console.log(obj2);            
            }


            
           
            keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
            keysAndValues({ a: 1, b: 2, c: 3 })
            keysAndValues({ key1: true, key2: false, key3: undefined })