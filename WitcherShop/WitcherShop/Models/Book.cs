using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WitcherShop.Models
{
    public class Book
    {
        public int id { get; private set; }
        public string title { get; private set; }
        public double price { get; private set; }
        public static int number { get; private set; }
    }
}
