using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WitcherShop.Models
{
    public class BookPurchaseContext : DbContext
    {
        public BookPurchaseContext(DbContextOptions<BookPurchaseContext> options) : base(options)
        {
        }
        public DbSet<Book> books { get; set; }
        public DbSet<Purchase> purchases { get; set; }
    }
}
