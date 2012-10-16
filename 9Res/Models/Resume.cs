using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace _9Res.Models
{

    public class ContactInfo
    {
        public string firstName { get; set; }
        public string middleName { get; set; }
        public string lastName { get; set; }


        public string Street { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string zip { get; set; }

        public enum phonetype { Home, Work, Mobile }
        public string phone1Type { get; set; }
        public string phone1number { get; set; }
        public string phone2Type { get; set; }
        public string phone2number { get; set; }


        public string email { get; set; }
        public enum socialMediaType { Facebook, Skype, LinkedIn }
        public socialMediaType socialMedia { get; set; }

    }

    public class Keywords {
        public string keywords_list { get; set; }
    }
    
    public class Job
    {
        public string job_id { get; set;}
        public string firm_name_long { get; set;}
        public string firm_name_short { get; set;}
        public string title_long { get; set;}
        public string title_short { get; set;}
        public string location { get; set;}
        public DateTime start_date { get; set;}
        public DateTime end_date { get; set;}
        public Array Job_desc { get; set; }

    }

    public class Career
    {
        public bool display_job_nums { get; set;}
        public int jobs_to_show { get; set; }
        public Array Jobs { get; set; }

   }

    public class Distinctions {
            public enum distinctionTypes { Blank, Degree, Certification, Language, Academic, Personal, Other}
            public bool distinction_1_priv {get; set; }
            public bool distinction_2_priv {get; set; }
            public bool distinction_3_priv {get; set; }
            public bool distinction_4_priv {get; set; }
            public bool distinction_5_priv {get; set; }
            public bool distinction_6_priv {get; set; }

            public distinctionTypes distinction_1_type { get; set; }
            public distinctionTypes distinction_2_type { get; set; }
            public distinctionTypes distinction_3_type { get; set; }
            public distinctionTypes distinction_4_type { get; set; }
            public distinctionTypes distinction_5_type { get; set; }
            public distinctionTypes distinction_6_type { get; set; }

            public string distinction_1_line1 { get; set; }
            public string distinction_2_line1 { get; set; }
            public string distinction_3_line1 { get; set; }
            public string distinction_4_line1 { get; set; }
            public string distinction_5_line1 { get; set; }
            public string distinction_6_line1 { get; set; }

            public string distinction_1_line2 { get; set; }
            public string distinction_2_line2 { get; set; }
            public string distinction_3_line2 { get; set; }
            public string distinction_4_line2 { get; set; }
            public string distinction_5_line2 { get; set; }
            public string distinction_6_line2 { get; set; }
}

    public class Resume
    {
    }

    public class Objective {
        public enum jobTypes { unspecified, full, part, contract, tenure}
        public jobTypes obj_jobType { get; set;}

        public enum companyTypes { nonprofit, notforprofit, hospital, practice, organization, institute, thinktank, university, school, multinational}
        public companyTypes obj_companyType { get; set; }

        public enum actionPhraseList1 {seeks, desires, lookingfor}
        public actionPhraseList1 obj_actionPhrase1;

        public enum actionPhraselist2 {leverage, apply, improve}
        public actionPhraselist2 obj_actionPhrase2;
    
            public string obj_user_adj1 { get; set; }
            public string obj_user_adj2 { get; set; }
            public string obj_user_title { get; set; }
            public string obj_user_skills1 { get; set; }
            public string obj_user_skills2 { get; set; }
            public string obj_user_industry1 { get; set; }
            public string obj_user_industry2 { get; set; }
        public string obj_user_job_adj1 { get; set; }
        public string obj_user_job_adj2 { get; set; }
    }

    public class Expertise
    {
        public string expertise_1_title { get; set; }
        public string expertise_2_title { get; set; }
        public string expertise_3_title { get; set; }
        public string expertise_4_title { get; set; }
        public string expertise_5_title { get; set; }
        public string expertise_6_title { get; set; }

        public string expertise_1_desc { get; set; }
        public string expertise_2_desc { get; set; }
        public string expertise_3_desc { get; set; }
        public string expertise_4_desc { get; set; }
        public string expertise_5_desc { get; set; }
        public string expertise_6_desc { get; set; }

        public bool expertise_1_priv { get; set; }
        public bool expertise_2_priv { get; set; }
        public bool expertise_3_priv { get; set; }
        public bool expertise_4_priv { get; set; }
        public bool expertise_5_priv { get; set; }
        public bool expertise_6_priv { get; set; }

    }

}