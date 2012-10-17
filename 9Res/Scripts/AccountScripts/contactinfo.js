

    // Get the HTTP Object
    function getHTTPObject() {
        if (window.ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
        else if (window.XMLHttpRequest) return new XMLHttpRequest();
        else {
            alert("Your browser does not support AJAX.");
            return null;
        }
    }
    function setOutput() {
        if (httpObject.readyState == 4) {
            //Intercept the JSON text sent from the server and split it into individual elements. 
            var jsonContactDetailsText = httpObject.responseText;
            var jsonContactDetailsObject = eval('(' + jsonContactDetailsText + ')');

            //Assigning the controls their respective values. Thank you server!
            //alert(jsonContactDetailsObject.U_Email_Address);
            document.getElementById('txtU_Name_F').value = jsonContactDetailsObject.U_Name_F;
            document.getElementById('txtU_Name_M').value = jsonContactDetailsObject.U_Name_M;
            document.getElementById('txtU_Name_L').value = jsonContactDetailsObject.U_Name_L;
            document.getElementById('txtU_Addr_Street').value = jsonContactDetailsObject.U_Addr_Street;
            document.getElementById('txtU_Addr_Town').value = jsonContactDetailsObject.U_Addr_Town;
            document.getElementById('txtU_Addr_State').value = jsonContactDetailsObject.U_Addr_State;
            document.getElementById('txtU_Addr_Code').value = jsonContactDetailsObject.U_Addr_Code;
            document.getElementById('ddlU_Phone1_Type_P').selectedIndex = jsonContactDetailsObject.U_Phone1_Type_P;
            document.getElementById('txtU_Phone1_Number').value = jsonContactDetailsObject.U_Phone1_Number;
            document.getElementById('ddlU_Phone2_Type_P').selectedIndex = jsonContactDetailsObject.U_Phone2_Type_P;
            document.getElementById('txtU_Phone2_Number').value = jsonContactDetailsObject.U_Phone2_Number;
            document.getElementById('ddlU_Email_Type_P').selectedIndex = jsonContactDetailsObject.U_Email_Type_P;
            document.getElementById('txtU_Email_Address').value = jsonContactDetailsObject.U_Email_Address;
            document.getElementById('ddlU_Media_Type_P').selectedIndex = jsonContactDetailsObject.U_Media_Type_P;
            document.getElementById('txtU_Media_Id').value = jsonContactDetailsObject.U_Media_Id;
        }
        //Setting the preview pane 
        insertCharInHeader();
    }

    function fetchContactDetails() {
        httpObject = getHTTPObject();
        if (httpObject != null) {
            httpObject.open("GET", "http://localhost/YourGreatResume/getContactDetails.php", true);
            httpObject.send(null);
            httpObject.onreadystatechange = setOutput;
        }
    }

    // Implement business logic
    function doWork() {
        httpObject = getHTTPObject();
        if (httpObject != null) {
            httpObject.open("GET", "http://localhost/ContactInfo.php?inputText="
		+ document.getElementById('inputText').value, true);
            httpObject.send(null);
            httpObject.onreadystatechange = setOutput;
        }
    }
    function ajaxrequest(php_file, tagID) {
        var request = getHTTPObject(); 	// call the function for the XMLHttpRequest instance

        // create pairs index=value with data that must be sent to server
        var the_data = "U_Name_F=" + document.getElementById('txtU_Name_F').value + "&" + "U_Name_M=" + document.getElementById('txtU_Name_M').value + "&" + "U_Name_L=" + document.getElementById('txtU_Name_L').value + "&" + "U_Addr_Street=" + document.getElementById('txtU_Addr_Street').value + "&" + "U_Addr_Town=" + document.getElementById('txtU_Addr_Town').value + "&" + "U_Addr_State=" + document.getElementById('txtU_Addr_State').value + "&" + "U_Addr_Code=" + document.getElementById('txtU_Addr_Code').value + "&" + "U_Phone1_Type_P=" + document.getElementById('ddlU_Phone1_Type_P').selectedIndex + "&" + "U_Phone1_Number=" + document.getElementById('txtU_Phone1_Number').value + "&" + "U_Phone2_Type_P=" + document.getElementById('ddlU_Phone2_Type_P').selectedIndex + "&" +
"U_Phone2_Number=" + document.getElementById('txtU_Phone2_Number').value + "&" + "U_Email_Type_P=" + document.getElementById('ddlU_Email_Type_P').selectedIndex + "&" + "U_Email_Address=" + document.getElementById('txtU_Email_Address').value + "&" + "&" + "U_Media_Type_P=" + document.getElementById('ddlU_Media_Type_P').selectedIndex + "&" + "U_Media_Id=" + document.getElementById('txtU_Media_Id').value;
        request.open("POST", php_file, true); 		// set the request

        // adds  a header to tell the PHP script to recognize the data as is sent via POST
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(the_data); 	// calls the send() method with datas as parameter

        // Check request status; if the response is received completely, will be transferred to the HTML tag with tagID
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                document.getElementById(tagID).innerHTML = request.responseText;
            }
        }
    }
    animatedcollapse.init();



    function getEl(htm_obj) {
        var x = document.getElementById(htm_obj);
        switch (x.type) {
            case "text": return x.value;
            case "select-one": return x.options[x.selectedIndex].value;
            default: return x.type + "??";
        }
    }

    function getCode(htm_obj) {
        var x = getEl(htm_obj);
        switch (x) {
            case "": return "";
            case "Home": return " (h)";
            case "Mobile": return " (c)";
            case "Work": return " (w)";
            case "Facebook": return "<img height=19 width=19 src='~/Content/images/icon_facebook.bmp' alt='fb' />";
            case "LinkedIn": return "<img height=19 width=19 src='~/Content/images/icon_linkedin.bmp' alt='li' />";
            case "Skype": return "<img height=19 width=19 src='~/Content/images/icon_skype.bmp' alt='sk' />";
            default: return x + "?";
        }
    }

    function insertCharInHeader() {
        var v_def_name = "Your Name Here";
        var v_def_addr = "where you live";
        var v_def_cont = "your contact info";

        // name line
        var v_fname = getEl("txtU_Name_F");
        var v_mname = getEl("txtU_Name_M");
        var v_lname = getEl("txtU_Name_L");
        var htm_Name = v_fname + " " + v_mname + " " + v_lname;
        if (htm_Name.length == 2) { htm_Name = v_def_name; }

        // address line
        var v_addr = getEl("txtU_Addr_Street") + " " + getEl("txtU_Addr_Town");
        var v_str = getEl("txtU_Addr_Street");
        var v_town = getEl("txtU_Addr_Town");
        var v_state = getEl("txtU_Addr_State");
        var v_code = getEl("txtU_Addr_Code");
        var htm_Addr = v_str + " " + v_town;


        if (v_town != "" & v_state != "") { htm_Addr += ", "; }
        htm_Addr += v_state;
        if (v_state != "" & v_code != "") { htm_Addr += "&nbsp;&nbsp;" + v_code; }
        if (htm_Addr.length == 1) { htm_Addr = v_def_addr; }

        // phone & email line  
        var v_ptyp1 = getCode("ddlU_Phone1_Type_P");
        var v_pnum1 = getEl("txtU_Phone1_Number");
        var v_ptyp2 = getCode("ddlU_Phone2_Type_P");
        var v_pnum2 = getEl("txtU_Phone2_Number");
        var v_email = getEl("txtU_Email_Address");
        var v_smtyp = getCode("ddlU_Media_Type_P");
        var v_smid = getEl("txtU_Media_Id");
        var htm_Cont = "<table width=100% border=0><tr>";

        //determine percentages
        var v_pct_ct = 0;
        var v_pct1 = "100%";

        if (v_pnum1 != "") { v_pct_ct += 1; }
        if (v_pnum2 != "") { v_pct_ct += 1; }
        if (v_email != "") { v_pct_ct += 1; }
        if (v_smtyp != "" & v_smid != "") { v_pct_ct += 1; }

        switch (v_pct_ct) {
            case 0: v_pct = "100%"; break;
            case 1: v_pct = "100%"; break;
            case 2: v_pct = "50%"; break;
            case 3: v_pct = "33%"; break;
            case 4: v_pct = "25%"; break;
            case 5: v_pct = "20%"; break;
            default: v_pct = "";
        }
        var ci_dtl_class;

        if (v_pct_ct == 0) { v_email = v_def_cont; ci_dtl_class = "ci_dtl2_def" } else { ci_dtl_class = "ci_dtl2"; }

        if (v_pnum1 != "") { htm_Cont += "<td width='" + v_pct + "' class='" + ci_dtl_class + "'>" + v_pnum1 + v_ptyp1 + "</td>"; }
        if (v_pnum2 != "") { htm_Cont += "<td width='" + v_pct + "' class='" + ci_dtl_class + "'>" + v_pnum2 + v_ptyp2 + "</td>"; }
        if (v_email != "") { htm_Cont += "<td width='" + v_pct + "' class='" + ci_dtl_class + "'>" + v_email + "</td>"; }
        if (v_smtyp != "" & v_smid != "") { htm_Cont += "<td width=1/" + v_pct_ct + " class='" + ci_dtl_class + "'>" + v_smtyp + " " + v_smid + "</td>"; }
        htm_Cont += "</tr></table>";


        if (htm_Name == v_def_name) { document.getElementById("ci_name").className = "ci_name_def"; } else { document.getElementById("ci_name").className = "ci_name"; }
        document.getElementById("ci_name").innerHTML = htm_Name;
        if (htm_Addr == v_def_addr) { document.getElementById("ci_addr").className = "ci_dtl1_def"; } else { document.getElementById("ci_addr").className = "ci_dtl1"; }
        document.getElementById("ci_addr").innerHTML = htm_Addr;
        document.getElementById("ci_cont").innerHTML = htm_Cont;
    }
    var httpObject = null;

    animatedcollapse.addDiv('hdr2', 'fade=0,speed=400,height=128px,hide=1');
    animatedcollapse.ontoggle = function ($, divobj, state) { //fires each time a DIV is expanded/contracted
        //$: Access to jQuery
        //divobj: DOM reference to DIV being expanded/ collapsed. Use "divobj.id" to get its ID
        //state: "block" or "none", depending on state
    }
    function info_mouse_over(td_obj) {
        if (td_obj.className == "hdr_info3") { td_obj.className = "hdr_info4"; } else { td_obj.className = "hdr_info2"; }
    }
    function info_mouse_out(td_obj) {
        if (td_obj.className == "hdr_info4") { td_obj.className = "hdr_info3"; } else { td_obj.className = "hdr_info1"; }
    }
    function info_mouse_click(td_obj) {
        if (td_obj.className == "hdr_info1") { n = "hdr_info3"; animatedcollapse.toggle('hdr2'); }
        if (td_obj.className == "hdr_info2") { n = "hdr_info4"; animatedcollapse.toggle('hdr2'); }
        if (td_obj.className == "hdr_info3") { n = "hdr_info1"; animatedcollapse.toggle('hdr2'); }
        if (td_obj.className == "hdr_info4") { n = "hdr_info2"; animatedcollapse.toggle('hdr2'); }
        td_obj.className = n;
    }

    function checkPic() {
        var chkPic = document.getElementById("chk_picture").checked;
        if (chkPic == true) { document.getElementById("ci_hdr_pic").innerHTML = document.getElementById("ci_pic").innerHTML; }
        else { document.getElementById("ci_hdr_pic").innerHTML = ""; }
    }

    function showPicPreview(imgName) {

    alert(imgName.value);
        $('#img_photo_preview').src = imgName.value;
    }

    function checkQR() {
        var chkQR = document.getElementById("chk_qrcode").checked;
        if (chkQR == true) {
            var qrtag = new QRtag();
            qrtag.link("http://www.9res.com/bmclaugh-res1");
            qrtag.size(105);
            qrtag.border(0);
            qrtag.color("#95E2FF");
            qrtag.bgcolor("#ffffff");
            qrtag.target("ci_qrcode");
            qrtag.image();
        }
        else { document.getElementById("ci_qrcode").innerHTML = ""; }
    }

    $(document).ready(function () {
        $("input:text, textarea, select").addClass("input_inactive");
        $("input:text, textarea, select").focus(function () {
            $(this).addClass("input_active").removeClass("input_inactive");
        }).blur(function () {
            $(this).removeClass("input_active").addClass("input_inactive");
        });

    });
