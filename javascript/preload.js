<!--//
    menubuttons = new Array("button_welcome","button_about","button_address","button_news","button_kma",
			    "button_service","button_stuff","button_docs","button_links");
kmabuttons = new Array("button_kma_1212","button_kma_1216","button_kma_1312","button_kma_2125",
                  "button_kma_3340","button_kma_7020","button_kma_7025","button_kma_7030","button_kma_7035","button_kma_7033",
      			 "button_kma_7040","button_kma_7065","button_kma_7075","button_kma_7415",
			      "button_kma_7832","button_kma_7915","button_kma_7920","button_kma_analog",
		         "button_kma_digital","button_kma_color","button_arrow_down","button_arrow_up",
		         "button_arrow_left","button_arrow_right");

function PreLoadImages()
{
    var menuimages = new Array();
    var kmaimages = new Array();

    for (counter=0;counter<menubuttons.length;counter++)
   	{
	    menuimages[counter*3]= new Image;
	    menuimages[(counter*3)+1]= new Image;
	    menuimages[(counter*3)+2]= new Image;
	    menuimages[counter*3].src='./images/buttons/'+menubuttons[counter]+'_normal.gif';
	    menuimages[(counter*3)+1].src='./images/buttons/'+menubuttons[counter]+'_active.gif';
	    menuimages[(counter*3)+2].src='./images/buttons/'+menubuttons[counter]+'_pressed.gif';
	}

    for (counter=0;counter<kmabuttons.length;counter++)
	{
	    kmaimages[counter*2]= new Image;
	    kmaimages[(counter*2)+1]= new Image;
	    kmaimages[counter*2].src='./images/buttons/'+kmabuttons[counter]+'_normal.gif';
	    kmaimages[(counter*2)+1].src='./images/buttons/'+kmabuttons[counter]+'_active.gif';
	}


};				

//-->  
