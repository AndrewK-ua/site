using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WitcherShop.Models
{
    public class Purchase
    {
        public int id { get; private set; }
        public string address { get; private set; }
        public string surname { get; private set; }
        public string phoneNumber { get; private set; }

        //public virtual ICollection<Book> books { get; set; }
    }
}
