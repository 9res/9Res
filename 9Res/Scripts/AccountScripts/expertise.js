

//    window.location = "http://www.google.com/"
    var btnPrevious = $('#btnPrevious');
    $(function () {
        btnPrevious = $('#btnPrevious');
        btnPrevious.click(function () {
//            alert("previous");
            window.location = "/Account/Objective"

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
    // Comment this back in, once you figure out why it's not working!
    //animatedcollapse.init();

    function exp_init() {
        updExpertise();

    }


    function isExpertise(ex_num) {
        if (document.getElementById("txt_exp" + ex_num + "_title").value.length > 0) { return true; } else { return false; }
    }

    function sort_mouse_event(sort_row, sort_dir, sort_event) {
        var newClass = "ex_sort";
        var row_dist = isExpertise(sort_row);
        if (sort_event == "over") { if (row_dist == true) { newClass += sort_dir + "_on"; } else { newClass += sort_dir + "_null"; } }
        if (sort_event == "out") { if (row_dist == true) { newClass += sort_dir + "_off"; } else { newClass += sort_dir + "_null"; } }
        document.getElementById("sort_" + sort_dir + sort_row).className = newClass;
    }

    function getExp(exp_num) {
        var exp;
        var selIdx;
        var astk;
        var exp_title;
        var exp_desc;

        if (exp_num == 0) {
            exp_title = "Penguin Chaser";
            exp_desc = "Tall Penguins<br>Short Penguins<br>On Land and Sea<br>Fast or Slow<br>Otters";
        }
        else {
            exp_title = document.getElementById("txt_exp" + exp_num + "_title").value;
            exp_desc = document.getElementById("exp_desc" + exp_num).value;
        }
        exp_desc = exp_desc.replace(/\n/g, "<br>");
        if (exp_desc == "") { exp_desc = "&nbsp;"; }

        exp = "<table cellpadding=0 cellspacing=0 width=100%><tr height=100% width=100%><td class=\"ex_title_bkg\">";
        exp += "<table cellpadding=0 cellspacing=0 height=100% width=100% border=0 height=100%>";
        exp += "<tr><td width=100% class='ex_line1'>" + exp_title + "</td></tr>";
        exp += "<tr><td width=100% class='ex_line2'>" + exp_desc + "<td></tr>";
        exp += "</table></td></tr></table>";

        return exp;
    }

    function setSorts() {
        var i;
        var sort_obj;

        for (i = 1; i <= 6; i++) {
            if (isExpertise(i) == true) {
                sort_obj = document.getElementById("sort_up" + i);
                sort_obj.className = "ds_sortup_off";
                sort_obj = document.getElementById("sort_down" + i);
                sort_obj.className = "ds_sortdown_off";
            }
            else {
                sort_obj = document.getElementById("sort_up" + i);
                sort_obj.className = "ds_sortup_null";
                sort_obj = document.getElementById("sort_down" + i);
                sort_obj.className = "ds_sortdown_null";
            }
        }
    }

    function sortExp(id_num, sort_dir) {
        var target_row;
        var source_row = id_num;
        var tgt_exp_title;
        var tgt_exp_desc;
        var tgt_exp_priv;

        // Note: we actually reverse the sort_dir parameter, because what appears to be going "down" on the html page is
        // going "up" in our list -- meaning that #2 is below #1, and #3 is below #2.  Sorry, I know that's a bit confusing.
        sort_dir = sort_dir * -1;

        // only sort sortable rows (if they attempt to sort a row with no values, we do nothing)
        if (document.getElementById("sort_up" + id_num).className != "ex_sortup_null") {
            // determine our target row
            target_row = source_row + sort_dir;
            if (target_row == 0) { target_row = 6; }
            if (target_row == 7) { target_row = 1; }

            // record the values from our target row
            tgt_exp_title = document.getElementById("txt_exp" + target_row + "_title").value;
            tgt_exp_desc = document.getElementById("exp_desc" + target_row).value;
            tgt_exp_priv = document.getElementById("chk_exp" + target_row + "_priv").checked;

            // copy over our target
            document.getElementById("txt_exp" + target_row + "_title").value = document.getElementById("txt_exp" + source_row + "_title").value;
            document.getElementById("exp_desc" + target_row).value = document.getElementById("exp_desc" + source_row).value;
            document.getElementById("chk_exp" + target_row + "_priv").checked = document.getElementById("chk_exp" + source_row + "_priv").checked;

            // copy over our source
            document.getElementById("txt_exp" + source_row + "_title").value = tgt_exp_title;
            document.getElementById("exp_desc" + source_row).value = tgt_exp_desc;
            document.getElementById("chk_exp" + source_row + "_priv").checked = tgt_exp_priv;
            updExpertise();
            setSorts();
        }
    }

    function updExpertise() {
        var ex_htm;
        var exps = new Array();
        var i;
        var td_width;
        td_width = 100;

        for (i = 1; i <= 6; i++) { if (isExpertise(i) == true) { exps.push(getExp(i)); } }

        if (exps.length == 0) { exps.push(getExp(0)); }
        td_width = td_width / exps.length;

        ex_htm = "<table cellpadding=0 cellspacing=0 width=100% height=100%><tr height=100%>";
        for (i = 0; i < exps.length; i++) { ex_htm += "<td width=" + td_width + "%>" + exps[i] + "</td>"; }
        ex_htm += "</tr></table>";
        document.getElementById("ppane_ex").innerHTML = ex_htm;
        setSorts();

    }

    $(document).ready(function () {
        $("input:text, select").addClass("input_inactive");
        $("input:text, select").focus(function () {
            $(this).addClass("input_active").removeClass("input_inactive");
        }).blur(function () {
            $(this).removeClass("input_active").addClass("input_inactive");
        });

        $("textarea").addClass("exp_ta_inactive_exp");
        $("textarea").focus(function () {
            $(this).removeClass("exp_ta_inactive_exp").addClass("exp_ta_active_exp");
        }).blur(function () {
            $(this).removeClass("exp_ta_active_exp").addClass("exp_ta_inactive_exp");
        });

    });
