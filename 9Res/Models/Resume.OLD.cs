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

    public class Resume
    {
    }
}