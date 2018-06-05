

//THE EVENT METHODS ARE WRITTEN IN HTML PAGE. INDEX.HTML//

//THESE EVENT ARE NOT SPECIFIC TO ONLY BUTTON ELEMENTS IN HTML//

1. //USING click event
function clickFunction(event){
    if(2+2==4){
        console.log('hey there');
        console.log(event);
    }
    else{
        console.log("i'm not");
    }
}

2. //USING ondblclick()
function dblClickFunction(event){
    if(2+2==4){
        console.log('hey there 2nd timer');
        console.log(event);
    }
    else{
        console.log("i'm not");
    }
}

3. //USING  onmousedown

function downFunction(event){
    console.log(event);
    console.log("heye");
}

4. //USING onmouseup

function upFunction(event){
    console.log(event);
    console.log("down hey");
}

5. //USING onmouseenter
function mouseEnter(stuff){

    stuff.style.backgroundColor="red";
    console.log(event);
}

6.// USING onmouseleave

function mouseLeave(stuff){
    stuff.style.backgroundColor = "gray";
    console.log(event);
}

7. //USING onmousemmove

function mouseMove(event){

    console.log(event);
}

8. //USING mouseout
function mouseOut(event){
    console.log(event);
}

9.//USING onkeydown
function keyDown(event){
    console.log(event);
    if(event.key === 'd'){
        console.log(event.key);
    }
    else{
        console.log('wrong key');
    }
}

10. //USING onkeyup
function keyUp(event){
    console.log(event);
}

11. //USING resize
function reSize(event){
    console.log(event);
}

12. //USING onscroll

function scrollFun(event){
    console.log(event);
}

13. //USING onpageshow
function pageShow(event){
    console.log(event);
}

14. //USING onpagehide

function pageHide(event){
    console.log(event);
}

15. //using ondrag and ondragend
//dragme triggers event from the moment we start dragging it
function dragMe(event){
    console.log(event);
}

function dragEnd (event){
    console.log(event);
}

16. //using dragenter
function draggedEnter(event){
    console.log("tested")
    console.log(event)
}
