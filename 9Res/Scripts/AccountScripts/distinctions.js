
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

    function initPage() {
        updDistinction();
    }

    function isDist(ds_num) {
        if (document.getElementById("txt_ds_exp" + ds_num + "_line1").value.length > 0) { return true; } else { return false; }
    }

    function getDist(ds_num) {
        var dist;
        var selIdx;
        var astk;

        if (ds_num == 0) {
            dist = "<table cellspacing=0 cellpadding=0 width=100%><tr height=44><td class=\"ds_bkg_pie\">";
            dist += "<table cellpadding=0 cellspacing=0 height=44 width=100% border=0 height=100%>";
            dist += "<tr><td width=100% class='ds_line1'>First Place</td></tr>";
            dist += "<tr><td width=100% class='ds_line2'>Pie Eating Contest</td></tr>";
            dist += "</table></td></tr></table>";
        }
        else {
            if (document.getElementById("chk_ds_exp" + ds_num + "_pend").checked == true) { astk = "*" } else { astk = ""; }
            selIdx = document.getElementById("opt_ds_exp" + ds_num + "_type").selectedIndex
            dist = "<table cellpadding=0 cellspacing=0 width=100%><tr height=44><td class=\"ds_bkg_" + selIdx + "\">";
            dist += "<table cellpadding=0 cellspacing=0 height=44 width=100% border=0 height=100%>";
            dist += "<tr><td width=100% class='ds_line1'>" + document.getElementById("txt_ds_exp" + ds_num + "_line1").value + astk + "</td></tr>";
            dist += "<tr><td width=100% class='ds_line2'>" + document.getElementById("txt_ds_exp" + ds_num + "_line2").value + "</td></tr>";
            dist += "</table></td></tr></table>";
        }
        return dist;
    }

    function updDistinction() {
        var ds_htm;
        var dists = new Array();
        var i;
        for (i = 1; i <= 6; i++) {
            if (isDist(i) == true) { dists.push(getDist(i)); }
        }
        if (dists.length == 0) { dists.push(getDist(0)); }
        ds_htm = "<table cellpadding=0 cellspacing=0 border=0 width=100% height=100%>";
        switch (dists.length) {
            case 1:
                ds_htm += "<tr height=100%><td class=\"ds_bkg_degree\">" + dists[0] + "</td></tr>";
                break;
            case 2:
                ds_htm += "<tr height=100%><td width=50%>" + dists[0] + "</td>";
                ds_htm += "<td width=50%>" + dists[1] + "</td></tr>";
                break;
            case 3:
                ds_htm += "<tr height=100%><td width=33%>" + dists[0] + "</td>";
                ds_htm += "<td width=34%>" + dists[1] + "</td>";
                ds_htm += "<td width=33%>" + dists[2] + "</td></tr>";
                break;
            case 4:
                ds_htm += "<tr height=50%><td width=50%>" + dists[0] + "</td>";
                ds_htm += "<td width=50%>" + dists[1] + "</td></tr>";
                ds_htm += "<tr height=50%><td width=50%>" + dists[2] + "</td>";
                ds_htm += "<td width=50%>" + dists[3] + "</td></tr>";
                break;
            case 5:
                ds_htm += "<tr height=50%><td colspan=3 width=50%>" + dists[0] + "</td>";
                ds_htm += "<td colspan=3 width=50%>" + dists[1] + "</td></tr>";
                ds_htm += "<tr height=50%><td colspan=2 width=33%>" + dists[2] + "</td>";
                ds_htm += "<td colspan=2 width=33%>" + dists[3] + "</td>";
                ds_htm += "<td colspan=2 width=33%>" + dists[4] + "</td></tr>";
                break;
            case 6:
                ds_htm += "<tr height=50%><td width=33%>" + dists[0] + "</td>";
                ds_htm += "<td width=34%>" + dists[1] + "</td>";
                ds_htm += "<td width=33%>" + dists[2] + "</td></tr>";
                ds_htm += "<tr height=50%><td width=33%>" + dists[3] + "</td>";
                ds_htm += "<td width=34%>" + dists[4] + "</td>";
                ds_htm += "<td width=33%>" + dists[5] + "</td></tr>";
                break;
        }
        ds_htm += "</table>";
        if (dists.length < 4) { document.getElementById("ppane_ds").style.height = 44; }
        else { document.getElementById("ppane_ds").style.height = 88; }



        document.getElementById("ppane_ds").innerHTML = ds_htm;
        setSorts();
    }

    function sortDist(id_num, sort_dir) {
        var target_row;
        var source_row = id_num;
        var tgt_chk_pend;
        var tgt_chk_priv;
        var tgt_type;
        var tgt_line1;
        var tgt_line2;


        // Note: we actually reverse the sort_dir parameter, because what appears to be going "down" on the html page is
        // going "up" in our list -- meaning that #2 is below #1, and #3 is below #2.  Sorry, I know that's a bit confusing.
        sort_dir = sort_dir * -1;

        // only sort sortable rows (if they attempt to sort a row with no values, we do nothing)
        if (document.getElementById("sort_up" + id_num).className != "ds_sortup_null") {
            // determine our target row
            target_row = source_row + sort_dir;
            if (target_row == 0) { target_row = 6; }
            if (target_row == 7) { target_row = 1; }


            // record the values from our target row
            tgt_chk_pend = document.getElementById("chk_ds_exp" + target_row + "_pend").checked;
            tgt_chk_priv = document.getElementById("chk_exp" + target_row + "_priv").checked;
            tgt_type = document.getElementById("opt_ds_exp" + target_row + "_type").value;
            tgt_line1 = document.getElementById("txt_ds_exp" + target_row + "_line1").value;
            tgt_line2 = document.getElementById("txt_ds_exp" + target_row + "_line2").value;

            // copy over our target
            document.getElementById("chk_ds_exp" + target_row + "_pend").checked = document.getElementById("chk_ds_exp" + source_row + "_pend").checked;
            document.getElementById("chk_exp" + target_row + "_priv").checked = document.getElementById("chk_exp" + source_row + "_priv").checked;
            document.getElementById("opt_ds_exp" + target_row + "_type").value = document.getElementById("opt_ds_exp" + source_row + "_type").value;
            document.getElementById("txt_ds_exp" + target_row + "_line1").value = document.getElementById("txt_ds_exp" + source_row + "_line1").value;
            document.getElementById("txt_ds_exp" + target_row + "_line2").value = document.getElementById("txt_ds_exp" + source_row + "_line2").value

            // copy over our source
            document.getElementById("chk_ds_exp" + source_row + "_pend").checked = tgt_chk_pend;
            document.getElementById("chk_exp" + source_row + "_priv").checked = tgt_chk_priv;
            document.getElementById("opt_ds_exp" + source_row + "_type").value = tgt_type;
            document.getElementById("txt_ds_exp" + source_row + "_line1").value = tgt_line1;
            document.getElementById("txt_ds_exp" + source_row + "_line2").value = tgt_line2;

            updDistinction();
            setSorts();

            //alert("sorting " + id_num + " in direction " + sort_dir);}
        }
    }

    function sort_mouse_event(sort_row, sort_dir, sort_event) {
        var newClass = "ds_sort";
        var row_dist = isDist(sort_row);

        if (sort_event == "over")
        { if (row_dist == true) { newClass += sort_dir + "_on"; } else { newClass += sort_dir + "_null"; } }

        if (sort_event == "out")
        { if (row_dist == true) { newClass += sort_dir + "_off"; } else { newClass += sort_dir + "_null"; } }

        document.getElementById("sort_" + sort_dir + sort_row).className = newClass;

        //alert(newClass);
        //alert(sort_id);

    }

    function setSorts() {
        var i;
        var sort_obj;

        for (i = 1; i <= 6; i++) {
            if (isDist(i) == true) {
                sort_obj = document.getElementById("sort_up" + i);
                sort_obj.className = "ds_sortup_off";
                //			sort_obj.onmouseover = "this.className='ds_sortup_on'";
                //			sort_obj.onmouseout = "this.className='ds_sortup_off'";
                sort_obj = document.getElementById("sort_down" + i);
                sort_obj.className = "ds_sortdown_off";
                //			sort_obj.onmouseover = "this.className='ds_sortdown_on'";
                //			sort_obj.onmouseout = "this.className='ds_sortdown_off'";


            }
            else {
                sort_obj = document.getElementById("sort_up" + i);
                sort_obj.className = "ds_sortup_null";
                //			sort_obj.onmouseover = "";
                //			sort_obj.onmouseout = "";
                sort_obj = document.getElementById("sort_down" + i);
                sort_obj.className = "ds_sortdown_null";
                //			sort_obj.onmouseover = "";
                //			sort_obj.onmouseout = "";
            }
        }
    }	