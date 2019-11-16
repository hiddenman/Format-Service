<!--//

// Buttons related functions

		     	button_pressed = "";
     	    	buttons = new Array("button_welcome","button_about","button_address","button_news","button_kma",
     	    					"button_service","button_stuff","button_docs","button_links");


		function isFramesActive()
			{
				if (top.frames.length<=0)
						return false;
				else
						return true;
			}

		function isButtonPressed(fname,bname)
			{			
				if (isFramesActive())
					{
			    			source=top.frames[fname].document.images[bname].src.split('/');
			    		}
			    	else
			    		{
			    			source=document.images[bname].src.split('/');			    		
			    		}		
				if (source[source.length-1]==bname+"_pressed.gif")
					{
						return true;
					}
				else
					{
					return false;		
					}
			}     	    	

    		function doNormalButton(fname,bname)
    			{
    				if (isButtonPressed(fname,bname))
    					{
    					return false;
    					}
    				if (isFramesActive())
    					{	
		   				top.frames[fname].document.images[bname].src="./images/buttons/"+bname+"_normal.gif";
		   			}
		   		else
		   			{
		   				document.images[bname].src="./images/buttons/"+bname+"_normal.gif";
		   			}		
    				return false;
    			}

    		function doActiveButton(fname,bname)
    			{
    				if (isButtonPressed(fname,bname))
    					{
    					return false;
    					}
    				if (isFramesActive())
    					{
		   				top.frames[fname].document.images[bname].src="./images/buttons/"+bname+"_active.gif";
	   				}
	   			else
	   				{
		document.images[bname].src="./images/buttons/"+bname+"_active.gif";
	   				}	
    				return true;
    			}

    		function doPressedButton(fname,bname)
    			{
	for (counter=0;counter<buttons.length;counter++)
    						{
							if ( (buttons[counter]!=bname) && (isButtonPressed(fname,buttons[counter])) )
								{
									if (isFramesActive())
										{
					    						top.frames[fname].document.images[buttons[counter]].src="./images/buttons/"+buttons[counter]+"_normal.gif";
					    					}
					    				else
					    					{
				document.images[buttons[counter]].src="./images/buttons/"+buttons[counter]+"_normal.gif";
					    					}	
	  	  						}
	 					}
	if (isFramesActive())
	    				{
		   				top.frames[fname].document.images[bname].src="./images/buttons/"+bname+"_pressed.gif";
		   			}
		   		else
		   			{
		document.images[bname].src="./images/buttons/"+bname+"_pressed.gif";
		   			}		
    				return true;
    			}

//-->
