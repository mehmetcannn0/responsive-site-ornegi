       // Open and close sidebar
       function openNav() {
    
           document.getElementById("mySidebar").style.display = "block";
           document.getElementById("menu").style.display = "none";
           document.getElementById("left-logo").style.display = "none";

       }

       function closeNav() {
           document.getElementById("mySidebar").style.display = "none";
           document.getElementById("menu").style.display = "block";
           document.getElementById("left-logo").style.display = "block";

       }
       // Open and close paragraph
       function openParagraph() {
    
           document.getElementById("button").style.display = "none";
           document.getElementById("paragraph").style.height = " max-content";
           document.getElementById("paragraph").style.width = " 90%";
            

       }

       function closeParagraph() {
        document.getElementById("button").style.display = "flex";
        document.getElementById("paragraph").style.height = "7.2rem";
        document.getElementById("paragraph").style.width = " 50%";
            

       }