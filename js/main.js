
              const nav = document.querySelectorAll(".a");
             const productInfo = document.querySelector('.product-info');
             const proInfo = document.querySelector('#pro-info');
              const imgPro = document.querySelector('#img-pro');

                let prevScrollpos = window.pageYOffset;
                window.onscroll = function() {
                let currentScrollPos = window.pageYOffset;
                  if (prevScrollpos < 90) {
                    document.querySelector(".header-container").classList.remove("container");
                    
                    for(let item of nav){
                      item.classList.remove("lis");
                      
                    }
                
                  } else {
                    document.querySelector(".header-container").classList.add("container");
                  
                    for(let item of nav){
                        item.classList.add("lis");
                        
                      }
                    
                  }
                  prevScrollpos = currentScrollPos;
                }

                // display info
               imgPro.addEventListener('mouseover', displayInfo);

               function displayInfo(){
                imgPro.style.opacity = 0.3;
                productInfo.style.opacity = 1;
                productInfo.style.display = 'block';
                productInfo.style.background = 'white';
               }

                // hide info
                imgPro.addEventListener('mouseleave', hideInfo);

                function hideInfo(){
                  productInfo.style.display = 'none';
                  imgPro.style.opacity = 1;
                }