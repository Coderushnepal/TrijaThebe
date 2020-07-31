function myfunc(string)
{
     var output = string.split("");
     var vowelReplace = [];
     
     for(var i=0; i < output.length; i++)
     {
        if(output[i] == "a")  
        {
            output[i] = output[i].replace(output[i],"1");
            vowelReplace.push( output[i]);
        }
         else if(output[i] == "e")
        {
            output[i] = output[i].replace(output[i],"2");
            vowelReplace.push(output[i]);
        }
        else if(output[i] == "i")
        {
            output[i] = output[i].replace(output[i],"3");
            vowelReplace.push(output[i]);
        }
        else if(output[i] == "0")
        {
            output[i] = output[i].replace(output[i],"4");
            vowelReplace.push(output[i]);
        }
        else if(output[i] == "u")
        {
            output[i] = output[i].replace(output[i],"5");
            vowelReplace.push(output[i]);
        }
        else
        {
            vowelReplace.push(output[i]);
        }  
        var a = vowelReplace.join('');        
    }
    console.log(a);    
}    


myfunc("elephant");