console.log("This is your page talking to you!");

        let trigButton = document.getElementById("Toggle");

        console.log(trigButton);

        trigButton.addEventListener("click", function(){
            
            if(document.getElementById('myImage').alt == "menu toggle"){
            
                document.getElementById('myImage').src = "x.png"
                document.getElementById('myImage').alt = "menu toggle 2"
            }

            else{
                document.getElementById('myImage').src = "icon.png"
                document.getElementById('myImage').alt = "menu toggle"
            }
            
        });

        let imageButton = document.getElementById("1");

        imageButton.addEventListener("click", function(){
            
            document.getElementById('5').src = "1.jpg"
        }
        )

        let imageButton2 = document.getElementById("2");

        imageButton2.addEventListener("click", function(){
            
            document.getElementById('5').src = "2.jpg"
        }
        )

        let imageButton3 = document.getElementById("3");

        imageButton3.addEventListener("click", function(){
            
            document.getElementById('5').src = "3.jpg"
        }
        )

        let imageButton4 = document.getElementById("4");

        imageButton4.addEventListener("click", function(){
            
            document.getElementById('5').src = "4.jpg"
        }
        )






        

