canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
radius = 5;
width = 2;
current_position_of_mouse_x="";
current_position_of_mouse_y="";

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value
    width = document.getElementById("width_of_line").value
    radius = document.getElementById("radius_of_circle").value
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown")
    {
        console.log("Current position of x and y coordinates= ");
                console.log("X = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle =color;
        ctx.lineWidth =width;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
}
function Clear()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

