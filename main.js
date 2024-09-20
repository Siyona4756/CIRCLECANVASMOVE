canvas=document.getElementById("myCanvas");
color="blue";

var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    

    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        console.log ("my_mousestart");
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
       
    }

    
   

    
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

       
         ctx.beginPath();
         ctx.strokeStyle= color;
         ctx.lineWidth=(2);
         ctx.arc( mouse_x,mouse_y,40,0,2*Math.PI);
         ctx.stroke();

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }
