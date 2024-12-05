var lastVisited = "body.html";
			$(document).ready(()=>{
				$(document).bind("contextmenu",(e)=> {
					if(e.button == 2){
						console.error("Dont Click: Right");
						e.preventDefault();
						//location.reload();
					}
				});
				$(".accordion").accordion({collapsible:true, active: false});
				
				/*$("#accordion").click((e)=>{
					this.accordion("option", "active", 1);
				});*/
				
				$("#Frame").load("body.html").show();
				//$("#accordion2").accordion({collapsible:true});
				$(".mylink").on("click", (e) =>{
					//alert("OK");//
					e.preventDefault();
					b = $(".mylink");
					try{
						$(".mylink").each(el => $(".mylink")[el].style.color = "blue")
						/*for (i in b){
							if(i == "length") break;
							b[i].style.color = "blue";
						}*/
					}catch(e){console.error(e.code+": "+e+"\nIndex: "+i)}
					e.target.style.color = "purple";
					$("#Frame").slideUp("slow",()=>{
						$("#Frame").load(e.target.href, (r,s,x)=>{
							$("#Frame").slideDown("slow");
						});
					});
					lastVisited = e.target.href;
					console.log("Last Visited Page is: "+lastVisited);
					//return
				});
			});
