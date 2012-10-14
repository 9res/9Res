
    var btnPrevious = $('#btnPrevious');
    $(function () {
        btnPrevious = $('#btnPrevious');
        btnPrevious.click(function () {
            window.location = "/Account/ContactInfo"
        });
    });
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
    animatedcollapse.init();

    $(document).ready(function () {
        $("input#txt_O_Industry1").autocomplete({ source: ["brett", "bob", "balkan"] });
    });

    function getEl(htm_obj) {
        var x = document.getElementById(htm_obj);
        switch (x.type) {
            case "text": return x.value;
            case "select-one": return x.options[x.selectedIndex].value;
            default: return x.type + "??";
        }
    }

    function evalWord() {
        inp_phrase = document.getElementById("obj_ppane").innerHTML;
        var word_count = inp_phrase.length;
        var obj_eval = "";

        switch (true) {
            case (word_count < 50): obj_val = "LET'S GET STARTED!"; break;
            case ((word_count >= 50) && (word_count < 75)): obj_val = "MAYBE A BIT TOO SHORT."; document.getElementById("slide_tab").src = "~/Content/images/word_slide_tab_yellow.bmp"; break;
            case ((word_count >= 75) && (word_count < 140)): obj_val = "THIS SEEMS LIKE A NICE LENGTH!"; document.getElementById("slide_tab").src = "~/Content/images/word_slide_tab_green.bmp"; break;
            case ((word_count >= 140) && (word_count < 175)): obj_val = "MAYBE A BIT TOO LONG."; document.getElementById("slide_tab").src = "~/Content/images/word_slide_tab_yellow.bmp"; break;
            case ((word_count >= 175) && (word_count < 200)): obj_val = "PROBABLY TOO LONG."; document.getElementById("slide_tab").src = "~/Content/images/word_slide_tab_red.bmp"; break;
            default: obj_val = "PEOPLE MIGHT NOT READ THIS MUCH."; document.getElementById("slide_tab").src = "~/Content/images/word_slide_tab_red.bmp";
        }
        var word_adj;
        if (word_count > 200) { word_adj = 200; } else { word_adj = word_count; }
        document.getElementById("word_res").innerHTML = obj_val;
        word_count += 6;
        document.getElementById("trans_slider").style.width = word_adj;
        document.getElementById("trans_slider").style.height = 15;

    }


    function getCode(htm_obj) {
        var x = getEl(htm_obj);
        switch (x) {
            case "": return "";
            case "ft": return "full-time";
            case "pt": return "part-time position";
            case "con": return "a contract position";
            default: return x + "?";
        }
    }

    function updObjective() {

        var Uadj1 = getEl("txt_O_User_Adj1_P");
        var Uadj2 = getEl("txt_O_User_Adj2_P");
        var Unoun = getEl("txt_O_User_Noun");

        if (Unoun == "") { Unoun = "person"; }
        var Ujob_type = getEl("ddl_O_Job_Type_P");
        var Ujob_type2 = getEl("txt_O_Job_Type_P");
        var phr1 = getEl("O_phrase1");

        if (Ujob_type2.length > 0 & Ujob_type.length > 0) { Ujob_type += " " + Ujob_type2; }

        var phr2 = getEl("O_phrase2");

        var sk1 = getEl("txt_O_Job_Adj1_P");
        var sk2 = getEl("txt_O_Job_Adj2_P");


        var comp1 = getEl("txt_O_Comp_Adj1_P");
        var comp2 = getEl("txt_O_Comp_Adj2_P");
        var comp3 = getEl("ddl_O_Comp_Type_P");
        var ind1 = getEl("txt_O_Industry1");
        var ind2 = getEl("txt_O_Industry2");
        var adj_comma = "";

        if (Uadj1.length > 0 & Uadj2.length > 0) { adj_comma = ","; }

        // Skills
        var skills_phrase = "";
        var sk_and = "";
        if (sk1.length > 0 & sk2.length > 0) { sk_and = " and "; }
        if (sk1.length > 0 | sk2.length > 0) { skills_phrase = ", where I can " + phr2 + "my " + sk1 + sk_and + sk2 + " skills"; }
        var ind_or = "";
        if (ind1.length > 0 & ind2.length > 0) { ind_or = " or "; }


        var firm_phrase = "";
        var comp_and = "";
        if (comp1.length > 0 & comp2.length > 0) { comp_and = " and "; }
        if (comp1.length > 0 | comp2.length > 0 | ind1.length > 0 | ind2.length > 0 | comp3 != "firm") { firm_phrase = " at a " + comp1 + comp_and + " " + comp2 + " " + ind1 + " " + ind_or + " " + ind2 + " " + comp3; }

        var phrase = Uadj1 + adj_comma + " " + Uadj2 + " " + Unoun + " " + phr1 + " a " + Ujob_type + " position" + firm_phrase + skills_phrase + ".";

        // find & capitalize the first letter 
        // ...this'd be easier with a trim, but I'm doing it on the train and don't have the luxury of using jquery

        var counter = 0;
        var found_first = 0;
        var next_letter = "";
        while (found_first == 0) {
            if (phrase.charAt(counter) != " ") {
                found_first = 1;
                phrase = phrase.substring(0, counter) + phrase.charAt(counter).toUpperCase() + phrase.substring(counter + 1);
            }
            if (counter >= phrase.length) { found_first = 1; }
            counter += 1;
        }
        document.getElementById("obj_ppane").innerHTML = phrase;
    }



